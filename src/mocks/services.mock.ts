export interface IService {
  key: string
  icon: string
  title: string
  desc: string
  link: string
}

export const services: IService[] = [
  {
    key: 'ads',
    icon: '/assets/services/icon-ads.svg',
    title: 'Tráfego e Performance',
    desc: 'Gestão estratégica de mídia paga para atrair clientes certos, aumentar conversões e impulsionar resultados.',
    link: '/servicos/trafego-e-performance',
  },
  {
    key: 'web',
    icon: '/assets/services/icon-web.svg',
    title: 'Desenvolvimento de Sites',
    desc: 'Criação de sites modernos, responsivos e otimizados para performance e experiência do usuário.',
    link: '/servicos/desenvolvimento-de-sites',
  },
  {
    key: 'crm',
    icon: '/assets/services/icon-crm.svg',
    title: 'CRM e Vendas',
    desc: 'Implantação de sistemas de CRM para organizar processos, automatizar tarefas e potencializar a força de vendas.',
    link: '/servicos/crm-e-vendas',
  },
  {
    key: 'social',
    icon: '/assets/services/icon-social.svg',
    title: 'Redes Sociais',
    desc: 'Gestão inteligente de conteúdo e campanhas para engajar públicos e fortalecer a presença digital da marca.',
    link: '/servicos/redes-sociais',
  },
  {
    key: 'design',
    icon: '/assets/services/icon-design.svg',
    title: 'Design de Marcas',
    desc: 'Construção de identidades visuais únicas que comunicam valores e posicionam empresas no mercado.',
    link: '/servicos/design-de-marcas',
  },
  {
    key: 'packaging',
    icon: '/assets/services/icon-packaging.svg',
    title: 'Design de Embalagens',
    desc: 'Criação de embalagens estratégicas que valorizam produtos e conectam marcas aos consumidores.',
    link: '/servicos/design-de-embalagens',
  },
  {
    key: 'bot',
    icon: '/assets/services/icon-bot.svg',
    title: 'Automação de Atendimento',
    desc: 'Soluções digitais para agilizar respostas, melhorar a experiência do cliente e otimizar o tempo da equipe.',
    link: '/servicos/automacao-de-atendimento',
  },
  {
    key: 'retail',
    icon: '/assets/services/icon-retail.svg',
    title: 'Marketing para Varejo',
    desc: 'Estratégias multicanais focadas em atrair consumidores e gerar vendas no ponto físico e online.',
    link: '/servicos/marketing-para-varejo',
  },
  {
    key: 'inbound',
    icon: '/assets/services/icon-inbound.svg',
    title: 'Inbound — RD Station',
    desc: 'Implementação de funis automatizados que atraem, nutrem e convertem leads em clientes de forma eficiente.',
    link: '/servicos/inbound-rd-station',
  },
]
