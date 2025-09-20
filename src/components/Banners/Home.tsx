import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'

export const BannerHeroHome: React.FC = () => {
  return (
    <>
      <Image
        src="/assets/banners/banner-hero--home.png"
        alt="Banner Hero"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover select-none"
        priority
      />
      <div className="flex flex-col items-center justify-center p-10 font-sans sm:p-40">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          O que move a gente
          <br />é a paixão pelo resultado
        </h1>

        <p className="mt-5 text-center text-lg sm:text-2xl">
          Sua nova agência de propaganda e marketing.
        </p>

        <Button.Outline
          href="/orcamento"
          className="bg-background/60 relative mt-8"
          plusIcon
        >
          Pedir orçamento
        </Button.Outline>
      </div>
    </>
  )
}
