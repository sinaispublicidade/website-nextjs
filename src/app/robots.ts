import type { MetadataRoute } from 'next'

import { env } from '@/env'

const baseUrl = env.NEXT_PUBLIC_BASE_URL_XML

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'AhrefsBot',
        crawlDelay: 5,
      },
      {
        userAgent: 'SemrushBot',
        crawlDelay: 5,
      },
      {
        userAgent: 'MJ12bot',
        disallow: ['/'],
      },
      {
        userAgent: 'DotBot',
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
