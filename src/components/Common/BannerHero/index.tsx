'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import { bannerServiceMock, services } from '@/mocks'

import { Banner } from '@/components/Banners'

export const BannerHero: React.FC = () => {
  const pathname = usePathname()

  return (
    <section className="relative bg-black/60 font-sans">
      {services.map(
        (service) =>
          pathname === service.link && (
            <Banner.Service.Default
              key={service.key}
              {...bannerServiceMock[service.key]}
            />
          )
      )}
    </section>
  )
}
