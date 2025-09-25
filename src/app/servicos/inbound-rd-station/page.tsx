import Image from 'next/image'

import { BUTTON_STYLES } from '@/styles'

import { BannerHero } from '@/components/Common/BannerHero'
import { Forms } from '@/components/Forms'
import { Feature } from '@/components/Features'
import { Button } from '@/components/ui/Button'
import { Banner } from '@/components/Banners'

export default function Page() {
  const pathname = '/assets/services/inbound-rd-station'

  return (
    <>
      <BannerHero />

      <div className="bg-sinais-blue sm:px-6 sm:py-11 md:py-20">
        <div className="container mx-auto grid items-center sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="px-6 py-10 sm:py-0">
            <Image
              src={`${pathname}/badge.svg`}
              alt="RD Station Logo"
              width={340}
              height={75}
              className="mb-6"
              priority
            />
            <p className="text-2xl font-bold sm:text-3xl md:text-[40px]">
              Sua empresa terá um processo de vendas mais estruturado,
              previsível e escalável, convertendo contatos em clientes de forma
              inteligente.
            </p>
          </div>
          <Forms.About />
        </div>
      </div>

      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="col-span-full mb-4 md:mb-8">
          <h2 className="mx-auto max-w-[800px] text-center text-2xl font-bold sm:text-3xl md:text-[40px]">
            Uma <span className="text-sinais-blue">ferramenta poderosa</span>{' '}
            para relacionamento com seus leads:
          </h2>
        </div>

        <Feature.Service
          image={`${pathname}/icon-01.svg`}
          title="Geração de leads qualificados"
          text="Atraia o público certo com qualidade para o seu negócio."
        />
        <Feature.Service
          image={`${pathname}/icon-02.svg`}
          title="Seus leads com nutrição automatizada"
          text="Conteúdo entregue no momento certo da jornada."
        />
        <Feature.Service
          image={`${pathname}/icon-03.svg`}
          title="Integração completa com CRM e vendas"
          text="Conexão com CRM, redes sociais e campanhas de mídia paga."
        />
        <Feature.Service
          image={`${pathname}/icon-04.svg`}
          title="Medição de resultados em tempo real"
          text="Acompanhe métricas e otimize constantemente suas estratégias."
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

      <Banner.Service.CTA.Background
        title="Venda mais com processos inteligentes e automatizados"
        text="Com a automação, sua equipe ganha eficiência, reduz custos e aumenta a previsibilidade de resultados."
        image="/assets/banners/banner-hero--services-cta--inbound-rd.png"
      />
    </>
  )
}
