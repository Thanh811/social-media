import { COMMON, POST, SIGN_UP } from "@/constants/message"
import { z } from "zod"

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: COMMON.NAME_MIN_CHARACTER }),
  username: z.string().min(2, { message: COMMON.NAME_MIN_CHARACTER }),
  email: z.string().email(),
  password: z.string().min(8, { message: SIGN_UP.PASSWORD_MIN_CHARACTER}),
})

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: SIGN_UP.PASSWORD_MIN_CHARACTER}),
})

export const ForgotPasswordValidation = z.object({
  email: z.string().email(),
})

export const RecoveryPasswordValidation = z.object({
  password: z.string().min(8, { message: SIGN_UP.PASSWORD_MIN_CHARACTER}),
  passwordAgain: z.string().min(8, { message: SIGN_UP.PASSWORD_MIN_CHARACTER}),
})

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: COMMON.NAME_MIN_CHARACTER }),
  username: z.string().min(2, { message: COMMON.NAME_MIN_CHARACTER }),
  email: z.string().email(),
  bio: z.string(),
});

export const PostValidation = z.object({
  caption: z.string().min(5, { message: POST.MIN_CAPTION_CHARACTER }).max(2200, { message: POST.MAX_CAPTION_CHARACTER }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: COMMON.REQUIRED_FIELD }).max(1000, { message: POST.MAX_LOCATION_CHARACTER }),
  tags: z.string(),
});
