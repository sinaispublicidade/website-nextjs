import React from 'react'

import { portfolio } from '@/mocks'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/Button'

interface PortfolioProps {
  quantity?: number
  className?: string
}

export const Portfolio: React.FC<PortfolioProps> = ({
  quantity = 6,
  className,
}) => (
  <div className={cn('grid sm:grid-cols-2 lg:grid-cols-3', className)}>
    {portfolio.map(({ name, link }, idx) => (
      <div key={idx} className="relative h-72 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-yellow-300" />

        <div className="bg-sinais-blue/80 absolute inset-0 flex size-full flex-col items-center justify-center p-5 opacity-0 transition-opacity hover:opacity-100">
          <p className="text-lg font-medium lg:text-2xl">{name}</p>

          <Button.Outline className="mt-3" href={link} plusIcon>
            Quero saber mais
          </Button.Outline>
        </div>
      </div>
    ))}
  </div>
)
