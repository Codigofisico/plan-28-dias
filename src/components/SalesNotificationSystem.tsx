/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../siteConfig';

export const SalesNotificationSystem: React.FC = () => {
  const config = siteConfig.conversionWidgets?.salesNotifications;
  const notifications = config?.notifications ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!config?.enabled || notifications.length === 0) return;

    let mounted = true;

    const scheduleNext = (delayMs: number) => {
      timerRef.current = setTimeout(() => {
        if (!mounted) return;
        setIsVisible(true);

        // Hide after visible duration (default 6 seconds)
        const visibleMs = (config.visibleDurationSeconds || 6) * 1000;
        const hideTimeout = setTimeout(() => {
          if (!mounted) return;
          if (!isPausedRef.current) {
            setIsVisible(false);
            setCurrentIndex((prev) => (prev + 1) % notifications.length);
            // Random interval between min & max seconds
            const nextDelay =
              (Math.floor(
                Math.random() *
                  ((config.intervalMaxSeconds || 20) - (config.intervalMinSeconds || 12) + 1)
              ) + (config.intervalMinSeconds || 12)) *
              1000;
            scheduleNext(nextDelay);
          } else {
            // Check again in 2 seconds if paused
            const intervalCheck = setInterval(() => {
              if (!isPausedRef.current && mounted) {
                clearInterval(intervalCheck);
                setIsVisible(false);
                setCurrentIndex((prev) => (prev + 1) % notifications.length);
                scheduleNext(12000);
              }
            }, 2000);
          }
        }, visibleMs);

      }, delayMs);
    };

    // First appearance after 6 seconds of page load
    scheduleNext(6000);

    return () => {
      mounted = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [config, notifications.length]);

  if (!config?.enabled || notifications.length === 0) {
    return null;
  }

  const currentItem = notifications[currentIndex];

  const handleDismiss = () => {
    setIsVisible(false);
    setCurrentIndex((prev) => (prev + 1) % notifications.length);
  };

  return (
    <div
      className="fixed z-40 pointer-events-none bottom-20 md:bottom-6 left-3 right-3 sm:left-6 sm:right-auto max-w-sm"
      aria-live="polite"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            className="pointer-events-auto bg-[#10131c]/95 border border-amber-500/35 rounded-xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-start gap-3 relative group"
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              aria-label="Cerrar notificación"
              className="absolute top-2 right-2 p-1 text-zinc-400 hover:text-white rounded-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Book thumbnail preview */}
            <div className="relative shrink-0 w-12 h-14 rounded-md overflow-hidden bg-zinc-900 border border-amber-500/20 shadow-sm flex items-center justify-center">
              <img
                src={siteConfig.assets.bookCover}
                alt="Código Fuerza 28"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.dataset.triedFallback !== 'true') {
                    target.dataset.triedFallback = 'true';
                    target.src = siteConfig.assets.bookCoverFallback;
                  }
                }}
              />
              <span className="absolute bottom-0 inset-x-0 bg-emerald-600/90 text-[8px] text-white font-bold text-center py-0.5 leading-none">
                HOTMART
              </span>
            </div>

            {/* Notification content */}
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Compra verificada</span>
              </div>

              <p className="text-xs text-zinc-100 font-medium leading-tight">
                <strong className="text-white font-semibold">{currentItem.name}</strong> de{' '}
                <span className="text-zinc-200">{currentItem.city}, {currentItem.country}</span> acaba de adquirir{' '}
                <span className="text-amber-300 font-medium">Código Fuerza 28</span>
              </p>

              <div className="flex items-center gap-2 mt-1.5 text-[10px] text-zinc-400">
                <span>hace {currentItem.minutesAgo} minutos</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  Checkout Seguro
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
