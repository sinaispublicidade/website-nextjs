'use client'
import React, { useEffect, useRef, useState } from 'react'

import { services } from '@/mocks'

import { Button } from '@/components/ui/Button'
import { NavLink } from './Link'
import { cn } from '@/lib/utils'

export const NavDesktop: React.FC = () => {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target as Node)) setOpen(false)
    }

    if (open) document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  return (
    <div className="hidden items-center gap-4 lg:flex">
      <ul className="flex">
        <li ref={rootRef} className="group relative" aria-expanded={open}>
          <NavLink
            href="#"
            arrowIcon
            aria-controls="dropdown-menu-services"
            onHandleState={() => setOpen((prev) => !prev)}
          >
            Nossas soluções
          </NavLink>

          <ul
            id="dropdown-menu-services"
            className={cn(
              'bg-background pointer-events-none absolute top-full left-0 z-10 w-60 py-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-aria-expanded:not-[:hover]:pointer-events-auto group-aria-expanded:not-[:hover]:opacity-100'
            )}
          >
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
