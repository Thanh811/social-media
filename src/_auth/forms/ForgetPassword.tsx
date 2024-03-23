import { Button, Input, useToast } from "@/components/ui";
import { ForgotPasswordValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useChangePassword } from "@/lib/react-query/queries";
import { Loader } from "@/components/shared";

const ForgetPassword = () => {
  const { toast } = useToast();
  const { mutateAsync: changePassword, isPending: isLoading } =
    useChangePassword();

  const form = useForm<z.infer<typeof ForgotPasswordValidation>>({
    resolver: zodResolver(ForgotPasswordValidation),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ForgotPasswordValidation>) {
    try {
      const response = await changePassword(values.email);
      if (!response) return;
      toast({
        title: "Recovery success",
        content: "Go to your Email to get the notification",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email to recovery </FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="shad-button_primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader />
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ForgetPassword;
