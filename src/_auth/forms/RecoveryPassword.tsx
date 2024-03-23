import { RecoveryPasswordValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, Input, Button,
  useToast
} from "@/components/ui"
import { useConfirmRecoveryPassword } from '@/lib/react-query/queries';
import { Loader } from '@/components/shared';

const RecoveryPassword = () => {
  const [param] = useSearchParams();
  const navigate = useNavigate()
  const { toast } = useToast();
  const { mutateAsync: confirmRecoveryPassword, isPending: isLoading } = useConfirmRecoveryPassword()


  const form = useForm<z.infer<typeof RecoveryPasswordValidation>>({
    resolver: zodResolver(RecoveryPasswordValidation),
    defaultValues: {
      password: "",
      passwordAgain: "",
    },
  })


  async function onSubmit(values: z.infer<typeof RecoveryPasswordValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { password, passwordAgain } = values
    try {
      const request = {
        userId: param.get('userId') ?? '',
        secret: param.get('secret') ?? '',
        password,
        passwordAgain
      }
      const response = await confirmRecoveryPassword(request)
      if (!response) return
      navigate('/sign-in')
      toast({ title: 'Recovery success', content: 'Go to Login page' })
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="password" className='shad-input' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordAgain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Again</FormLabel>
              <FormControl>
                <Input type='password' placeholder="press again password" className='shad-input' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary" disabled={isLoading}>
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
  )
}

export default RecoveryPassword