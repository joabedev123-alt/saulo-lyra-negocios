import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PropertyCard } from "@/components/shared/PropertyCard";
import { properties } from "@/data/properties";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <section className="relative min-h-[60vh] py-16 md:py-20 flex items-center bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO */}
          <div className="flex flex-col items-start text-left order-2 md:order-1">
            <span className="text-foreground tracking-[0.2em] text-xs font-semibold uppercase mb-4 flex items-center gap-2">
              <i className="bi bi-star-fill text-primary"></i> Lançamento em Destaque
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-2 uppercase">
              Heritage Riviera
            </h1>
            <h2 className="text-xl md:text-2xl font-serif text-foreground/80 mb-6">
              Cyrela Porto Feliz | Interior de São Paulo
            </h2>
            <p className="text-base md:text-lg text-foreground/90 max-w-md mb-8 font-light">
              Um novo endereço para quem busca exclusividade, sofisticação e qualidade de vida.
            </p>
            <div className="w-full sm:w-auto">
              <Link href="/imoveis/heritage-riviera">
                <Button size="lg" className="w-full uppercase tracking-widest text-xs">Conheça o Empreendimento</Button>
              </Link>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative w-full h-[300px] md:h-[500px] order-1 md:order-2 rounded-lg overflow-hidden shadow-xl border border-border-light/30">
            <Image
              src="/imagens/heritage.jpeg"
              alt="Heritage Riviera"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* 2. INSTITUCIONAL */}
      <section className="py-16 md:py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-foreground tracking-widest text-xs font-semibold uppercase mb-6 block">
            Saulo Lyra Negócios e Participações
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
            EXPERIÊNCIA, RELACIONAMENTO E VISÃO DE LONGO PRAZO.
          </h2>
          <p className="text-muted text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Uma estrutura de negócios voltada à identificação e conexão de clientes com oportunidades selecionadas nos mercados imobiliário e empresarial. Atuando com solidez e inteligência desde 2013.
          </p>
          <div className="flex justify-center">
            <Link href="/quem-somos" className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors">
              Conheça nossa trajetória <i className="bi bi-arrow-right text-primary transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. UM PILAR (ENERGIA) */}
      <section className="py-16 md:py-24 px-6 bg-surface/50 border-t border-border-light">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="text-foreground text-xs tracking-widest uppercase mb-4 block">Energia</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            ENERGIA TRATADA COMO DECISÃO ESTRATÉGICA.
          </h2>
          <p className="text-muted-foreground mb-8">
            Soluções para empresas e indústrias que buscam eficiência, previsibilidade e novas possibilidades no Mercado Livre de Energia.
          </p>
          <Link href="/energia">
            <Button variant="outline">Conhecer Soluções</Button>
          </Link>
        </div>
      </section>

      {/* 4. DESTAQUES */}
      <section className="py-16 md:py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">OPORTUNIDADES SELECIONADAS</h2>
              <p className="text-muted text-lg">
                Uma curadoria de lançamentos e imóveis novos escolhidos por localização, conceito e potencial.
              </p>
            </div>
            <Link href="/imoveis" className="shrink-0 group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors">
              Ver todos os empreendimentos <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {properties
              .filter(p => ["heritage-riviera", "havva-casa-piaui", "lens-moema"].includes(p.id))
              .map(p => (
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

          <div className="text-center border-t border-border-light pt-16">
            <h3 className="text-xs uppercase tracking-widest text-muted font-semibold mb-8">Outros empreendimentos selecionados</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-foreground font-serif text-xl">
              <span>Cyrela</span>
              <span className="text-primary text-sm">•</span>
              <span>EZTEC</span>
              <span className="text-primary text-sm">•</span>
              <span>Helbor</span>
              <span className="text-primary text-sm">•</span>
              <span>Gafisa</span>
              <span className="text-primary text-sm">•</span>
              <span>Even</span>
              <span className="text-primary text-sm">•</span>
              <span>Mitre</span>
              <span className="text-primary text-sm">•</span>
              <span>Lindenberg</span>
              <span className="text-primary text-sm">•</span>
              <span>EXTO</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CAPTAÇÃO / OPORTUNIDADES */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-primary/5 p-6 md:p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-light">
          <span className="text-foreground text-xs tracking-widest uppercase mb-6 block">Curadoria</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
            NOVAS OPORTUNIDADES. NO MOMENTO CERTO.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg">
            As melhores condições frequentemente surgem antes mesmo de você começar a procurar. Cadastre suas preferências e deixe-nos apresentar possibilidades alinhadas ao seu perfil.
          </p>
        </div>
        <div className="p-6 md:p-10 lg:p-16 bg-surface flex flex-col justify-center">
          <h3 className="text-2xl font-serif text-foreground mb-2">RECEBA OPORTUNIDADES</h3>
          <p className="text-muted mb-8">Defina seu perfil de interesse.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
                <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</label>
                <input type="tel" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="(11) 90000-0000" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Objetivo</label>
              <select className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                <option value="">Selecione o objetivo</option>
                <option value="moradia">Moradia</option>
                <option value="investimento">Investimento</option>
                <option value="patrimonio">Construção de Patrimônio</option>
              </select>
            </div>

            <div className="pt-4">
              <Button type="button" className="w-full">Cadastrar meu perfil</Button>
            </div>
            <p className="text-xs text-muted text-center mt-4">
              Ao enviar, você concorda em ser contatado pela Saulo Lyra Negócios e Participações.
            </p>
          </form>
        </div>
      </section>

      {/* 6. NÚMEROS / AUTORIDADE */}
      <section className="py-12 border-y border-border-light bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-border-light/50">
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-foreground mb-2">2013</span>
            <span className="text-xs uppercase tracking-widest text-muted">Fundação</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-foreground mb-2">13</span>
            <span className="text-xs uppercase tracking-widest text-muted">Anos de Mercado</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-foreground mb-2 text-nowrap">54630-J</span>
            <span className="text-xs uppercase tracking-widest text-muted">CRECI/SP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-foreground mb-2">02</span>
            <span className="text-xs uppercase tracking-widest text-muted">Áreas Estratégicas</span>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-20 px-6 flex items-center justify-center bg-surface">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
            A PRÓXIMA OPORTUNIDADE PODE COMEÇAR AQUI.
          </h2>
          <p className="text-lg text-muted mb-12">
            Conte o que você procura. Nossa equipe entra em contato para entender seu momento e apresentar possibilidades alinhadas ao seu perfil.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contato">
              <Button size="lg" className="w-full sm:w-auto">Falar com um especialista</Button>
            </Link>
            <Link href="/receba-oportunidades">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-foreground border-foreground hover:bg-foreground hover:text-background">
                Receber oportunidades
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
