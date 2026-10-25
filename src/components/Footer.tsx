import React from 'react';
import { siteConfig } from '../siteConfig';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0C0E] text-[#A7ABB2] py-12 px-4 sm:px-6 border-t border-white/10 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Brand Wordmark */}
        <div className="text-white font-extrabold text-base tracking-wider uppercase">
          {siteConfig.brand}
        </div>

        {/* Product and delivery disclaimer */}
        <p className="max-w-2xl leading-relaxed text-[#A7ABB2]">
          <strong className="text-white font-semibold">Aviso legal y educativo:</strong> Código Fuerza 28 y sus recursos complementarios son materiales educativos digitales en formato PDF. No constituyen prescripción médica, nutricional personalizada ni reemplazan la consulta con profesionales de la salud. Los resultados pueden variar en función de la regularidad, condición física inicial, descanso y nutrición de cada persona.
        </p>

        {/* Hotmart Platform Disclosure */}
        <div className="max-w-2xl text-[11px] text-[#A7ABB2]/70 leading-relaxed border-t border-b border-white/5 py-4">
          <p>
            Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un control editorial previo de los productos vendidos, ni valora la tecnicidad y experiencia de quienes los elaboran. La existencia de un producto y su adquisición a través de la plataforma no pueden ser consideradas como garantía de calidad de contenido y resultado, en ningún caso. Al comprarlo, el comprador declara conocer esta información.
          </p>
        </div>

        {/* Trust Badges row */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#FFC542]" /> Pago Seguro con Encriptación SSL
          </span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Entrega Inmediata por Correo Electrónico</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Garantía de Satisfacción 7 Días</span>
        </div>

        {/* Copyright notice */}
        <div className="text-[11px] text-[#A7ABB2]/60 pt-2">
          © {new Date().getFullYear()} {siteConfig.brand}. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};
