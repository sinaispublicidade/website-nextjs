import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

export const BannerHeroAbout: React.FC = () => {
  return (
    <>
      <Image
        src="/assets/banners/banner-hero--about.png"
        alt="Banner Hero"
        width={1920}
        height={1080}
        className="user-select-none pointer-events-none absolute inset-0 h-full w-full object-cover"
        priority
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 md:grid md:grid-cols-10 md:items-end md:px-12">
        <div className="w-full max-w-md font-sans sm:max-w-lg sm:pb-8 md:col-span-5 lg:col-span-6 lg:max-w-2xl">
          <h1 className="text-2xl font-bold sm:text-3xl xl:text-[40px]">
            Há mais de 15 anos gerando resultados reais
          </h1>

          <blockquote className="mt-4">
            <p className="mb-8 text-base italic md:text-lg xl:text-xl">
              Há mais de 15 anos, venho ajudando empresas a transformarem
              desafios em oportunidades. Na SINAIS, criamos soluções que
              aproximam marcas de pessoas e geram resultados reais que
              potencializam negócios.
            </p>
            <p className="text-xl">
              <strong className="font-semibold">Primo Junior</strong> -
              Co-Founder SINAIS
            </p>
          </blockquote>

          <Button.Outline
            href="/orcamento"
            className="bg-background/60 relative mt-8"
            plusIcon
          >
            Pedir orçamento
          </Button.Outline>
        </div>

        <div className="relative md:col-span-5 lg:col-span-4">
          <Image
            src="/assets/young_executive_man.png"
            alt="Young Executive"
            width={600}
            height={600}
            className="pointer-events-none object-contain select-none sm:max-w-[400px] lg:max-w-full"
            priority
          />
        </div>
      </div>
    </>
  )
}
