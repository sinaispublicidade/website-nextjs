'use client'
import React, { useState, useRef, useEffect } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

import { services } from '@/mocks'

import { Button } from '@/components/ui/Button'
import { NavLink } from './Link'

export const NavMobile: React.FC = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    const overflowCodition = open ? 'hidden' : 'auto'

    document.body.style.overflow = overflowCodition
  }, [open])

  return (
    <>
      <button
        className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center lg:hidden"
        onClick={() => setOpen((oldState) => !oldState)}
        aria-label="Abrir menu"
      >
        <HiMenuAlt4 size={30} className="text-white" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
          <div
            className="bg-sinais-blue relative z-10 ml-auto h-full w-fit"
            ref={menuRef}
          >
            <button
              className="absolute top-2 right-2 z-10 size-10 cursor-pointer text-center text-3xl text-white"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <HiX size={20} className="m-auto text-white" />
            </button>

            <div className="relative h-full w-full overflow-auto p-12 pl-6">
              <ul className="-ml-4 flex flex-col gap-6">
                <li>
                  <NavLink href="#" className="text-xl" arrowIcon>
                    Nossas soluções
                  </NavLink>
                  <ul className="mt-2 pl-2 text-base">
                    {services.map(({ key, title, link }) => (
                      <li key={key}>
                        <NavLink href={link} onClick={() => setOpen(false)}>
                          {title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <NavLink
                    href="/sobre"
                    className="text-xl"
                    onClick={() => setOpen(false)}
                  >
                    Sobre a gente
                  </NavLink>
                </li>
              </ul>

              <Button.Outline className="mt-8" href="/orcamento">
                Pedir orçamento
              </Button.Outline>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
