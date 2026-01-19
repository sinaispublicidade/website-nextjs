import type { Metadata } from 'next'
import Image from 'next/image'

import { metadataGenerator } from '@/lib/metadata'

import { Testimonials } from '@/components/Testimonials'
import { Partners } from '@/components/Common/Partners'
import { Forms } from '@/components/Forms'

export const metadata: Metadata = metadataGenerator('budget')

export default function BudgetPage() {
  return (
    <>
      <div className="px-6 py-6 md:py-8">
        <div className="container mx-auto flex flex-col items-start gap-6 md:flex-row lg:gap-10">
          <Forms.Budget />

          <aside className="bg-sinais-darkblue mx-auto flex w-full max-w-80 flex-col items-center justify-center rounded-3xl px-6 py-6 sm:rounded-4xl sm:py-8 lg:max-w-95 xl:max-w-130 xl:px-12 xl:py-10">
            <p className="mb-6 text-2xl font-bold text-white sm:text-3xl xl:text-[40px]">
              Me conte sobre o seu desafio:
            </p>

            <blockquote className="relative z-10 rounded-xl bg-white p-6 text-sm text-zinc-500 italic sm:rounded-3xl lg:p-8 lg:text-base xl:text-xl">
              "Na SINAIS, desenvolvemos{' '}
              <strong>soluções digitais personalizadas</strong>, unindo
              estratégia, criatividade e execução para gerar resultados reais.
              Preencha o formulário e nossa equipe entrará em contato para
              entender sua demanda e construir uma proposta alinhada aos seus
              objetivos”
            </blockquote>

            <footer className="relative flex items-center overflow-hidden pt-8 before:absolute before:-top-8 before:left-4 before:block before:size-12 before:rotate-45 before:rounded-xl before:bg-white before:content-[''] lg:pt-12 lg:before:-top-11 lg:before:left-5 lg:before:size-16">
              <Image
                src="/assets/budget-card--primo-junior.jpg"
                alt="Cliente Satisfeito"
                width={200}
                height={200}
                className="size-20 rounded-full object-cover lg:size-28"
              />
              <div className="ml-4">
                <p className="text-xl font-bold text-white">Primo Junior</p>
                <p className="text-lg text-white">CEO SINAIS.ag</p>
              </div>
            </footer>
          </aside>
        </div>
      </div>

      <Testimonials />
      <Partners />
    </>
  )
}
