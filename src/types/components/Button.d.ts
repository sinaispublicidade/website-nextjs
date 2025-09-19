type ReactAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ReactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonWhatsAppProps = ReactAnchorProps
export type CarouselNavigationButtonProps = ReactButtonProps

export interface ButtonOutlineProps extends ReactAnchorProps {
  children: React.ReactNode
  plusIcon?: boolean
  variant?: 'default' | 'lg'
}

export interface ButtonSubmitProps extends ReactButtonProps {
  children: React.ReactNode
  isSending?: boolean
  invert?: boolean
}
