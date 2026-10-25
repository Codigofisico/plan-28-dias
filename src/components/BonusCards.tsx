import React from 'react';
import { siteConfig } from '../siteConfig';
import { CTAButton } from './CTAButton';
import { SpotlightCard } from './SpotlightCard';
import { Check, Gift } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export const BonusCards: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Container variant to coordinate sequential entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1, // 100ms staggered delay per requirement
        delayChildren: 0.1,
      },
    },
  };

  // Card variant combining: opacity 0 -> 1, y: 30 -> 0, scale: 0.96 -> 1
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30, 
      scale: shouldReduceMotion ? 1 : 0.96 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="bonos" className="bg-[#17191D] text-white pt-4 pb-16 sm:pb-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Bonus Cards Grid with precise sequential staggering (Bono 1 -> 2 -> 3 -> 4) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14"
        >
          {siteConfig.bonuses.map((bonus) => (
            <motion.div
              key={bonus.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { 
                scale: 1.025, 
                y: -4,
                transition: { duration: 0.25, ease: "easeOut" } 
              }}
              className="h-full will-change-transform"
            >
              <SpotlightCard
                spotlightColor="rgba(255, 197, 66, 0.14)"
                borderColor="rgba(255, 197, 66, 0.45)"
                className="bg-[#0B0C0E] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(255,197,66,0.18)] transition-all"
              >
                <div>
                  {/* Header row: Bono number & Free badge */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center px-2.5 py-1 bg-[#FFC542] text-[#0B0C0E] font-black text-xs rounded font-mono">
                        BONO 0{bonus.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A7ABB2]">
                        RECURSO DIGITAL
                      </span>
                    </div>

                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      INCLUIDO $0
                    </span>
                  </div>

                  {/* Cover & Benefit Headline Split with 3D tilt hover */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-5">
                    <div className="sm:col-span-5 flex justify-center">
                      <div className="group/cover relative w-full max-w-[180px] bg-[#17191D] p-2.5 rounded-xl border border-white/10 shadow-xl transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={bonus.coverImage}
                          alt={`Portada de ${bonus.title}`}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.dataset.triedFallback !== 'true') {
                              target.dataset.triedFallback = 'true';
                              target.src = bonus.fallbackImage;
                            }
                          }}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-7">
                      <h3 className="text-xs sm:text-sm font-extrabold uppercase text-[#FFC542] tracking-wider mb-1">
                        {bonus.title}
                      </h3>
                      <p className="text-base sm:text-lg font-bold text-white leading-snug">
                        "{bonus.benefitHeadline}"
                      </p>
                    </div>
                  </div>

                  {/* Educational Copy */}
                  <p className="text-xs sm:text-sm text-[#A7ABB2] leading-relaxed mb-5">
                    {bonus.copy}
                  </p>

                  {/* Lo que podrá hacer */}
                  <div className="mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white block mb-2">
                      Lo que podrás hacer con este bono:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {bonus.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FFC542] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Cambio práctico */}
                <div className="pt-4 border-t border-white/10 mt-auto bg-[#17191D]/60 -mx-6 -mb-6 p-5 sm:p-6 rounded-b-2xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Cambio práctico en tu rutina:
                  </span>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{bonus.practicalChange}"
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA After Bonuses */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          <CTAButton size="large">
            QUIERO EL LIBRO + LOS 4 BONOS POR $12
          </CTAButton>
          <p className="text-xs text-[#A7ABB2] mt-3">
            Todos los 4 bonos se incluyen automáticamente con tu compra hoy.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
