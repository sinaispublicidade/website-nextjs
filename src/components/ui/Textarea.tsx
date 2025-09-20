import React from 'react'

import { TextareaProps } from '@/types'

import { cn } from '@/lib/utils'

export const Textarea: React.FC<TextareaProps> = ({
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
    <textarea
      className={cn(
        'focus:ring-sinais-blue h-28 w-full rounded-xl border bg-transparent px-4 py-3 text-white placeholder:text-white focus:ring-2',
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
