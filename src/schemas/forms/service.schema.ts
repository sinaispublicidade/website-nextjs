import z from 'zod'
import { validatePhone } from 'validations-br'
import { zodResolver } from '@hookform/resolvers/zod'

import { validationMessages } from '@/lib/validation-messages'

export const ServiceFormSchema = z.object({
  nome: z.string().min(2, validationMessages.required.default),
  email: z.email(validationMessages.invalid.email),
  telefone: z
    .string()
    .min(8, validationMessages.required.phone)
    .refine((val) => validatePhone(val), {
      message: validationMessages.invalid.phone,
    }),
  faturamento: z.union([z.string(), z.number()]),
  produtoServico: z.string(),
  tipoServico: z.string().optional(),
})

export const ServiceFormResolver = zodResolver(ServiceFormSchema)
