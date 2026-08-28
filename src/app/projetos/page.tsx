import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Projetos() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-surface/30 px-6">
        <div className="relative z-10 text-center max-w-4xl mx-auto py-24">
          <span className="text-foreground tracking-[0.2em] text-xs font-semibold uppercase mb-6 block">
            Projetos Especiais
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8">
            SOLUÇÕES CUSTOMIZADAS. ESTRUTURAÇÃO SOB MEDIDA.
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-12 font-light">
            Atendemos investidores e corporações na busca, negociação e estruturação de operações imobiliárias fora do padrão convencional.
          </p>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-foreground">BUILT TO SUIT (BTS)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvimento de projetos imobiliários sob medida para atender as necessidades específicas de uma empresa. Encontramos o terreno, coordenamos o projeto, aprovamos a construção e entregamos as chaves por meio de contratos de locação atípicos de longo prazo.
              </p>
              <ul className="space-y-3 text-muted">
                <li className="flex gap-3 items-center"><i className="bi bi-check text-primary"></i> Zero imobilização de capital no imóvel.</li>
                <li className="flex gap-3 items-center"><i className="bi bi-check text-primary"></i> Projeto 100% aderente à operação.</li>
                <li className="flex gap-3 items-center"><i className="bi bi-check text-primary"></i> Previsibilidade financeira.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-foreground">SALE AND LEASEBACK</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sua empresa vende o imóvel em que opera e simultaneamente assina um contrato de locação de longo prazo com o comprador. Uma excelente forma de levantar capital de giro sem precisar mudar a operação de lugar.
              </p>
              <ul className="space-y-3 text-muted">
                <li className="flex gap-3 items-center"><i className="bi bi-check text-primary"></i> Liberação imediata de capital.</li>
                <li className="flex gap-3 items-center"><i className="bi bi-check text-primary"></i> Foco no core business.</li>
                <li className="flex gap-3 items-center"><i className="bi bi-check text-primary"></i> Otimização do balanço patrimonial.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-6">TEM UM PROJETO ESPECÍFICO EM MENTE?</h2>
          <p className="text-lg text-muted mb-12">
            Nossa equipe tem a expertise necessária para estruturar operações imobiliárias complexas com discrição e eficiência.
          </p>
          <Link href="/contato">
            <Button size="lg">Falar com nossa equipe estruturadora</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
