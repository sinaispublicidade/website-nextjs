import React from 'react'

import { InputProps } from '@/types/components/Input'

import { cn } from '@/lib/utils'

export const Input: React.FC<InputProps> = ({
  label,
  error,
  registration,
  className,
  ...props
}) => (
  <div>
    {label && (
      <label className="mb-1 block font-medium text-white">{label}</label>
    )}
    <input
      className={cn(
        'focus:ring-sinais-black w-full rounded-xl border bg-transparent px-4 py-3 text-white placeholder:text-white focus:ring-2',
        error ? 'border-sinais-error' : 'border-white',
        className
      )}
      {...registration}
      {...props}
    />
    {error && (
      <span className="text-sinais-error text-sm">{error.message}</span>
    )}
  </div>
)
