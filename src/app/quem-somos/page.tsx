import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function QuemSomos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center bg-surface/30 border-b border-border-light">
        
        <div className="text-center px-6 max-w-4xl mx-auto">
          <span className="text-foreground tracking-[0.2em] text-xs font-semibold uppercase mb-6 block">
            Quem Somos
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8 uppercase">
            Experiência, estratégia e relacionamento para grandes negócios
          </h1>
        </div>
      </section>

      {/* TEXTO PRINCIPAL */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-lg text-foreground leading-relaxed space-y-6">
          <p>
            Atuando no mercado imobiliário desde 2013, a Saulo Lyra Negócios e Participações nasceu a partir de uma trajetória construída no segmento de imóveis de médio e alto padrão, com experiência em negociações de grande porte e operações que exigem visão estratégica, conhecimento de mercado e capacidade de negociação.
          </p>
          <p>
            Ao longo dessa trajetória, desenvolvemos experiência na condução de grandes negócios imobiliários, incluindo comercialização de imóveis, áreas e oportunidades de real estate, além de operações envolvendo negócios empresariais e financeiros.
          </p>
          <p>
            Nosso trabalho vai além da simples intermediação imobiliária. Buscamos compreender o objetivo de cada cliente, identificar oportunidades e estruturar negociações de forma estratégica, conectando proprietários, investidores, compradores, incorporadoras e parceiros.
          </p>
        </div>
      </section>

      {/* NOSSA ATUAÇÃO & PROPÓSITO */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-8">Nossa atuação</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Atuamos principalmente no mercado de médio e alto padrão, com foco em oportunidades que apresentem qualidade, localização, potencial de valorização e segurança na negociação.
              </p>
              <p>
                Nossa experiência permite atuar tanto em operações tradicionais de compra e venda quanto em negociações mais complexas, envolvendo ativos imobiliários, áreas, investimentos e oportunidades empresariais.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-foreground mb-8">Nosso propósito</h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Construir relações de longo prazo por meio de confiança, discrição, conhecimento de mercado e excelência na negociação.
              </p>
              <p>
                Cada negócio é tratado de forma individual, buscando entender profundamente o cenário, os interesses envolvidos e as melhores possibilidades para cada operação.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PILARES */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-12 border border-border-light bg-surface/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-serif text-foreground mb-4">Experiência</h3>
              <p className="text-sm text-foreground">para identificar oportunidades.</p>
            </div>
            <div className="p-12 border border-border-light bg-surface/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-serif text-foreground mb-4">Estratégia</h3>
              <p className="text-sm text-foreground">para estruturar negócios.</p>
            </div>
            <div className="p-12 border border-border-light bg-surface/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-serif text-foreground mb-4">Relacionamento</h3>
              <p className="text-sm text-foreground">para conectar as pessoas certas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-32 px-6 bg-surface border-y border-border-light text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-foreground font-serif text-2xl block mb-4">Saulo Lyra Negócios e Participações</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-12 leading-tight">
            CONECTANDO OPORTUNIDADES, PATRIMÔNIO E GRANDES NEGÓCIOS.
          </h2>
          <Link href="/contato">
            <Button size="lg">Falar com Nossa Equipe</Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
