import { AboutFormSchema } from '@/schemas/forms/about.schema'
import { AdsFormSchema } from '@/schemas/forms/ads.schema'
import { HomeFormSchema } from '@/schemas/forms/home.schema'

export type SubmitStatus = 'success' | 'error' | null

export type HomeFormData = z.infer<typeof HomeFormSchema>
export type AboutFormData = z.infer<typeof AboutFormSchema>
export type AdsFormData = z.infer<typeof AdsFormSchema>
