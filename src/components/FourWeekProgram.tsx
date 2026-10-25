import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { CTAButton } from './CTAButton';
import { SpotlightCard } from './SpotlightCard';
import { Layers, ShieldCheck, Flame, Zap, Clock, Dumbbell, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FourWeekProgram: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  const weekIcons = [
    <Layers className="w-5 h-5 text-[#FFC542]" />,
    <ShieldCheck className="w-5 h-5 text-[#FFC542]" />,
    <Flame className="w-5 h-5 text-[#FFC542]" />,
    <Zap className="w-5 h-5 text-[#FFC542]" />
  ];

  const weekDetails: Record<number, {
    intensity: number;
    intensityLabel: string;
    duration: string;
    keyMovement: string;
    dailySchedule: { day: string; activity: string; type: string }[];
  }> = {
    1: {
      intensity: 60,
      intensityLabel: "Adaptación Progresiva (60%)",
      duration: "20 - 25 min",
      keyMovement: "Control escapular, sentadilla asistida y plancha isométrica",
      dailySchedule: [
        { day: "Día 01", activity: "Alineación y activación de tren superior", type: "Práctica" },
        { day: "Día 02", activity: "Control motor y patrones de piernas", type: "Práctica" },
        { day: "Día 03", activity: "Movilidad articular y respiración (Bono 2)", type: "Recuperación" },
        { day: "Día 04", activity: "Patrones de empuje básicos y core", type: "Práctica" },
        { day: "Día 05", activity: "Circuito suave de integración corporal", type: "Práctica" },
        { day: "Día 06", activity: "Paseo activo y estiramientos suaves", type: "Recuperación" },
        { day: "Día 07", activity: "Registro semanal en plantilla (Bono 3)", type: "Revisión" },
      ]
    },
    2: {
      intensity: 70,
      intensityLabel: "Estabilidad y Resistencia (70%)",
      duration: "25 min",
      keyMovement: "Hollow body, empuje en declinación y puentes glúteos",
      dailySchedule: [
        { day: "Día 08", activity: "Fortalecimiento del core anterior y posterior", type: "Práctica" },
        { day: "Día 09", activity: "Estabilidad de hombros y empujes controlados", type: "Práctica" },
        { day: "Día 10", activity: "Sesión de movilidad de caderas y tronco", type: "Recuperación" },
        { day: "Día 11", activity: "Series progresivas de core y tren inferior", type: "Práctica" },
        { day: "Día 12", activity: "Combinación de apoyos y control en suelo", type: "Práctica" },
        { day: "Día 13", activity: "Descanso consciente y nutrición (Bono 4)", type: "Recuperación" },
        { day: "Día 14", activity: "Evaluación de sensaciones y repeticiones", type: "Revisión" },
      ]
    },
    3: {
      intensity: 80,
      intensityLabel: "Sobrecarga Progresiva (80%)",
      duration: "25 - 30 min",
      keyMovement: "Flexiones con tempo, fondos en superficie y zancadas profundas",
      dailySchedule: [
        { day: "Día 15", activity: "Mayor tiempo bajo tensión en tren superior", type: "Práctica" },
        { day: "Día 16", activity: "Volumen acumulado en piernas y estabilidad", type: "Práctica" },
        { day: "Día 17", activity: "Recuperación activa y descompresión lumbar", type: "Recuperación" },
        { day: "Día 18", activity: "Series por repeticiones objetivo", type: "Práctica" },
        { day: "Día 19", activity: "Desafío de resistencia muscular global", type: "Práctica" },
        { day: "Día 20", activity: "Revisión de excusas y mentalidad (Bono 1)", type: "Recuperación" },
        { day: "Día 21", activity: "Comparativa de marcas frente a la semana 1", type: "Revisión" },
      ]
    },
    4: {
      intensity: 90,
      intensityLabel: "Consolidación y Autonomía (90%)",
      duration: "25 - 30 min",
      keyMovement: "Flujos dinámicos de calistenia, saltos controlados y planchas dinámicas",
      dailySchedule: [
        { day: "Día 22", activity: "Potencia controlada y fluidez en transiciones", type: "Práctica" },
        { day: "Día 23", activity: "Integración de fuerza de core y estabilidad", type: "Práctica" },
        { day: "Día 24", activity: "Movilidad dinámica y recuperación guiada", type: "Recuperación" },
        { day: "Día 25", activity: "Sesión de consolidación de repeticiones", type: "Práctica" },
        { day: "Día 26", activity: "Circuito final Código Fuerza 28", type: "Práctica" },
        { day: "Día 27", activity: "Plan de continuidad más allá de los 28 días", type: "Estrategia" },
        { day: "Día 28", activity: "Balance final y fijación de nuevos objetivos", type: "Graduación" },
      ]
    }
  };

  const selectedWeekData = siteConfig.programWeeks.find(w => w.weekNumber === activeWeek) || siteConfig.programWeeks[0];
  const selectedDetails = weekDetails[activeWeek];

  return (
    <section id="programa" className="bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
            ESTRUCTURA DE PROGRESIÓN INTERACTIVA
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            UN CAMINO CLARO PARA TUS PRIMEROS 28 DÍAS
          </h2>
          <p className="text-base text-[#A7ABB2]">
            Haz clic en cada semana para explorar el enfoque, la intensidad calculada y la distribución de actividades.
          </p>
        </div>

        {/* Interactive Week Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {siteConfig.programWeeks.map((week, idx) => {
            const isActive = activeWeek === week.weekNumber;
            return (
              <button
                key={week.weekNumber}
                type="button"
                onClick={() => setActiveWeek(week.weekNumber)}
                className={`relative px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#17191D] text-white border-[#FFC542] shadow-[0_0_20px_rgba(255,197,66,0.2)]'
                    : 'bg-[#17191D]/50 text-[#A7ABB2] border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#FFC542]' : 'bg-white/20'}`} />
                <span>Semana 0{week.weekNumber}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeWeekGlider"
                    className="absolute inset-0 border-2 border-[#FFC542] rounded-xl pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Week Deep-Dive Interactive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-[#17191D] border border-white/15 rounded-2xl p-6 sm:p-8 mb-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Week Overview & Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#FFC542] text-[#0B0C0E] text-xs font-black rounded font-mono">
                      FASE 0{selectedWeekData.weekNumber}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A7ABB2]">
                      DÍAS {((activeWeek - 1) * 7) + 1} AL {activeWeek * 7}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    {selectedWeekData.subtitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {selectedWeekData.description}
                  </p>
                </div>

                {/* Progress Intensity Gauge */}
                <div className="bg-[#0B0C0E] border border-white/10 rounded-xl p-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-white">Nivel de exigencia física</span>
                      <span className="text-[#FFC542]">{selectedDetails.intensityLabel}</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedDetails.intensity}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#FFC542] to-[#D89E25] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-[#A7ABB2]">
                      <Clock className="w-4 h-4 text-[#FFC542]" />
                      <span>{selectedDetails.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#A7ABB2]">
                      <Dumbbell className="w-4 h-4 text-[#FFC542]" />
                      <span>0% equipamiento</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#A7ABB2]">
                  <strong className="text-white block mb-0.5">Patrón técnico clave:</strong>
                  <span>{selectedDetails.keyMovement}</span>
                </div>
              </div>

              {/* Right Column: 7-Day Interactive Micro-Schedule */}
              <div className="lg:col-span-7 bg-[#0B0C0E] border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFC542] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> Desglose de actividades diarias
                  </span>
                  <span className="text-[11px] text-[#A7ABB2]">
                    Plan semanal guiado
                  </span>
                </div>

                <div className="space-y-2">
                  {selectedDetails.dailySchedule.map((dayItem, dIdx) => (
                    <div 
                      key={dIdx}
                      className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-[#17191D]/70 border border-white/5 hover:border-white/20 transition-colors text-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono font-bold text-[#FFC542] shrink-0 text-[11px]">
                          {dayItem.day}
                        </span>
                        <span className="text-white/90 truncate font-medium">
                          {dayItem.activity}
                        </span>
                      </div>

                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded shrink-0 ${
                        dayItem.type === 'Práctica'
                          ? 'bg-[#FFC542]/20 text-[#FFC542] border border-[#FFC542]/30'
                          : dayItem.type === 'Recuperación'
                          ? 'bg-blue-950/60 text-blue-300 border border-blue-500/30'
                          : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {dayItem.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Weeks Quick Comparison Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {siteConfig.programWeeks.map((week, idx) => (
            <SpotlightCard
              key={week.weekNumber}
              onClick={() => setActiveWeek(week.weekNumber)}
              className={`bg-[#17191D] border p-5 flex flex-col justify-between cursor-pointer transition-all ${
                activeWeek === week.weekNumber ? 'border-[#FFC542]' : 'border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-extrabold text-[#FFC542]">
                    SEMANA 0{week.weekNumber}
                  </span>
                  {weekIcons[idx]}
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {week.subtitle}
                </h4>
                <p className="text-[11px] text-[#A7ABB2] line-clamp-2">
                  {week.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#FFC542]">
                <span>{activeWeek === week.weekNumber ? 'Viendo detalles' : 'Click para ver'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Closing Sentence & CTA */}
        <div className="text-center max-w-2xl mx-auto bg-[#17191D]/80 border border-white/10 rounded-xl p-6 sm:p-8 shadow-lg">
          <p className="text-base sm:text-lg font-semibold text-white mb-6">
            Cada etapa tiene una finalidad concreta. Así sabrás en todo momento qué estás trabajando y por qué.
          </p>
          <CTAButton size="default">
            QUIERO EMPEZAR MI PRIMERA SEMANA
          </CTAButton>
        </div>

      </div>
    </section>
  );
};
