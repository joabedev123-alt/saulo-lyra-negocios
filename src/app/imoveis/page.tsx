import { PropertyCard } from "@/components/shared/PropertyCard";
import { properties } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Imoveis() {
  const heritage = properties.find(p => p.id === "heritage-riviera");
  const destaques = properties.filter(p => p.isHighlight && p.id !== "heritage-riviera");
  const prontos = properties.filter(p => p.status === "Pronto");
  const lancamentos = properties.filter(p => p.status.toLowerCase().includes("lançamento"));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* 1. DESTAQUE ESPECIAL */}
      {heritage && (
        <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={heritage.imageUrl}
              alt={heritage.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
                <i className="bi bi-star-fill"></i> Destaque
              </span>
              <h1 className="text-4xl md:text-[52px] lg:text-[60px] font-serif text-[#252525] mb-2 uppercase leading-tight">
                {heritage.name}
              </h1>
              <h2 className="text-xl font-serif text-foreground mb-8">
                {heritage.builder} {heritage.city} — SP
              </h2>
              <p className="text-lg text-foreground max-w-xl mb-10">
                Uma curadoria de oportunidades imobiliárias para quem exige o extraordinário.
              </p>
              <Link href={`/imoveis/${heritage.slug}`}>
                <Button size="lg" className="uppercase tracking-widest text-sm">
                  Ver detalhes →
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-32 space-y-20 md:space-y-40">
        
        {/* 2. EMPREENDIMENTOS EM DESTAQUE */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-[34px] lg:text-[40px] font-serif text-[#252525] mb-2 uppercase">Imóveis Selecionados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destaques.map(p => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* 3. IMÓVEIS PRONTOS */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-[34px] lg:text-[40px] font-serif text-[#252525] mb-2 uppercase">Prontos para morar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prontos.map(p => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* 4. LANÇAMENTOS */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-[34px] lg:text-[40px] font-serif text-[#252525] mb-2 uppercase">Lançamentos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lancamentos.map(p => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* 5. OPORTUNIDADES EXCLUSIVAS */}
        <section className="bg-surface p-12 md:p-32 border border-border-light text-center">
          <h2 className="text-3xl md:text-[34px] lg:text-[40px] font-serif text-[#252525] mb-6 uppercase">Oportunidades Exclusivas</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto mb-10">
            Imóveis e oportunidades de acesso restrito.
          </p>
          <Link href="/contato">
            <Button size="lg" variant="outline" className="uppercase tracking-widest text-xs">
              Falar com um Consultor
            </Button>
          </Link>
        </section>

      </div>
    </div>
  );
}
