import { PropertyCard } from "@/components/shared/PropertyCard";

export default function Oportunidades() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              name="Fasano Itaim"
              neighborhood="Itaim Bibi"
              city="São Paulo"
              bedrooms={[1, 2]}
              areaMin={110}
              areaMax={140}
              parkingSpaces={[2]}
              category="Condição Especial"
              imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
              slug="fasano-itaim-oportunidade"
            />
            <PropertyCard
              name="VN Urupema"
              neighborhood="Vila Madalena"
              city="São Paulo"
              bedrooms={[1]}
              areaMin={45}
              parkingSpaces={[1]}
              category="Última Unidade"
              imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
              slug="vn-urupema-oportunidade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
