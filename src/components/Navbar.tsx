import React from 'react';
import { siteConfig } from '../siteConfig';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0C0E]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="text-base sm:text-lg font-extrabold tracking-wider text-white uppercase whitespace-nowrap shrink-0 hover:text-[#FFC542] transition-colors"
        >
          {siteConfig.brand}
        </a>

        {/* Zone 2: Navigation Links (single-line, clean typography) */}
        <nav 
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider text-[#A7ABB2]"
        >
          <a href="#metodo" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            El Método
          </a>
          <a href="#beneficios" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Lo que harás
          </a>
          <a href="#programa" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            4 Semanas
          </a>
          <a href="#contenido" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Vista Previa
          </a>
          <a href="#bonos" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Bonos
          </a>
          <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Preguntas
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.pricing.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold text-xs uppercase px-4 py-2 rounded-md bg-[#FFC542] text-[#0B0C0E] hover:bg-[#D89E25] active:scale-95 transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            Empezar por $12
          </a>
        </div>
      </div>
    </header>
  );
};
