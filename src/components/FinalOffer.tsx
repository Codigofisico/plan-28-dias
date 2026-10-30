import React from 'react';
import { siteConfig } from '../siteConfig';
import { CTAButton } from './CTAButton';
import { ScarcityCounter } from './ScarcityCounter';
import { ShieldCheck, Check, Zap } from 'lucide-react';

export const FinalOffer: React.FC = () => {
  return (
    <section className="bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
      {/* Subtle gold aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[#FFC542]/10 blur-3xl pointer-events-none rounded-full"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center z-10">
        
        {/* Section Header matching Elevify */}
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC542] mb-3">
          EL MOMENTO ES AHORA
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 leading-tight [text-wrap:balance]">
          La próxima vez que vayas a entrenar en casa...
        </h2>
        <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
        
        <p className="text-base sm:text-lg text-[#A7ABB2] leading-relaxed max-w-2xl mx-auto mb-10">
          ...vas a saber exactamente qué hacer, cómo ejecutar cada ejercicio con técnica perfecta y cómo progresar sin lastimarte. O puedes seguir improvisando rutinas sueltas esperando que esta vez funcione.
        </p>

        {/* Closing Offer Card */}
        <div className="bg-[#17191D] border-2 border-[#FFC542]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top highlight badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC542]/10 border border-[#FFC542]/30 text-[#FFC542] text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5 fill-[#FFC542]" />
            <span>ACCESO VITALICIO INMEDIATO</span>
          </div>

          {/* Pack Completo Mockup Showcase */}
          <div className="flex items-center justify-center mb-6 px-4">
            <img 
              src={siteConfig.assets.bundleImage} 
              alt="Pack Completo Código Fuerza 28 con los 4 Bonos" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.dataset.triedFallback !== 'true') {
                  target.dataset.triedFallback = 'true';
                  target.src = siteConfig.assets.bundleImageFallback;
                }
              }}
              className="w-full max-w-sm sm:max-w-md h-auto max-h-72 object-contain filter drop-shadow-[0_15px_30px_rgba(255,197,66,0.25)] select-none transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Pricing tag */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-base sm:text-lg font-semibold text-white/40 line-through">
              US$ {siteConfig.pricing.regularPrice}
            </span>
            <span className="text-4xl sm:text-5xl font-extrabold text-[#FFC542]">
              US$ {siteConfig.pricing.discountedPrice}
            </span>
            <span className="text-xs font-extrabold text-black bg-[#FFC542] px-2.5 py-1 rounded-full uppercase tracking-wider">
              {siteConfig.pricing.discountPercent}% OFF · AHORRA US$41
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#A7ABB2] mb-6">
            Libro digital de 91 páginas + 4 Bonos de regalo · Un solo pago
          </p>

          {/* Itemized check bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 text-left mb-8 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFC542] shrink-0" />
              <span>Libro Código Fuerza 28 (PDF)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFC542] shrink-0" />
              <span>Bono 1: Anti Excusas Diarias</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFC542] shrink-0" />
              <span>Bono 2: Recuperación Activa</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFC542] shrink-0" />
              <span>Bono 3: Progreso Sin Frustración</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2 justify-center">
              <Check className="w-4 h-4 text-[#FFC542] shrink-0" />
              <span>Bono 4: Nutrición Simple para Fuerza</span>
            </div>
          </div>

          {/* Main CTA */}
          <CTAButton 
            size="large"
            className="w-full text-base sm:text-lg font-extrabold shadow-xl"
            id="final-offer-cta"
          >
            QUIERO EMPEZAR HOY — US$ 12
          </CTAButton>

          {/* Scarcity counter */}
          <ScarcityCounter variant="full" className="mt-4" />

          {/* Guarantee info */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#A7ABB2] mt-6 pt-6 border-t border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#FFC542] shrink-0" />
            <span>7 días de garantía incondicional. Si no cumple tus expectativas, te devolvemos el 100%.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
