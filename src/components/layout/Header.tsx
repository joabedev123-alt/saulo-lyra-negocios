"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Imóveis", href: "/imoveis" },

  { name: "Energia", href: "/energia" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "-translate-y-full opacity-0 pointer-events-none" 
            : "translate-y-0 opacity-100 bg-background border-b border-border-light shadow-sm"
        )}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-20 md:h-24">
        
        <div className="flex lg:flex-1 h-full">
          <Link href="/" className="flex items-center h-full">
            <span className="sr-only">Saulo Lyra Negócios e Participações</span>
            <Image 
              src="/logo 02.png"
              alt="Saulo Lyra Negócios e Participações" 
              width={250} 
              height={80} 
              className="h-full w-auto object-contain transition-all brightness-0 scale-150 transform origin-left" 
            />
          </Link>
        </div>

        <nav className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-widest font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/receba-oportunidades">
            <Button variant="primary">
              Receba Oportunidades
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground bg-white/50 backdrop-blur-md border border-border-light shadow-sm"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-6">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="sr-only">Saulo Lyra Negócios e Participações</span>
              <Image 
                src="/logo 02.png"
                alt="Saulo Lyra Negócios e Participações" 
                width={500} 
                height={160} 
                className="h-28 w-auto object-contain brightness-0" 
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mt-6 flow-root px-6">
            <div className="-my-6 divide-y divide-border-light">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-4 text-base font-serif uppercase tracking-widest transition-colors",
                        isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-surface"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Link
                  href="/receba-oportunidades"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-4 text-base font-serif uppercase tracking-widest text-foreground hover:bg-surface"
                >
                  Receba Oportunidades
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
