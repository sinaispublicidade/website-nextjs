import { PrismaClient } from '@/generated/prisma'

if (!process.env.DATABASE_URL) {
  throw new Error(
    'The environment variable DATABASE_URL is not defined. Please set it in your .env.local file.'
  )
}

const prismaClientSingleton = () => new PrismaClient()

declare global {
  var prisma: ReturnType<typeof prismaClientSingleton> | undefined
}

const prisma = global.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
