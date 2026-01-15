'use server'
import { Forms } from '@/types'

import prisma from '@/lib/prisma'

import { BudgetFormSchema } from '@/schemas/forms/budget.schema'
import { HomeFormSchema } from '@/schemas/forms/home.schema'
import { ServiceFormSchema } from '@/schemas/forms/service.schema'

async function handleForm<T>({
  schema,
  prismaModel,
  data,
}: Forms.Handle.Params<T>): Promise<Forms.Handle.Result> {
  const validatedFields = schema.safeParse(data)

  if (!validatedFields.success) throw new Error('Campos obrigatórios ausentes.')

  try {
    const result = (await prismaModel.create({ data })) as { id: string }
    return { id: result.id }
  } catch (error) {
    console.error(error)
    throw new Error('Ocorreu um erro! Tente novamente.')
  } finally {
    await prisma.$disconnect()
  }
}

export async function handleHomeForm(data: Forms.Data.Home) {
  return handleForm<Forms.Data.Home>({
    schema: HomeFormSchema,
    prismaModel: prisma.homeContact,
    data,
  })
}

export async function handleServiceForm(data: Forms.Data.Service) {
  return handleForm<Forms.Data.Service>({
    schema: ServiceFormSchema,
    prismaModel: prisma.serviceContact,
    data,
  })
}

export async function handleBudgetForm(data: Forms.Data.Budget) {
  return handleForm<Forms.Data.Budget>({
    schema: BudgetFormSchema,
    prismaModel: prisma.budgetContact,
    data,
  })
}
