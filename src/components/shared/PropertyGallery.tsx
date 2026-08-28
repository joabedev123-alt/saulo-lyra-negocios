"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PropertyGalleryProps {
  images: string[] | undefined;
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Keyboard navigation for lightbox
  const handlePrevious = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!images) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!images) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handlePrevious, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);


  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full mt-16 pt-12 border-t border-border-light">
      <h3 className="text-[22px] md:text-[25px] font-serif text-foreground mb-8 uppercase">Galeria do Empreendimento</h3>
      
      {/* IN-PAGE CAROUSEL */}
      <div className="relative group w-full h-[350px] md:h-[500px] overflow-hidden bg-surface cursor-zoom-in rounded-sm" onClick={() => setIsLightboxOpen(true)}>
        <Image
          src={images[currentIndex]}
          alt={`Galeria imagem ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm z-10"
              aria-label="Anterior"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm z-10"
              aria-label="Próxima"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </>
        )}
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all",
                idx === currentIndex ? "bg-primary w-6" : "bg-white/60 hover:bg-white w-2"
              )}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX (FULLSCREEN) */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md">
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white p-2 z-50 transition-colors"
            aria-label="Fechar galeria"
          >
            <i className="bi bi-x-lg text-3xl"></i>
          </button>

          {images.length > 1 && (
            <button 
              onClick={handlePrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary p-4 z-50 transition-colors"
            >
              <i className="bi bi-chevron-left text-4xl md:text-5xl"></i>
            </button>
          )}

          <div className="relative w-full h-full max-w-7xl px-4 md:px-24 flex items-center justify-center" onClick={() => setIsLightboxOpen(false)}>
            <div className="relative w-full h-[85vh] cursor-default" onClick={(e) => e.stopPropagation()}>
                <Image
                src={images[currentIndex]}
                alt={`Galeria imagem fullscreen ${currentIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
                />
            </div>
          </div>

          {images.length > 1 && (
            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary p-4 z-50 transition-colors"
            >
              <i className="bi bi-chevron-right text-4xl md:text-5xl"></i>
            </button>
          )}

          <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 font-serif tracking-widest text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
