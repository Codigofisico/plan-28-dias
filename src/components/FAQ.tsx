import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0B0C0E] text-white border-b border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Elevify style */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC542] mb-3">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            Antes de decidir, <span className="text-[#FFC542]">lee esto</span>
          </h2>
          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#A7ABB2]">
            Las respuestas a las dudas más comunes sobre Código Fuerza 28, los bonos y el acceso inmediato.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#17191D] border border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#FFC542]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-white hover:text-[#FFC542] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC542]"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#FFC542] text-black' : 'bg-white/5 text-[#FFC542]'}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#A7ABB2] leading-relaxed border-t border-white/5 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
