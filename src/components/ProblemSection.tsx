import React from 'react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: "📱",
      title: "Copias rutinas sin entenderlas",
      description: "Sacas ejercicios al azar de redes sociales o videos sueltos sin saber qué músculo trabaja cada uno ni por qué va en ese orden específico."
    },
    {
      icon: "🤕",
      title: "Te lesionas o sientes dolor y no sabes por qué",
      description: "Sin bases de técnica y control articular, los errores posturales pasan desapercibidos hasta que aparece la molestia en hombros, muñecas o lumbares."
    },
    {
      icon: "❓",
      title: "Crees que necesitas gimnasio o máquinas costosas",
      description: "Postergar tu entrenamiento creyendo que sin pagar membresías caras o tener mancuernas es imposible construir fuerza real y disciplina en casa."
    }
  ];

  return (
    <section className="relative bg-[#0B0C0E] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching Elevify: section-label + section-title + accent-line) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#FFC542] mb-3 font-['Montserrat',sans-serif]">
            EL PROBLEMA QUE NADIE TE DICE
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            Empiezas a entrenar y <span className="text-[#FFC542]">lo dejas a los pocos días.</span>
          </h2>

          <div className="w-16 h-1 bg-[#FFC542] mx-auto my-4 rounded-full" />
          
          <p className="text-base sm:text-lg text-[#CCD6E0] max-w-2xl mx-auto leading-relaxed">
            Sin una estructura progresiva clara es muy fácil perder tiempo improvisando qué hacer cada día o frustrarse antes de consolidar el hábito.
          </p>
        </div>

        {/* Problem Grid (matching Elevify: problem-grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#17191D] border border-white/10 hover:border-[#FFC542]/50 rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.3)] group"
            >
              <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#CCD6E0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
