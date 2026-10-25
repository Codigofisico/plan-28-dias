import React from 'react';
import { siteConfig } from '../siteConfig';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export const BookContents: React.FC = () => {
  return (
    <section className="bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
            TEMARIO COMPLETO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            UNA GUÍA ORGANIZADA PARA QUE SEPAS POR DÓNDE EMPEZAR
          </h2>
          <div className="inline-flex items-center gap-2 bg-[#17191D] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-[#FFC542] uppercase tracking-wide">
            <BookOpen className="w-3.5 h-3.5" />
            <span>91 páginas de contenido educativo y práctico</span>
          </div>
        </div>

        {/* 10 Chapters Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {siteConfig.chapters.map((chapter) => (
            <div 
              key={chapter.number}
              className="bg-[#17191D] border border-white/10 rounded-lg p-4 sm:p-5 flex items-start gap-3.5 hover:border-[#FFC542]/40 transition-colors"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#0B0C0E] border border-white/10 text-xs font-extrabold text-[#FFC542] font-mono shrink-0">
                {chapter.number < 10 ? `0${chapter.number}` : chapter.number}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-1">
                  {chapter.title}
                </h3>
                <p className="text-xs text-[#A7ABB2] leading-relaxed">
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefit Callout Box */}
        <div className="bg-[#17191D] border border-[#FFC542]/30 rounded-xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#FFC542]">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">
              TODO EN UN SOLO LUGAR
            </span>
          </div>
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
            Tendrás los fundamentos, ejercicios, rutinas y recomendaciones de continuidad reunidos en una sola guía, para consultarlos directamente desde tu dispositivo cuando los necesites.
          </p>
        </div>

      </div>
    </section>
  );
};
