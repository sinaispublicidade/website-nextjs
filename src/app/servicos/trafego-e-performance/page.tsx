import { RiCalendarScheduleLine } from 'react-icons/ri'

import { BannerHero } from '@/components/Common/BannerHero'
import { Forms } from '@/components/Forms'
import { Feature } from '@/components/Features'
import { Button } from '@/components/ui/Button'
import { Partners } from '@/components/Common/Partners'

export default function Page() {
  const pathname = '/assets/services/trafego-e-performance'

  return (
    <>
      <BannerHero />

      <div className="bg-sinais-blue px-6 py-11 md:py-20">
        <div className="mx-auto grid max-w-sm gap-4 sm:container sm:grid-cols-2 lg:grid-cols-4">
          <Feature.Service
            image={`${pathname}/icon-01.svg`}
            title="Tenha novos leads qualificados todos os dias"
            text="Campanhas de alta conversão que geram leads qualificados para o seu negócio, otimizando seu orçamento de forma estratégica e inteligente."
          />
          <Feature.Service
            image={`${pathname}/icon-02.svg`}
            title="Aumente o reconhecimento da sua marca"
            text="Campanhas inteligentes e eficientes que aumentam o reconhecimento da sua marca, geram engajamento e atraem verdadeiros apaixonados pelo seu produto ou serviço."
          />
          <Feature.Service
            image={`${pathname}/icon-03.svg`}
            title="Anúncios segmentado e personalizados"
            text="Nada de campanhas padrão. Aqui, sua marca é tratada de forma personalizada, com anúncios segmentados por público e plataforma de mídia."
          />
          <Feature.Service
            image={`${pathname}/icon-04.svg`}
            title="Acompanhe seus resultados real-time"
            text="Acompanhe suas campanhas de um jeito simples com nosso modelo de report. Acompanhe os resultados com tecnologia de ponta e um painel visual intuitivo."
          />
          <div className="col-span-full mt-4 text-center md:mt-8">
            <Button.Outline
              className="mx-auto animate-(--pulse-shadow) border-black bg-black"
              href="/orcamento"
              plusIcon
            >
              Fale agora com um especialista!
            </Button.Outline>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid items-center sm:gap-6 sm:px-6 sm:py-11 md:py-20 lg:grid-cols-2 lg:gap-10">
        <div className="px-6 py-10 sm:py-0">
          <p className="mx-auto text-2xl font-bold sm:text-3xl md:text-[40px]">
            Sua empresa precisa de um parceiro que realmente entenda seu cliente
            e seu produto. E não trabalhe no automático
          </p>
          <p className="mt-8 text-base md:text-lg lg:text-xl">
            Um parceiro estratégico entende seu negócio e cria soluções
            personalizadas para gerar relevância, engajamento e resultados
            reais.
          </p>
          <p className="text-sinais-blue mt-8 flex items-center text-base md:text-lg lg:text-xl">
            <RiCalendarScheduleLine className="mr-3 h-6 w-6" /> Garanta seu
            horário para o diagnóstico
          </p>
        </div>

        <Forms.Service theme="black" />
      </div>

      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-0 lg:grid-cols-5">
        <div className="col-span-full mb-4 md:mb-8">
          <h2 className="mx-auto max-w-200 text-center text-2xl font-bold sm:text-3xl md:text-[40px]">
            Nossos cinco passos para{' '}
            <span className="text-sinais-blue">execução eficiente</span> das
            suas campanhas:
          </h2>
        </div>

        <div className="flex flex-col items-center text-center">
          <span className="bg-sinais-blue/10 text-sinais-blue border-sinais-blue flex h-40 w-40 items-center justify-center rounded-full border-2 text-2xl font-bold">
            Passo 1
          </span>
          <p className="mt-4 text-xl font-bold md:text-2xl xl:text-3xl">
            Diagnóstico
          </p>
          <p className="mt-2 max-w-80 text-base xl:text-lg 2xl:text-xl">
            Estudo das necessidades da sua marca e do seu produto.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="bg-sinais-blue/10 text-sinais-blue border-sinais-blue flex h-40 w-40 items-center justify-center rounded-full border-2 text-2xl font-bold">
            Passo 2
          </span>
          <p className="mt-4 text-xl font-bold md:text-2xl xl:text-3xl">
            Planejamento
          </p>
          <p className="mt-2 max-w-80 text-base xl:text-lg 2xl:text-xl">
            Plano com diretrizes estratégicas para canais de aquisição e
            formatos de anúncios.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="bg-sinais-blue/10 text-sinais-blue border-sinais-blue flex h-40 w-40 items-center justify-center rounded-full border-2 text-2xl font-bold">
            Passo 3
          </span>
          <p className="mt-4 text-xl font-bold md:text-2xl xl:text-3xl">
            Criativos
          </p>
          <p className="mt-2 max-w-80 text-base xl:text-lg 2xl:text-xl">
            Criação e produção para potencializar a performance das suas
            campanhas.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="bg-sinais-blue/10 text-sinais-blue border-sinais-blue flex h-40 w-40 items-center justify-center rounded-full border-2 text-2xl font-bold">
            Passo 4
          </span>
          <p className="mt-4 text-xl font-bold md:text-2xl xl:text-3xl">
            Mídia
          </p>
          <p className="mt-2 max-w-80 text-base xl:text-lg 2xl:text-xl">
            Execução das campanhas de tráfego de performance nas principais
            plataformas.
          </p>
        </div>
        <div className="flex flex-col items-center text-center sm:col-span-full lg:col-span-1">
          <span className="bg-sinais-blue/10 text-sinais-blue border-sinais-blue flex h-40 w-40 items-center justify-center rounded-full border-2 text-2xl font-bold">
            Passo 5
          </span>
          <p className="mt-4 text-xl font-bold md:text-2xl xl:text-3xl">
            Report
          </p>
          <p className="mt-2 max-w-80 text-base xl:text-lg 2xl:text-xl">
            Relatórios de performance e acompanhamento contínuo dos resultados.
          </p>
        </div>

        <div className="col-span-full mt-4 text-center md:mt-8">
          <Button.WhatsApp className="mx-auto">Conversar Agora</Button.WhatsApp>
        </div>
      </div>

      <Partners />
    </>
  )
}
