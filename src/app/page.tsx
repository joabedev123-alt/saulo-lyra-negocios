import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PropertyCard } from "@/components/shared/PropertyCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Hero Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-primary tracking-[0.2em] text-xs font-semibold uppercase mb-6 block">
            Imóveis • Negócios • Energia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
            OPORTUNIDADES QUE CONSTROEM PATRIMÔNIO.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 font-light">
            Negócios imobiliários selecionados e soluções empresariais desenvolvidas para quem pensa além do presente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/imoveis">
              <Button size="lg" className="w-full sm:w-auto">Explorar Oportunidades</Button>
            </Link>
            <Link href="/quem-somos">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-background">
                Conhecer a Empresa
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* 2. INSTITUCIONAL */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary tracking-widest text-xs font-semibold uppercase mb-6 block">
            Saulo Lyra Negócios e Participações
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            EXPERIÊNCIA, RELACIONAMENTO E VISÃO DE LONGO PRAZO.
          </h2>
          <p className="text-muted text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Uma estrutura de negócios voltada à identificação e conexão de clientes com oportunidades selecionadas nos mercados imobiliário e empresarial. Atuando com solidez e inteligência desde 2013.
          </p>
          <div className="flex justify-center">
            <Link href="/quem-somos" className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:text-white transition-colors">
              Conheça nossa trajetória <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. DOIS PILARES */}
      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[60vh] flex items-center p-12 lg:p-24 group overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600607687931-ceeb8d145c36?q=80&w=2000&auto=format&fit=crop"
              alt="Negócios Imobiliários"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/80 transition-colors duration-500 group-hover:bg-background/70" />
          </div>
          <div className="relative z-10 max-w-md">
            <span className="text-primary text-xs tracking-widest uppercase mb-4 block">01 — Negócios Imobiliários</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              IMÓVEIS QUE REPRESENTAM MAIS DO QUE UM ENDEREÇO.
            </h2>
            <p className="text-muted-foreground mb-8">
              Lançamentos e empreendimentos novos selecionados para morar, investir e construir patrimônio.
            </p>
            <Link href="/imoveis">
              <Button variant="outline">Explorar Imóveis</Button>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[60vh] flex items-center p-12 lg:p-24 group overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop"
              alt="Energia"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/80 transition-colors duration-500 group-hover:bg-background/70" />
          </div>
          <div className="relative z-10 max-w-md">
            <span className="text-primary text-xs tracking-widest uppercase mb-4 block">02 — Energia</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              ENERGIA TRATADA COMO DECISÃO ESTRATÉGICA.
            </h2>
            <p className="text-muted-foreground mb-8">
              Soluções para empresas e indústrias que buscam eficiência, previsibilidade e novas possibilidades no Mercado Livre de Energia.
            </p>
            <Link href="/energia">
              <Button variant="outline">Conhecer Soluções</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DESTAQUES */}
      <section className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">OPORTUNIDADES SELECIONADAS</h2>
              <p className="text-muted text-lg">
                Uma curadoria de lançamentos e imóveis novos escolhidos por localização, conceito e potencial.
              </p>
            </div>
            <Link href="/imoveis" className="shrink-0 group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors">
              Ver todos os empreendimentos <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mock Property Cards */}
            <PropertyCard
              name="Reserva Cidade Jardim"
              neighborhood="Cidade Jardim"
              city="São Paulo"
              bedrooms={[3, 4]}
              areaMin={180}
              areaMax={250}
              parkingSpaces={[3, 4]}
              category="Alto Padrão"
              imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
              slug="reserva-cidade-jardim"
            />
            <PropertyCard
              name="Lumina Pinheiros"
              neighborhood="Pinheiros"
              city="São Paulo"
              bedrooms={[1, 2]}
              areaMin={65}
              areaMax={95}
              parkingSpaces={[1, 2]}
              category="Lançamento"
              imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
              slug="lumina-pinheiros"
            />
            <PropertyCard
              name="Heritage Itaim"
              neighborhood="Itaim Bibi"
              city="São Paulo"
              bedrooms={[4]}
              areaMin={320}
              parkingSpaces={[4]}
              category="Altíssimo Padrão"
              imageUrl="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=1000&auto=format&fit=crop"
              slug="heritage-itaim"
            />
          </div>
        </div>
      </section>

      {/* 5. CAPTAÇÃO / OPORTUNIDADES */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-primary/5 p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-light">
          <span className="text-primary text-xs tracking-widest uppercase mb-6 block">Curadoria</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            NOVAS OPORTUNIDADES. NO MOMENTO CERTO.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg">
            As melhores condições frequentemente surgem antes mesmo de você começar a procurar. Cadastre suas preferências e deixe-nos apresentar possibilidades alinhadas ao seu perfil.
          </p>
        </div>
        <div className="p-12 lg:p-24 bg-surface flex flex-col justify-center">
          <h3 className="text-2xl font-serif text-white mb-2">RECEBA OPORTUNIDADES</h3>
          <p className="text-muted mb-8">Defina seu perfil de interesse.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Nome</label>
                <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</label>
                <input type="tel" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="(11) 90000-0000" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Objetivo</label>
              <select className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
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
      <section className="py-16 border-y border-border-light bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-border-light/50">
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-primary mb-2">2013</span>
            <span className="text-xs uppercase tracking-widest text-muted">Fundação</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-primary mb-2">13</span>
            <span className="text-xs uppercase tracking-widest text-muted">Anos de Mercado</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-primary mb-2 text-nowrap">54630-J</span>
            <span className="text-xs uppercase tracking-widest text-muted">CRECI/SP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-5xl font-serif text-primary mb-2">02</span>
            <span className="text-xs uppercase tracking-widest text-muted">Áreas Estratégicas</span>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="relative py-32 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
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
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-background">
                Receber oportunidades
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
