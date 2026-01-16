'use client'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'

import { Forms } from '@/types'

import { BudgetFormResolver } from '@/schemas/forms/budget.schema'
import { handleBudgetForm } from '@/app/actions'

import { CustomAlert } from '@/components/CustomAlert'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'

export const BudgetForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<Forms.SubmitStatus>(null)
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Forms.Data.Budget>({
    resolver: BudgetFormResolver,
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      cidadeEstado: '',
      empresa: '',
      ramoAtuacao: '',
      tipoServico: '',
      demanda: '',
    },
  })
  const registerWithMask = useHookFormMask(register)
  const registerPhoneMask = registerWithMask('telefone', '(99) [9]9999-9999', {
    showMaskOnHover: false,
  })
  console.log('getValues:', getValues())

  const onSubmit = useCallback(
    async (data: Forms.Data.Budget) => {
      setSubmitStatus(null)

      try {
        await handleBudgetForm(data)
        setSubmitStatus('success')
        reset()
      } catch (error) {
        setSubmitStatus('error')
        console.error(error)
      }
    },
    [reset, setSubmitStatus]
  )

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h1 className="mb-4 text-2xl font-bold text-white sm:max-w-lg sm:text-3xl md:mb-6 md:max-w-2xl md:text-[40px]">
        Solicite um orçamento
      </h1>

      <Input
        placeholder="Nome*"
        registration={register('nome')}
        error={errors.nome}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
      />
      <Input
        placeholder="Email*"
        registration={register('email')}
        error={errors.email}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
        type="email"
      />
      <Input
        placeholder="Telefone/WhatsApp*"
        registration={registerPhoneMask}
        error={errors.telefone}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
      />
      <Input
        placeholder="Cidade/Estado*"
        registration={register('cidadeEstado')}
        error={errors.cidadeEstado}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
      />
      <Input
        placeholder="Empresa*"
        registration={register('empresa')}
        error={errors.empresa}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
      />
      <Input
        placeholder="Ramo de atuação*"
        registration={register('ramoAtuacao')}
        error={errors.ramoAtuacao}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
      />
      <Select
        placeholder="Tipo de serviço?*"
        name="tipoServico"
        control={control}
        error={errors.tipoServico}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
      />
      <Textarea
        placeholder="Descrição breve da demanda*"
        registration={register('demanda')}
        error={errors.demanda}
        className="focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 border-zinc-500 bg-zinc-500"
      />

      <div className="sm:mt-2">
        <Button.Submit
          type="submit"
          isSending={isSubmitting}
          disabled={isSubmitting}
          className="focus:bg-sinais-blue hover:bg-sinais-blue focus-visible:ring-sinais-blue/50 mx-0 focus:text-white focus-visible:ring-3"
        >
          Solicitar contato
        </Button.Submit>
      </div>

      {submitStatus && <CustomAlert type={submitStatus} className="w-full" />}
    </form>
  )
}
