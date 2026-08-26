import { Button } from "@/components/ui/Button";

export default function Contato() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-16">
        
        {/* TEXTO E INFO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            CONVERSAS IMPORTANTES COMEÇAM COM UMA BOA OPORTUNIDADE.
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Estamos prontos para entender seu momento e apresentar soluções alinhadas ao seu perfil.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <i className="bi bi-whatsapp text-2xl text-primary"></i>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-1">WhatsApp</h3>
                <p className="text-muted">+55 11 99999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <i className="bi bi-envelope text-2xl text-primary"></i>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-1">E-mail</h3>
                <p className="text-muted">contato@saulolyra.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="bg-surface p-8 lg:p-12 border border-border-light rounded-md">
          <form className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Nome</label>
              <input type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">E-mail</label>
              <input type="email" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Assunto</label>
              <select className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                <option>Imóveis</option>
                <option>Oportunidades</option>
                <option>Energia</option>
                <option>Institucional</option>
                <option>Outro</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Mensagem</label>
              <textarea rows={4} className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
            </div>

            <Button type="button" className="w-full">Enviar Mensagem</Button>
          </form>
        </div>

      </div>
    </div>
  );
}
