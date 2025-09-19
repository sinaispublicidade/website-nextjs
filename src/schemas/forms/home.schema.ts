import z from 'zod'
import { validatePhone } from 'validations-br'
import { zodResolver } from '@hookform/resolvers/zod'

import { validationMessages } from '@/lib/validation-messages'

export const HomeFormSchema = z.object({
  nome: z.string().min(2, validationMessages.required.default),
  email: z.email(validationMessages.invalid.email),
  telefone: z
    .string()
    .min(8, validationMessages.required.phone)
    .refine((val) => validatePhone(val), {
      message: validationMessages.invalid.phone,
    }),
  empresa: z.string().min(2, validationMessages.required.default),
  cargo: z.string().min(2, validationMessages.required.default),
  mensagem: z.string().min(5, validationMessages.required.default),
})

export const HomeFormResolver = zodResolver(HomeFormSchema)
