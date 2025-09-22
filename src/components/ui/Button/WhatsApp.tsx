import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

import { Button } from '@/types'

import { cn } from '@/lib/utils'
import { BUTTON_STYLES } from '@/styles'

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
const defaultHref = `https://wa.me/${whatsappNumber}`

export const ButtonWhatsApp: React.FC<Button.WhatsApp> = ({
  href = defaultHref,
  className,
  target = '_blank',
  children,
  ...props
}) => (
  <a
    href={href}
    target={target}
    className={cn(BUTTON_STYLES.WHATSAPP, className)}
    {...props}
  >
    {children} <BsWhatsapp size={20} />
  </a>
)
