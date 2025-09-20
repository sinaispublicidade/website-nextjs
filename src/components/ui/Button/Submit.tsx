import React from 'react'

import { ButtonSubmitProps } from '@/types'

import { cn } from '@/lib/utils'

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  children,
  className,
  isSending = false,
  invert = false,
  ...props
}) => {
  const buttonClass = invert ? 'btn-submit-invert' : 'btn-submit'
  return (
    <button type="submit" className={cn(buttonClass, className)} {...props}>
      {isSending ? 'Enviando...' : children}
    </button>
  )
}
