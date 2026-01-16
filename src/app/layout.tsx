import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'

import { env } from '@/env'

import { Header } from '@/components/Common/Header'
import { Footer } from '@/components/Common/Footer'

import './globals.css'

export const metadata: Metadata = {
  title: 'SINAIS Publicidade',
  description: 'Sua nova agência de propaganda e marketing.',
}

function GTMTag() {
  if (env.NODE_ENV !== 'production') return null
  if (!env.NEXT_PUBLIC_GTM_ID) return null

  return <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <GTMTag />

      <body className="bg-black font-sans text-white">
        <Header />

        <main className="w-full">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
