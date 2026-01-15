import { PrismaClient } from '@/generated/prisma'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

if (!process.env.DATABASE_URL) {
  throw new Error(
    'The environment variable DATABASE_URL is not defined. Please set it in your .env.local file.'
  )
}

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

const adapter = new PrismaMariaDb(process.env.DATABASE_URL)

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
