export const validationMessages = {
  required: {
    default: 'Campo obrigatório.',
    phone: 'Telefone obrigatório.',
    number: 'Número obrigatório.',
    email: 'E-mail obrigatório.',
    date: 'Data obrigatória.',
    select: 'Selecione uma opção.',
  },
  invalid: {
    default: 'Campo inválido.',
    number: 'Número inválido.',
    phone: 'Telefone inválido.',
    email: 'E-mail inválido.',
    date: 'Data inválida.',
  },
  minLength: (min: number) => `O campo deve ter no mínimo ${min} caracteres.`,
  minArray: 'Selecione ao menos 1 (um) valor.',
  terms: 'Assinale a caixa para continuarmos.',
}
