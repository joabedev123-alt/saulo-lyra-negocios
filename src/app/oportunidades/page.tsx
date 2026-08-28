import { PropertyCard } from "@/components/shared/PropertyCard";
import { properties } from "@/data/properties";

export default function Oportunidades() {
  const oportunidadesIds = [
    "havva-casa-piaui",
    "helbor-lens-moema",
    "lindenberg-alto-das-nacoes",
    "agami-park-residences"
  ];

  const oportunidades = properties.filter(p => oportunidadesIds.includes(p.id));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 border-b border-border-light bg-surface/30">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary tracking-widest text-xs font-semibold uppercase mb-4 block">
            Seleção Especial
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
            OPORTUNIDADES DO MÊS
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma curadoria rigorosa de unidades com condições excepcionais de negociação, potencial de valorização acima da média ou características raras no mercado.
          </p>
        </div>
      </section>

      {/* GRID DE OPORTUNIDADES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {oportunidades.map(p => (
              <PropertyCard
                key={p.id}
                name={p.name}
                neighborhood={p.neighborhood}
                city={p.city}
                bedrooms={p.bedrooms}
                areaMin={p.areaMin}
                areaMax={p.areaMax}
                parkingSpaces={p.parkingSpaces}
                category={p.category}
                imageUrl={p.imageUrl}
                gallery={p.gallery}
                slug={p.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
