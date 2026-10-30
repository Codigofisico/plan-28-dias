import React, { useState } from 'react';

export const TargetAudience: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true
  });

  const items = [
    "Quieres empezar a entrenar pero no sabes qué ejercicios hacer ni cómo estructurarlos.",
    "No tienes tiempo de ir a un gimnasio y prefieres entrenar en tu casa en 30 a 40 minutos.",
    "Te da miedo lesionarte o realizar ejercicios con mala postura por falta de técnica.",
    "Has intentado ponerte en forma varias veces pero terminas abandonando por falta de un plan claro.",
    "Buscas construir fuerza real, mejorar tu composición corporal y crear disciplina duradera."
  ];

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="relative bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching Elevify: ESTO ES PARA TI SI...) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-3 font-['Montserrat',sans-serif]">
            ESTO ES PARA TI SI...
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            Marca todo lo que <span className="text-[#FFC542]">te describe</span>
          </h2>

          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
        </div>

        {/* Target List (matching Elevify: target-list & target-item) */}
        <div className="max-w-xl mx-auto flex flex-col gap-3.5 mb-8">
          {items.map((text, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`flex items-center gap-4 bg-[#17191D] border rounded-xl p-4 sm:p-5 cursor-pointer transition-all duration-200 select-none ${
                  isChecked ? 'border-[#FFC542]/60 bg-[#1c1d22]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`w-8 h-8 min-w-[32px] rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  isChecked 
                    ? 'bg-[#FFC542] text-[#0B0C0E] shadow-[0_0_12px_rgba(255,197,66,0.4)]' 
                    : 'bg-white/5 border border-white/20 text-white/40'
                }`}>
                  ✓
                </div>
                <div className="text-sm sm:text-base text-[#CCD6E0] leading-snug">
                  {text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Punchline (matching Elevify) */}
        <p className="text-center text-[#FFC542] font-['Montserrat',sans-serif] font-bold text-lg sm:text-xl tracking-tight">
          Si marcaste aunque sea 1, este sistema es para ti.
        </p>

      </div>
    </section>
  );
};
