import React from 'react'
import Image from 'next/image'

import { Button } from '../ui/Button'

interface BannerHeroServiceCTAProps {
  image?: string
  title: string
  text: string
}

export const BannerHeroServiceCTA: React.FC<BannerHeroServiceCTAProps> = ({
  image,
  title,
  text,
}) => {
  return (
    <div className="bg-sinais-darkblue relative px-6 py-11 md:py-20">
      {image && (
        <Image
          src={image}
          alt="Banner aleatório"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto flex flex-col items-center text-center md:max-w-2xl lg:max-w-3xl">
        <p className="text-2xl font-bold sm:text-3xl md:text-[40px]">{title}</p>
        <p className="mt-4 mb-8 text-base md:mt-8 md:mb-12 md:text-lg lg:text-xl">
          {text}
        </p>

        <Button.WhatsApp>Conversar Agora</Button.WhatsApp>
      </div>
    </div>
  )
}
