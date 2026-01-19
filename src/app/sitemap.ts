import type { MetadataRoute } from 'next'

import { env } from '@/env'
import { services } from '@/mocks'

const baseUrl = env.NEXT_PUBLIC_BASE_URL_SEO

const serviceUrls = services.map((service) => ({
  url: `${baseUrl}${service.link}`,
  lastModified: new Date().toISOString(),
  priority: 0.8,
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
    {
      url: `${baseUrl}/orcamento`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date().toISOString(),
      priority: 0.6,
    },
    ...serviceUrls,
  ]
}
