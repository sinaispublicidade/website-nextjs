import React from 'react'

export const Stats: React.FC = () => (
  <section className="bg-black">
    <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-11 md:py-20 lg:grid-cols-4">
      <div className="col-span-1 lg:col-span-2 lg:pr-20">
        <h3 className="text-3xl font-bold sm:text-[40px]">
          <strong className="text-sinais-blue font-bold">SINAIS:</strong> com
          mais de 15 anos de mercado somos movidos por resultado e criatividade
        </h3>
      </div>

      <div className="">
        <h4 className="text-sinais-blue text-2xl font-bold lg:text-3xl">
          Mais de 200 milhões em negócios gerados
        </h4>
        <p className="mt-3 lg:text-xl">
          Cases de sucesso que mostram o impacto das nossas estratégias em
          vendas e reconhecimento.
        </p>
      </div>

      <div>
        <h4 className="text-sinais-blue text-2xl font-bold lg:text-3xl">
          Tecnologia nas ações de marketing
        </h4>
        <p className="mt-3 lg:text-xl">
          Integramos dados, automações e criatividade para gerar resultados
          mensuráveis.
        </p>
      </div>
    </div>
  </section>
)
