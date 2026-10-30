import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const BookContents: React.FC = () => {
  const [openChapter, setOpenChapter] = useState<number | null>(1);

  const toggleChapter = (num: number) => {
    setOpenChapter((prev) => (prev === num ? null : num));
  };

  const chapterDetails: Record<number, string[]> = {
    1: ["El punto de partida", "Objetivos reales sin promesas falsas", "Mentalidad de constancia", "Preparación para el día 1"],
    2: ["Bases del peso corporal", "Principios mecánicos y palancas", "Control del centro de gravedad", "Conceptos esenciales de postura"],
    3: ["Espacio de entrenamiento en casa", "Calentamiento y movilidad articular", "Activación muscular previa", "Prevención de molestias"],
    4: ["Empujes y flexiones adaptadas", "Tracciones y control escapular", "Patrones de sentadilla y piernas", "Técnica precisa paso a paso"],
    5: ["Rutinas de los primeros 7 días", "Despertar neuromuscular gradual", "Volumen y pausas de descanso", "Adaptación inicial segura"],
    6: ["Fortalecimiento de la zona media", "Planchas y variantes estables", "Control pélvico y respiratorio", "Mejora de la alineación"],
    7: ["Progresión en series y repeticiones", "Mayor tiempo bajo tensión", "Incremento de resistencia muscular", "Tolerancia al esfuerzo"],
    8: ["Movimientos dinámicos integrados", "Coordinación entre cadenas musculares", "Autonomía de entrenamiento", "Cierre con potencia"],
    9: ["Estrategias para no perder el hábito", "Ajustes de rutinas semanales", "Superación de estancamientos", "Progresiones futuras"],
    10: ["Autoevaluación de progresos", "Indicadores de fuerza funcional", "Próximos pasos a largo plazo", "Conclusiones finales"]
  };

  return (
    <section className="relative bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching Elevify: section-label + section-title + section-subtitle) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-3 font-['Montserrat',sans-serif]">
            91 PÁGINAS · MÉTODO COMPLETO · 10 CAPÍTULOS
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            Todo lo que vas a encontrar <span className="text-[#FFC542]">adentro del libro principal</span>
          </h2>

          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
          
          <p className="text-base sm:text-lg text-[#CCD6E0] max-w-2xl mx-auto leading-relaxed">
            No es teoría aburrida de manual. Está pensado para consultarse en tu celular o tablet al lado de donde entrenas en casa.
          </p>
        </div>

        {/* Content Grid Accordion (matching Elevify: content-grid) */}
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {siteConfig.chapters.map((ch) => {
            const isOpen = openChapter === ch.number;
            const bullets = chapterDetails[ch.number] || [];

            return (
              <div
                key={ch.number}
                className={`bg-[#17191D] border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#FFC542] shadow-[0_4px_20px_rgba(255,197,66,0.12)]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => toggleChapter(ch.number)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <span className="font-['Montserrat',sans-serif] font-extrabold text-[10px] tracking-[1.5px] uppercase text-white bg-gradient-to-r from-[#2E5372] to-[#4A7FA5] px-2.5 py-1 rounded shrink-0">
                      CAP {ch.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug truncate">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-[#CCD6E0] truncate">
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block bg-[#FFC542]/10 border border-[#FFC542]/20 rounded-full px-2.5 py-0.5 text-[11px] font-bold text-[#FFC542]">
                      PDF
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#FFC542]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Body Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 bg-[#121316]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#CCD6E0] pt-2">
                      {bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <span className="text-[#FFC542] font-black text-sm">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
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
