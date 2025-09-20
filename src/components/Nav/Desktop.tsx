import React from 'react'

import { services } from '@/mocks'

import { Button } from '@/components/ui/Button'
import { NavLink } from './Link'

export const NavDesktop: React.FC = () => {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <ul className="flex">
        <li className="group relative">
          <NavLink href="#" arrowIcon>
            Nossas soluções
          </NavLink>

          <ul className="bg-background pointer-events-none absolute top-full left-0 z-10 w-56 py-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
            {services.map(({ key, title, link }) => (
              <li key={key}>
                <NavLink href={link}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <NavLink href="/sobre">Sobre a gente</NavLink>
        </li>
      </ul>

      <Button.WhatsApp>Conversar Agora</Button.WhatsApp>
      <Button.Outline href="/orcamento">Pedir orçamento</Button.Outline>
    </div>
  )
}
