import type { Metadata } from 'next'

import { env } from '@/env'
import { metadataMock } from '@/mocks/metadata.mock'

export const metadataGenerator = (key: string): Metadata => ({
  title: metadataMock[key].title,
  description: metadataMock[key].description,
  keywords: metadataMock[key].keyword,
  metadataBase: new URL(
    `${env.NEXT_PUBLIC_BASE_URL_SEO}${metadataMock[key].url}`
  ),
  openGraph: {
    title: metadataMock[key].title,
    description: metadataMock[key].description,
    type: 'website',
    url: `${env.NEXT_PUBLIC_BASE_URL_SEO}${metadataMock[key].url}`,
    images: [
      {
        url: `${env.NEXT_PUBLIC_BASE_URL_SEO}/assets/og/og-default--sinais-ag.png`,
        width: 1200,
        height: 628,
        alt: metadataMock[key].title,
        type: 'image/png',
      },
    ],
    siteName: 'SINAIS Publicidade e Propaganda',
    locale: 'pt_BR',
  },
})
