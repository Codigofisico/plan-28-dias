import React from 'react';
import { siteConfig } from '../siteConfig';
import { OFFICIAL_ASSETS } from '../siteAssets';
import { CTAButton } from './CTAButton';
import { ScarcityCounter } from './ScarcityCounter';

export const CompleteOffer: React.FC = () => {
  return (
    <section id="precio" className="relative bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching user request & Elevify) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-3 font-['Montserrat',sans-serif]">
            EL PRECIO DE HOY
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            TODO EL SISTEMA A <span className="text-[#FFC542]">PRECIO DE LANZAMIENTO</span>
          </h2>

          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
        </div>

        {/* Big Pack Mockup Image donde se reúne toda la oferta */}
        <div className="max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-14 filter drop-shadow-[0_20px_50px_rgba(255,197,66,0.25)] px-4 flex justify-center">
          <img
            src={siteConfig.assets.bundleImage}
            alt="Pack Completo Código Fuerza 28 más cuatro bonos incluidos"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.dataset.triedFallback !== 'true') {
                target.dataset.triedFallback = 'true';
                target.src = siteConfig.assets.bundleImageFallback;
              }
            }}
            className="w-full max-h-[520px] object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Pricing Box (matching Elevify: pricing-box) */}
        <div className="max-w-xl mx-auto bg-[#17191D] border-2 border-[#FFC542] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,197,66,0.15)]">
          
          {/* Box Header */}
          <div className="bg-gradient-to-r from-[#2E5372] to-[#4A7FA5] p-5 text-center">
            <h3 className="font-['Montserrat',sans-serif] font-extrabold text-lg sm:text-xl text-white uppercase tracking-[2px]">
              TODO ESTO ES TUYO HOY
            </h3>
          </div>

          {/* Box Body */}
          <div className="p-6 sm:p-9 text-center">
            
            {/* Itemized list */}
            <div className="text-left divide-y divide-white/10 mb-6">
              
              <div className="flex justify-between items-center py-3">
                <span className="text-xs sm:text-sm text-white flex items-center gap-2 font-medium">
                  <span className="text-[#FFC542] font-black">✓</span>
                  Código Fuerza 28 (91 págs PDF)
                  <span className="bg-[#FFC542] text-[#0B0C0E] text-[9px] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                    EBOOK
                  </span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-white/50 line-through">
                  US$12
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-xs sm:text-sm text-white flex items-center gap-2 font-medium">
                  <span className="text-[#FFC542] font-black">✓</span>
                  Bono 1: Método Anti Excusas Diarias
                  <span className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                    BONO
                  </span>
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-400">
                  GRATIS
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-xs sm:text-sm text-white flex items-center gap-2 font-medium">
                  <span className="text-[#FFC542] font-black">✓</span>
                  Bono 2: Recuperación Activa y Eficiente
                  <span className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                    BONO
                  </span>
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-400">
                  GRATIS
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-xs sm:text-sm text-white flex items-center gap-2 font-medium">
                  <span className="text-[#FFC542] font-black">✓</span>
                  Bono 3: Sistema de Progreso Sin Frustración
                  <span className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                    BONO
                  </span>
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-400">
                  GRATIS
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-xs sm:text-sm text-white flex items-center gap-2 font-medium">
                  <span className="text-[#FFC542] font-black">✓</span>
                  Bono 4: Nutrición Simple para Fuerza
                  <span className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                    BONO
                  </span>
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-400">
                  GRATIS
                </span>
              </div>

            </div>

            {/* Total value & savings row */}
            <div className="flex justify-between items-center pt-3 border-t border-white/10 text-sm">
              <span className="font-bold text-white uppercase tracking-wider">VALOR TOTAL</span>
              <span className="text-base font-bold text-white/40 line-through">US$24</span>
            </div>

            <div className="flex justify-between items-center py-2 text-sm">
              <span className="text-emerald-400 font-semibold">Tu ahorro hoy</span>
              <span className="text-emerald-400 font-extrabold">-US$12 (50% OFF)</span>
            </div>

            {/* Pricing Now */}
            <div className="my-5">
              <div className="text-xs uppercase tracking-wider text-[#CCD6E0] font-semibold mb-1">
                HOY PAGAS SOLO
              </div>
              <div className="text-5xl sm:text-6xl font-extrabold text-[#FFC542] tracking-tight font-['Montserrat',sans-serif]">
                <span className="text-2xl sm:text-3xl align-top mr-1">US$</span>
                12
              </div>
            </div>

            {/* Big CTA Button */}
            <div className="mb-6">
              <CTAButton size="large" className="w-full text-base sm:text-lg">
                QUIERO MI PACK COMPLETO — US$12
              </CTAButton>
              <ScarcityCounter variant="full" className="mt-4" />
            </div>

            {/* Guarantee Box */}
            <div className="flex items-start gap-3 p-4 bg-[#0B0C0E] border border-white/10 rounded-xl text-left text-xs text-[#CCD6E0] mb-5">
              <span className="text-2xl shrink-0">🛡️</span>
              <div>
                <strong className="block text-white mb-1">Garantía total de 7 días — Cero riesgo</strong>
                Compra, descarga y revisa el material esta misma semana. Si consideras que no es para ti, solicita el reembolso directamente a través de Hotmart y te devolveremos el 100%. Sin preguntas.
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-[#9AB] pt-4 border-t border-white/10">
              <span className="flex items-center gap-1">🔒 Pago 100% seguro</span>
              <span className="flex items-center gap-1">⚡ Acceso instantáneo</span>
              <span className="flex items-center gap-1">📄 PDF premium</span>
              <span className="flex items-center gap-1">♾️ Tuyo para siempre</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
