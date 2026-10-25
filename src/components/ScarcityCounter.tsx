/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Flame, Users, ShieldCheck, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { getScarcityDetails } from '../utils/pricing';

interface ScarcityCounterProps {
  variant?: 'full' | 'compact' | 'modal';
  className?: string;
}

export const ScarcityCounter: React.FC<ScarcityCounterProps> = ({
  variant = 'full',
  className = ''
}) => {
  const config = siteConfig.conversionWidgets?.scarcity ?? {
    enabled: true,
    totalSpots: 50,
    reservedSpots: 46,
    liveViewers: 19,
    couponCode: 'CODIGO',
    regularPrice: 24,
    offerPrice: 12
  };

  if (!config.enabled) return null;

  const scarcity = getScarcityDetails(config.totalSpots, config.reservedSpots);

  if (variant === 'compact') {
    return (
      <div
        className={`w-full max-w-xl mx-auto rounded-xl bg-[#12141a]/90 border border-amber-500/30 p-3.5 shadow-lg backdrop-blur-sm text-left ${className}`}
        aria-live="polite"
      >
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="flex items-center gap-1.5 text-amber-400">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>ÚLTIMOS {scarcity.remainingSpots} CUPOS CON 50% OFF</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <Users className="w-3 h-3 text-emerald-400 ml-0.5" />
            <span>{config.liveViewers} viendo ahora</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#1e222d] h-2.5 rounded-full overflow-hidden border border-white/5 relative">
          <div
            className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 h-full rounded-full transition-all duration-1000 relative shadow-[0_0_12px_rgba(255,197,66,0.5)]"
            style={{ width: `${scarcity.percentageReserved}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-2">
          <span className="text-zinc-300 font-medium">
            <strong className="text-white">{scarcity.reservedSpots} de {scarcity.totalSpots}</strong> reservados ({scarcity.percentageReserved}%)
          </span>
          <span className="text-amber-300/90 font-mono font-semibold">
            Cupón {config.couponCode} activo
          </span>
        </div>
      </div>
    );
  }

  // Full / Modal variant
  return (
    <div
      className={`w-full max-w-xl mx-auto rounded-2xl bg-gradient-to-b from-[#14161f] to-[#0e1017] border border-amber-500/40 p-4 sm:p-5 shadow-2xl backdrop-blur-md text-left transition-all relative overflow-hidden ${className}`}
      aria-live="polite"
    >
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header row: Badge + Live Viewers */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide">
          <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-bounce" />
          <span>ALTA DEMANDA: ÚLTIMOS {scarcity.remainingSpots} CUPOS</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          <span>{config.liveViewers} viendo ahora</span>
        </div>
      </div>

      {/* Main text + state */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
        <p className="text-sm font-semibold text-zinc-200">
          Cupos promocionales con 50% OFF:
        </p>
        <p className="text-xs sm:text-sm font-bold text-amber-400">
          {scarcity.reservedSpots} de {scarcity.totalSpots} reservados ({scarcity.percentageReserved}%)
        </p>
      </div>

      {/* Animated progress bar */}
      <div className="w-full bg-[#1a1e28] h-3 rounded-full p-0.5 border border-white/10 shadow-inner mb-3 relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 h-full rounded-full transition-all duration-1000 relative shadow-[0_0_15px_rgba(255,197,66,0.6)]"
          style={{ width: `${scarcity.percentageReserved}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>

      {/* Warning message */}
      <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2.5 mb-3 flex items-start gap-2.5">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-200/90 leading-relaxed">
          Una vez reservados los últimos {scarcity.remainingSpots} cupos, la plataforma desactivará el cupón{' '}
          <span className="font-bold font-mono text-amber-300 underline underline-offset-2">{config.couponCode}</span> y el acceso regresará a su precio regular de{' '}
          <span className="font-bold text-white">${config.regularPrice} USD</span>.
        </p>
      </div>

      {/* Trust footer */}
      <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>Pago único · Entrega digital vía Hotmart · Garantía incondicional de 7 días</span>
      </div>
    </div>
  );
};
