import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { CTAButton } from './CTAButton';
import { ScarcityCounter } from './ScarcityCounter';
import { BookOpen, Activity, Award } from 'lucide-react';

export const ProductIntroduction: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      step: "01",
      name: "APRENDE",
      icon: <BookOpen className="w-5 h-5 text-[#FFC542]" />,
      description: "Conoce los movimientos esenciales, la alineación postural y los fundamentos mecánicos para entrenar con seguridad."
    },
    {
      step: "02",
      name: "PRACTICA",
      icon: <Activity className="w-5 h-5 text-[#FFC542]" />,
      description: "Sigue rutinas organizadas en cuatro etapas secuenciales diseñadas para desarrollar control, estabilidad, fuerza y resistencia."
    },
    {
      step: "03",
      name: "CONTINÚA",
      icon: <Award className="w-5 h-5 text-[#FFC542]" />,
      description: "Aprende pautas para evaluar tu desempeño y mantener la regularidad en tu rutina más allá de los primeros 28 días."
    }
  ];

  return (
    <section className="bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
            LA SOLUCIÓN ESTRUCTURADA
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            CONOCE CÓDIGO FUERZA 28
          </h2>
          <p className="text-base sm:text-lg text-[#A7ABB2] leading-relaxed">
            Una guía práctica para comenzar desde cero, entender los movimientos y seguir un programa progresivo de entrenamiento desde casa.
          </p>
        </div>

        {/* Product Visual + Copy Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          
          {/* Ebook Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full bg-[#17191D] border border-white/10 rounded-xl p-4 shadow-xl">
              <img
                src={imageError ? siteConfig.assets.bookCoverFallback : siteConfig.assets.bookCover}
                alt="Código Fuerza 28 Ebook Digital"
                loading="lazy"
                className="w-full h-auto rounded-lg object-contain shadow-md"
                onError={() => setImageError(true)}
              />
              <div className="mt-3 flex items-center justify-between text-xs text-[#A7ABB2] border-t border-white/10 pt-3">
                <span className="font-semibold text-white">91 Páginas</span>
                <span>Calistenia en casa</span>
                <span className="text-[#FFC542] font-semibold">Formato PDF</span>
              </div>
            </div>
          </div>

          {/* Copy Explanation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
              En lugar de preguntarte cada día qué rutina hacer, tendrás una referencia organizada por semanas.
            </h3>
            <p className="text-base text-[#A7ABB2] leading-relaxed mb-8">
              Primero conocerás los fundamentos y ejercicios esenciales explicados paso a paso. Después podrás seguir las etapas del programa para trabajar control corporal, estabilidad, fuerza y resistencia sin tener que inventar nada sobre la marcha.
            </p>

            {/* Three Pillars (Aprende / Practica / Continúa) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="bg-[#17191D] border border-white/10 rounded-lg p-4 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#FFC542]">
                      {pillar.name}
                    </span>
                    {pillar.icon}
                  </div>
                  <p className="text-xs text-[#A7ABB2] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA & Scarcity */}
            <div className="flex flex-col items-start gap-4 w-full">
              <CTAButton size="default">
                QUIERO ACCEDER AL PROGRAMA COMPLETO
              </CTAButton>
              <ScarcityCounter variant="compact" className="w-full max-w-md mx-0" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
