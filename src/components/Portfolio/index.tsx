import React from 'react'
import Image from 'next/image'

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
    {portfolio.slice(0, quantity).map(({ name, link, image }, idx) => (
      <div key={idx} className="relative w-full md:h-72">
        <Image
          src={image}
          alt="Banner aleatório"
          width={960}
          height={540}
          className="object-cover md:absolute md:inset-0 md:size-full"
        />

        <div className="bg-sinais-blue/80 absolute inset-0 flex size-full flex-col items-center justify-center gap-3 p-5 opacity-0 transition-opacity md:hover:opacity-100">
          <p className="text-lg font-medium lg:text-2xl">{name}</p>

          <Button.Outline className="stretched-link" href={link} plusIcon>
            Quero saber mais
          </Button.Outline>
        </div>
      </div>
    ))}
  </div>
)
