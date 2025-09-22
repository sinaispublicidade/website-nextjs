import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { ReactProps } from '../react'

export interface InputProps extends ReactProps.Input {
  label?: string
  error?: FieldError
  registration: UseFormRegisterReturn
}
