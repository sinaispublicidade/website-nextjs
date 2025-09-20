import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

import { ButtonWhatsAppProps } from '@/types'

import { cn } from '@/lib/utils'

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
const defaultHref = `https://wa.me/${whatsappNumber}`

export const ButtonWhatsApp: React.FC<ButtonWhatsAppProps> = ({
  href = defaultHref,
  className,
  target = '_blank',
  children,
  ...props
}) => (
  <a
    href={href}
    target={target}
    className={cn('btn-whatsapp', className)}
    {...props}
  >
    {children} <BsWhatsapp size={20} />
  </a>
)
