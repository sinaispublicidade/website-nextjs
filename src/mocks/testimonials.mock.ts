export type ITestimonial = {
  image: string
  author: string
  role: string
  text: string
}

export const testimonials: ITestimonial[] = [
  {
    image: '/assets/testimonials/testimonial-rafael-panobianco.jpg',
    author: 'Rafael Panobianco',
    role: 'Co-founder Panobianco Academia',
    text: 'A SINAIS teve um papel essencial na construção da nossa identidade como academia. Foi responsável pela concepção da marca e da identidade visual, trazendo agilidade, experiência e uma visão estratégica que fizeram toda a diferença no posicionamento do negócio.',
  },
  {
    image: '/assets/testimonials/testimonial-paula-rodrigues.jpg',
    author: 'Paula Rodrigues',
    role: 'Gerente de Marketing e Customer Service - BAUMINAS',
    text: 'A SINAIS é uma parceira estratégica da BAUMINAS há muitos anos. Atende todo o nosso grupo com soluções completas de comunicação, sempre com visão de marca, consistência e profundidade estratégica. Ter um parceiro como a SINAIS, com este know-how, é essencial para sustentar e evoluir nossas marcas.',
  },
  /* {
    image: '/assets/testimonials/testimonial-julian-bruzon.jpg',
    author: 'Julian Bruzon',
    role: 'CEO - OLIMPO S.A.',
    text: 'Trabalhamos com a SINAIS há mais de oito anos na construção de produtos e negócios de alto impacto. Nesse período, lançamos mais de 500 milhões em VGV e estruturamos operações de sucesso com o apoio direto da agência. É um trabalho sólido, confiável e que recomendo com total segurança.',
  }, */
]
