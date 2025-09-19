export interface IBannerServiceItem {
  img: string
  title: string
  desc: string
}

export const bannerServiceMock: Record<string, IBannerServiceItem> = {
  ads: {
    img: '/assets/banners/banner-hero--services--Mobile-Marketing.png',
    title: 'Resultados reais com campanhas de tráfego de performance',
    desc: 'Alcance os clientes certos com campanhas inteligentes de tráfego e performance no Meta Ads, Google e TikTok. Confie em quem já gerou mais de R$ 200 milhões em negócios.',
  },
  web: {
    img: '/assets/banners/banner-hero--services--Landing-Page-Optimization.png',
    title: 'Sites responsivos que impactam e geram mais resultado',
    desc: 'Tenha um site totalmente responsivo, com ferramentas de SEO e análise de dados, desenvolvido sob medida para a realidade do seu produto ou serviço, unindo tecnologia e eficiência.',
  },
  crm: {
    img: '/assets/banners/banner-hero--services--Affiliate-Marketing.png',
    title: 'Organize seus processos e potencialize sua força de vendas',
    desc: 'Implantamos sistemas de CRM inteligentes que ajudam sua empresa a centralizar informações, automatizar processos e acompanhar oportunidades de vendas com muito mais eficiência.',
  },
  social: {
    img: '/assets/banners/banner-hero--services--Social-Media-Marketing.png',
    title: 'Conquiste presença digital com conteúdo que gera conexão',
    desc: 'Gerenciamos suas redes sociais com estratégias criativas, campanhas de alto impacto e conteúdos que despertam engajamento e fortalecem sua marca.',
  },
  design: {
    img: '/assets/banners/banner-hero--services--Brand-Awareness.png',
    title: 'Crie uma identidade visual que fala pelo seu negócio',
    desc: 'Desenvolvemos marcas fortes e memoráveis, que comunicam valores, criam conexão emocional e posicionam sua empresa no mercado.',
  },
  packaging: {
    img: '/assets/banners/banner-hero--services--Lead-Generation.png',
    title: 'Embalagens que valorizam produtos e atraem consumidores',
    desc: 'Desenvolvemos embalagens criativas e estratégicas que aumentam a percepção de valor e transformam a experiência de compra.',
  },
  bot: {
    img: '/assets/banners/banner-hero--services--Chatbot.png',
    title: 'Agilidade e eficiência no relacionamento com clientes',
    desc: 'Implantamos soluções de automação que aceleram respostas, otimizam processos e elevam a experiência do consumidor.',
  },
  retail: {
    img: '/assets/banners/banner-hero--services--Analytics-and-Data.png',
    title: 'Atraia consumidores e aumente vendas no físico e no digital',
    desc: 'Criamos estratégias multicanais que conectam sua loja aos clientes certos, impulsionando tráfego e gerando resultados.',
  },
  inbound: {
    img: '/assets/banners/banner-hero--services--Email-Marketing.png',
    title: 'Automatize sua captação de leads e aumente conversões',
    desc: 'Implementamos funis de inbound marketing no RD Station, criando jornadas automatizadas que atraem, nutrem e convertem leads em clientes.',
  },
}
