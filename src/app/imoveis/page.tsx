"use client";

import { Button } from "@/components/ui/Button";
import { FormEvent, useState } from "react";

export default function Imoveis() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoImovel: "Casa",
    tamanho: "",
    quartos: "3",
    vagas: "2",
    regiao: "",
    valorInvestimento: "",
    detalhes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = `*Ficha de Busca de Imóvel*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Tipo:* ${formData.tipoImovel}\n` +
      `*Tamanho Buscado:* ${formData.tamanho} m²\n` +
      `*Quartos:* ${formData.quartos}\n` +
      `*Vagas:* ${formData.vagas}\n` +
      `*Região de Interesse:* ${formData.regiao}\n` +
      `*Valor de Investimento:* ${formData.valorInvestimento}\n` +
      `*Detalhes:* ${formData.detalhes}`;

    const encodedText = encodeURIComponent(text);
    // Número de WhatsApp real
    const whatsappNumber = "5511959914192"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto w-full px-6 py-12 lg:py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-[52px] font-serif text-[#252525] mb-6 uppercase leading-tight">
            Encontre o Seu Imóvel
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha a ficha abaixo com suas preferências. Nossa equipe fará uma busca refinada para encontrar opções exclusivas que combinem com o seu estilo de vida.
          </p>
        </div>

        <div className="bg-surface p-6 md:p-8 lg:p-12 border border-border-light rounded-md shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Dados Pessoais */}
            <div>
              <h3 className="text-lg font-serif uppercase mb-4 border-b border-border-light pb-2">Dados Pessoais</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Nome Completo</label>
                  <input required name="nome" value={formData.nome} onChange={handleChange} type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">E-mail</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Telefone / WhatsApp</label>
                  <input required name="telefone" value={formData.telefone} onChange={handleChange} type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="(11) 95991-4192" />
                </div>
              </div>
            </div>

            {/* Preferências do Imóvel */}
            <div>
              <h3 className="text-lg font-serif uppercase mb-4 border-b border-border-light pb-2">O que você procura?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Tipo de Imóvel</label>
                  <select name="tipoImovel" value={formData.tipoImovel} onChange={handleChange} className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Casa</option>
                    <option>Apartamento</option>
                    <option>Terreno</option>
                    <option>Cobertura</option>
                    <option>Imóvel Comercial</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Tamanho Desejado (m²)</label>
                  <input name="tamanho" value={formData.tamanho} onChange={handleChange} type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Ex: 250m²" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Quartos</label>
                  <select name="quartos" value={formData.quartos} onChange={handleChange} className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Vagas de Garagem</label>
                  <select name="vagas" value={formData.vagas} onChange={handleChange} className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Região / Bairro de Interesse</label>
                  <input required name="regiao" value={formData.regiao} onChange={handleChange} type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Ex: Jardins, Itaim Bibi, Pinheiros..." />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Valor Desejado para Investimento</label>
                  <input name="valorInvestimento" value={formData.valorInvestimento} onChange={handleChange} type="text" className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Ex: Até R$ 2.000.000" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Detalhes Adicionais</label>
                  <textarea name="detalhes" value={formData.detalhes} onChange={handleChange} rows={4} className="w-full bg-background border border-border-light rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Descreva mais detalhes sobre o imóvel dos seus sonhos..."></textarea>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full py-6 text-sm uppercase tracking-widest font-bold">
              Enviar Solicitação <i className="bi bi-whatsapp ml-2"></i>
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}
