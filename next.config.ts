import type { NextConfig } from 'next'
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

const nextConfig: NextConfig = {
  reactCompiler: true,
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
