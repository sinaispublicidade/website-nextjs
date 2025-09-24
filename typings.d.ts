declare module '@prisma/nextjs-monorepo-workaround-plugin' {
  import { WebpackPluginInstance } from 'webpack'
  class PrismaPlugin implements WebpackPluginInstance {}
  export { PrismaPlugin }
}
