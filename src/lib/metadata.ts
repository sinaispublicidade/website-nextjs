import type { Metadata } from 'next'

import { env } from '@/env'
import { metadataMock } from '@/mocks/metadata.mock'

export const metadataGenerator = (key: string): Metadata => ({
  title: metadataMock[key].title,
  description: metadataMock[key].description,
  keywords: metadataMock[key].keyword,
  metadataBase: new URL(
    `${env.NEXT_PUBLIC_BASE_URL_XML}${metadataMock[key].url}`
  ),
})
