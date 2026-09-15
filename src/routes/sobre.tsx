import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Pizza, Soup, Wheat } from "lucide-react";

const facade = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkOc2tJWFftBGz_VmGPL4BzTbx_iiNTzIgR6WW15vt092jf0-MxVKEghgoTt9VIfWuLvzApI_mWoAV2nYV1UvFOxgk1LARwP6Af-ySEoP4dUqOhZ0GXz7Js6ieIGJBDkLTlFY_ro5w5WaM8=s1400";
const interior = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbxrnoPSY8Z0EldvFoM3Q8guGSHZB-S93zkenaXDdW_n5NjwMfhADJIybmQ4xnDU14j89YafAmZzT9zYro-wWqJWDXccZs9Rkn-cqfQTpuHVxUmbFgUvmJZ2yrdnSKnwq6O1l2_Y5fxFQ2=s1000";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "A Padaria | Pães e Vinhos — Brasília" },
    { name: "description", content: "Conheça a Pães e Vinhos Padaria: pães artesanais, cafeteria, confeitaria, refeições caseiras, pizzaria e vinhos no Sudoeste." },
  ] }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-primary"><img src={facade} alt="Fachada da Pães e Vinhos Padaria" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-primary/75" /><div className="relative mx-auto flex min-h-[50vh] max-w-6xl items-end px-5 pb-14"><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Nossa casa</p><h1 className="mt-3 font-display text-5xl font-semibold text-primary-foreground md:text-6xl">Pães, vinhos e encontros</h1></div></div></section>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2"><div><p className="font-display text-3xl font-semibold leading-snug md:text-4xl">Uma padaria completa no Sudoeste, aberta do café da manhã ao fim da noite.</p><p className="mt-6 leading-relaxed text-muted-foreground">A Pães e Vinhos se apresenta como panificadora fina, café e confeitaria. Na mesma casa, você encontra pães artesanais, matinais, refeições caseiras, lanches em pães próprios, crepes, caldos, pizzas e vinhos.</p><p className="mt-4 leading-relaxed text-muted-foreground">É um endereço para passar cedo, almoçar, fazer uma pausa no meio da tarde ou dividir uma pizza à noite — todos os dias.</p></div><img src={interior} alt="Interior e balcões da Pães e Vinhos" loading="lazy" className="h-[32rem] w-full rounded-2xl object-cover" /></section>
      <section className="bg-secondary py-20"><div className="mx-auto max-w-6xl px-5"><h2 className="font-display text-4xl font-semibold">Tudo o que cabe na Pães e Vinhos</h2><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[[Wheat,"Pães & salgados"],[Coffee,"Café & confeitaria"],[Soup,"Buffet, caldos & crepes"],[Pizza,"Pizzas & vinhos"]].map(([Icon,label]) => { const C = Icon as typeof Wheat; return <div key={label as string} className="rounded-xl border border-border bg-card p-6"><C className="size-7 text-primary" /><h3 className="mt-4 font-display text-2xl font-semibold">{label as string}</h3></div>; })}</div></div></section>
      <section className="mx-auto max-w-3xl px-5 py-20 text-center"><h2 className="font-display text-4xl font-semibold">Escolha o que vai para a sua mesa</h2><p className="mt-4 text-muted-foreground">Consulte crepes, caldos e as dezenas de sabores de pizza do cardápio.</p><Link to="/cardapio" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Ver o cardápio <ArrowRight className="size-4" /></Link></section>
    </>
  );
}
