import { PropertyCard } from "@/components/shared/PropertyCard";

export default function Imoveis() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* HERO */}
      <section className="pt-16 pb-12 px-6 border-b border-border-light">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            IMÓVEIS SELECIONADOS PARA DIFERENTES MOMENTOS E OBJETIVOS.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Conheça lançamentos e empreendimentos novos selecionados para morar, investir ou construir patrimônio.
          </p>
        </div>
      </section>

      {/* FILTROS E GRID */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filtros (Simples) */}
          <aside className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Localização</h3>
              <select className="w-full bg-surface border border-border-light rounded-sm px-3 py-2 text-sm text-white focus:border-primary outline-none">
                <option>São Paulo, SP</option>
                <option>Campinas, SP</option>
              </select>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Status</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted hover:text-white cursor-pointer"><input type="checkbox" className="accent-primary" /> Lançamento</label>
                <label className="flex items-center gap-2 text-sm text-muted hover:text-white cursor-pointer"><input type="checkbox" className="accent-primary" /> Em obras</label>
                <label className="flex items-center gap-2 text-sm text-muted hover:text-white cursor-pointer"><input type="checkbox" className="accent-primary" /> Pronto para morar</label>
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Dormitórios</h3>
              <div className="flex gap-2">
                {[1, 2, 3, '4+'].map(num => (
                  <button key={num} className="flex-1 py-1 border border-border-light hover:border-primary text-sm text-muted hover:text-primary transition-colors rounded-sm">
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
}
