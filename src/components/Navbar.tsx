import React, { useState, useEffect } from 'react';
import { siteConfig } from '../siteConfig';

const COUNTDOWN_DURATION_MS = 8 * 60 * 1000; // 8 minutos exactos

export const Navbar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>('08:00');

  useEffect(() => {
    // Persist countdown in sessionStorage so refreshing keeps progress
    let targetTime: number;
    try {
      const stored = sessionStorage.getItem('cf28_header_countdown_target');
      if (stored) {
        targetTime = parseInt(stored, 10);
        // If expired or invalid, reset immediately to a fresh 8-minute cycle
        if (isNaN(targetTime) || targetTime <= Date.now()) {
          targetTime = Date.now() + COUNTDOWN_DURATION_MS;
          sessionStorage.setItem('cf28_header_countdown_target', targetTime.toString());
        }
      } else {
        targetTime = Date.now() + COUNTDOWN_DURATION_MS;
        sessionStorage.setItem('cf28_header_countdown_target', targetTime.toString());
      }
    } catch {
      targetTime = Date.now() + COUNTDOWN_DURATION_MS;
    }

    const formatRemaining = () => {
      let remainingMs = targetTime - Date.now();

      // Cuando llega a cero o menos, se reinicia automáticamente a 8 minutos
      if (remainingMs <= 0) {
        targetTime = Date.now() + COUNTDOWN_DURATION_MS;
        try {
          sessionStorage.setItem('cf28_header_countdown_target', targetTime.toString());
        } catch {
          // ignore storage error
        }
        remainingMs = COUNTDOWN_DURATION_MS;
      }

      const totalSeconds = Math.floor(remainingMs / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const pad = (n: number) => String(n).padStart(2, '0');
      return `${pad(minutes)}:${pad(seconds)}`;
    };

    setTimeLeft(formatRemaining());
    const interval = setInterval(() => {
      setTimeLeft(formatRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full select-none shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
      <a
        href={siteConfig.pricing.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Acceder a la oferta de lanzamiento por $12 USD"
        className="block w-full py-2.5 sm:py-3 px-3 sm:px-4 text-center text-white transition-opacity hover:opacity-95 cursor-pointer"
        style={{
          background: 'linear-gradient(90deg, #2E5372 0%, #4A7FA5 100%)',
          textShadow: '0 1px 3px rgba(0,0,0,0.35)',
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap font-extrabold text-[11px] sm:text-[13px] tracking-[0.04em] sm:tracking-[0.08em] uppercase font-['Montserrat',sans-serif]">
          <span className="flex items-center gap-1.5">
            <span role="img" aria-label="lanzamiento" className="text-xs sm:text-sm">⚡</span>
            <span>OFERTA DE LANZAMIENTO</span>
          </span>
          <span className="text-white/70">—</span>
          <span>
            US${siteConfig.pricing.regularPrice} EN US${siteConfig.pricing.discountedPrice}
          </span>
          <span className="text-white/70">—</span>
          <span>TERMINA EN</span>
          <span className="inline-block bg-black/30 text-white font-mono font-extrabold text-[11px] sm:text-[13px] py-0.5 sm:py-1 px-2.5 sm:px-3 rounded ml-1 tracking-normal shadow-inner tabular-nums">
            {timeLeft}
          </span>
        </div>
      </a>
    </header>
  );
};
