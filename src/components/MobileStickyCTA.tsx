import React, { useEffect, useState } from 'react';
import { siteConfig } from '../siteConfig';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { trackInitiateCheckout } from '../utils/analytics';

interface MobileStickyCTAProps {
  isModalOpen?: boolean;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ isModalOpen = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down past 500px (past the hero)
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Do not render or hide if modal is open or not scrolled enough
  if (!isVisible || isModalOpen) {
    return null;
  }

  return (
    <div 
      role="region"
      aria-label="Acceso directo a compra"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0C0E]/95 border-t border-white/15 px-4 py-2.5 backdrop-blur-md shadow-2xl transition-all duration-200 animate-slide-up"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-extrabold text-[#FFC542] leading-none font-mono">
              ${siteConfig.pricing.discountedPrice} {siteConfig.pricing.currency}
            </span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.2 rounded">
              50% OFF
            </span>
          </div>
          <span className="text-[10px] text-[#A7ABB2] flex items-center gap-1 mt-0.5">
            <ShieldCheck className="w-3 h-3 text-[#FFC542]" /> 4 bonos incluidos
          </span>
        </div>

        <a
          href={siteConfig.pricing.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout()}
          className="inline-flex items-center justify-center font-bold text-xs uppercase px-5 py-2.5 rounded-lg bg-[#FFC542] text-[#0B0C0E] hover:bg-[#D89E25] active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span>COMPRAR AHORA</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </a>
      </div>
    </div>
  );
};
