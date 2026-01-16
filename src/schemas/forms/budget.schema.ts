import z from 'zod'
import { validatePhone } from 'validations-br'
import { zodResolver } from '@hookform/resolvers/zod'

import { validationMessages } from '@/lib/validation-messages'

export const BudgetFormSchema = z.object({
  nome: z.string().min(2, validationMessages.required.default),
  email: z.email(validationMessages.invalid.email),
  telefone: z
    .string()
    .min(8, validationMessages.required.phone)
    .refine((val) => validatePhone(val), {
      message: validationMessages.invalid.phone,
    }),
  cidadeEstado: z.string().min(2, validationMessages.required.default),
  empresa: z.string().min(2, validationMessages.required.default),
  ramoAtuacao: z.string().min(2, validationMessages.required.default),
  tipoServico: z
    .string()
    .min(1, validationMessages.required.select)
    .refine((val) => !!val, {
      message: validationMessages.required.select,
    }),
  demanda: z.string().min(2, validationMessages.required.default),
})

export const BudgetFormResolver = zodResolver(BudgetFormSchema)
