import z from 'zod'
import { validatePhone } from 'validations-br'
import { zodResolver } from '@hookform/resolvers/zod'

import { validationMessages } from '@/lib/validation-messages'

export const AboutFormSchema = z.object({
  nome: z.string().min(2, validationMessages.required.default),
  email: z.email(validationMessages.invalid.email),
  telefone: z
    .string()
    .min(8, validationMessages.required.phone)
    .refine((val) => validatePhone(val), {
      message: validationMessages.invalid.phone,
    }),
  siteAtual: z.string().min(2, validationMessages.required.default),
  tipoServico: z.string().min(2, validationMessages.required.default),
  tiporRetorno: z.string(),
})

export const AboutFormResolver = zodResolver(AboutFormSchema)
