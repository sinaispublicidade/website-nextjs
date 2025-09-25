import React from 'react'
import Image from 'next/image'

import { IBannerServiceItem } from '@/mocks/banner-service.mock'

import { Button } from '@/components/ui/Button'

type BannerHeroServiceImageProps = IBannerServiceItem

export const BannerHeroServiceImage: React.FC<BannerHeroServiceImageProps> = ({
  title,
  desc,
  img,
}) => {
  return (
    <div className="bg-sinais-darkblue relative mb-6 md:my-15 lg:mb-20">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center justify-between gap-4 px-6 md:grid md:grid-cols-10 md:px-10">
        <div className="w-full max-w-md py-8 sm:max-w-lg md:col-span-5 lg:max-w-2xl xl:col-span-6">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-[40px]">
            {title}
          </h1>

          <p className="mt-4 mb-8 text-base lg:mt-8 lg:mb-14 lg:text-xl">
            {desc}
          </p>

          <Button.WhatsApp>Conversar Agora</Button.WhatsApp>
        </div>

        <div className="relative md:col-span-5 xl:col-span-4">
          <Image
            src={img}
            alt={title}
            width={600}
            height={600}
            className="pointer-events-none -mb-6 size-[220px] object-contain select-none sm:size-[350px] md:-my-15 md:size-auto lg:-my-13"
            priority
          />
        </div>
      </div>
    </div>
  )
}
