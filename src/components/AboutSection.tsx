import React from 'react';
import { Dumbbell, Users, Award, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 bg-[#0B0C0E] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFC542]/5 blur-3xl rounded-full pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC542] mb-3">
            QUIÉNES SOMOS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            Sobre <span className="text-[#FFC542]">Código Físico</span>
          </h2>
          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#A7ABB2]">
            Nuestra misión es democratizar el entrenamiento de fuerza y calistenia con base técnica y cero humo.
          </p>
        </div>

        {/* About Card */}
        <div className="bg-[#17191D] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Emblem */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#FFC542]/20 to-black border-2 border-[#FFC542]/40 flex items-center justify-center shadow-lg shadow-[#FFC542]/10 mb-4">
                <Dumbbell className="w-12 h-12 text-[#FFC542]" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">CÓDIGO FÍSICO</h3>
              <p className="text-xs text-[#FFC542] font-semibold uppercase tracking-wider mt-0.5">
                Comunidad de Entrenamiento
              </p>
            </div>

            {/* Content text */}
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-[#A7ABB2] leading-relaxed">
              <p>
                En <strong className="text-white">Código Físico</strong> creemos firmemente que no necesitas máquinas costosas ni pagar cuotas mensuales de gimnasio para construir fuerza real, mejorar tu postura y transformar tu cuerpo.
              </p>
              <p>
                Creamos <strong className="text-white">Código Fuerza 28</strong> como una guía definitiva y directa al grano: 91 páginas con explicaciones anatómicas claras, progresiones paso a paso para cada nivel y rutinas estructuradas para 4 semanas completas.
              </p>
              <p>
                Sin términos confusos ni métodos de moda. Solo los principios fundamentales de la calistenia y la biomecánica aplicados de forma práctica para que entrenes con seguridad desde hoy en tu casa.
              </p>

              {/* Badges Strip */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
                <div className="flex items-center gap-2.5 bg-black/40 border border-white/5 rounded-xl px-3.5 py-2.5">
                  <Users className="w-4 h-4 text-[#FFC542] shrink-0" />
                  <span className="text-xs font-semibold text-white">+1,200 Alumnos</span>
                </div>
                <div className="flex items-center gap-2.5 bg-black/40 border border-white/5 rounded-xl px-3.5 py-2.5">
                  <Award className="w-4 h-4 text-[#FFC542] shrink-0" />
                  <span className="text-xs font-semibold text-white">100% Práctico</span>
                </div>
                <div className="flex items-center gap-2.5 bg-black/40 border border-white/5 rounded-xl px-3.5 py-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#FFC542] shrink-0" />
                  <span className="text-xs font-semibold text-white">Garantía Total</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
