import { ReactProps } from '../react'

export type ButtonWhatsAppProps = ReactProps.Anchor
export type CarouselNavigationButtonProps = ReactProps.Button

export interface ButtonOutlineProps extends ReactProps.Anchor {
  children: React.ReactNode
  plusIcon?: boolean
  variant?: 'default' | 'lg'
}

export interface ButtonSubmitProps extends ReactProps.Button {
  children: React.ReactNode
  isSending?: boolean
  invert?: boolean
}
