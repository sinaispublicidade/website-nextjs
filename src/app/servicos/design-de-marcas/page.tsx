import { BannerHero } from '@/components/Common/BannerHero'
import { Forms } from '@/components/Forms'
import { Portfolio } from '@/components/Portfolio'
import { Feature } from '@/components/Features'
import { Button } from '@/components/ui/Button'

export default function Page() {
  const pathname = '/assets/services/design-de-marcas'

  return (
    <>
      <BannerHero />

      <div className="bg-sinais-blue sm:px-6 sm:py-11 md:py-20">
        <div className="container mx-auto grid items-center sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="px-6 py-10 sm:py-0">
            <p className="mx-auto text-2xl font-bold sm:text-3xl md:text-[40px]">
              Uma marca bem construída é muito mais do que um logo: é a essência
              do seu negócio traduzida em design, pronta para gerar impacto e
              resultados.
            </p>
            <p className="mt-8 text-base md:text-lg lg:text-xl">
              Sua identidade visual será construída para transmitir
              credibilidade, gerar impacto e se conectar com seu público.
            </p>
          </div>
          <Forms.About />
        </div>
      </div>

      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="col-span-full mb-4 md:mb-8">
          <h2 className="mx-auto max-w-[800px] text-center text-2xl font-bold sm:text-3xl md:text-[40px]">
            Criamos identidade que{' '}
            <span className="text-sinais-blue">marca e geram resultados</span>:
          </h2>
        </div>

        <Feature.Service
          image={`${pathname}/icon-01.svg`}
          title="Sua empresa com uma identidade única"
          text="Visual exclusivo e alinhado à personalidade da sua empresa."
        />
        <Feature.Service
          image={`${pathname}/icon-02.svg`}
          title="Força de posicionamento de mercado"
          text="Uma marca que transmite autoridade e diferenciação no mercado."
        />
        <Feature.Service
          image={`${pathname}/icon-03.svg`}
          title="Versatilidade de aplicação da marca"
          text="Design pensado para ser aplicado em diferentes plataformas e materiais."
        />
        <Feature.Service
          image={`${pathname}/icon-04.svg`}
          title="Criamos memórias da sua marca"
          text="Criação de elementos que marcam presença na mente do consumidor."
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
        Veja algumas marcas já criadas por nós:
      </h2>
      <Portfolio quantity={3} />
    </>
  )
}
