import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function RecebaOportunidades() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto w-full px-6 py-12 lg:py-24 text-center">
        
        <span className="text-primary tracking-widest text-xs font-semibold uppercase mb-6 block">
          Curadoria Exclusiva
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
          ANTECIPE-SE ÀS MELHORES OPORTUNIDADES.
        </h1>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          As melhores condições em lançamentos e imóveis exclusivos muitas vezes sequer chegam ao mercado aberto. Cadastre seu perfil para ser informado antes.
        </p>
        
        <div className="bg-surface p-8 lg:p-12 border border-border-light rounded-md text-left">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Nome Completo</label>
                <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
              
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">WhatsApp</label>
                <input type="tel" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">E-mail</label>
              <input type="email" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Objetivo Principal</label>
              <select className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                <option>Selecione um objetivo</option>
                <option>Moradia</option>
                <option>Investimento / Rentabilidade</option>
                <option>Construção de Patrimônio a longo prazo</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Regiões de Interesse</label>
              <textarea rows={2} className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Ex: Itaim Bibi, Pinheiros, ou Campinas e região"></textarea>
            </div>

            <Button type="button" className="w-full" size="lg">Cadastrar meu perfil</Button>
          </form>
        </div>

      </div>
    </div>
  );
}
