import { ReactProps } from '../react'

export declare namespace Button {
  type WhatsApp = ReactProps.Anchor
  type CarouselNavigation = ReactProps.Button

  interface Outline extends ReactProps.Anchor {
    children: React.ReactNode
    plusIcon?: boolean
  }

  interface Submit extends ReactProps.Button {
    children: React.ReactNode
    isSending?: boolean
    invert?: boolean
  }
}
