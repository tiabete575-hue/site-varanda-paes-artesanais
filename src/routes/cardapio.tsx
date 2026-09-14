import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { menu, contato } from "@/data/menu";
import paes from "@/assets/paes.jpg";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio | Parentela Casa de Pães — Brasília" },
      {
        name: "description",
        content:
          "Massas, risottos, pizzas, feijoada completa, pães de fermentação natural e cafés especiais no cardápio da Parentela Casa de Pães, na Asa Sul.",
      },
      { property: "og:title", content: "Cardápio da Parentela Casa de Pães" },
      {
        property: "og:description",
        content: "Massas, risottos, pizzas, feijoada e pães artesanais na Asa Sul, Brasília.",
      },
    ],
  }),
  component: Cardapio,
});

const categoryGroups = [
  {
    label: "Jantar",
    ids: ["massas", "risottos"],
  },
  {
    label: "Almoço",
    ids: [
      "executivos",
      "cortes-premium",
      "parmegiana-familia",
      "feijoada",
    ],
  },
  {
    label: "Saladas & Entradas",
    ids: ["saladas", "entradas"],
  },
  {
    label: "Pizzas",
    ids: ["pizzas-salgadas", "pizzas-doces"],
  },
  {
    label: "Caldos",
    ids: ["caldos"],
  },
  {
    label: "Drinks",
    ids: ["drinks"],
  },
];

function MenuItemCard({
  item,
}: {
  item: (typeof menu)[0]["items"][0];
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {item.image && (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug text-foreground">
          {item.name}
        </h3>
        {item.description && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {item.prices.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
            >
              {item.prices.length > 1 && (
                <span className="text-xs text-muted-foreground">{p.label}:</span>
              )}
              <span className="text-primary">{p.value}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItemRow({
  item,
}: {
  item: (typeof menu)[0]["items"][0];
}) {
  return (
    <li className="flex flex-col gap-1 border-b border-border py-4 last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="flex-1">
        <span className="font-medium text-foreground">{item.name}</span>
        {item.description && (
          <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
        )}
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        {item.prices.map((p) => (
          <span key={p.label} className="whitespace-nowrap text-sm">
            {item.prices.length > 1 && (
              <span className="text-muted-foreground">{p.label}: </span>
            )}
            <span className="font-medium text-primary">{p.value}</span>
          </span>
        ))}
      </div>
    </li>
  );
}

function Cardapio() {
  const allIds = menu.map((s) => s.id);
  const [activeIds, setActiveIds] = useState<string[]>(allIds);

  const toggleGroup = (ids: string[]) => {
    const allActive = ids.every((id) => activeIds.includes(id));
    if (allActive) {
      setActiveIds((prev) => prev.filter((id) => !ids.includes(id)));
    } else {
      setActiveIds((prev) => [...new Set([...prev, ...ids])]);
    }
  };

  const isGroupActive = (ids: string[]) =>
    ids.every((id) => activeIds.includes(id));

  const visibleSections = menu.filter((s) => activeIds.includes(s.id));

  // Sections that benefit from card layout (have images)
  const cardSections = new Set([
    "massas",
    "risottos",
    "executivos",
    "saladas",
    "entradas",
    "pizzas-salgadas",
    "drinks",
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src={paes}
          alt="Pães artesanais recém-assados"
          width={1200}
          height={900}
          className="h-[38vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.25_0.03_48/0.6)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5">
            <h1 className="font-display text-4xl text-[oklch(0.98_0.01_85)] md:text-5xl">
              Cardápio
            </h1>
            <p className="mt-3 max-w-xl text-[oklch(0.92_0.015_85)]">
              Produtos frescos, receitas de família e ingredientes selecionados todos os dias.
            </p>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl overflow-x-auto px-5">
          <div className="flex gap-2 py-3">
            <button
              onClick={() => setActiveIds(allIds)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeIds.length === allIds.length
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              Tudo
            </button>
            {categoryGroups.map((g) => (
              <button
                key={g.label}
                onClick={() => toggleGroup(g.ids)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isGroupActive(g.ids)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-5 py-14">
        {visibleSections.length === 0 && (
          <p className="text-center text-muted-foreground">
            Nenhuma categoria selecionada.
          </p>
        )}

        {visibleSections.map((section) => {
          const useCards = cardSections.has(section.id);
          return (
            <section key={section.id} id={section.id} className="mb-16 scroll-mt-24">
              {/* Section header with optional category banner */}
              {section.categoryImage ? (
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={section.categoryImage}
                    alt={section.title}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.03_48/0.75)] to-transparent" />
                  <div className="absolute inset-0 flex items-center px-8">
                    <div>
                      <h2 className="font-display text-3xl text-[oklch(0.98_0.01_85)]">
                        {section.title}
                      </h2>
                      {section.intro && (
                        <p className="mt-1 max-w-lg text-sm text-[oklch(0.9_0.02_84)]">
                          {section.intro}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <h2 className="font-display text-3xl text-primary">{section.title}</h2>
                  {section.intro && (
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {section.intro}
                    </p>
                  )}
                </div>
              )}

              {useCards ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <MenuItemCard key={item.name} item={item} />
                  ))}
                </div>
              ) : (
                <ul className="divide-y divide-border rounded-2xl border border-border bg-card px-6">
                  {section.items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        {/* CTA */}
        <div className="mt-4 rounded-2xl bg-secondary p-8 text-center">
          <p className="text-muted-foreground">
            Preços e itens podem variar. Para pedidos e o cardápio sempre atualizado:
          </p>
          <a
            href={contato.cardapioOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Abrir cardápio online
          </a>
        </div>
      </div>
    </>
  );
}
