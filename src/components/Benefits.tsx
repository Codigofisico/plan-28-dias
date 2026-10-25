import React from 'react';
import { CTAButton } from './CTAButton';
import { SpotlightCard } from './SpotlightCard';
import { Compass, Home, Shield, TrendingUp, Calendar, Repeat } from 'lucide-react';
import { motion } from 'motion/react';

export const Benefits: React.FC = () => {
  const benefitList = [
    {
      num: "01",
      icon: <Compass className="w-5 h-5 text-[#FFC542]" />,
      title: "Saber qué entrenar cada día",
      receives: "Un programa organizado en cuatro semanas",
      canDo: "Consultar los ejercicios, series y descansos específicos de cada sesión",
      changes: "No vuelves a perder tiempo buscando videos ni dudando antes de entrenar."
    },
    {
      num: "02",
      icon: <Home className="w-5 h-5 text-[#FFC542]" />,
      title: "Comenzar sin necesidad de gimnasio",
      receives: "Ejercicios basados en calistenia y tu peso corporal",
      canDo: "Organizar y completar tus sesiones directamente en el espacio de tu casa",
      changes: "Eliminas la barrera del desplazamiento, las cuotas mensuales y las máquinas ocupadas."
    },
    {
      num: "03",
      icon: <Shield className="w-5 h-5 text-[#FFC542]" />,
      title: "Comprender la técnica y postura",
      receives: "Indicaciones y referencias visuales de ejecución",
      canDo: "Comprobar tu postura en cada ejercicio básico antes de exigirte más",
      changes: "Entrenas con mayor tranquilidad y reduces el riesgo de molestias por mala ejecución."
    },
    {
      num: "04",
      icon: <TrendingUp className="w-5 h-5 text-[#FFC542]" />,
      title: "Trabajar de forma progresiva",
      receives: "Una secuencia en 4 etapas ordenadas",
      canDo: "Avanzar desde la adaptación hacia el core, fuerza y potencia",
      changes: "Evitas saltar a rutinas avanzadas para las que tu cuerpo aún no está preparado."
    },
    {
      num: "05",
      icon: <Calendar className="w-5 h-5 text-[#FFC542]" />,
      title: "Construir constancia duradera",
      receives: "Pautas de organización y sesiones manejables",
      canDo: "Integrar el ejercicio en tu rutina diaria sin alterar todo tu día",
      changes: "Transformas la intención aislada en una práctica constante y sostenible."
    },
    {
      num: "06",
      icon: <Repeat className="w-5 h-5 text-[#FFC542]" />,
      title: "Saber cómo continuar después",
      receives: "Criterios de progresión y autoevaluación",
      canDo: "Revisar tus números, constancia y saber qué paso dar al terminar los 28 días",
      changes: "No te quedas estancado sin saber qué hacer una vez finalizado el libro."
    }
  ];

  return (
    <section id="beneficios" className="bg-[#17191D] text-white py-16 sm:py-24 border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
            CAPACIDADES REALES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            ESTO ES LO QUE PODRÁS HACER CON CÓDIGO FUERZA 28
          </h2>
          <p className="text-base text-[#A7ABB2]">
            El valor del libro no está solo en lo que contiene, sino en las capacidades que desarrollas para organizar tu entrenamiento sin depender de nadie.
          </p>
        </motion.div>

        {/* Benefits Grid with SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefitList.map((b, idx) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <SpotlightCard
                spotlightColor="rgba(255, 197, 66, 0.15)"
                borderColor="rgba(255, 197, 66, 0.5)"
                className="bg-[#0B0C0E] border border-white/10 p-6 flex flex-col justify-between h-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className="text-xs font-extrabold tracking-wider text-[#FFC542] uppercase font-mono">
                      MÓDULO {b.num}
                    </span>
                    <div className="p-2 bg-[#17191D] rounded-lg">
                      {b.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                    {b.title}
                  </h3>

                  {/* Lo que recibe -> Lo que puede hacer -> Lo que cambia */}
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <span className="text-[11px] font-bold uppercase text-[#FFC542] tracking-wider block mb-0.5">
                        Lo que recibes:
                      </span>
                      <p className="text-[#A7ABB2]">{b.receives}.</p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase text-white/90 tracking-wider block mb-0.5">
                        Lo que puedes hacer:
                      </span>
                      <p className="text-slate-300">{b.canDo}.</p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider block mb-0.5">
                        Lo que cambia:
                      </span>
                      <p className="text-slate-400 italic">"{b.changes}"</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* CTA at end of benefits block */}
        <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto">
          <CTAButton size="default">
            QUIERO EMPEZAR POR $12 USD
          </CTAButton>
          <p className="text-xs text-[#A7ABB2] mt-3">
            Acceso instantáneo a las 91 páginas y los cuatro bonos incluidos.
          </p>
        </div>

      </div>
    </section>
  );
};
