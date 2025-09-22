import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { ReactProps } from '../react'

export interface TextareaProps extends ReactProps.Textarea {
  label?: string
  error?: FieldError
  registration: UseFormRegisterReturn
}
