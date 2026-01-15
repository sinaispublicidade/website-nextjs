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
        'focus-visible:border-sinais-black focus-visible:ring-sinais-black/50 aria-invalid:ring-sinais-error/20 aria-invalid:border-sinais-error w-full rounded-xl border bg-transparent px-4 py-3 text-white transition-[color,box-shadow] outline-none placeholder:text-white focus:ring-2 focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-white',
        className
      )}
      {...registration}
      {...props}
      aria-invalid={!!error || props['aria-invalid']}
    />
    {error && (
      <span className="text-sinais-error text-sm">{error.message}</span>
    )}
  </div>
)
