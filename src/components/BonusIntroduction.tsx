import React from 'react';
import { Sparkles, Brain, Moon, LineChart, Apple } from 'lucide-react';

export const BonusIntroduction: React.FC = () => {
  const bonusPillars = [
    { title: "Constancia", icon: <Brain className="w-4 h-4 text-[#FFC542]" />, subtitle: "Vencer excusas" },
    { title: "Recuperación", icon: <Moon className="w-4 h-4 text-[#FFC542]" />, subtitle: "Descanso activo" },
    { title: "Seguimiento", icon: <LineChart className="w-4 h-4 text-[#FFC542]" />, subtitle: "Progreso medible" },
    { title: "Alimentación", icon: <Apple className="w-4 h-4 text-[#FFC542]" />, subtitle: "Nutrición simple" }
  ];

  return (
    <section className="bg-[#17191D] text-white pt-16 pb-8 sm:pt-24 sm:pb-12 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RECURSOS COMPLEMENTARIOS INCLUIDOS</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-5 [text-wrap:balance]">
          EL ENTRENAMIENTO ES SOLO UNA PARTE DEL PROCESO.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#A7ABB2] leading-relaxed mb-10 max-w-2xl mx-auto">
          Por eso tu compra también incluye cuatro recursos digitales que te ayudarán a trabajar otros aspectos importantes: constancia, recuperación, seguimiento y alimentación.
        </p>

        {/* Four Pillars Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {bonusPillars.map((p, idx) => (
            <div key={idx} className="bg-[#0B0C0E] border border-white/10 rounded-lg p-3 text-center">
              <div className="flex justify-center mb-1.5">{p.icon}</div>
              <p className="text-xs font-bold text-white">{p.title}</p>
              <p className="text-[11px] text-[#A7ABB2]">{p.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
