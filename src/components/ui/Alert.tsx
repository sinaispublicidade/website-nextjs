import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

type ReactDivProps = React.HTMLAttributes<HTMLDivElement>

interface AlertProps extends ReactDivProps {
  type?: 'success' | 'error'
  timeout?: number
}

const alertStyles = {
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
}

const alertIcons = {
  success: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
}

const AlertContainer: React.FC<AlertProps> = ({
  type = 'success',
  className,
  children,
}) => (
  <div
    className={cn(
      'flex w-fit items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm shadow-lg transition-all',
      alertStyles[type],
      className
    )}
    role="alert"
  >
    {alertIcons[type]}
    {children}
  </div>
)

export const Alert: React.FC<AlertProps> = ({
  timeout,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (timeout) {
      const timer = setTimeout(() => setVisible(false), timeout)
      return () => clearTimeout(timer)
    }
  }, [timeout])

  if (!visible) return null

  return <AlertContainer {...props}>{children}</AlertContainer>
}
