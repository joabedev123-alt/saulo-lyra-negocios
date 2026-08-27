import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const property = properties.find(p => p.slug === slug);
  
  if (!property) {
    notFound();
  }

  const maxBedrooms = Math.max(...property.bedrooms);
  const minBedrooms = Math.min(...property.bedrooms);
  const formattedBedrooms = maxBedrooms !== minBedrooms 
    ? `${minBedrooms} a ${maxBedrooms} quartos` 
    : `${maxBedrooms} ${maxBedrooms === 1 ? 'quarto' : 'quartos'}`;

  const formattedArea = property.areaMax && property.areaMax !== property.areaMin 
    ? `${property.areaMin} a ${property.areaMax} m²`
    : `${property.areaMin} m²`;

  const maxParking = Math.max(...property.parkingSpaces);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end pb-12 px-6 overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            {property.category} • {property.status}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-2">
            {property.name}
          </h1>
          <p className="text-xl text-foreground font-serif">
            {property.builder} | {property.neighborhood}, {property.city}
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-12">
            {/* CARACTERISTICAS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border-light">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Área</span>
                <span className="text-lg text-foreground">{formattedArea}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Dormitórios</span>
                <span className="text-lg text-foreground">{formattedBedrooms}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Vagas</span>
                <span className="text-lg text-foreground">{maxParking}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Status</span>
                <span className="text-lg text-foreground">{property.status}</span>
              </div>
            </div>

            {/* DESCRICAO */}
            <div>
              <h2 className="text-2xl font-serif text-foreground mb-6 uppercase">Sobre o Empreendimento</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  O {property.name} é um projeto exclusivo idealizado pela {property.builder} e localizado em um dos endereços mais privilegiados de {property.city} ({property.neighborhood}). 
                  Desenhado para quem busca qualidade de vida, segurança e sofisticação, o empreendimento entrega um padrão arquitetônico superior e opções completas de bem-estar e convívio.
                </p>
                <p>
                  A Saulo Lyra Negócios e Participações realiza a curadoria especializada desta oportunidade para você, unindo experiência e relacionamento para estruturar a melhor negociação.
                </p>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="lg:col-span-1">
            <div className="bg-surface p-8 border border-border-light sticky top-32">
              <h3 className="text-xl font-serif text-foreground mb-2 uppercase">Interesse no Empreendimento</h3>
              <p className="text-sm text-muted mb-8">
                Preencha seus dados para receber disponibilidade, plantas e condições do {property.name}.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Nome Completo" className="w-full bg-background border border-border-light rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <input type="tel" placeholder="WhatsApp" className="w-full bg-background border border-border-light rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <input type="email" placeholder="E-mail" className="w-full bg-background border border-border-light rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary" />
                </div>
                <Button className="w-full mt-4 uppercase tracking-widest text-xs">Quero receber informações</Button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
