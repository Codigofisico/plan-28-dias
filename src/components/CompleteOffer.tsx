import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { CTAButton } from './CTAButton';
import { ScarcityCounter } from './ScarcityCounter';
import { Check, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export const CompleteOffer: React.FC = () => {
  const [bundleImgError, setBundleImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const offerItems = [
    { name: "Código Fuerza 28 — Programa de 28 días (Ebook en PDF de 91 págs)", isMain: true },
    { name: "Bono 1: Método Anti Excusas Diarias (Guía Digital)", isMain: false },
    { name: "Bono 2: Recuperación Activa y Eficiente (Guía Digital)", isMain: false },
    { name: "Bono 3: Sistema de Progreso Sin Frustración (Guía y Plantilla)", isMain: false },
    { name: "Bono 4: Nutrición Simple para Fuerza (Guía Práctica)", isMain: false }
  ];

  return (
    <section id="oferta" className="relative bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#FFC542]/5 blur-3xl pointer-events-none rounded-full"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Step 1: Section Header with smooth entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFC542]/10 border border-[#FFC542]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FFC542] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PAQUETE DIGITAL COMPLETO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            TODO LO QUE NECESITAS PARA COMENZAR, EN UN SOLO PAQUETE DIGITAL.
          </h2>
          <p className="text-base sm:text-lg text-[#A7ABB2]">
            Una guía para organizar tus entrenamientos y cuatro complementos para trabajar hábitos, recuperación, progreso y alimentación.
          </p>
        </motion.div>

        {/* Commercial Box Container */}
        <div className="bg-[#17191D] border-2 border-[#FFC542]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Promotional Ribbon */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFC542] text-[#0B0C0E] text-xs font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
            OFERTA ESPECIAL 50% DESCUENTO
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8">
            
            {/* Step 2 & 3: Visual Display with Opacity and Progressive Zoom (scale 0.94 -> 1) */}
            <motion.div 
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div className="relative w-full max-w-sm rounded-xl overflow-hidden bg-[#0B0C0E] border border-white/10 p-3 shadow-lg">
                <img
                  src={bundleImgError ? siteConfig.assets.bundleImageFallback : siteConfig.assets.bundleImage}
                  alt="Paquete completo Código Fuerza 28 más cuatro bonos"
                  loading="lazy"
                  onError={() => setBundleImgError(true)}
                  className="w-full h-auto object-contain rounded"
                />
              </div>

              {/* 5 items preview mini-strip */}
              <div className="grid grid-cols-5 gap-1.5 mt-3 w-full max-w-sm">
                <img 
                  src={siteConfig.assets.bookCoverFallback} 
                  alt="Libro principal" 
                  className="w-full aspect-[3/4] object-cover rounded border border-white/20"
                />
                <img 
                  src={siteConfig.assets.bonus1Fallback} 
                  alt="Bono 1" 
                  className="w-full aspect-[3/4] object-cover rounded border border-white/20"
                />
                <img 
                  src={siteConfig.assets.bonus2Fallback} 
                  alt="Bono 2" 
                  className="w-full aspect-[3/4] object-cover rounded border border-white/20"
                />
                <img 
                  src={siteConfig.assets.bonus3Fallback} 
                  alt="Bono 3" 
                  className="w-full aspect-[3/4] object-cover rounded border border-white/20"
                />
                <img 
                  src={siteConfig.assets.bonus4Fallback} 
                  alt="Bono 4" 
                  className="w-full aspect-[3/4] object-cover rounded border border-white/20"
                />
              </div>
            </motion.div>

            {/* Checklist & Price Sequence */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-white mb-4">
                ¿Qué incluye exactamente tu compra hoy?
              </h3>

              <ul className="space-y-3 mb-6">
                {offerItems.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05) }}
                    className={`flex items-start gap-3 p-3 rounded-lg border text-xs sm:text-sm ${
                      item.isMain 
                        ? 'bg-[#0B0C0E] border-[#FFC542]/50 text-white font-semibold' 
                        : 'bg-[#0B0C0E]/50 border-white/10 text-slate-200'
                    }`}
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFC542] text-[#0B0C0E]">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span>{item.name}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Step 4 & 5: Pricing Breakdown Sequence */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-[#0B0C0E] border border-white/10 rounded-xl p-4 sm:p-5 mb-6"
              >
                {/* Step 4: Crossed regular price $24 USD */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#A7ABB2] pb-2 border-b border-white/10">
                  <span>Precio regular comercial:</span>
                  <span className="line-through text-white/50 font-semibold tracking-wider">${siteConfig.pricing.regularPrice} USD</span>
                </div>

                {/* Step 5: 50% discount and $12 USD promo price */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-emerald-400 py-2 border-b border-white/10 font-semibold">
                  <span>Descuento aplicado (Cupón CODIGO):</span>
                  <span>-50% (Ahorras $12 USD)</span>
                </div>
                
                <div className="flex items-baseline justify-between pt-3">
                  <span className="text-sm uppercase font-bold text-white">Precio promocional hoy:</span>
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="flex items-baseline gap-1.5"
                  >
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#FFC542] tracking-tight">
                      ${siteConfig.pricing.discountedPrice}
                    </span>
                    <span className="text-sm font-bold text-white uppercase">USD</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Step 6: Main Checkout CTA Button & Scarcity */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <CTAButton 
                  size="large"
                  className="w-full text-base sm:text-lg font-bold"
                  id="complete-offer-cta"
                >
                  ¡SÍ! QUIERO MI EBOOK + LOS 4 BONOS POR $12
                </CTAButton>

                {/* Scarcity Counter */}
                <ScarcityCounter variant="full" className="mt-4" />
              </motion.div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#A7ABB2] mt-3">
                <ShieldCheck className="w-4 h-4 text-[#FFC542]" />
                <span>Pago único · Producto digital en PDF · Compra mediante Hotmart</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
