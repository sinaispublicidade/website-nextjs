'use server'
import { PrismaClient } from '@prisma/client'

import { AboutFormData, AdsFormData, HomeFormData } from '@/types'

import { AboutFormSchema } from '@/schemas/forms/about.schema'
import { AdsFormSchema } from '@/schemas/forms/ads.schema'
import { HomeFormSchema } from '@/schemas/forms/home.schema'

const prisma = new PrismaClient()

type HandleFormParams<T> = {
  schema: { safeParse: (data: unknown) => { success: boolean } }
  prismaModel: { create: (args: { data: T }) => Promise<unknown> }
  data: T
}

async function handleForm<T>({
  schema,
  prismaModel,
  data,
}: HandleFormParams<T>) {
  const validatedFields = schema.safeParse(data)

  if (!validatedFields.success) throw new Error('Campos obrigatórios ausentes.')

  try {
    await prismaModel.create({ data })
    return true
  } catch (error) {
    return { message: 'Ocorreu um erro! Tente novamente.', error }
  }
}

export async function handleHomeForm(data: HomeFormData) {
  return handleForm<HomeFormData>({
    schema: HomeFormSchema,
    prismaModel: prisma.homeContact,
    data,
  })
}

export async function handleAboutForm(data: AboutFormData) {
  return handleForm<AboutFormData>({
    schema: AboutFormSchema,
    prismaModel: prisma.aboutContact,
    data,
  })
}

export async function handleAdsForm(data: AdsFormData) {
  return handleForm<AdsFormData>({
    schema: AdsFormSchema,
    prismaModel: prisma.adsContact,
    data,
  })
}
