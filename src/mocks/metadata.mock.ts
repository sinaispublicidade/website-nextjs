export interface IMetadata {
  url: string
  title: string
  description: string
  keyword: string[]
}

export const metadataMock: Record<string, IMetadata> = {
  home: {
    url: '/',
    title: 'SINAIS - Agência de Marketing e Propaganda | Campinas SP',
    description:
      'Agência de marketing e propaganda em Campinas. +15 anos gerando resultados. Campanhas online, sites, CRM, redes sociais e design de marcas. Solicite orçamento!',
    keyword: [
      'agência de marketing',
      'agência de propaganda',
      'agência campinas',
      'marketing digital campinas',
    ],
  },
  about: {
    url: '/sobre',
    title: 'Sobre a SINAIS | Agência de Marketing com +15 Anos - Campinas',
    description:
      'Conheça a SINAIS: agência de marketing e propaganda em Campinas há +15 anos. Mais de 300 clientes atendidos e +R$800 milhões em resultados gerados.',
    keyword: [
      'agência campinas',
      'sobre sinais',
      'agência marketing campinas',
      'publicidade campinas',
    ],
  },
  budget: {
    url: '/orcamento',
    title: 'Solicite Orçamento | Agência de Marketing SINAIS - Campinas',
    description:
      'Solicite orçamento  para seu projeto de marketing digital, publicidade ou branding. Atendemos empresas de todos os portes em Campinas e região.',
    keyword: [
      'orçamento marketing',
      'orçamento agência',
      'solicitar orçamento',
      'contato agência marketing',
    ],
  },
  ads: {
    url: '/servicos/trafego-e-performance',
    title: 'Tráfego Pago e Performance | Google Ads e Meta Ads - SINAIS',
    description:
      'Campanhas com resultados reais. Gestão especializada em Google Ads, Meta Ads e TikTok Ads. +R$800 milhões gerados. Fale com especialistas!',
    keyword: [
      'tráfego pago',
      'Google Ads',
      'Meta Ads',
      'campanha performance',
      'gestão tráfego pago',
    ],
  },
  web: {
    url: '/servicos/desenvolvimento-de-sites',
    title: 'Desenvolvimento de Sites Profissionais | Agência SINAIS',
    description:
      'Criação de sites modernos, responsivos e otimizados para SEO. Desenvolvimento web focado em performance, conversão e experiência do usuário. Solicite orçamento!',
    keyword: [
      'desenvolvimento de sites',
      'criação de sites',
      'site responsivo',
      'desenvolvimento web campinas',
    ],
  },
  crm: {
    url: '/servicos/crm-e-vendas',
    title: 'Implantação de CRM e Automação de Vendas | SINAIS Marketing',
    description:
      'Soluções de CRM para organizar processos, automatizar tarefas e aumentar vendas. Implantação e gestão de sistemas que potencializam sua equipe comercial.',
    keyword: [
      'CRM vendas',
      'implantação CRM',
      'automação vendas',
      'sistema CRM',
      'gestão comercial',
    ],
  },
  social: {
    url: '/servicos/redes-sociais',
    title: 'Gestão de Redes Sociais | Social Media Profissional - SINAIS',
    description:
      'Gestão completa de redes sociais com estratégia, criação de conteúdo e análise de resultados. Fortaleça sua presença digital e engaje seu público.',
    keyword: [
      'gestão redes sociais',
      'social media',
      'marketing redes sociais',
      'conteúdo redes sociais',
    ],
  },
  brand: {
    url: '/servicos/design-de-marcas',
    title: 'Design de Marcas e Identidade Visual | Branding - SINAIS',
    description:
      'Criação de identidade visual única e estratégica. Design de marcas que comunicam valores, posicionam empresas e conectam com o público. Projetos sob medida.',
    keyword: [
      'design de marcas',
      'identidade visual',
      'branding',
      'criação de marca',
      'logotipo',
    ],
  },
  packaging: {
    url: '/servicos/design-de-embalagens',
    title: 'Design de Embalagens Criativas | Packaging Estratégico - SINAIS',
    description:
      'Criação de embalagens que valorizam produtos e atraem consumidores. Design estratégico para destaque em prateleiras e e-commerce. Solicite orçamento!',
    keyword: [
      'design de embalagens',
      'criação de embalagens',
      'packaging design',
      'design produto',
      'embalagem estratégica',
    ],
  },
  agent: {
    url: '/servicos/automacao-de-atendimento',
    title: 'Automação de Atendimento e Chatbots | Soluções SINAIS',
    description:
      'Automação de atendimento para agilizar respostas, melhorar experiência do cliente e otimizar tempo da equipe. Tecnologia que vende 24/7.',
    keyword: [
      'automação atendimento',
      'chatbot',
      'atendimento automatizado',
      'bot whatsapp',
      'automação cliente',
    ],
  },
  marketing: {
    url: '/servicos/marketing-para-varejo',
    title: 'Marketing para Varejo | Estratégias Multicanais - SINAIS',
    description:
      'Estratégias de marketing para varejo físico e online. Aumente vendas com campanhas integradas, merchandising e comunicação no ponto de venda.',
    keyword: [
      'marketing varejo',
      'marketing loja física',
      'varejo omnichannel',
      'campanha varejo',
    ],
  },
  inbound: {
    url: '/servicos/inbound-rd-station',
    title: 'Inbound Marketing RD Station | Automação de Marketing - SINAIS',
    description:
      'Implementação e gestão de Inbound Marketing com RD Station. Funis automatizados que atraem, nutrem e convertem leads em clientes de forma eficiente.',
    keyword: [
      'inbound marketing',
      'RD Station',
      'automação marketing',
      'funil vendas',
      'geração leads',
    ],
  },
}
