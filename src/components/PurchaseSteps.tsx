import React from 'react';
import { CreditCard, Mail, PlayCircle } from 'lucide-react';

export const PurchaseSteps: React.FC = () => {
  const steps = [
    {
      step: "PASO 01",
      icon: <CreditCard className="w-6 h-6 text-[#FFC542]" />,
      title: "Realiza tu compra",
      description: "Selecciona el botón de compra y completa tu pedido en la plataforma segura de Hotmart con tu método de pago preferido."
    },
    {
      step: "PASO 02",
      icon: <Mail className="w-6 h-6 text-[#FFC542]" />,
      title: "Accede a tus materiales",
      description: "Recibirás de forma inmediata un correo electrónico con el enlace e instrucciones de acceso para descargar el ebook y los cuatro bonos en formato PDF."
    },
    {
      step: "PASO 03",
      icon: <PlayCircle className="w-6 h-6 text-[#FFC542]" />,
      title: "Comienza desde el principio",
      description: "Abre Código Fuerza 28 en tu teléfono o computadora, revisa los fundamentos y empieza a seguir las actividades correspondientes a tu primera semana."
    }
  ];

  return (
    <section className="bg-[#17191D] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FFC542] mb-3">
            PROCESO SIMPLE Y RÁPIDO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 [text-wrap:balance]">
            EN TRES PASOS PUEDES COMENZAR
          </h2>
          <p className="text-sm sm:text-base text-[#A7ABB2]">
            Todo el proceso es 100% digital, automático y respaldado por la infraestructura de pagos de Hotmart.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="bg-[#0B0C0E] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-[#FFC542] font-mono tracking-wider">
                    {st.step}
                  </span>
                  <div className="p-2.5 bg-[#17191D] rounded-lg">
                    {st.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7ABB2] leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 text-[11px] text-[#A7ABB2]/80">
                Entrega 100% digital
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
