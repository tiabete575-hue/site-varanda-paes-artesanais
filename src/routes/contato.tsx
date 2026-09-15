import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Instagram, MapPin, Phone } from "lucide-react";
import { contato } from "@/data/menu";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [
    { title: "Contato e Horários | Varanda Pães Artesanais" },
    { name: "description", content: "Endereço, telefone, horário e rota para a Varanda Pães Artesanais, na CLN 215, Bloco D, Loja 39, Asa Norte, Brasília." },
  ] }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto max-w-6xl px-5"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Fale com a casa</p><h1 className="mt-4 font-display text-5xl font-semibold md:text-6xl">Contato e horários</h1><p className="mt-4 max-w-xl text-primary-foreground/75">Venha buscar seu pão, montar uma cesta ou só tomar um café. A Varanda está aberta de terça a sábado na Asa Norte.</p></div></section>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl bg-secondary p-8 md:p-12"><h2 className="font-display text-4xl font-semibold">Varanda Pães Artesanais</h2><div className="mt-8 space-y-7">
          <div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><div><strong className="block">Endereço</strong><p className="mt-1 leading-relaxed text-muted-foreground">{contato.endereco}</p><a href={contato.mapa} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-primary hover:underline">Abrir rota no Google Maps</a></div></div>
          <div className="flex gap-4"><Clock3 className="mt-1 size-5 shrink-0 text-primary" /><div><strong className="block">Horário</strong><p className="mt-1 text-muted-foreground">{contato.horario}</p><p className="mt-1 text-sm text-muted-foreground">{contato.horarioDetalhe}</p></div></div>
          <div className="flex gap-4"><Phone className="mt-1 size-5 shrink-0 text-primary" /><div><strong className="block">Telefone</strong><a href={contato.telefoneLink} className="mt-1 block text-muted-foreground hover:text-primary">{contato.telefone}</a></div></div>
          <div className="flex gap-4"><Instagram className="mt-1 size-5 shrink-0 text-primary" /><div><strong className="block">Instagram</strong><a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 block text-muted-foreground hover:text-primary">@varandapaesartesanais</a></div></div>
        </div></div>
        <div className="flex flex-col justify-center"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Antes de sair de casa</p><h2 className="mt-4 font-display text-4xl font-semibold">Quer saber o pão do dia?</h2><p className="mt-5 leading-relaxed text-muted-foreground">Ligue ou acesse o cardápio online para verificar os sabores da semana, produtos disponíveis, encomendas de cestas e atendimento em feriados.</p><a href={contato.telefoneLink} className="mt-7 inline-flex w-fit rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Ligar agora</a><a href={contato.cardapioOnline} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-fit rounded-full border border-primary/30 px-6 py-3 font-semibold text-primary">Ver cardápio online</a><a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-fit rounded-full border border-primary/30 px-6 py-3 font-semibold text-primary">Abrir Instagram</a></div>
      </section>
    </>
  );
}
