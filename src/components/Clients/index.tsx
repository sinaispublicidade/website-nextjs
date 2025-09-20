import React from 'react'
import Image from 'next/image'

import { clients } from '@/mocks'

import { Button } from '@/components/ui/Button'

export const Clients: React.FC = () => (
  <section className="bg-black">
    <div className="container mx-auto flex flex-col items-center px-6 py-11 md:py-20">
      <h2 className="max-w-xs text-center text-2xl font-bold sm:max-w-sm sm:text-3xl md:max-w-lg md:text-[40px]">
        Veja{' '}
        <u className="border-sinais-blue border-b-5 leading-snug no-underline">
          alguns clientes
        </u>{' '}
        atendidos pela SINAIS:
      </h2>

      <div className="my-9 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:mt-11 lg:grid-cols-6">
        {clients.map(({ key, src }) => (
          <div
            key={key}
            className="flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-8"
          >
            <Image
              src={src}
              className="h-16 w-36 object-contain"
              alt={key}
              width={150}
              height={70}
            />
          </div>
        ))}
      </div>

      <Button.WhatsApp>Conversar Agora</Button.WhatsApp>
    </div>
  </section>
)
