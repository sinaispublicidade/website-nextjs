import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

import { IPortfolio } from '@/types'
import { cn } from '@/lib/utils'

import { ImageZoom } from '@/components/ui/shadcn-io/image-zoom'
import { Button } from '@/components/ui/Button'

interface PortfolioProps {
  portfolio: IPortfolio[]
  className?: string
}

const regexLink = /^https?:\/\//i

export const Portfolio: React.FC<PortfolioProps> = ({
  portfolio,
  className,
}) => (
  <div className={cn('grid sm:grid-cols-2 lg:grid-cols-3', className)}>
    {portfolio.map(({ name, link, image }, idx) => (
      <div
        key={idx}
        className="group relative flex h-60 w-full flex-col md:h-72"
      >
        <ImageZoom className="relative flex-1 md:absolute md:inset-0">
          <Image
            src={image}
            alt={name}
            width={960}
            height={540}
            className="absolute inset-0 size-full object-cover"
          />
        </ImageZoom>

        <div
          className={cn(
            'flex items-center gap-3 p-5',
            'md:bg-sinais-blue/80',
            'md:absolute md:inset-0 md:size-full md:flex-col md:justify-center md:opacity-0 md:transition-opacity md:hover:opacity-100',
            !link ? 'md:pointer-events-none group-hover:md:opacity-100' : ''
          )}
        >
          <p className="flex-1 text-lg font-medium md:flex-none lg:text-2xl">
            {name}
          </p>

          {link && (
            <>
              <Button.Outline
                className="stretched-link hidden md:flex"
                href={link}
                target={regexLink.test(link) ? '_blank' : '_self'}
                plusIcon
              >
                Quero saber mais
              </Button.Outline>

              <Link
                href={link}
                target={regexLink.test(link) ? '_blank' : '_self'}
                className="stretched-link inline-block md:hidden"
              >
                <FiExternalLink size={20} />
                <span className="sr-only">Quero saber mais</span>
              </Link>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
)
