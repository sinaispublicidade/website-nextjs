import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { NavDesktop } from './Desktop'
import { NavMobile } from './Mobile'

export const Nav: React.FC = () => {
  return (
    <nav className="relative z-20">
      <div className="container mx-auto flex items-center justify-between px-4 py-10">
        <Link href="/">
          <Image
            src="/assets/logo-sinais.svg"
            alt="Sinais - Agência de Propaganda e Marketing"
            width={170}
            height={31}
            priority
          />
        </Link>

        <NavDesktop />
        <NavMobile />
      </div>
    </nav>
  )
}
