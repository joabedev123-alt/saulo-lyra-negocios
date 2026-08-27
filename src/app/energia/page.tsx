import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Energia() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop"
            alt="Inteligência Energética"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-primary tracking-[0.2em] text-xs font-semibold uppercase mb-6 block">
            Inteligência Energética
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-8">
            ENERGIA TAMBÉM É ESTRATÉGIA DE NEGÓCIO.
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-12 font-light">
            Avalie novas possibilidades de contratação de energia para sua empresa através do Mercado Livre de Energia.
          </p>
          <Button size="lg">Avaliar minha empresa</Button>
        </div>
      </section>

      {/* O QUE É O MERCADO LIVRE DE ENERGIA */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-foreground mb-8">O QUE É O MERCADO LIVRE DE ENERGIA?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O ambiente permite que consumidores elegíveis negociem condições de contratação de energia de forma diferente do modelo tradicional, observadas regras e condições aplicáveis. Não se trata apenas de uma redução de custos, mas de uma nova forma de planejamento orçamentário.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-16 text-center">BENEFÍCIOS POTENCIAIS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-surface border border-border-light">
              <i className="bi bi-wallet2 text-3xl text-primary mb-6 block"></i>
              <h3 className="text-lg font-serif text-foreground mb-3">POSSIBILIDADE DE ECONOMIA</h3>
              <p className="text-sm text-muted">Avaliação de alternativas comerciais mais competitivas frente ao mercado cativo.</p>
            </div>
            <div className="p-8 bg-surface border border-border-light">
              <i className="bi bi-graph-up-arrow text-3xl text-primary mb-6 block"></i>
              <h3 className="text-lg font-serif text-foreground mb-3">PREVISIBILIDADE</h3>
              <p className="text-sm text-muted">Maior capacidade de planejamento financeiro e proteção contra oscilações tarifárias.</p>
            </div>
            <div className="p-8 bg-surface border border-border-light">
              <i className="bi bi-arrow-left-right text-3xl text-primary mb-6 block"></i>
              <h3 className="text-lg font-serif text-foreground mb-3">NEGOCIAÇÃO</h3>
              <p className="text-sm text-muted">Condições comerciais e flexibilidade contratual alinhadas ao perfil da sua operação.</p>
            </div>
            <div className="p-8 bg-surface border border-border-light">
              <i className="bi bi-gear text-3xl text-primary mb-6 block"></i>
              <h3 className="text-lg font-serif text-foreground mb-3">ESTRATÉGIA</h3>
              <p className="text-sm text-muted">A energia passa a ser analisada dentro do planejamento macro do seu negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="py-24 px-6 bg-surface border-y border-border-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">SUA EMPRESA PODE TER NOVAS POSSIBILIDADES.</h2>
            <p className="text-muted">Envie algumas informações da sua operação para uma avaliação inicial.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Nome completo" />
              <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Empresa" />
              <input type="tel" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="WhatsApp" />
              <input type="email" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="E-mail" />
              <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Valor médio da conta de energia (R$)" />
              <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Segmento da empresa" />
            </div>
            <Button type="button" className="w-full" size="lg">Solicitar Avaliação Inicial</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
