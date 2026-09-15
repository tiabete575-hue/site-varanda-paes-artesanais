import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { menu, contato, type MenuItem } from "@/data/menu";

const banner = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHxsDWvcJyc7Wie8rni80qwTmfRETGP35F5y3rUeoyPEriVOvsHup6yzCeor1TI15RM_MPeE9Olcow8Nun8N5hvNQeB1OIZcfP0aD4eIGS--jMUnqq4yl8lCUirCb5ZpDpm73r=s1200";

export const Route = createFileRoute("/cardapio")({
  head: () => ({ meta: [
    { title: "Cardápio | Pães e Vinhos Padaria" },
    { name: "description", content: "Cardápio da Pães e Vinhos: crepes, caldos, sopas, pizzas tradicionais, especiais e gourmet no Sudoeste, Brasília." },
  ] }),
  component: Cardapio,
});

function Item({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_12px_35px_-30px_oklch(0.25_0.05_20)] transition hover:-translate-y-1 hover:shadow-lg">
      {item.image && <img src={item.image} alt={item.name} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-tight">{item.name}</h3>
          <span className="shrink-0 text-sm font-bold text-primary">{item.prices[0]?.value ?? "Consulte"}</span>
        </div>
        {item.description && <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
      </div>
    </article>
  );
}

function Cardapio() {
  const [category, setCategory] = useState("todos");
  const [search, setSearch] = useState("");
  const sections = useMemo(() => menu
    .filter((section) => category === "todos" || section.id === category)
    .map((section) => ({ ...section, items: section.items.filter((item) => `${item.name} ${item.description ?? ""}`.toLowerCase().includes(search.toLowerCase())) }))
    .filter((section) => section.items.length > 0), [category, search]);

  return (
    <>
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <img src={banner} alt="Produtos da Pães e Vinhos" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/45" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Da primeira fornada à última pizza</p>
          <h1 className="mt-4 font-display text-5xl font-semibold md:text-6xl">Cardápio</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Preços, descrições e itens conforme o cardápio público disponibilizado pela empresa no Google.</p>
        </div>
      </section>

      <div className="sticky top-[65px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 lg:flex-row lg:items-center">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-1">
            <button onClick={() => setCategory("todos")} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${category === "todos" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Tudo</button>
            {menu.map((section) => <button key={section.id} onClick={() => setCategory(section.id)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${category === section.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{section.title}</button>)}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Buscar no cardápio</span>
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar no cardápio" className="w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-sm outline-none focus:border-primary" />
          </label>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-5 py-14">
        {sections.map((section) => (
          <section key={section.id} className="mb-16 scroll-mt-44">
            <div className="mb-7 border-l-2 border-accent pl-5">
              <h2 className="font-display text-4xl font-semibold text-primary">{section.title}</h2>
              {section.intro && <p className="mt-2 text-sm text-muted-foreground">{section.intro}</p>}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{section.items.map((item) => <Item key={`${section.id}-${item.name}`} item={item} />)}</div>
          </section>
        ))}
        {sections.length === 0 && <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">Nenhum item encontrado para “{search}”.</div>}
        <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h2 className="font-display text-3xl font-semibold">Preços podem mudar</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/75">Confirme disponibilidade, tamanhos e valores atuais diretamente com a padaria antes de fazer seu pedido.</p>
          <a href={contato.telefoneLink} className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Ligar para a Pães e Vinhos</a>
        </div>
      </main>
    </>
  );
}
