import React from 'react';
import { siteConfig } from '../siteConfig';
import { OFFICIAL_ASSETS } from '../siteAssets';
import { CTAButton } from './CTAButton';
import { ScarcityCounter } from './ScarcityCounter';

export const BonusCards: React.FC = () => {
  const bonusList = [
    {
      num: 1,
      title: "Método Anti Excusas Diarias",
      cover: OFFICIAL_ASSETS.bonuses[0].url,
      fallback: siteConfig.assets.bonus1Fallback,
      benefit: "Aprende estrategias para reducir las excusas y facilitar el inicio de tus entrenamientos, incluso cuando tienes poco tiempo o motivación.",
      oldPrice: "US$9"
    },
    {
      num: 2,
      title: "Recuperación Activa y Eficiente",
      cover: OFFICIAL_ASSETS.bonuses[1].url,
      fallback: siteConfig.assets.bonus2Fallback,
      benefit: "Conoce cómo incorporar movilidad, descanso y recuperación para acompañar tus sesiones de entrenamiento.",
      oldPrice: "US$9"
    },
    {
      num: 3,
      title: "Sistema de Progreso Sin Frustración",
      cover: OFFICIAL_ASSETS.bonuses[2].url,
      fallback: siteConfig.assets.bonus3Fallback,
      benefit: "Aprende a observar y registrar tus avances mediante indicadores como fuerza, resistencia y constancia, sin depender únicamente del espejo.",
      oldPrice: "US$9"
    },
    {
      num: 4,
      title: "Nutrición Simple para Fuerza",
      cover: OFFICIAL_ASSETS.bonuses[3].url,
      fallback: siteConfig.assets.bonus4Fallback,
      benefit: "Conoce principios básicos de alimentación para organizar mejor tus comidas y complementar tus entrenamientos.",
      oldPrice: "US$9"
    }
  ];

  return (
    <section id="bonos" className="relative bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching Elevify: PERO ESO NO ES TODO) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-3 font-['Montserrat',sans-serif]">
            PERO ESO NO ES TODO
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            Sumamos <span className="text-[#FFC542]">4 bonos gratis</span> para que no te falte nada
          </h2>

          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
          
          <p className="text-base sm:text-lg text-[#CCD6E0] max-w-2xl mx-auto leading-relaxed">
            Cada bono cubre una parte distinta del camino. Hoy son tuyos sin costo adicional al ordenar Código Fuerza 28.
          </p>
        </div>

        {/* Bonus Cards Stack (matching Elevify: bonus-card layout) */}
        <div className="space-y-6 mb-12">
          {bonusList.map((bonus) => (
            <div
              key={bonus.num}
              className="bg-[#17191D] border border-white/10 hover:border-[#FFC542]/50 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 sm:gap-8 items-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1"
            >
              {/* Left Cover Mockup */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[170px] sm:max-w-[200px] bg-[#0B0C0E] p-2 rounded-xl border border-white/10 shadow-lg">
                  <img
                    src={bonus.cover}
                    alt={`Portada Bono ${bonus.num}: ${bonus.title}`}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.dataset.triedFallback !== 'true') {
                        target.dataset.triedFallback = 'true';
                        target.src = bonus.fallback;
                      }
                    }}
                    className="w-full h-auto aspect-[3/4] object-contain rounded"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col text-center md:text-left">
                <div className="inline-block self-center md:self-start bg-[#FFC542]/10 border border-[#FFC542]/30 text-[#FFC542] font-bold text-xs uppercase tracking-wider px-3 py-1 rounded mb-3">
                  BONO {bonus.num} — INCLUIDO EN TU COMPRA
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {bonus.title}
                </h3>

                <p className="text-sm sm:text-base text-[#CCD6E0] leading-relaxed mb-4">
                  {bonus.benefit}
                </p>

                <div className="flex items-center justify-center md:justify-start gap-3 pt-2 border-t border-white/10">
                  <span className="text-sm text-white/40 line-through font-semibold">
                    {bonus.oldPrice}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded uppercase tracking-wider">
                    GRATIS HOY
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA After Bonuses */}
        <div className="text-center max-w-md mx-auto">
          <CTAButton size="large" className="w-full">
            QUIERO MI EBOOK + LOS 4 BONOS
          </CTAButton>
          
          {/* Gatillo de escasez (como en el último botón) */}
          <ScarcityCounter variant="full" className="mt-4" />

          <p className="text-xs text-[#CCD6E0] mt-3">
            Los 4 bonos se añaden automáticamente a tu cuenta sin coste extra.
          </p>
        </div>

      </div>
    </section>
  );
};
