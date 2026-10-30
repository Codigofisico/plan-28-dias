/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Flame, ShieldCheck, ArrowRight, Zap, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../siteConfig';
import { ScarcityCounter } from './ScarcityCounter';
import { trackInitiateCheckout } from '../utils/analytics';

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const config = siteConfig.conversionWidgets?.exitIntent;
  const isEnabled = config?.enabled ?? true;
  const dwellPassedRef = useRef(false);

  const openModal = useCallback(() => {
    if (!isEnabled) return;
    try {
      if (sessionStorage.getItem('cf28_exit_intent_shown')) {
        return;
      }
      sessionStorage.setItem('cf28_exit_intent_shown', 'true');
    } catch {
      // sessionStorage might fail in strict privacy modes
    }
    setIsOpen(true);
  }, [isEnabled]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    // Minimum dwell timer (default 15 seconds)
    const dwellTimer = setTimeout(() => {
      dwellPassedRef.current = true;
    }, (config?.triggerDelaySeconds || 15) * 1000);

    // Desktop: mouseleave towards the top browser bar
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 12) {
        openModal();
      }
    };

    // Mobile: fast upward scroll after dwell time
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime;

      if (dwellPassedRef.current && timeDiff > 0 && currentScrollY < lastScrollY - 120) {
        // User scrolled up quickly after reading for at least dwellDelay
        openModal();
      }

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    // Keyboard ESC key handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(dwellTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnabled, config?.triggerDelaySeconds, openModal, closeModal]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#151824] via-[#10121a] to-[#0a0c10] border-2 border-amber-500/60 p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-white text-center z-10 my-8 overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600" />

          {/* Close button */}
          <button
            onClick={closeModal}
            aria-label="Cerrar ventana"
            className="absolute top-3.5 right-3.5 p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Alert pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>Oportunidad única antes de salir</span>
          </div>

          {/* Headline */}
          <h3
            id="exit-modal-title"
            className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase leading-snug mb-2 font-display"
          >
            ¡ESPERA! NO TE QUEDES FUERA DE{' '}
            <span className="text-amber-400">CÓDIGO FUERZA 28</span>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 mb-4 max-w-md mx-auto">
            Tu descuento exclusivo del <strong className="text-amber-300">50% OFF</strong> y los{' '}
            <strong className="text-amber-300">4 bonos de regalo</strong> expiran al abandonar esta página.
          </p>

          {/* Mini product visual card with price */}
          <div className="rounded-xl bg-[#1b1f2e]/80 border border-amber-500/30 p-3 sm:p-4 mb-4 flex items-center gap-4 text-left">
            <img
              src={siteConfig.assets.bundleImage}
              alt="Pack Completo Código Fuerza 28"
              className="w-20 h-20 object-contain rounded-md filter drop-shadow-md shrink-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.dataset.triedFallback !== 'true') {
                  target.dataset.triedFallback = 'true';
                  target.src = siteConfig.assets.bundleImageFallback;
                }
              }}
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs line-through text-zinc-400 font-medium">
                  ${siteConfig.pricing.regularPrice} USD
                </span>
                <span className="text-xs bg-red-500/20 text-red-300 font-bold px-1.5 py-0.5 rounded border border-red-500/30">
                  50% DESCUENTO
                </span>
              </div>
              <div className="text-2xl font-black text-amber-400 font-display">
                ${siteConfig.pricing.discountedPrice} USD
              </div>
              <p className="text-[11px] text-zinc-300 mt-0.5">
                Libro digital completo + 4 bonos de regalo incluidos.
              </p>
            </div>
          </div>

          {/* Scarcity counter inside modal */}
          <div className="mb-4">
            <ScarcityCounter variant="compact" />
          </div>

          {/* Primary CTA */}
          <a
            href={siteConfig.pricing.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInitiateCheckout()}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-zinc-950 font-black text-sm sm:text-base uppercase tracking-wide hover:shadow-[0_0_30px_rgba(255,197,66,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl"
          >
            <span>SÍ, QUIERO APROVECHAR EL 50% OFF (${siteConfig.pricing.discountedPrice} USD)</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Dismissal link */}
          <button
            onClick={closeModal}
            className="mt-3 text-xs text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-4 block mx-auto py-1"
          >
            No gracias, prefiero pagar el precio completo de ${siteConfig.pricing.regularPrice} USD después
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
