import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-padaria.jpg";
import cafe from "@/assets/cafe.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Casa | Parentela Casa de Pães — Asa Sul, Brasília" },
      {
        name: "description",
        content:
          "Conheça a Parentela Casa de Pães: um ambiente inspirado em um casarão do interior de Minas, com pães especiais e cozinha afetiva na Asa Sul, Brasília.",
      },
      { property: "og:title", content: "A Casa — Parentela Casa de Pães" },
      {
        property: "og:description",
        content: "Um casarão mineiro em Brasília: pães especiais e cozinha de família.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="relative">
        <img
          src={hero}
          alt="Interior acolhedor da Parentela Casa de Pães"
          width={1920}
          height={1088}
          className="h-[42vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.25_0.03_48/0.55)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5">
            <h1 className="font-display text-4xl text-[oklch(0.98_0.01_85)] md:text-5xl">
              A Casa
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="font-display text-2xl leading-relaxed text-foreground">
          A Parentela é uma casa de pães especiais e restaurante, preparada para
          proporcionar muito aconchego e, ao mesmo tempo, oferecer uma culinária repleta de
          sofisticação e sabor.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          O nosso ambiente é inspirado em um casarão do interior de Minas Gerais, pensado
          para você se sentir em casa, como parte da nossa família. Mesas de madeira, luz
          quente e o cheiro de pão saindo do forno: é assim que recebemos quem chega.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Temos opções para todos os momentos do seu dia, desde o café da manhã até um
          jantar especial. Os pães são de fermentação natural, feitos com tempo e farinhas
          selecionadas. A cozinha trabalha com massas frescas, risottos, pizzas e a feijoada
          completa que se tornou tradição entre os nossos clientes.
        </p>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <img
            src={cafe}
            alt="Mesa de café da manhã servida na Parentela"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl">Um lugar para ficar</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Seja para um café rápido antes do trabalho, um almoço com a família ou um
              jantar tranquilo, a nossa casa está aberta todos os dias. Reserve a sua mesa
              ou apareça — sempre tem pão fresco esperando.
            </p>
            <Link
              to="/contato"
              className="mt-7 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Como chegar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
