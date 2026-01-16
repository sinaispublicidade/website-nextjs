import { Control, FieldError } from 'react-hook-form'
import { ReactProps } from '../react'

export interface SelectProps extends ReactProps.Select {
  label?: string
  placeholder?: string
  error?: FieldError
  control: Control<any>
}
