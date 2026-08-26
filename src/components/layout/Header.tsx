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
  { name: "Oportunidades", href: "/oportunidades" },
  { name: "Energia", href: "/energia" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border-light py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Saulo Lyra Negócios e Participações</span>
            <Image 
              src="/Logo 02.png" 
              alt="Saulo Lyra Negócios e Participações" 
              width={250} 
              height={80} 
              className={cn("h-16 md:h-20 w-auto object-contain transition-all", (!scrolled && pathname === "/") ? "brightness-0 invert" : "")} 
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
                  isActive 
                    ? "text-primary" 
                    : scrolled || pathname !== "/" ? "text-foreground/80" : "text-white/80"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/receba-oportunidades">
            <Button variant={scrolled || pathname !== "/" ? "primary" : "outline"} className={!scrolled && pathname === "/" ? "text-white border-white hover:bg-white hover:text-background" : ""}>
              Receba Oportunidades
            </Button>
          </Link>
        </div>

        {/* Mobile menu button could go here */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", 
              scrolled || pathname !== "/" ? "text-foreground" : "text-white"
            )}
          >
            <span className="sr-only">Abrir menu</span>
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>

      </div>
    </header>
  );
}
