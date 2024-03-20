import { RecoveryPasswordValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,Input, Button
} from "@/components/ui"

const RecoveryPassword = () => {
  const [param] = useSearchParams();
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
    console.log(values)
    console.log(param)
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
                <Input placeholder="password" className='shad-input' {...field} />
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
                <Input placeholder="press again password" className='shad-input' {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">Submit</Button>
      </form>
    </Form>
  )
}

export default RecoveryPassword