import type { Metadata } from 'next'

import { metadataGenerator } from '@/lib/metadata'

export const metadata: Metadata = metadataGenerator('privacy')

export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-11 sm:py-16 md:py-20">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl">
        Política de Privacidade e Proteção de Dados
      </h1>

      <div className="space-y-6 text-gray-300">
        <p className="text-lg text-gray-200">
          A SINAIS respeita a privacidade e a proteção dos dados pessoais de
          todos os usuários, clientes, parceiros e visitantes, comprometendo-se
          a tratar essas informações de forma ética, segura e transparente, em
          conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº
          13.709/2018 - LGPD). Ao acessar este site, interagir com nossos
          conteúdos, preencher formulários, entrar em contato por nossos canais
          digitais ou se relacionar conosco por meio de redes sociais e
          campanhas publicitárias, o usuário declara estar ciente e de acordo
          com as condições aqui descritas.
        </p>

        <p>
          Durante a navegação ou interação com a SINAIS, poderão ser coletados
          dados pessoais fornecidos voluntariamente pelo titular, como nome,
          e-mail, telefone, empresa, cargo e demais informações necessárias para
          atendimento, envio de comunicações, propostas comerciais, execução de
          serviços contratados ou relacionamento institucional. Também podem ser
          coletados dados automaticamente, como endereço IP, tipo de navegador,
          dispositivo utilizado, páginas acessadas, tempo de navegação e
          informações obtidas por meio de cookies e tecnologias semelhantes, com
          a finalidade de melhorar a experiência do usuário, mensurar
          desempenho, analisar comportamento e otimizar estratégias de marketing
          e comunicação.
        </p>

        <p>
          Os dados pessoais coletados são utilizados exclusivamente para
          finalidades legítimas, específicas e necessárias, tais como contato
          comercial, prestação de serviços, envio de conteúdos informativos ou
          promocionais, gestão de relacionamento, cumprimento de obrigações
          legais e regulatórias, além de ações de marketing, análise de
          performance e remarketing. A SINAIS poderá tratar dados oriundos de
          interações em redes sociais, anúncios patrocinados e formulários
          vinculados a plataformas de terceiros, respeitando esta política e as
          diretrizes de privacidade das respectivas plataformas.
        </p>

        <p>
          A SINAIS não comercializa dados pessoais. O compartilhamento de
          informações ocorre apenas quando necessário para a execução das
          atividades e serviços, com fornecedores de tecnologia, ferramentas de
          CRM, plataformas de marketing, hospedagem e parceiros operacionais,
          sempre observando padrões adequados de segurança, confidencialidade e
          proteção da informação. Os dados são armazenados pelo período
          necessário para cumprir as finalidades para as quais foram coletados
          ou conforme exigido por lei, sendo adotadas medidas técnicas e
          organizacionais para prevenir acessos não autorizados, vazamentos, uso
          indevido ou qualquer forma de tratamento inadequado.
        </p>

        <p>
          O titular dos dados poderá, a qualquer momento, solicitar confirmação
          da existência de tratamento, acesso, correção, atualização, exclusão,
          anonimização de seus dados pessoais ou revogar consentimentos
          concedidos, nos termos da legislação vigente. As solicitações podem
          ser realizadas por meio do e-mail{' '}
          <a
            href="mailto:contato@sinais.ag"
            className="text-sinais-blue hover:underline"
          >
            contato@sinais.ag
          </a>
          . Esta Política de Privacidade poderá ser atualizada periodicamente
          para refletir alterações legais, técnicas ou operacionais, sendo
          recomendada sua consulta regular.
        </p>

        <div className="border-t-2 border-white/40 pt-6">
          <p className="text-center text-sm font-semibold text-gray-200">
            Última atualização: janeiro de 2026
          </p>
        </div>
      </div>
    </div>
  )
}
