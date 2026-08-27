import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-md bg-surface border border-border-light transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Fachada do empreendimento ${name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-sm bg-background/80 backdrop-blur-md px-2.5 py-0.5 text-xs font-medium text-foreground uppercase tracking-widest border border-border-light">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[22px] md:text-[25px] font-serif text-[#252525] mb-1">{name}</h3>
        <p className="text-sm text-muted mb-4">{neighborhood}, {city}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
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
        
        <div className="mt-auto">
          <Button variant="outline" className="w-full text-sm group-hover:bg-primary group-hover:text-primary-foreground">
            Ver detalhes →
          </Button>
        </div>
      </div>
    </div>
  );
}
