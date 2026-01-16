import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  // DATABASE_URL: z.string(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().optional(),
  NEXT_PUBLIC_BASE_URL_XML: z.url().default('http://localhost:3000'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid Environment variables!', z.treeifyError(_env.error))

  throw new Error('Invalid Environment variables!')
}

export const env = _env.data
