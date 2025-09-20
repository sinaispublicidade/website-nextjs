import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  arrowIcon?: boolean
}

export const NavLink: React.FC<NavLinkProps> = ({
  href = '#',
  children,
  className,
  arrowIcon = false,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-1 px-4 py-2 hover:underline focus:outline-none',
        arrowIcon && 'pointer-events-none',
        className
      )}
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
