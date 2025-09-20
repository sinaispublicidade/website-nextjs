import type { Metadata } from 'next'

import fonts from '@/lib/fonts'
import { cn } from '@/lib/utils'

import { Header } from '@/components/Common/Header'
import { Footer } from '@/components/Common/Footer'

import './globals.css'

export const metadata: Metadata = {
  title: 'SINAIS Publicidade',
  description: 'Sua nova agência de propaganda e marketing.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={cn(fonts.HelveticaNeue.variable, 'antialiased')}>
        <Header />

        <main className="min-h-screen w-full font-sans text-white">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
