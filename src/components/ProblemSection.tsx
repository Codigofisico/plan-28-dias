import React from 'react';
import { HelpCircle, Clock, Shuffle, Dumbbell } from 'lucide-react';
import { motion } from 'motion/react';
import { SpotlightCard } from './SpotlightCard';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <HelpCircle className="w-5 h-5 text-[#D89E25]" />,
      title: "La eterna duda: ¿qué hago hoy?",
      description: "Tienes ganas de entrenar, pero pasas 20 minutos buscando qué ejercicios hacer y terminas improvisando o postergando."
    },
    {
      icon: <Shuffle className="w-5 h-5 text-[#D89E25]" />,
      title: "Cientos de rutinas guardadas sin orden",
      description: "Coleccionas videos en Instagram o TikTok con ejercicios aislados que nunca se integran en un plan progresivo de cuatro semanas."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#D89E25]" />,
      title: "Dificultad para crear constancia",
      description: "Comienzas con mucho entusiasmo el lunes, pero al tercer día la falta de estructura hace que lo dejes para 'la próxima semana'."
    },
    {
      icon: <Dumbbell className="w-5 h-5 text-[#D89E25]" />,
      title: "Pensar que necesitas un gimnasio",
      description: "Creer que sin pesas o máquinas costosas es imposible entrenar fuerza de manera efectiva y progresiva desde tu casa."
    }
  ];

  return (
    <section id="metodo" className="bg-white text-[#0B0C0E] py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#D89E25] mb-3">
            EL OBSTÁCULO REAL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B0C0E] leading-tight mb-6 [text-wrap:balance]">
            ¿Quieres empezar a entrenar, pero siempre terminas dejándolo para después?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-left sm:text-center">
            <p>
              Quizás has guardado decenas de rutinas en tu teléfono, has intentado seguir ejercicios de internet o has pensado que necesitas inscribirte en un gimnasio para comenzar.
            </p>
            <p className="font-semibold text-slate-900">
              Pero cuando llega el momento, aparece la misma pregunta: <span className="text-[#D89E25]">¿qué hago hoy?</span>
            </p>
            <p>
              Sin una estructura clara es fácil perder tiempo buscando ejercicios, cambiar de rutina constantemente o abandonar antes de crear el hábito.
            </p>
          </div>
        </motion.div>

        {/* Real Situations Grid with SpotlightCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <SpotlightCard
                spotlightColor="rgba(216, 158, 37, 0.15)"
                borderColor="rgba(216, 158, 37, 0.4)"
                className="bg-[#F5F6F7] border border-slate-200/80 p-5 sm:p-6 transition-all hover:shadow-md h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white rounded-lg shadow-xs shrink-0 border border-slate-200/60">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Transition Callout with subtle scale reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto bg-slate-900 text-white rounded-xl p-6 sm:p-8 text-center border border-slate-800 shadow-md"
        >
          <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed">
            Por eso, antes de complicarte con entrenamientos avanzados, necesitas <strong className="text-[#FFC542] font-bold">una base organizada</strong> que te permita saber exactamente por dónde comenzar y qué hacer después.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
