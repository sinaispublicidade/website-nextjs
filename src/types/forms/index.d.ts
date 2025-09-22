import { AboutFormSchema } from '@/schemas/forms/about.schema'
import { AdsFormSchema } from '@/schemas/forms/ads.schema'
import { HomeFormSchema } from '@/schemas/forms/home.schema'

export declare namespace Forms {
  type SubmitStatus = 'success' | 'error' | null

  declare namespace Data {
    type Home = z.infer<typeof HomeFormSchema>
    type About = z.infer<typeof AboutFormSchema>
    type Ads = z.infer<typeof AdsFormSchema>
  }

  declare namespace Handle {
    type Params<T> = {
      schema: { safeParse: (data: unknown) => { success: boolean } }
      prismaModel: { create: (args: { data: T }) => Promise<unknown> }
      data: T
    }

    type Result = { id: string } | Error
  }
}
