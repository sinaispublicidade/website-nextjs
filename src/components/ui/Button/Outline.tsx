import React from 'react'
import Link from 'next/link'

import { ButtonOutlineProps } from '@/types'

import { cn } from '@/lib/utils'

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  href = '#',
  variant = 'default',
  children,
  plusIcon,
  className,
  ...props
}) => {
  const sizeClass = variant === 'lg' ? 'py-5' : 'py-3'
  const combinedClassName = cn('btn-outline-base', sizeClass, className)

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
      {plusIcon && (
        <svg
          className="-mr-2 ml-3 size-3"
          fill="none"
          stroke="currentColor"
          strokeWidth={6}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      )}
    </Link>
  )
}
