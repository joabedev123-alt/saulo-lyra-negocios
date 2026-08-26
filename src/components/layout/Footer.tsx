import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border-light pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image 
                src="/Logo 02.png" 
                alt="Saulo Lyra Negócios e Participações" 
                width={250} 
                height={80} 
                className="h-20 md:h-24 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Inteligência e relacionamento na estruturação de grandes negócios desde 2013.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif tracking-widest text-sm uppercase mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link href="/quem-somos" className="hover:text-primary transition-colors">Quem Somos</Link></li>
              <li><Link href="/imoveis" className="hover:text-primary transition-colors">Imóveis</Link></li>
              <li><Link href="/oportunidades" className="hover:text-primary transition-colors">Oportunidades</Link></li>
              <li><Link href="/energia" className="hover:text-primary transition-colors">Energia</Link></li>
              <li><Link href="/projetos" className="hover:text-primary transition-colors">Projetos Especiais</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif tracking-widest text-sm uppercase mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li>+55 11 99999-9999</li>
              <li>contato@saulolyra.com.br</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif tracking-widest text-sm uppercase mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border-light/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Saulo Lyra Negócios e Participações. Todos os direitos reservados. CRECI/SP 54630-J
          </p>
          <div className="flex gap-4 text-xs text-muted">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
