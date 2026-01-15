'use client'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'

import { Forms } from '@/types'

import { HomeFormResolver } from '@/schemas/forms/home.schema'
import { handleHomeForm } from '@/app/actions'

import { CustomAlert } from '@/components/CustomAlert'
import { Textarea } from '@/components/ui/Textarea'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export const HomeForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<Forms.SubmitStatus>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Forms.Data.Home>({
    resolver: HomeFormResolver,
  })
  const registerWithMask = useHookFormMask(register)
  const registerPhoneMask = registerWithMask('telefone', '(99) [9]9999-9999', {
    showMaskOnHover: false,
  })

  const onSubmit = useCallback(
    async (data: Forms.Data.Home) => {
      setSubmitStatus(null)

      try {
        await handleHomeForm(data)
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
    <section className="bg-sinais-blue">
      <div className="container mx-auto flex flex-col items-center px-6 py-11 md:py-20">
        <h2 className="max-w-md text-center text-2xl font-bold sm:max-w-lg sm:text-3xl md:max-w-2xl md:text-[40px]">
          Fale com nosso time e saiba como{' '}
          <u className="border-b-5 border-black leading-snug no-underline">
            podemos ajudar
          </u>{' '}
          o seu negócio:
        </h2>

        <form
          className="mt-9 grid w-full max-w-300 gap-4 sm:mt-11 sm:grid-cols-10 md:mt-20"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="sm:col-span-4">
            <Input
              placeholder="Nome*"
              registration={register('nome')}
              error={errors.nome}
            />
          </div>
          <div className="sm:col-span-6">
            <Input
              placeholder="Email*"
              registration={register('email')}
              error={errors.email}
              type="email"
            />
          </div>
          <div className="sm:col-span-4">
            <Input
              placeholder="Telefone*"
              registration={registerPhoneMask}
              error={errors.telefone}
            />
          </div>
          <div className="sm:col-span-3">
            <Input
              placeholder="Empresa*"
              registration={register('empresa')}
              error={errors.empresa}
            />
          </div>
          <div className="sm:col-span-3">
            <Input
              placeholder="Cargo*"
              registration={register('cargo')}
              error={errors.cargo}
            />
          </div>
          <div className="sm:col-span-full">
            <Textarea
              placeholder="Conte-nos como podemos te ajudar*"
              registration={register('mensagem')}
              error={errors.mensagem}
            />
          </div>

          <div className="text-center sm:col-span-full sm:mt-8">
            <Button.Submit
              type="submit"
              isSending={isSubmitting}
              disabled={isSubmitting}
              invert
            >
              Solicitar contato
            </Button.Submit>
          </div>

          {submitStatus && (
            <CustomAlert
              type={submitStatus}
              className="w-full sm:col-start-3 sm:col-end-9"
            />
          )}
        </form>
      </div>
    </section>
  )
}
