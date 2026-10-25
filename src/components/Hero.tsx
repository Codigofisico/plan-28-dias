import React from 'react';
import { siteConfig } from '../siteConfig';
import { CTAButton } from './CTAButton';
import { Interactive3DBook } from './Interactive3DBook';
import { Hero3DEnergyCanvas } from './Hero3DEnergyCanvas';
import { ScarcityCounter } from './ScarcityCounter';
import { Check, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0B0C0E] pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-white/10 overflow-hidden">
      
      {/* Strategic WebGL Three.js Particle Energy Field */}
      <Hero3DEnergyCanvas />

      {/* Subtle depth gradient overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#17191D] via-[#0B0C0E] to-[#0B0C0E]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct-Response Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            
            {/* Category Kicker (Zero-Pill Discipline: clean unboxed typographic lead) */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FFC542] mb-3">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                TU PLAN DE ENTRENAMIENTO EN CASA
              </span>
              <span aria-hidden="true" className="text-white/30 hidden xs:inline">·</span>
              <span className="text-white/70 font-medium">91 PÁGINAS PDF</span>
            </div>

            {/* Main H1 Headline with 28 DÍAS highlighted in gold */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12] mb-5 [text-wrap:balance]">
              DEJA DE IMPROVISAR TUS RUTINAS. EMPIEZA A ENTRENAR EN CASA CON UN PLAN DE{' '}
              <span className="text-[#FFC542] underline decoration-[#FFC542]/40 decoration-4 underline-offset-4">
                28 DÍAS
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#A7ABB2] font-normal leading-relaxed mb-6 max-w-2xl">
              Con Código Fuerza 28 aprenderás los fundamentos de la calistenia y tendrás una guía progresiva para saber qué entrenar cada semana, desde cero y sin equipamiento especializado.
            </p>

            {/* Three Short Concrete Benefits */}
            <ul className="flex flex-col gap-2.5 mb-8 text-sm sm:text-base font-medium text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFC542]/20 text-[#FFC542]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>Entrena en casa con tu propio peso corporal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFC542]/20 text-[#FFC542]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>Sigue una progresión clara de cuatro semanas estructuradas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFC542]/20 text-[#FFC542]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>Aprende técnica correcta, posturas y hábitos de constancia.</span>
              </li>
            </ul>

            {/* Price Box & Primary CTA with Awwwards-level card depth */}
            <div className="bg-[#17191D]/90 backdrop-blur-md border border-white/15 rounded-xl p-5 sm:p-6 mb-3 max-w-lg shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 mb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-semibold text-[#A7ABB2]">Precio regular:</span>
                    <span className="text-sm font-semibold text-white/40 line-through">
                      ${siteConfig.pricing.regularPrice} USD
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#FFC542] tracking-tight">
                      ${siteConfig.pricing.discountedPrice}
                    </span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">USD</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      50% OFF · AHORRAS $12
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] block uppercase font-bold text-[#A7ABB2]">Formato</span>
                  <span className="text-xs font-semibold text-white flex items-center gap-1 justify-end">
                    <Download className="w-3.5 h-3.5 text-[#FFC542]" /> Descarga digital
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <CTAButton 
                size="large"
                className="w-full text-sm sm:text-base font-bold"
                id="hero-cta-button"
              >
                QUIERO EMPEZAR MI PROGRAMA POR $12
              </CTAButton>

              {/* Scarcity & Social Proof Counter */}
              <ScarcityCounter variant="full" className="mt-4" />
            </div>

            {/* Trust and reassurance text */}
            <div className="flex items-center gap-2 text-xs text-[#A7ABB2] font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#FFC542] shrink-0" />
              <span>Pago único · Ebook digital + 4 bonos · Compra protegida por Hotmart</span>
            </div>

          </motion.div>

          {/* Right Column: Interactive 3D Digital Book Experience */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center mt-6 lg:mt-0"
          >
            <Interactive3DBook />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
