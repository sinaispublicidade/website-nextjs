'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { Nav } from '@/components/Nav'
import { Banner } from '@/components/Banners'

export const Header: React.FC = () => {
  const pathname = usePathname()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <header className="relative bg-black/60 font-sans">
      <Nav />

      {pathname === '/' && <Banner.Home />}
      {pathname === '/sobre' && <Banner.About />}
    </header>
  )
}
