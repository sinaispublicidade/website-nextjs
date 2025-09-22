import { BUTTON_STYLES } from '@/styles'

import { BannerHero } from '@/components/Common/BannerHero'
import { Forms } from '@/components/Forms'
import { Feature } from '@/components/Features'
import { Button } from '@/components/ui/Button'
import { Banner } from '@/components/Banners'

export default function Page() {
  const pathname = '/assets/services/automacao-de-atendimento'

  return (
    <>
      <BannerHero />

      <div className="bg-sinais-blue sm:px-6 sm:py-11 md:py-20">
        <div className="container mx-auto grid items-center sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="px-6 py-10 sm:py-0">
            <p className="mx-auto text-2xl font-bold sm:text-3xl md:text-[40px]">
              Com a automação, seu negócio entrega atendimento de qualidade, sem
              perder o toque humano, garantindo eficiência e satisfação do
              cliente.
            </p>
          </div>
          <Forms.About />
        </div>
      </div>

      <div className="mx-auto grid max-w-sm gap-4 px-6 py-11 sm:container sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div className="col-span-full mb-4 md:mb-8">
          <h2 className="mx-auto max-w-[800px] text-center text-2xl font-bold sm:text-3xl md:text-[40px]">
            Automatize seu processo de atendimento e{' '}
            <span className="text-sinais-blue">escale suas vendas</span>:
          </h2>
        </div>

        <Feature.Service
          image={`${pathname}/icon-01.svg`}
          title="Atendimento com respostas rápidas"
          text="Tenha um canal de atendimento automatizado disponível 24/7."
        />
        <Feature.Service
          image={`${pathname}/icon-02.svg`}
          title="Integração com canais digitais"
          text="WhatsApp, e-mail, chatbots e redes sociais em um só fluxo."
        />
        <Feature.Service
          image={`${pathname}/icon-03.svg`}
          title="Eficiência operacional para seu negócio"
          text="Menos tempo gasto em tarefas repetitivas, mais foco estratégico."
        />
        <Feature.Service
          image={`${pathname}/icon-04.svg`}
          title="Seu cliente com experiência personalizada"
          text="Fluxos configurados para atender cada necessidade de forma única."
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
        title="Mais tempo para sua equipe, melhor atendimento para seus clientes"
        text="Automatizar é reduzir falhas humanas, agilizar demandas e manter a qualidade do relacionamento."
      />
    </>
  )
}
