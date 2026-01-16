declare module '@prisma/nextjs-monorepo-workaround-plugin' {
  import { WebpackPluginInstance } from 'webpack'
  class PrismaPlugin implements WebpackPluginInstance {}
  export { PrismaPlugin }
}

declare module 'validations-br' {
  export function validatePhone(phone: string): boolean
  export function validateCpf(cpf: string): boolean
  export function validateCnpj(cnpj: string): boolean
  const _default: {
    validatePhone: typeof validatePhone
    validateCpf: typeof validateCpf
    validateCnpj: typeof validateCnpj
  }
  export default _default
}
