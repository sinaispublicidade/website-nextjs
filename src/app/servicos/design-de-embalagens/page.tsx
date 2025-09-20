import { BannerHero } from '@/components/Common/BannerHero'
import { Forms } from '@/components/Forms'
import { Portfolio } from '@/components/Portfolio'
import { Feature } from '@/components/Features'
import { Button } from '@/components/ui/Button'

export default function Page() {
  const pathname = '/assets/services/design-de-embalagens'

  return (
    <>
      <BannerHero />

      <div className="bg-sinais-blue sm:px-6 sm:py-11 md:py-20">
        <div className="container mx-auto grid items-center sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="px-6 py-10 sm:py-0">
            <p className="mx-auto text-2xl font-bold sm:text-3xl md:text-[40px]">
              Com embalagens inteligentes, sua marca conquista mais espaço no
              mercado, fideliza clientes e potencializa as vendas.
            </p>
            <p className="mt-8 text-base md:text-lg lg:text-xl">
              Mais do que proteger, sua embalagem será um canal de comunicação
              que conecta a marca ao consumidor.
            </p>
          </div>
          <Forms.About />
        </div>
      </div>

      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="col-span-full mb-4 md:mb-8">
          <h2 className="mx-auto max-w-[800px] text-center text-2xl font-bold sm:text-3xl md:text-[40px]">
            Embalagens que{' '}
            <span className="text-sinais-blue">impactam e vende mais</span>:
          </h2>
        </div>

        <Feature.Service
          image={`${pathname}/icon-01.svg`}
          title="Valorização do seu  produto"
          text="Destaque seu produto nas prateleiras e no e-commerce."
        />
        <Feature.Service
          image={`${pathname}/icon-02.svg`}
          title="Crie conexão com o público"
          text="Design que comunica os valores da marca de forma clara."
        />
        <Feature.Service
          image={`${pathname}/icon-03.svg`}
          title="Identidade de produto consistente"
          text="Harmonia entre produto, marca e estratégia de marketing."
        />
        <Feature.Service
          image={`${pathname}/icon-04.svg`}
          title="Crie estímulo à compra do produto"
          text="Visual atrativo que aumenta a decisão de compra do consumidor."
        />
        <div className="col-span-full mt-4 text-center md:mt-8">
          <Button.Outline
            className="btn-sinais-blue mx-auto"
            href="/orcamento"
            plusIcon
          >
            Fale agora com um especialista!
          </Button.Outline>
        </div>
      </div>

      <h2 className="px-6 pb-8 text-center text-2xl font-bold sm:text-3xl md:pb-12 md:text-[40px]">
        Veja algumas embalagens já criadas por nós:
      </h2>
      <Portfolio quantity={3} />
    </>
  )
}
