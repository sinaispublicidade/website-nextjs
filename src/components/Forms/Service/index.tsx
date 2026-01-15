'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'
import { usePathname } from 'next/navigation'

import { Forms } from '@/types'

import { ServiceFormResolver } from '@/schemas/forms/service.schema'
import { handleServiceForm } from '@/app/actions'
import { services } from '@/mocks'

import { CustomAlert } from '@/components/CustomAlert'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export const ServiceForm: React.FC<{ theme?: 'darkblue' | 'black' }> = ({
  theme = 'darkblue',
}) => {
  const [submitStatus, setSubmitStatus] = useState<Forms.SubmitStatus>(null)

  const currentPath = usePathname()
  const currentService = useMemo(
    () => services.find((service) => currentPath.includes(service.link))?.title,
    [currentPath]
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Forms.Data.Service>({
    resolver: ServiceFormResolver,
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      faturamento: '',
      produtoServico: '',
      tipoServico: currentService || 'Não informado',
      tiporRetorno: '',
    },
  })
  const registerWithMask = useHookFormMask(register)
  const registerPhoneMask = registerWithMask('telefone', '(99) [9]9999-9999', {
    showMaskOnHover: false,
    required: false,
  })

  const onSubmit = useCallback(
    async (data: Forms.Data.Service) => {
      setSubmitStatus(null)

      try {
        await handleServiceForm(data)
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
      className={`bg-sinais-${theme} flex w-full flex-col gap-4 p-6 sm:rounded-xl lg:p-10`}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Input
        placeholder="Nome*"
        registration={register('nome')}
        error={errors.nome}
        className="focus-visible:border-white focus-visible:ring-white/50"
      />
      <Input
        placeholder="Email*"
        registration={register('email')}
        error={errors.email}
        className="focus-visible:border-white focus-visible:ring-white/50"
        type="email"
      />
      <Input
        placeholder="Telefone*"
        registration={registerPhoneMask}
        error={errors.telefone}
        className="focus-visible:border-white focus-visible:ring-white/50"
      />
      <Input
        placeholder="Faturamento mensal"
        registration={register('faturamento')}
        error={errors.faturamento}
        className="focus-visible:border-white focus-visible:ring-white/50"
      />
      <Input
        placeholder="Qual seu produto/serviço?*"
        registration={register('produtoServico')}
        error={errors.produtoServico}
        className="focus-visible:border-white focus-visible:ring-white/50"
      />
      <Input
        placeholder="Como prefere o retorno?"
        registration={register('tiporRetorno')}
        error={errors.tiporRetorno}
        className="focus-visible:border-white focus-visible:ring-white/50"
      />

      <div className="text-center sm:mt-4">
        <Button.Submit
          type="submit"
          isSending={isSubmitting}
          disabled={isSubmitting}
          className="focus:text-black focus:hover:text-white focus-visible:ring-3 focus-visible:ring-white/50"
        >
          Solicitar contato
        </Button.Submit>
      </div>

      {submitStatus && <CustomAlert type={submitStatus} className="w-full" />}
    </form>
  )
}
