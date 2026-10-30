import React, { useState, useRef } from 'react';
import { siteConfig } from '../siteConfig';
import { OFFICIAL_ASSETS } from '../siteAssets';
import { CTAButton } from './CTAButton';
import { ImageModal } from './ImageModal';
import { Check, ShieldCheck, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const previews = siteConfig.contentPreviews;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.querySelector('div')?.clientWidth || 260;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleContainerScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.querySelector('div')?.clientWidth || 260;
    const current = Math.round(container.scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(current, 0), previews.length - 1));
  };

  return (
    <section className="relative bg-[#0B0C0E] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-white/10 overflow-hidden">
      
      {/* Background glow matching brand colors */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_#FFC542_0%,_transparent_70%)]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Brand Kicker (matching Elevify: ELEVIFY PRESENTA) */}
        <div className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-3">
          CÓDIGO FÍSICO PRESENTA
        </div>

        {/* Hero Title (matching Elevify: +140 EJERCICIOS CON LA BIOMECÁNICA QUE NADIE TE EXPLICÓ) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.1] mb-5 [text-wrap:balance]">
          CÓDIGO FUERZA 28
          <span className="block text-[#FFC542] mt-1">
            ENTRENA EN CASA SIN EQUIPO DESDE CERO
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg text-[#CCD6E0] font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          Programa estructurado de 28 días con calistenia y peso corporal. 91 páginas ilustradas para construir fuerza real, mejorar tu postura y crear disciplina sin depender de un gimnasio ni máquinas.
        </p>

        {/* Hero Mockup (matching Elevify: hero-mockup with drop-shadow) */}
        <div className="relative max-w-xs sm:max-w-md mx-auto mb-8 filter drop-shadow-[0_20px_50px_rgba(255,197,66,0.18)]">
          <img
            src={OFFICIAL_ASSETS.ebookCover}
            alt="Código Fuerza 28 — Portada Oficial del Ebook"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.dataset.triedFallback !== 'true') {
                target.dataset.triedFallback = 'true';
                target.src = siteConfig.assets.bookCoverFallback;
              }
            }}
            className="w-full h-auto object-contain rounded-xl select-none"
          />
        </div>

        {/* Hero Badges Row (matching Elevify: hero-badges) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17191D] border border-white/10 text-xs sm:text-sm text-white font-semibold">
            <span className="text-[#FFC542] font-black">✓</span> 91 páginas en PDF
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17191D] border border-white/10 text-xs sm:text-sm text-white font-semibold">
            <span className="text-[#FFC542] font-black">✓</span> 4 semanas estructuradas
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17191D] border border-white/10 text-xs sm:text-sm text-white font-semibold">
            <span className="text-[#FFC542] font-black">✓</span> Calistenia desde cero
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17191D] border border-white/10 text-xs sm:text-sm text-white font-semibold">
            <span className="text-[#FFC542] font-black">✓</span> 4 bonos incluidos
          </div>
        </div>

        {/* Main CTA Button & Trust Links (matching Elevify) */}
        <div className="max-w-md mx-auto flex flex-col items-center gap-3 mb-6">
          <CTAButton size="large" className="w-full text-sm sm:text-base">
            QUIERO EL SISTEMA COMPLETO — US$12
          </CTAButton>
          
          <span className="text-xs text-[#CCD6E0] flex items-center justify-center gap-1.5 text-center">
            <span className="text-[#FFC542]">🔒</span>
            Pago seguro · Descarga instantánea · 7 días de garantía o te devolvemos todo
          </span>
          
          <div className="text-[11px] sm:text-xs text-[#9AB] mt-1 text-center">
            💳 Tarjeta de crédito y débito · PayPal · métodos locales de tu país · 🔒 compra protegida por Hotmart
          </div>
        </div>

        {/* Ebook Interior Preview Carousel (matching Elevify: MIRÁ LO QUE HAY ADENTRO) */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-6">
            MIRÁ LO QUE HAY ADENTRO
          </p>

          <div className="relative">
            {/* Carousel Track */}
            <div
              ref={carouselRef}
              onScroll={handleContainerScroll}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-2 scrollbar-none scroll-smooth"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {previews.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className="snap-center shrink-0 w-[240px] sm:w-[280px] bg-[#17191D] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:border-[#FFC542] transition-all cursor-pointer group flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full p-2 bg-[#0B0C0E] flex items-center justify-center">
                    <div className="absolute top-2.5 left-2.5 bg-black/80 border border-[#FFC542]/40 text-[#FFC542] text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow z-10 font-mono">
                      PÁGINA {item.pageNumber}
                    </div>

                    <img
                      src={item.url}
                      alt={`Página ${item.pageNumber} del libro Código Fuerza 28`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.dataset.triedFallback !== 'true') {
                          target.dataset.triedFallback = 'true';
                          target.src = item.fallbackUrl;
                        }
                      }}
                      className="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2.5 rounded-full bg-[#FFC542] text-black shadow-md">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#17191D] border-t border-white/5 flex items-center justify-between text-xs text-white">
                    <span className="font-bold truncate">Página {item.pageNumber}</span>
                    <span className="text-[#FFC542] text-[11px] font-semibold flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Ampliar
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Página anterior"
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#17191D]/90 hover:bg-[#FFC542] text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Página siguiente"
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#17191D]/90 hover:bg-[#FFC542] text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {previews.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => {
                  if (!carouselRef.current) return;
                  const container = carouselRef.current;
                  const cardWidth = container.querySelector('div')?.clientWidth || 260;
                  container.scrollTo({ left: dotIdx * cardWidth, behavior: 'smooth' });
                  setActiveSlide(dotIdx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIdx === activeSlide ? 'w-6 bg-[#FFC542]' : 'w-2 bg-white/25 hover:bg-white/40'
                }`}
                aria-label={`Ir a página muestra ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox for Preview Pages */}
      <ImageModal
        isOpen={selectedIdx !== null}
        onClose={() => setSelectedIdx(null)}
        images={previews}
        currentIndex={selectedIdx ?? 0}
        onNavigate={(newIdx) => setSelectedIdx(newIdx)}
      />
    </section>
  );
};
