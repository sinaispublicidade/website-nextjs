import { Metadata } from 'next'

import { portfolioHome } from '@/mocks'
import { metadataGenerator } from '@/lib/metadata'

import { Stats } from '@/components/Stats'
import { Services } from '@/components/Services'
import { Clients } from '@/components/Clients'
import { Portfolio } from '@/components/Portfolio'
import { Testimonials } from '@/components/Testimonials'
import { Forms } from '@/components/Forms'
import { Partners } from '@/components/Common/Partners'

export const metadata: Metadata = metadataGenerator('home')

export default function Home() {
  return (
    <>
      <Stats />
      <Services />
      <Clients />

      <section className="bg-black px-6">
        <h2 className="mx-auto max-w-xs text-center text-2xl font-bold sm:max-w-md sm:text-3xl md:max-w-lg md:text-[40px]">
          Conheça{' '}
          <u className="border-sinais-blue border-b-5 leading-snug no-underline">
            alguns trabalhos
          </u>{' '}
          feitos pela SINAIS:
        </h2>

        <Portfolio className="-mx-6 mt-9 md:mt-11" portfolio={portfolioHome} />
      </section>

      <Testimonials />
      <Forms.Home />
      <Partners />
    </>
  )
}
