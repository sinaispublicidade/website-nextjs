'use client'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Forms } from '@/types'

import { AboutFormResolver } from '@/schemas/forms/about.schema'
import { handleAboutForm } from '@/app/actions'

import { CustomAlert } from '@/components/CustomAlert'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export const AboutForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<Forms.SubmitStatus>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Forms.Data.About>({
    resolver: AboutFormResolver,
  })

  const onSubmit = useCallback(
    async (data: Forms.Data.About) => {
      setSubmitStatus(null)

      try {
        await handleAboutForm(data)
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
      className="bg-sinais-darkblue flex w-full flex-col gap-4 p-6 sm:rounded-xl lg:p-10"
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
        placeholder="Site atual*"
        registration={register('siteAtual')}
        error={errors.siteAtual}
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
          className="mx-auto w-full sm:w-auto"
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
