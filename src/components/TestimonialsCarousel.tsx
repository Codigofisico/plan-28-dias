import React, { useState, useRef, useEffect, useCallback } from 'react';
import { OFFICIAL_ASSETS, TestimonialItem } from '../siteAssets';
import { ChevronLeft, ChevronRight, ZoomIn, X, MessageSquareQuote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsCarousel: React.FC = () => {
  const testimonials = OFFICIAL_ASSETS.testimonials;
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.querySelector('div')?.clientWidth || 320;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const updateScrollProgress = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    setScrollProgress(scrollLeft / maxScroll);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const openModal = (index: number) => {
    setModalIndex(index);
  };

  const closeModal = useCallback(() => {
    setModalIndex(null);
  }, []);

  const handleModalPrev = useCallback(() => {
    setModalIndex((prev) => (prev !== null ? (prev - 1 + testimonials.length) % testimonials.length : null));
  }, [testimonials.length]);

  const handleModalNext = useCallback(() => {
    setModalIndex((prev) => (prev !== null ? (prev + 1) % testimonials.length : null));
  }, [testimonials.length]);

  // Keyboard navigation for testimonial modal
  useEffect(() => {
    if (modalIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') handleModalPrev();
      else if (e.key === 'ArrowRight') handleModalNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [modalIndex, closeModal, handleModalPrev, handleModalNext]);

  return (
    <section 
      id="testimonios"
      className="relative bg-[#F5F6F7] text-[#0B0C0E] py-16 sm:py-24 border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching Elevify: elvc-label + elvc-title) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#2E5372] mb-2 font-['Montserrat',sans-serif]">
            NO NOS CREAS A NOSOTROS
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#0B0C0E] mb-3 [text-wrap:balance]">
            Mirá lo que dicen los que <span className="text-[#D89E25]">ya lo tienen</span>
          </h2>

          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-3 rounded-full" />
          
          <p className="text-sm sm:text-base text-[#555A64] max-w-2xl mx-auto">
            Opiniones y experiencias reales compartidas por alumnos que ya entrenan con Código Fuerza 28.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Scrollable Track */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-2 scrollbar-none scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {testimonials.map((item: TestimonialItem, idx: number) => (
              <div
                key={item.id}
                onClick={() => openModal(idx)}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[340px] bg-white rounded-2xl border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] hover:border-[#FFC542] transition-all duration-300 cursor-pointer flex flex-col overflow-hidden group select-none"
              >
                {/* Header card indicator */}
                <div className="px-4 py-2.5 bg-[#0B0C0E] text-white flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FFC542] tracking-wider uppercase font-mono">
                    TESTIMONIO #{item.id}
                  </span>
                  <span className="text-[11px] text-[#A7ABB2] flex items-center gap-1 group-hover:text-white transition-colors">
                    <ZoomIn className="w-3 h-3 text-[#FFC542]" /> Ampliar
                  </span>
                </div>

                {/* Screenshot Container - Full fidelity, no cropped text */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full bg-[#FAFAFA] flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Visual fallback if blocked
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = '0.9';
                    }}
                  />
                  
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#0B0C0E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-[#FFC542] text-[#0B0C0E] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card footer note */}
                <div className="p-3 bg-white border-t border-black/5 text-center">
                  <span className="text-[11px] font-semibold text-[#6E737D]">
                    Captura compartida por alumno · Clic para ver completa
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls Row */}
          <div className="flex items-center justify-between mt-6 px-2">
            
            {/* Desktop & Mobile Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                aria-label="Ver testimonio anterior"
                className="p-3 rounded-full bg-white border border-black/15 text-[#0B0C0E] hover:bg-[#0B0C0E] hover:text-[#FFC542] hover:border-[#0B0C0E] shadow-sm transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC542]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('right')}
                aria-label="Ver testimonio siguiente"
                className="p-3 rounded-full bg-white border border-black/15 text-[#0B0C0E] hover:bg-[#0B0C0E] hover:text-[#FFC542] hover:border-[#0B0C0E] shadow-sm transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC542]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Continuous Progress Bar Indicator */}
            <div className="flex-1 max-w-xs mx-4">
              <div className="w-full bg-black/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#FFC542] h-full transition-all duration-150 rounded-full"
                  style={{ width: `${Math.max(15, (scrollProgress * 100))}%` }}
                />
              </div>
            </div>

            {/* Counter */}
            <div className="text-xs font-bold text-[#6E737D] uppercase font-mono">
              10 TESTIMONIOS
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Testimonial Zoom */}
      <AnimatePresence>
        {modalIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Testimonio #${modalIndex + 1}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center bg-[#0B0C0E] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between px-5 py-3.5 bg-[#17191D] border-b border-white/10 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#FFC542] uppercase font-mono">
                    Testimonio {modalIndex + 1} de {testimonials.length}
                  </span>
                  <span className="text-white/30">·</span>
                  <span className="text-xs text-[#A7ABB2]">
                    Experiencia real con Código Fuerza 28
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Cerrar visor"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="relative w-full flex items-center justify-center p-4 sm:p-6 overflow-auto max-h-[75vh] bg-[#0B0C0E]">
                <img
                  src={testimonials[modalIndex].url}
                  alt={testimonials[modalIndex].alt}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-xl select-none"
                />

                {/* Left/Right Modal Buttons */}
                <button
                  type="button"
                  onClick={handleModalPrev}
                  aria-label="Testimonio anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-[#FFC542] text-white hover:text-black border border-white/20 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={handleModalNext}
                  aria-label="Testimonio siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-[#FFC542] text-white hover:text-black border border-white/20 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="w-full px-5 py-2.5 bg-[#17191D] border-t border-white/10 flex items-center justify-between text-xs text-[#A7ABB2]">
                <span className="hidden sm:inline">Usa las teclas ← → para navegar o Escape para cerrar</span>
                <span className="sm:hidden">Desliza o usa las flechas</span>
                <span className="text-[#FFC542] font-semibold">Captura auténtica compartida</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
