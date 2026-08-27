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
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-12 px-6 overflow-hidden">
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
                <i className="bi bi-star-fill"></i> Destaque Especial
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-4 uppercase">
                {heritage.name}
              </h1>
              <h2 className="text-2xl font-serif text-foreground mb-6">
                {heritage.builder} {heritage.city} — SP
              </h2>
              <p className="text-lg text-foreground max-w-xl mb-10">
                Os endereços que selecionamos para você. Um novo endereço para quem busca exclusividade, sofisticação e qualidade de vida.
              </p>
              <Link href={`/imoveis/${heritage.slug}`}>
                <Button size="lg" className="uppercase tracking-widest text-xs">
                  Conheça o Empreendimento
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto w-full px-6 py-24 space-y-32">
        
        {/* 2. EMPREENDIMENTOS EM DESTAQUE */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 uppercase">Empreendimentos em Destaque</h2>
            <p className="text-muted text-lg">12 imóveis selecionados do alto padrão.</p>
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 uppercase">Imóveis Prontos</h2>
            <p className="text-muted text-lg">Para o cliente que quer comprar e mudar imediatamente.</p>
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 uppercase">Lançamentos</h2>
            <p className="text-muted text-lg">Para quem busca condição comercial, valorização e escolha de unidade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lancamentos.map(p => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* 5. OPORTUNIDADES EXCLUSIVAS */}
        <section className="bg-surface p-12 md:p-24 border border-border-light text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 uppercase">Oportunidades Exclusivas</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto mb-10">
            Imóveis de proprietários, áreas, ativos imobiliários e operações especiais. Acesso restrito e curadoria dedicada para negociações exclusivas.
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
