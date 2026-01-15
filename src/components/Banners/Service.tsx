import React from 'react'
import Image from 'next/image'

import { IBannerServiceItem } from '@/mocks/banner-service.mock'

import { Button } from '@/components/ui/Button'

type BannerHeroServiceProps = IBannerServiceItem

export const BannerHeroService: React.FC<BannerHeroServiceProps> = ({
  title,
  desc,
  img,
}) => {
  return (
    <div className="mx-auto flex max-w-340 flex-col items-center justify-between gap-4 px-8 sm:mt-10 sm:grid sm:grid-cols-5 md:px-12">
      <div className="w-full max-w-md sm:col-span-3 sm:max-w-lg sm:pb-8 lg:max-w-2xl">
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-[40px]">
          {title}
        </h1>

        <p className="mt-4 mb-8 text-base md:text-lg lg:mt-8 lg:mb-14 lg:text-xl">
          {desc}
        </p>

        <Button.WhatsApp>Conversar Agora</Button.WhatsApp>

        <div className="item-center mt-8 flex">
          <div className="item-center flex">
            <Image
              src="/assets/badges/badge-clients-btw.svg"
              alt={title}
              width={40}
              height={40}
              className="pointer-events-none object-cover select-none"
              priority
            />
            <Image
              src="/assets/badges/badge-clients-panobianco.svg"
              alt={title}
              width={40}
              height={40}
              className="pointer-events-none -ml-2 object-cover select-none"
              priority
            />
            <Image
              src="/assets/badges/badge-clients-mira.svg"
              alt={title}
              width={40}
              height={40}
              className="pointer-events-none -ml-2 object-cover select-none"
              priority
            />
          </div>

          <span className="ml-3 text-sm">
            <strong>+ de 100</strong> empresas já <br />
            atendidas
          </span>
        </div>
      </div>

      <div className="relative col-span-2">
        <Image
          src={img}
          alt={title}
          width={600}
          height={600}
          className="pointer-events-none -mb-6 size-55 object-contain select-none sm:mb-0 sm:size-auto lg:-mb-13"
          priority
        />
      </div>
    </div>
  )
}
