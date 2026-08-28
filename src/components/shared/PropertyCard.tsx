"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  name: string;
  neighborhood: string;
  city: string;
  bedrooms: number[] | string;
  areaMin: number;
  areaMax?: number;
  parkingSpaces: number[] | string;
  category: string;
  imageUrl: string;
  gallery?: string[];
  slug: string;
}

export function PropertyCard({
  name,
  neighborhood,
  city,
  bedrooms,
  areaMin,
  areaMax,
  parkingSpaces,
  category,
  imageUrl,
  gallery,
  slug,
}: PropertyCardProps) {
  
  const formattedArea = areaMax && areaMax !== areaMin 
    ? `${areaMin} a ${areaMax} m²`
    : `${areaMin} m²`;

  const formattedBedrooms = Array.isArray(bedrooms)
    ? (Math.max(...bedrooms) !== Math.min(...bedrooms)
      ? `${Math.min(...bedrooms)} a ${Math.max(...bedrooms)} suítes`
      : `${Math.max(...bedrooms)} ${Math.max(...bedrooms) === 1 ? 'suíte' : 'suítes'}`)
    : bedrooms;

  const formattedParking = Array.isArray(parkingSpaces)
    ? (Math.max(...parkingSpaces) !== Math.min(...parkingSpaces)
      ? `${Math.min(...parkingSpaces)} a ${Math.max(...parkingSpaces)} vagas`
      : `${Math.max(...parkingSpaces)} ${Math.max(...parkingSpaces) === 1 ? 'vaga' : 'vagas'}`)
    : parkingSpaces;

  const images = gallery && gallery.length > 0 ? gallery : [imageUrl];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, prevImage, nextImage]);

  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-md bg-surface border border-border-light transition-all hover:border-primary/50 hover:shadow-lg">
        
        {/* CARROSSEL NO CARD */}
        <div 
          className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#e0e0e0] cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
        >
          {images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`Imagem do empreendimento ${name} ${idx + 1}`}
              fill
              className={`object-cover object-center transition-opacity duration-700 ${
                idx === currentImageIndex 
                  ? "opacity-100 z-10" 
                  : "opacity-0 z-0"
              }`}
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
          
          {/* Setas Laterais */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all"
                aria-label="Imagem anterior"
              >
                <i className="bi bi-chevron-left text-sm"></i>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all"
                aria-label="Próxima imagem"
              >
                <i className="bi bi-chevron-right text-sm"></i>
              </button>
            </>
          )}

          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="inline-flex items-center rounded-sm bg-background/80 backdrop-blur-md px-2.5 py-0.5 text-xs font-medium text-foreground uppercase tracking-widest border border-border-light shadow-sm">
              {category}
            </span>
          </div>

          {/* Indicadores de carrossel */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex ? "w-5 bg-primary" : "w-1.5 bg-white/70"}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* TEXTOS E LINK PARA DETALHES */}
        <Link href={`/imoveis/${slug}`} className="flex flex-1 flex-col p-6 hover:bg-surface-dark transition-colors">
          <h3 className="text-[22px] md:text-[25px] font-serif text-[#252525] mb-1 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-sm text-muted mb-4">{neighborhood}, {city}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              <i className="bi bi-rulers text-primary"></i>
              <span>{formattedArea}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="bi bi-house text-primary"></i>
              <span>{formattedBedrooms}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="bi bi-car-front text-primary"></i>
              <span>{formattedParking}</span>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-border-light/50">
            <Button variant="outline" className="w-full text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-4 pointer-events-none">
              Ver detalhes →
            </Button>
          </div>
        </Link>
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
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary p-4 z-50 transition-colors"
            >
              <i className="bi bi-chevron-left text-4xl md:text-5xl"></i>
            </button>
          )}

          <div className="relative w-full h-full max-w-7xl px-4 md:px-24 flex items-center justify-center" onClick={() => setIsLightboxOpen(false)}>
            <div className="relative w-full h-[85vh] cursor-default" onClick={(e) => e.stopPropagation()}>
                <Image
                src={images[currentImageIndex]}
                alt={`Imagem fullscreen ${name} ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
                />
            </div>
          </div>

          {images.length > 1 && (
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-primary p-4 z-50 transition-colors"
            >
              <i className="bi bi-chevron-right text-4xl md:text-5xl"></i>
            </button>
          )}

          <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 font-serif tracking-widest text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
