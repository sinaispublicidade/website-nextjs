import { BUTTON_STYLES } from '@/styles'

import { portfolioDesenvolvimentoSites } from '@/mocks'

import { BannerHero } from '@/components/Common/BannerHero'
import { Forms } from '@/components/Forms'
import { Portfolio } from '@/components/Portfolio'
import { Feature } from '@/components/Features'
import { Button } from '@/components/ui/Button'

export default function Page() {
  const pathname = '/assets/services/desenvolvimento-de-sites'

  return (
    <>
      <BannerHero />

      <div className="bg-sinais-blue sm:px-6 sm:py-11 md:py-20">
        <div className="container mx-auto grid items-center sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="px-6 py-10 sm:py-0">
            <p className="mx-auto text-2xl font-bold sm:text-3xl md:text-[40px]">
              Invista nessa poderosa ferramenta de vendas e conquiste um canal
              de relacionamento com seu cliente disponível 24 horas por dia.
            </p>
            <p className="mt-8 text-base md:text-lg lg:text-xl">
              Um site bem construído é o aliado ideal para o seu negócio atender
              clientes com eficiência e gerar ainda mais valor para a sua marca.
            </p>
          </div>
          <Forms.Service />
        </div>
      </div>

      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="col-span-full mb-4 md:mb-8">
          <h2 className="mx-auto max-w-200 text-center text-2xl font-bold sm:text-3xl md:text-[40px]">
            Benefícios de ter um site{' '}
            <span className="text-sinais-blue">bem estrutura</span> para seu
            negócio:
          </h2>
        </div>

        <Feature.Service
          image={`${pathname}/icon-01.svg`}
          title="Ferramenta de análise de dados para sue negócio"
          text="Tenha o Google Analytics implantado no seu site e obtenha dados reais, em tempo real, sobre a navegação do seu público."
        />
        <Feature.Service
          image={`${pathname}/icon-02.svg`}
          title="Integração inteligente com WhatsApp Business"
          text="Integre o WhatsApp Business ao seu site, ofereça um canal rápido de atendimento e aumente seus resultados."
        />
        <Feature.Service
          image={`${pathname}/icon-03.svg`}
          title="Um site multiplataforma para o seu cliente"
          text="Ter um site responsivo garante uma navegação eficiente para o seu cliente, seja no computador, tablet ou celular."
        />
        <Feature.Service
          image={`${pathname}/icon-04.svg`}
          title="Capture leads e melhore seus resultados"
          text="Ofereça um canal de relacionamento por meio do cadastro de leads e conquiste potenciais compradores diretamente pelo seu site."
        />
        <div className="col-span-full mt-4 text-center md:mt-8">
          <Button.Outline
            className={BUTTON_STYLES.BLUE}
            href="/orcamento"
            plusIcon
          >
            Fale agora com um especialista!
          </Button.Outline>
        </div>
      </div>

      <h2 className="px-6 pb-8 text-center text-2xl font-bold sm:text-3xl md:pb-12 md:text-[40px]">
        Veja alguns sites criados por nós:
      </h2>
      <Portfolio portfolio={portfolioDesenvolvimentoSites} />
    </>
  )
}
