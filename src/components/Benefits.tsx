import React from 'react';

export const Benefits: React.FC = () => {
  const solutions = [
    {
      icon: "⚙️",
      title: "La técnica y biomecánica de cada movimiento",
      description: "Aprende qué músculo trabaja, las posiciones articulares correctas y cómo ajustar las palancas corporales para progresar de forma segura."
    },
    {
      icon: "📐",
      title: "Progresión estructurada en 4 semanas",
      description: "Una secuencia clara y gradual: desde adaptación y control postural inicial hasta estabilidad de core, fuerza y potencia sin saltarte etapas."
    },
    {
      icon: "⚠️",
      title: "Los errores típicos, ejercicio por ejercicio",
      description: "No una lista abstracta: los fallos posturales más frecuentes que cometen los principiantes y exactamente cómo corregirlos antes de que duelan."
    },
    {
      icon: "📋",
      title: "Constancia y disciplina sin depender del ánimo",
      description: "Pautas prácticas de organización para integrar sesiones de 30 a 40 minutos en tu rutina diaria desde casa sin necesidad de máquinas."
    }
  ];

  return (
    <section className="relative bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching Elevify: section-label + section-title + accent-line) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-3 font-['Montserrat',sans-serif]">
            LA SOLUCIÓN: EL SISTEMA COMPLETO
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            El método paso a paso para ganar fuerza — <span className="text-[#FFC542]">con tu propio peso corporal</span>
          </h2>

          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
          
          <p className="text-base sm:text-lg text-[#CCD6E0] max-w-2xl mx-auto leading-relaxed">
            Una guía visual y práctica diseñada para enseñarte a entrenar con criterio, autonomía y resultados duraderos.
          </p>
        </div>

        {/* Benefits Grid (matching Elevify: benefits-grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 sm:gap-5 bg-[#17191D] border border-white/10 hover:border-[#FFC542]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.3)] group"
            >
              <div className="w-12 h-12 min-w-[48px] rounded-xl bg-gradient-to-br from-[#FFC542]/20 to-transparent border border-[#FFC542]/30 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CCD6E0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
