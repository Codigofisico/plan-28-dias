import React from 'react';
import { siteConfig } from '../siteConfig';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { trackInitiateCheckout } from '../utils/analytics';

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'default' | 'large' | 'compact';
  showArrow?: boolean;
  showGuaranteeIcon?: boolean;
  subtext?: string;
  id?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children = "QUIERO EMPEZAR MI PROGRAMA POR $12",
  className = "",
  size = 'default',
  showArrow = true,
  showGuaranteeIcon = false,
  subtext,
  id
}) => {
  const sizeClasses = {
    compact: "py-2.5 px-5 text-xs sm:text-sm",
    default: "min-h-[52px] py-3.5 px-6 sm:px-7 text-xs sm:text-sm md:text-base",
    large: "min-h-[56px] sm:min-h-[60px] py-4 px-6 sm:px-8 text-sm sm:text-base md:text-lg"
  };

  const handleCheckoutClick = () => {
    trackInitiateCheckout();
  };

  return (
    <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
      <a
        href={siteConfig.pricing.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCheckoutClick}
        id={id}
        className={`group relative overflow-hidden inline-flex items-center justify-center font-extrabold tracking-wide text-[#0B0C0E] bg-gradient-to-b from-[#FFCF5A] to-[#FFC542] hover:from-[#FFD770] hover:to-[#D89E25] active:scale-[0.98] transition-all duration-300 rounded-lg shadow-[0_4px_20px_rgba(255,197,66,0.35)] hover:shadow-[0_8px_30px_rgba(255,197,66,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC542] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C0E] text-center uppercase cursor-pointer ${sizeClasses[size]} ${className}`}
      >
        {/* Awwwards High-Impact Shimmer Light Beam */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
        />

        {showGuaranteeIcon && (
          <ShieldCheck className="w-5 h-5 mr-2 shrink-0 text-[#0B0C0E]/85" />
        )}
        <span className="relative z-10 leading-snug text-center">{children}</span>
        {showArrow && (
          <ArrowRight className="relative z-10 w-4 h-4 ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
        )}
      </a>
      {subtext && (
        <span className="text-xs text-[#A7ABB2] tracking-normal text-center">
          {subtext}
        </span>
      )}
    </div>
  );
};
