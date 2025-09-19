import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type ReactTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export interface TextareaProps extends ReactTextareaProps {
  label?: string
  error?: FieldError
  registration: UseFormRegisterReturn
}
