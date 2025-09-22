import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'

import { Button } from '@/types'

import { cn } from '@/lib/utils'
import { BUTTON_STYLES } from '@/styles'

export const ButtonOutline: React.FC<Button.Outline> = ({
  href = '#',
  children,
  plusIcon,
  className,
  ...props
}) => {
  const combinedClassName = cn(
    BUTTON_STYLES.BASE,
    BUTTON_STYLES.OUTLINE,
    className
  )

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
      {plusIcon && <FaPlus className="-mr-2 ml-3 size-3" size={12} />}
    </Link>
  )
}
