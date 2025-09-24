'use client'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Forms } from '@/types'

import { AdsFormResolver } from '@/schemas/forms/ads.schema'
import { handleAdsForm } from '@/app/actions'

import { CustomAlert } from '@/components/CustomAlert'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export const AdsForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<Forms.SubmitStatus>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Forms.Data.Ads>({
    resolver: AdsFormResolver,
  })

  const onSubmit = useCallback(
    async (data: Forms.Data.Ads) => {
      setSubmitStatus(null)

      try {
        await handleAdsForm(data)
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
      className="bg-sinais-black flex w-full flex-col gap-4 p-6 sm:rounded-xl lg:p-10"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Input
        placeholder="Nome*"
        registration={register('nome')}
        error={errors.nome}
      />
      <Input
        placeholder="Email*"
        registration={register('email')}
        error={errors.email}
        type="email"
      />
      <Input
        placeholder="Telefone*"
        registration={register('telefone')}
        error={errors.telefone}
      />
      <Input
        placeholder="Faturamento mensal*"
        registration={register('faturamento')}
        error={errors.faturamento}
      />
      <Input
        placeholder="Tipo de serviço?*"
        registration={register('tipoServico')}
        error={errors.tipoServico}
      />
      <Input
        placeholder="Como prefere o retorno?"
        registration={register('tiporRetorno')}
        error={errors.tiporRetorno}
      />

      <div className="text-center sm:mt-4">
        <Button.Submit
          type="submit"
          isSending={isSubmitting}
          disabled={isSubmitting}
        >
          Solicitar contato
        </Button.Submit>
      </div>

      {submitStatus && <CustomAlert type={submitStatus} className="w-full" />}
    </form>
  )
}
