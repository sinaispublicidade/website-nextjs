import { BudgetFormSchema } from '@/schemas/forms/budget.schema'
import { HomeFormSchema } from '@/schemas/forms/home.schema'
import { ServiceFormSchema } from '@/schemas/forms/service.schema'

export declare namespace Forms {
  type SubmitStatus = 'success' | 'error' | null

  declare namespace Data {
    type Home = z.infer<typeof HomeFormSchema>
    type Budget = z.infer<typeof BudgetFormSchema>
    type Service = z.infer<typeof ServiceFormSchema>
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
