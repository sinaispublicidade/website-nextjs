'use server'
import { Forms } from '@/types'

import prisma from '@/lib/prisma'

import { AboutFormSchema } from '@/schemas/forms/about.schema'
import { AdsFormSchema } from '@/schemas/forms/ads.schema'
import { HomeFormSchema } from '@/schemas/forms/home.schema'

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

export async function handleAboutForm(data: Forms.Data.About) {
  return handleForm<Forms.Data.About>({
    schema: AboutFormSchema,
    prismaModel: prisma.aboutContact,
    data,
  })
}

export async function handleAdsForm(data: Forms.Data.Ads) {
  return handleForm<Forms.Data.Ads>({
    schema: AdsFormSchema,
    prismaModel: prisma.adsContact,
    data,
  })
}
