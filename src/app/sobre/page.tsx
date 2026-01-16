import { Button } from '@/components/ui/Button'
import { Feature } from '@/components/Features'
import { Forms } from '@/components/Forms'
import { Testimonials } from '@/components/Testimonials'

export default function About() {
  return (
    <>
      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <Feature.About
          strong="+300 clientes"
          small="atendidos"
          text={`Geração de leads\n\nExperiência consolidada em diferentes segmentos do mercado.`}
        />
        <Feature.About
          strong="+800 milhões"
          small="em resultados"
          text="Estratégias que geraram crescimento real e mensurável."
        />
        <Feature.About
          strong="+10 milhões"
          small="em mídia"
          text="Investimentos inteligentes em campanhas digitais e offline."
        />
        <Feature.About
          strong="+15 anos"
          small="de expertise"
          text="História construída com inovação, credibilidade e resultados."
        />
        <div className="col-span-full mt-4 text-center">
          <Button.Outline
            className="bg-sinais-blue border-sinais-blue mx-auto animate-(--pulse-shadow-sinais-blue)"
            href="/orcamento"
            plusIcon
          >
            Fale agora com um especialista!
          </Button.Outline>
        </div>
      </div>

      <div className="bg-sinais-blue sm:px-6 sm:py-11 md:py-20">
        <div className="container mx-auto grid items-center sm:gap-6 md:grid-cols-2 lg:gap-10">
          <p className="px-6 py-10 text-2xl font-bold sm:p-0 sm:text-3xl md:text-[40px]">
            Na SINAIS, cada projeto é construído com foco em métricas e
            performance. Não entregamos apenas campanhas, mas resultados
            concretos que fortalecem marcas, aumentam vendas e geram impacto
            direto nos negócios.
          </p>
          <Forms.Service />
        </div>
      </div>

      <div className="bg-sinais-blue sm:bg-sinais-darkblue px-6 py-11 md:py-20">
        <p className="mx-auto text-center text-lg font-medium md:max-w-4xl md:text-2xl">
          A SINAIS é uma agência de publicidade e marketing com sede em
          Campinas, especializada em comunicação inteligente, performance e
          design de marcas. Há mais de 15 anos no mercado, a agência desenvolve
          estratégias personalizadas que unem criatividade e tecnologia para
          gerar resultados reais e sustentáveis para empresas de diversos
          segmentos.
        </p>
      </div>

      <Testimonials />
    </>
  )
}
