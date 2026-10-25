import React from 'react';
import { siteConfig } from '../siteConfig';
import { CTAButton } from './CTAButton';
import { ScarcityCounter } from './ScarcityCounter';
import { ShieldCheck, Check } from 'lucide-react';

export const FinalOffer: React.FC = () => {
  return (
    <section className="bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-[#FFC542]/5 blur-3xl pointer-events-none rounded-full"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <p className="text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
          TU MOMENTO DE COMENZAR
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
          NO NECESITAS ESPERAR A TENER UN GIMNASIO. NECESITAS SABER CÓMO EMPEZAR.
        </h2>
        
        <p className="text-base sm:text-lg text-[#A7ABB2] leading-relaxed max-w-2xl mx-auto mb-10">
          Si quieres organizar tus entrenamientos desde casa, Código Fuerza 28 puede darte un punto de partida. Conoce los fundamentos, sigue las cuatro etapas del programa y utiliza los recursos complementarios para trabajar tus hábitos, recuperación, seguimiento y alimentación.
        </p>

        {/* 5-Covers Mini Showcase */}
        <div className="flex items-center justify-center -space-x-3 sm:-space-x-4 mb-8 overflow-hidden px-4">
          <img 
            src={siteConfig.assets.bookCoverFallback} 
            alt="Código Fuerza 28" 
            className="w-20 sm:w-28 aspect-[3/4] object-cover rounded-lg border-2 border-white/20 shadow-2xl z-5 transform -rotate-6"
          />
          <img 
            src={siteConfig.assets.bonus1Fallback} 
            alt="Bono 1" 
            className="w-18 sm:w-24 aspect-[3/4] object-cover rounded-lg border-2 border-white/20 shadow-xl z-4 transform -rotate-3"
          />
          <img 
            src={siteConfig.assets.bonus2Fallback} 
            alt="Bono 2" 
            className="w-18 sm:w-24 aspect-[3/4] object-cover rounded-lg border-2 border-white/20 shadow-xl z-3"
          />
          <img 
            src={siteConfig.assets.bonus3Fallback} 
            alt="Bono 3" 
            className="w-18 sm:w-24 aspect-[3/4] object-cover rounded-lg border-2 border-white/20 shadow-xl z-2 transform rotate-3"
          />
          <img 
            src={siteConfig.assets.bonus4Fallback} 
            alt="Bono 4" 
            className="w-18 sm:w-24 aspect-[3/4] object-cover rounded-lg border-2 border-white/20 shadow-xl z-1 transform rotate-6"
          />
        </div>

        {/* Compact Summary Box */}
        <div className="bg-[#17191D] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-lg mx-auto mb-8 shadow-xl">
          <div className="flex items-baseline justify-center gap-3 mb-4">
            <span className="text-sm font-semibold text-white/40 line-through">
              ${siteConfig.pricing.regularPrice} USD
            </span>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#FFC542]">
              ${siteConfig.pricing.discountedPrice} USD
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
              50% OFF
            </span>
          </div>

          <div className="space-y-1.5 text-xs text-slate-300 text-left mb-6 max-w-sm mx-auto">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#FFC542] shrink-0" />
              <span>Libro digital Código Fuerza 28 (91 páginas PDF)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#FFC542] shrink-0" />
              <span>Bono 1: Método Anti Excusas Diarias</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#FFC542] shrink-0" />
              <span>Bono 2: Recuperación Activa y Eficiente</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#FFC542] shrink-0" />
              <span>Bono 3: Sistema de Progreso Sin Frustración</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#FFC542] shrink-0" />
              <span>Bono 4: Nutrición Simple para Fuerza</span>
            </div>
          </div>

          <CTAButton 
            size="large"
            className="w-full text-base font-bold"
            id="final-offer-cta"
          >
            QUIERO EMPEZAR MI PROGRAMA DE 28 DÍAS
          </CTAButton>

          {/* Scarcity & High-Demand Counter */}
          <ScarcityCounter variant="full" className="mt-4" />

          <p className="text-xs text-[#A7ABB2] mt-3">
            Un solo pago · Acceso digital inmediato mediante Hotmart
          </p>
        </div>

        <div className="inline-flex items-center gap-2 text-xs text-[#A7ABB2]">
          <ShieldCheck className="w-4 h-4 text-[#FFC542]" />
          <span>Garantía de 7 días respaldada por Hotmart</span>
        </div>

      </div>
    </section>
  );
};
