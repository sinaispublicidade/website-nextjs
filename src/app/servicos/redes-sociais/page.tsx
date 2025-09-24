import { BUTTON_STYLES } from '@/styles'

import { BannerHero } from '@/components/Common/BannerHero'
import { Forms } from '@/components/Forms'
import { Feature } from '@/components/Features'
import { Button } from '@/components/ui/Button'
import { Banner } from '@/components/Banners'

export default function Page() {
  const pathname = '/assets/services/redes-sociais'

  return (
    <>
      <BannerHero />

      <div className="bg-sinais-blue sm:px-6 sm:py-11 md:py-20">
        <div className="container mx-auto grid items-center sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="px-6 py-10 sm:py-0">
            <p className="mx-auto text-2xl font-bold sm:text-3xl md:text-[40px]">
              Mais do que postar conteúdos, oferecemos gestão profissional que
              transforma sua presença digital em um canal de vendas e
              relacionamento sólido.
            </p>
          </div>
          <Forms.About />
        </div>
      </div>

      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="col-span-full mb-4 md:mb-8">
          <h2 className="mx-auto max-w-[800px] text-center text-2xl font-bold sm:text-3xl md:text-[40px]">
            Sua presença na rede social não se resume em{' '}
            <span className="text-sinais-blue">um post bonito</span>:
          </h2>
        </div>

        <Feature.Service
          image={`${pathname}/icon-01.svg`}
          title="Criação de conteúdo estratégico"
          text="Posts e campanhas que conversam diretamente com o público-alvo."
        />
        <Feature.Service
          image={`${pathname}/icon-02.svg`}
          title="Gestão eficiente de anúncios"
          text="Investimento otimizado em mídia paga para ampliar alcance e gerar vendas."
        />
        <Feature.Service
          image={`${pathname}/icon-03.svg`}
          title="Engajamento e comunidade"
          text="Interação ativa com seguidores, criando proximidade e confiança."
        />
        <Feature.Service
          image={`${pathname}/icon-04.svg`}
          title="Monitoramento de resultados"
          text="Acompanhamento de métricas para otimizar constantemente a performance."
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

      <Banner.Service.CTA
        title="Transforme seus seguidores em clientes fiéis"
        text="Com uma gestão inteligente, sua empresa passa a se comunicar de forma estratégica, criando autoridade no mercado e gerando resultados reais."
        image="/assets/banners/banner-hero--services-cta--redes-sociais.png"
      />
    </>
  )
}
