import * as React from 'react'
import { Controller } from 'react-hook-form'

import { SelectProps } from '@/types'

import { services } from '@/mocks'
import { cn } from '@/lib/utils'

import {
  Select as SelectPrimitive,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select-ui'

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  control,
  error,
  className,
}) => {
  if (!control)
    throw new Error(
      'Select component requires a control prop from react-hook-form when used in a form.'
    )

  if (!name)
    throw new Error(
      'Select component requires a name prop when used in a form.'
    )

  return (
    <div>
      {label && (
        <label className="mb-1 block font-medium text-white">{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...restField } }) => (
          <SelectPrimitive
            onValueChange={onChange}
            value={value}
            {...restField}
          >
            <SelectTrigger
              className={cn(
                'focus-visible:border-sinais-blue focus-visible:ring-sinais-blue/50 w-full rounded-xl focus-visible:ring-3',
                className
              )}
              aria-invalid={!!error}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {services.map(({ key, title }) => (
                <SelectItem key={key} value={key}>
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectPrimitive>
        )}
      />

      {error && (
        <span className="text-sinais-error text-sm">{error.message}</span>
      )}
    </div>
  )
}
