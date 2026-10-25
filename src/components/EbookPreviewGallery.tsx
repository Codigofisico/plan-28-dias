import React, { useState, useRef } from 'react';
import { siteConfig } from '../siteConfig';
import { ImageModal } from './ImageModal';
import { CTAButton } from './CTAButton';
import { ScarcityCounter } from './ScarcityCounter';
import { ZoomIn, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export const EbookPreviewGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [mobileActiveIdx, setMobileActiveIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const previews = siteConfig.contentPreviews;

  // Scroll-linked cinematic zoom & depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for alternate columns (Awwwards-grade depth)
  const columnOddY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-32, 32]);
  const columnEvenY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [32, -32]);
  
  // Controlled progressive zoom (scale scrub)
  const mosaicScale = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    shouldReduceMotion ? [1, 1, 1] : [0.94, 1.02, 0.98]
  );
  const mosaicOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0.6, 1]
  );

  const handleOpenModal = (index: number) => {
    setSelectedIdx(index);
  };

  const handleScrollMobile = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.clientWidth * 0.85;
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleContainerScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.clientWidth * 0.85;
    const current = Math.round(container.scrollLeft / itemWidth);
    setMobileActiveIdx(Math.min(Math.max(current, 0), previews.length - 1));
  };

  return (
    <section 
      ref={sectionRef}
      id="contenido" 
      className="relative bg-[#17191D] text-white py-16 sm:py-28 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>MIRA EL INTERIOR DEL EBOOK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            NO TIENES QUE IMAGINAR QUÉ HAY DENTRO. MIRA UNA PARTE DEL CONTENIDO.
          </h2>
          <p className="text-base text-[#A7ABB2]">
            Explora una muestra visual del material que encontrarás en Código Fuerza 28 y conoce cómo está presentado.
          </p>
        </motion.div>

        {/* Desktop & Tablet Cinematic Mosaic Grid (4 columns x 2 rows with scroll-driven zoom & staggered parallax) */}
        <div className="hidden md:block mb-16">
          <motion.div 
            style={{ 
              scale: mosaicScale, 
              opacity: mosaicOpacity,
              transformOrigin: "center center"
            }}
            className="grid grid-cols-4 gap-5 lg:gap-6"
          >
            {[0, 1, 2, 3].map((colIdx) => {
              const isOdd = colIdx % 2 === 0;
              const colItems = [previews[colIdx], previews[colIdx + 4]].filter(Boolean);

              return (
                <motion.div 
                  key={colIdx} 
                  style={{ y: isOdd ? columnOddY : columnEvenY }}
                  className="flex flex-col gap-5 lg:gap-6"
                >
                  {colItems.map((item, itemIdx) => {
                    const globalIdx = colIdx + (itemIdx * 4);
                    return (
                      <motion.div
                        key={item.id}
                        data-testid={`preview-card-${globalIdx}`}
                        onClick={() => handleOpenModal(globalIdx)}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ 
                          duration: 0.6, 
                          delay: (colIdx * 0.1) + (itemIdx * 0.15),
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        whileHover={{ 
                          scale: 1.035, 
                          y: -4,
                          transition: { duration: 0.25, ease: "easeOut" } 
                        }}
                        className="group relative bg-[#0B0C0E] border border-white/10 rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#FFC542] hover:shadow-[0_20px_45px_rgba(255,197,66,0.2)] transition-colors flex flex-col will-change-transform"
                      >
                        {/* Image Canvas with 3/4 ratio */}
                        <div className="relative aspect-[3/4] w-full bg-[#0B0C0E] overflow-hidden flex items-center justify-center p-2.5">
                          <img
                            src={item.url}
                            alt={item.title}
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = item.fallbackUrl;
                            }}
                            className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                          />

                          {/* Cinematic Hover Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-[2px]">
                            <div className="p-3 rounded-full bg-[#FFC542] text-[#0B0C0E] mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                              <ZoomIn className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                              Pulsar para ampliar
                            </span>
                          </div>
                        </div>

                        {/* Card Caption */}
                        <div className="p-4 bg-[#0B0C0E] border-t border-white/10 flex items-center justify-between">
                          <div className="min-w-0 pr-2">
                            <p className="text-xs font-bold text-white group-hover:text-[#FFC542] transition-colors truncate">
                              {item.title}
                            </p>
                            <p className="text-[11px] text-[#A7ABB2]">
                              {item.subtitle}
                            </p>
                          </div>
                          <ZoomIn className="w-4 h-4 text-[#A7ABB2] group-hover:text-[#FFC542] shrink-0" />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Touch-Optimized Carousel */}
        <div className="md:hidden mb-10">
          <div 
            ref={scrollContainerRef}
            onScroll={handleContainerScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {previews.map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => handleOpenModal(idx)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="snap-center shrink-0 w-[82vw] max-w-xs bg-[#0B0C0E] border border-white/15 rounded-2xl overflow-hidden shadow-xl flex flex-col active:scale-[0.99] transition-transform"
              >
                <div className="relative aspect-[3/4] w-full p-2.5 bg-[#0B0C0E] flex items-center justify-center">
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = item.fallbackUrl;
                    }}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-xs text-[#FFC542] text-[10px] font-bold px-2 py-0.5 rounded border border-white/15 flex items-center gap-1 shadow-sm">
                    <ZoomIn className="w-3 h-3" /> Ampliar
                  </div>
                </div>

                <div className="p-3.5 bg-[#0B0C0E] border-t border-white/10">
                  <p className="text-xs font-bold text-white">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-[#A7ABB2]">
                    {item.subtitle} · Toca para ver en grande
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Position Indicator & Arrow Controls */}
          <div className="flex items-center justify-between px-2 mt-2">
            <button
              type="button"
              onClick={() => handleScrollMobile('left')}
              aria-label="Ver imagen anterior"
              className="p-2.5 rounded-lg bg-[#0B0C0E] border border-white/10 text-white hover:text-[#FFC542] active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {previews.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === mobileActiveIdx
                      ? 'w-6 bg-[#FFC542]'
                      : 'w-1.5 bg-white/20'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleScrollMobile('right')}
              aria-label="Ver imagen siguiente"
              className="p-2.5 rounded-lg bg-[#0B0C0E] border border-white/10 text-white hover:text-[#FFC542] active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Closing phrase and Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-xl mx-auto pt-4"
        >
          <p className="text-sm sm:text-base text-slate-300 mb-6 italic">
            Así podrás conocer el estilo del material antes de decidir si es para ti.
          </p>
          <div className="flex flex-col items-center gap-4">
            <CTAButton size="default">
              QUIERO ACCEDER AL EBOOK COMPLETO
            </CTAButton>
            <ScarcityCounter variant="compact" className="w-full" />
          </div>
        </motion.div>

      </div>

      {/* Accessible Modal Lightbox */}
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
