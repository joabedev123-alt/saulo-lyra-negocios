import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function QuemSomos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="Sobre a empresa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-primary tracking-[0.2em] text-xs font-semibold uppercase mb-6 block">
            Sobre a empresa
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
            NEGÓCIOS CONSTRUÍDOS SOBRE CONFIANÇA, VISÃO E RELACIONAMENTO.
          </h1>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
          <p>
            Fundada em 2013, a Saulo Lyra Negócios e Participações consolidou-se no mercado através de uma abordagem consultiva e estratégica. Com mais de 13 anos de mercado, nossa atuação é pautada na identificação de oportunidades reais de valorização e crescimento de patrimônio para nossos clientes.
          </p>
          <p>
            Não somos um portal de classificados; somos uma estrutura focada em curadoria imobiliária e inteligência empresarial. Entendemos que as melhores oportunidades muitas vezes não chegam ao conhecimento geral, exigindo antecipação e um relacionamento estreito com as principais incorporadoras do mercado.
          </p>
          <p>
            Além do foco imobiliário de luxo, expandimos nossa inteligência para o Mercado Livre de Energia, auxiliando indústrias e grandes empresas na otimização de custos e no planejamento sustentável de longo prazo.
          </p>
        </div>
      </section>

      {/* ESSÊNCIA */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-white mb-16 text-center">NOSSA ESSÊNCIA</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-border-light bg-background/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-serif text-primary mb-4">VISÃO</h3>
              <p className="text-sm text-muted">Identificar possibilidades antes de simplesmente apresentar produtos.</p>
            </div>
            <div className="p-8 border border-border-light bg-background/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-serif text-primary mb-4">RELACIONAMENTO</h3>
              <p className="text-sm text-muted">Negócios relevantes começam pela compreensão profunda do cliente.</p>
            </div>
            <div className="p-8 border border-border-light bg-background/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-serif text-primary mb-4">CRITÉRIO</h3>
              <p className="text-sm text-muted">Selecionar oportunidades exclusivas com extrema responsabilidade.</p>
            </div>
            <div className="p-8 border border-border-light bg-background/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-serif text-primary mb-4">LONGO PRAZO</h3>
              <p className="text-sm text-muted">Construir relações que permanecem além de uma única transação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-light before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border-light bg-surface/50">
                <span className="text-primary font-serif text-xl block mb-2">2013</span>
                <p className="text-sm text-muted">Fundação da empresa. Início de uma trajetória pautada pela confiança.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-light bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-2 h-2 bg-border-light rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border-light bg-surface/50">
                <span className="text-white font-serif text-xl block mb-2">CONSOLIDAÇÃO</span>
                <p className="text-sm text-muted">Desenvolvimento da atuação e relacionamento forte no mercado imobiliário.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-light bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-2 h-2 bg-border-light rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border-light bg-surface/50">
                <span className="text-white font-serif text-xl block mb-2">EXPANSÃO</span>
                <p className="text-sm text-muted">Ampliação das oportunidades e entrada em novas áreas estratégicas de negócio.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-border-light bg-surface/50">
                <span className="text-primary font-serif text-xl block mb-2">HOJE</span>
                <p className="text-sm text-muted">Atuação integrada e consolidada em negócios imobiliários e mercado de energia.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
