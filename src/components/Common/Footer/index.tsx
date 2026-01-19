import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer: React.FC = () => (
  <footer className="container mx-auto px-6 pt-8 font-sans md:pt-12">
    <div className="flex flex-col items-center gap-8 border-t-2 border-white/40 py-8 text-center md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-4 md:pt-4 md:text-left">
      <div className="lg text-sm text-white md:order-1 md:w-full md:text-center lg:order-0 lg:w-auto">
        Todos os direitos reservados ©
      </div>

      <address className="text-sm text-white not-italic lg:-order-1">
        <strong>SINAIS Publicidade e Propaganda</strong>
        <br />
        Rua Comendador Tórlogo Dauntre, 74 - Sala 1207
        <br />
        Cambuí, Campinas - SP, 13025-270
      </address>

      <div className="flex flex-col items-center gap-2 md:items-end">
        <div className="flex justify-center gap-3 md:gap-2">
          <p>Redes sociais:</p>
          <a
            href="https://www.facebook.com/agenciasinais"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-sinais-blue text-2xl text-white transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/agenciasinais"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-sinais-blue text-2xl text-white transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/agencia-sinais"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sinais-blue text-2xl text-white transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
        <Link
          href="/privacidade"
          className="hover:text-sinais-blue transition-colors"
        >
          Política de Privacidade
        </Link>
      </div>
    </div>
  </footer>
)
