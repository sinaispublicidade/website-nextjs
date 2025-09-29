import React from 'react'
import Image from 'next/image'

import { services } from '@/mocks'

import { Button } from '@/components/ui/Button'

export const Services: React.FC = () => (
  <section className="bg-sinais-blue">
    <div className="container mx-auto flex flex-col items-center px-6 py-11 md:py-20">
      <h2 className="max-w-sm text-center text-2xl font-bold sm:max-w-lg sm:text-3xl md:max-w-2xl md:text-[40px]">
        Veja como podemos ajudar o seu negócio a{' '}
        <u className="border-sinais-darkblue border-b-5 leading-snug no-underline">
          ter mais resultado
        </u>
        :
      </h2>

      <div className="mt-9 grid gap-6 sm:grid-cols-2 md:mt-11 lg:grid-cols-3">
        {services.map(({ key, icon, title, desc, link }) => (
          <article
            key={key}
            className="bg-sinais-darkblue hover:bg-sinais-darkblue/60 relative flex flex-col rounded-lg p-8 text-white transition-colors md:p-11"
          >
            <Image src={icon} alt={title} width={54} height={54} />
            <h3 className="mt-4 mb-6 text-xl font-bold text-white xl:text-2xl">
              {title}
            </h3>

            <p className="mb-6 text-base xl:text-lg">{desc}</p>

            <Button.Outline
              href={link}
              className="stretched-link mt-auto w-full justify-between"
              plusIcon
            >
              Quero saber mais
            </Button.Outline>
          </article>
        ))}
      </div>
    </div>
  </section>
)
