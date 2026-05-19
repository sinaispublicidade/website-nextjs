import type { NextConfig } from 'next'
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'
import { headers as withSecurityHeaders } from 'next-security'

const isProduction = process.env.NODE_ENV === 'production'

const securityHeaders: Parameters<typeof withSecurityHeaders>[0] = {
  crossOriginResourcePolicy: 'same-origin',
  crossOriginOpenerPolicy: 'same-origin',
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: isProduction
    ? {
        'default-src': ["'self'"],
        'base-uri': ["'self'"],
        'connect-src': [
          "'self'",
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://region1.google-analytics.com',
          'https://stats.g.doubleclick.net',
        ],
        'font-src': ["'self'", 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'frame-src': ["'self'", 'https://www.googletagmanager.com'],
        'img-src': [
          "'self'",
          'data:',
          'blob:',
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://stats.g.doubleclick.net',
        ],
        'manifest-src': ["'self'"],
        'media-src': ["'self'", 'blob:'],
        'object-src': ["'none'"],
        'script-src': [
          "'self'",
          'https://www.googletagmanager.com',
        ],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'worker-src': ["'self'", 'blob:'],
        'upgrade-insecure-requests': true,
      }
    : false,
  originAgentCluster: '?1',
  referrerPolicy: 'strict-origin-when-cross-origin',
  strictTransportSecurity: {
    maxAge: 63_072_000,
    includeSubdomains: true,
  },
  xContentTypeOptions: 'nosniff',
  xDNSPrefetchControl: 'off',
  xDownloadOptions: 'noopen',
  xFrameOptions: 'SAMEORIGIN',
  xPermittedCrossDomainPolicies: 'none',
  xXSSProtection: '0',
  permissionsPolicy: {
    accelerometer: ['()'],
    autoplay: ['()'],
    camera: ['()'],
    'display-capture': ['()'],
    fullscreen: ['()'],
    geolocation: ['()'],
    gyroscope: ['()'],
    microphone: ['()'],
    midi: ['()'],
    payment: ['()'],
    'picture-in-picture': ['()'],
    serial: ['()'],
    usb: ['()'],
    'web-share': ['()'],
    'xr-spatial-tracking': ['()'],
  },
  xPoweredBy: false,
}

const nextConfig: NextConfig = {
  ...withSecurityHeaders(securityHeaders),
  reactCompiler: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    return config
  },
  // Provide an explicit (even empty) turbopack config so Next.js
  // doesn't error when custom webpack is present. This keeps Turbopack
  // enabled while allowing backward-compatible webpack usage.
  turbopack: {},
}

export default nextConfig
