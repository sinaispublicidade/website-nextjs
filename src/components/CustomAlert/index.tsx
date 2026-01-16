import React from 'react'

import { Alert } from '@/components/ui/Alert'

interface CustomAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'success' | 'error'
  timeout?: number
}

const alertMessages = {
  success: 'Enviado com sucesso!',
  error: 'Erro ao enviar o formulário. Tente novamente.',
}

export const CustomAlert: React.FC<CustomAlertProps> = ({
  type,
  timeout,
  ...props
}) => {
  if (!type) return null

  return (
    <Alert type={type} timeout={timeout} {...props}>
      {alertMessages[type]}
    </Alert>
  )
}
