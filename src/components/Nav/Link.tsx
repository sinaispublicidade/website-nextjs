'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  arrowIcon?: boolean
  onHandleState?: () => void
}

export const NavLink: React.FC<NavLinkProps> = ({
  href = '#',
  children,
  className,
  arrowIcon = false,
  onHandleState,
  ...props
}) => {
  const [isCoarse, setIsCoarse] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mq = window.matchMedia('(pointer: coarse)')
    const handleChange = (e: MediaQueryListEvent) => setIsCoarse(e.matches)

    setIsCoarse(mq.matches)

    mq.addEventListener('change', handleChange)

    return () => {
      mq.removeEventListener('change', handleChange)
    }
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (isCoarse && onHandleState) {
        e.preventDefault()
        onHandleState()
      }
    },
    [isCoarse, onHandleState]
  )

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-1 px-4 py-2 hover:underline focus:outline-none',
        arrowIcon && !isCoarse && 'pointer-events-none',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {arrowIcon && (
        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 9l-5 7-5-7Z" />
        </svg>
      )}
    </Link>
  )
}
