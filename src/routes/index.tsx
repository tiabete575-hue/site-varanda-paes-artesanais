import { createFileRoute, Link } from "@tanstack/react-router";
import { Croissant, Coffee, UtensilsCrossed, ArrowRight } from "lucide-react";

import hero from "@/assets/hero-padaria.jpg";
import paes from "@/assets/paes.jpg";
import cafe from "@/assets/cafe.jpg";
import restaurante from "@/assets/restaurante.jpg";
import { contato } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parentela Casa de Pães | Padaria e Restaurante na Asa Sul, Brasília" },
      {
        name: "description",
        content:
          "Casa de pães especiais e restaurante na Asa Sul, Brasília. Pães de fermentação natural, café da manhã, massas, risottos e feijoada em um ambiente acolhedor.",
      },
      { property: "og:title", content: "Parentela Casa de Pães — Brasília" },
      {
        property: "og:description",
        content:
          "Pães especiais, cozinha afetiva e o aconchego de um casarão mineiro na Asa Sul.",
      },
    ],
  }),
  component: Home,
});

const pilares = [
  {
    icon: Croissant,
    title: "Casa de pães",
    text: "Fermentação natural, farinhas selecionadas e fornadas ao longo do dia.",
  },
  {
    icon: Coffee,
    title: "Café da manhã",
    text: "Da primeira xícara ao brunch de domingo, com pães quentinhos na mesa.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurante",
    text: "Massas, risottos, pizzas e a feijoada completa que virou tradição.",
  },
];

function Home() {
  return (
    <>
      <section className="relative">
        <img
          src={hero}
          alt="Salão da Parentela Casa de Pães com pães artesanais e mesas de madeira"
          width={1920}
          height={1088}
          className="h-[78vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.03_48/0.85)] via-[oklch(0.2_0.03_48/0.45)] to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">
              Asa Sul · Brasília
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-[oklch(0.98_0.01_85)] md:text-6xl">
              O aconchego de um casarão mineiro, no coração da cidade
            </h1>
            <p className="mt-5 max-w-xl text-base text-[oklch(0.93_0.015_85)]">
              Uma casa de pães especiais e restaurante, feita para acompanhar todos os
              momentos do seu dia — do café da manhã ao jantar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cardapio"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver o cardápio <ArrowRight className="size-4" />
              </Link>
              <a
                href={contato.telefoneLink}
                className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.93_0.015_85/0.6)] px-6 py-3 text-sm font-medium text-[oklch(0.98_0.01_85)] transition-colors hover:bg-[oklch(0.98_0.01_85/0.12)]"
              >
                {contato.telefone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {pilares.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
              <p.icon className="size-7 text-primary" />
              <h2 className="mt-5 font-display text-2xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <img
            src={paes}
            alt="Pães artesanais e croissants recém-assados sobre tábua de madeira"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl object-cover shadow-lg"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">A nossa massa</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Pães que levam tempo — e é por isso que são bons
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Trabalhamos com fermentação natural e longos períodos de descanso. O resultado
              é uma crosta crocante, miolo alveolado e um sabor que só a paciência entrega.
              Todo dia saem fornadas novas, do pão de levain aos folhados amanteigados.
            </p>
            <Link
              to="/sobre"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
            >
              Conheça a nossa história <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Na mesa</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Do café da manhã ao jantar especial
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Pela manhã, cafés especiais e cestas de pão. No almoço e no jantar, massas
              frescas, risottos cremosos, pizzas de fermentação natural e a nossa feijoada
              completa. Uma cozinha generosa, como a de família.
            </p>
            <Link
              to="/cardapio"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver o cardápio completo <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="order-1 grid gap-5 md:order-2">
            <img
              src={cafe}
              alt="Mesa de café da manhã com pães, café e geleias"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl object-cover"
            />
            <img
              src={restaurante}
              alt="Pratos de massa e risotto servidos à luz de velas"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.27_0.032_48)] py-20 text-[oklch(0.97_0.014_84)]">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Venha nos visitar</h2>
          <p className="mt-4 text-[oklch(0.88_0.02_84)]">
            {contato.endereco} · {contato.horario}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contato"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Endereço e horários
            </Link>
            <a
              href={contato.cardapioOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[oklch(0.9_0.02_84/0.5)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[oklch(0.97_0.014_84/0.12)]"
            >
              Pedir online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
