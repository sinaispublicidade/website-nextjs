import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type ReactInput = React.InputHTMLAttributes<HTMLInputElement>

export interface InputProps extends ReactInput {
  label?: string
  error?: FieldError
  registration: UseFormRegisterReturn
}
