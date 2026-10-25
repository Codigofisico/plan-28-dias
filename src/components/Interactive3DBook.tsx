import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../siteConfig';
import { Rotate3D, Sparkles, RefreshCw } from 'lucide-react';

interface Interactive3DBookProps {
  className?: string;
}

export const Interactive3DBook: React.FC<Interactive3DBookProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(-5);
  const [rotateY, setRotateY] = useState(12);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [is3DMode, setIs3DMode] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Default subtle tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (is3DMode) {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      setRotateY(prev => prev + deltaX * 0.6);
      setRotateX(prev => Math.max(Math.min(prev - deltaY * 0.4, 60), -60));
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      return;
    }

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;

    setRotateY(normalizedX * 18);
    setRotateX(-normalizedY * 16);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!is3DMode) return;
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (!is3DMode) {
      setRotateX(-3);
      setRotateY(8);
      setGlarePos(prev => ({ ...prev, opacity: 0 }));
    }
    setIsDragging(false);
  };

  // Touch support for mobile dragging
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!is3DMode) return;
    const touch = e.touches[0];
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!is3DMode || !isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastMousePos.current.x;
    const deltaY = touch.clientY - lastMousePos.current.y;
    setRotateY(prev => prev + deltaX * 0.7);
    setRotateX(prev => Math.max(Math.min(prev - deltaY * 0.5, 60), -60));
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  };

  const resetOrientation = () => {
    setRotateX(-4);
    setRotateY(12);
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      
      {/* 3D Perspective Viewport */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
        style={{ perspective: '1300px' }}
        className={`relative w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center p-4 cursor-${is3DMode ? (isDragging ? 'grabbing' : 'grab') : 'default'}`}
      >
        {/* Volumetric 3D Book Container */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative w-full h-full max-h-[460px] rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        >
          {/* Front Cover Face */}
          <div className="absolute inset-0 rounded-lg overflow-hidden border border-white/20 bg-[#17191D] z-20 backface-hidden">
            <img
              src={siteConfig.assets.bookCover}
              alt="Código Fuerza 28 Ebook Digital Portada"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.dataset.triedFallback !== 'true') {
                  target.dataset.triedFallback = 'true';
                  target.src = siteConfig.assets.bookCoverFallback;
                }
              }}
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* Specular Glare following cursor */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={{
                opacity: glarePos.opacity,
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 197, 66, 0.15) 35%, transparent 65%)`,
              }}
            />

            {/* Top Right Verified Badge */}
            <div className="absolute top-3 right-3 bg-[#0B0C0E]/90 backdrop-blur-sm border border-[#FFC542]/40 text-[#FFC542] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
              91 PÁGINAS PDF
            </div>
          </div>

          {/* Book Spine (Left 3D side) */}
          <div
            style={{
              width: '34px',
              height: '100%',
              left: 0,
              top: 0,
              transform: 'rotateY(-90deg) translateZ(17px)',
              transformOrigin: 'left center',
            }}
            className="absolute bg-gradient-to-r from-[#0B0C0E] via-[#1F2228] to-[#17191D] border border-white/15 flex items-center justify-center text-center overflow-hidden z-10"
          >
            <span
              style={{ writingMode: 'vertical-rl' }}
              className="text-[9px] font-extrabold uppercase tracking-widest text-[#FFC542] rotate-180"
            >
              CÓDIGO FUERZA 28 · GUÍA DE 28 DÍAS
            </span>
          </div>

          {/* Book Pages Edge (Right 3D paper layers) */}
          <div
            style={{
              width: '32px',
              height: '98%',
              right: 0,
              top: '1%',
              transform: 'rotateY(90deg) translateZ(16px)',
              transformOrigin: 'right center',
              background: 'repeating-linear-gradient(to right, #e2e8f0 0px, #cbd5e1 1px, #f8fafc 2px, #94a3b8 3px)',
            }}
            className="absolute border-y border-slate-400 rounded-sm shadow-inner opacity-90 z-10"
          />

          {/* Back Cover Face */}
          <div
            style={{
              transform: 'rotateY(180deg) translateZ(32px)',
            }}
            className="absolute inset-0 rounded-lg overflow-hidden border border-white/20 bg-[#17191D] p-6 flex flex-col justify-between text-left backface-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-xs font-extrabold text-[#FFC542] tracking-wider uppercase">
                  CÓDIGO FÍSICO
                </span>
                <span className="text-[10px] text-[#A7ABB2]">EDICIÓN DIGITAL</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Código Fuerza 28: Desde Cero
              </h4>
              <p className="text-[11px] text-[#A7ABB2] leading-relaxed mb-4">
                Programa estructurado de calistenia y peso corporal para entrenar en casa sin equipo especializado.
              </p>
              <div className="space-y-1.5 text-[10px] text-slate-300">
                <div>✓ 4 Semanas progresivas</div>
                <div>✓ 10 Capítulos detallados</div>
                <div>✓ Pautas de postura y descanso</div>
                <div>✓ 4 Bonos complementarios incluidos</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[10px] text-[#FFC542] font-semibold text-center">
              Incluye garantía oficial de 7 días
            </div>
          </div>
        </div>
      </div>

      {/* 3D Interaction Control Pill */}
      <div className="flex items-center gap-2 mt-3 z-30">
        <button
          type="button"
          onClick={() => {
            setIs3DMode(!is3DMode);
            if (!is3DMode) resetOrientation();
          }}
          className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
            is3DMode
              ? 'bg-[#FFC542] text-[#0B0C0E] border-[#FFC542] shadow-md'
              : 'bg-[#17191D]/80 text-[#A7ABB2] hover:text-white border-white/15'
          }`}
        >
          <Rotate3D className="w-3.5 h-3.5" />
          <span>{is3DMode ? 'Modo 3D Activo (Arrastra para girar)' : 'Explorar en 3D'}</span>
        </button>

        {is3DMode && (
          <button
            type="button"
            onClick={resetOrientation}
            aria-label="Restablecer posición del libro"
            className="p-1.5 rounded-full bg-[#17191D] text-[#A7ABB2] hover:text-white border border-white/15 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <p className="text-[11px] text-[#A7ABB2] mt-2 text-center">
        {is3DMode
          ? 'Arrastra con el cursor o el dedo para girar el libro 360°'
          : 'Pasa el cursor para interactuar con la perspectiva'}
      </p>

    </div>
  );
};
