import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export interface PropertyCardProps {
  name: string;
  neighborhood: string;
  city: string;
  bedrooms: number[];
  areaMin: number;
  areaMax?: number;
  parkingSpaces: number[];
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

  const maxBedrooms = Math.max(...bedrooms);
  const minBedrooms = Math.min(...bedrooms);
  const formattedBedrooms = maxBedrooms !== minBedrooms 
    ? `${minBedrooms} a ${maxBedrooms} quartos` 
    : `${maxBedrooms} ${maxBedrooms === 1 ? 'quarto' : 'quartos'}`;

  const maxParking = Math.max(...parkingSpaces);

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
        <h3 className="text-xl font-serif text-foreground mb-1">{name}</h3>
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
            <span>{maxParking} {maxParking === 1 ? 'vaga' : 'vagas'}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
            Conhecer Empreendimento
          </Button>
        </div>
      </div>
    </div>
  );
}
