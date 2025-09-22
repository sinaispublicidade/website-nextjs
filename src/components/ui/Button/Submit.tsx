import React from 'react'

import { Button } from '@/types'

import { cn } from '@/lib/utils'
import { BUTTON_STYLES } from '@/styles'

export const ButtonSubmit: React.FC<Button.Submit> = ({
  children,
  className,
  isSending = false,
  invert = false,
  ...props
}) => {
  const combinedClassName = cn(
    BUTTON_STYLES.BASE,
    invert ? BUTTON_STYLES.BLACK : BUTTON_STYLES.WHITE,
    'px-12',
    className
  )

  return (
    <button type="submit" className={combinedClassName} {...props}>
      {isSending ? 'Enviando...' : children}
    </button>
  )
}
