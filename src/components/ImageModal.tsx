import React, { useEffect, useCallback } from 'react';
import { PreviewImage } from '../siteConfig';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: PreviewImage[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}) => {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation & lock scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizador de imagen: ${currentImage.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center bg-[#0B0C0E] border border-white/20 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Toolbar */}
        <div className="w-full flex items-center justify-between px-4 py-3 bg-[#17191D] border-b border-white/10 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#FFC542] uppercase font-mono">
              Página {currentIndex + 1} de {images.length}
            </span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span className="text-xs text-[#A7ABB2] truncate max-w-xs sm:max-w-md">
              {currentImage.title}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar visor de imagen"
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC542]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview Canvas */}
        <div className="relative w-full flex items-center justify-center p-3 sm:p-6 overflow-auto max-h-[75vh] bg-[#0B0C0E]">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            onError={(e) => {
              // fallback to local asset if remote fails
              (e.target as HTMLImageElement).src = currentImage.fallbackUrl;
            }}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded shadow-lg border border-white/5 select-none"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#FFC542] text-white hover:text-black border border-white/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC542]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#FFC542] text-white hover:text-black border border-white/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC542]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer info bar */}
        <div className="w-full px-4 py-2.5 bg-[#17191D] border-t border-white/10 flex items-center justify-between text-xs text-[#A7ABB2]">
          <span className="hidden sm:inline">Usa las teclas de flecha ← → para navegar o Escape para cerrar</span>
          <span className="sm:hidden">Desliza o usa las flechas</span>
          <div className="flex items-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-[#FFC542]" />
            <span className="text-[11px] font-medium text-white/80">Vista real del libro</span>
          </div>
        </div>

      </div>
    </div>
  );
};
