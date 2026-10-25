import React from 'react';
import { siteConfig } from '../siteConfig';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-white text-[#0B0C0E] py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-[#F5F6F7] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          
          {/* Guarantee Badge / Icon */}
          <div className="flex flex-col items-center justify-center shrink-0 text-center">
            <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-[#D89E25] flex items-center justify-center shadow-md mb-2">
              <ShieldCheck className="w-10 h-10 text-[#FFC542]" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              7 DÍAS
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              DE GARANTÍA
            </span>
          </div>

          {/* Guarantee Copy */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D89E25] mb-2">
              SEGURIDAD Y TRANSPARENCIA
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0B0C0E] mb-3">
              COMPRA CON TRANQUILIDAD
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              {siteConfig.guarantee.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 pt-2 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gestión directa a través de Hotmart</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reembolso 100% sin complicaciones</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
