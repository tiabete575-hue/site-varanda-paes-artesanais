import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Package, Wheat, Coffee } from "lucide-react";

const hero = "/menu/interior.jpg";
const interior = "/menu/paes-fermentacao.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [
    { title: "A Padaria | Varanda Pães Artesanais — Brasília" },
    { name: "description", content: "Conheça a Varanda Pães Artesanais: pães de fermentação natural, grãos ancestrais, queijos artesanais e empório na Asa Norte, Brasília." },
  ] }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-primary"><img src={hero} alt="Interior da Varanda Pães Artesanais" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-primary/75" /><div className="relative mx-auto flex min-h-[50vh] max-w-6xl items-end px-5 pb-14"><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Nossa casa</p><h1 className="mt-3 font-display text-5xl font-semibold text-primary-foreground md:text-6xl">Pães, tempo e tradição</h1></div></div></section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="font-display text-3xl font-semibold leading-snug md:text-4xl">Uma padaria de fermentação natural na Asa Norte, feita com propósito.</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">A Varanda Pães Artesanais nasceu do amor pelo pão bem feito. Aqui, cada unidade é produzida quase totalmente à mão, com levain natural e longa fermentação — sem pressa, sem atalhos.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Usamos farinhas especiais como espelta, einkorn e khorasan, grãos ancestrais com menos modificação genética, menor índice glicêmico e mais nutrientes. O resultado é um pão que tem sabor, tem história e faz bem ao corpo.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Além dos pães, a Varanda mantém um empório com queijos artesanais brasileiros e europeus, geleias, patês, mel e kombucha — produtos que fazem sentido junto com o que sai do forno.</p>
        </div>
        <img src={interior} alt="Pães de fermentação natural da Varanda" loading="lazy" className="h-[32rem] w-full rounded-2xl object-cover" />
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-4xl font-semibold">Tudo o que cabe na Varanda</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Wheat, "Pães & Fermentação", "Sourdough, baguettes, ciabatta, brioche e pães com grãos ancestrais."],
              [Leaf, "Grãos Ancestrais", "Espelta, einkorn, khorasan, centeio e multigrãos — farinha de verdade."],
              [Package, "Empório", "Queijos artesanais, geleias, mel, patês, kombucha e acessórios para café."],
              [Coffee, "Folhados & Doces", "Croissants, cinnamon rolls, brownies, cookies e chocolates puro cacau."],
            ].map(([Icon, label, desc]) => {
              const C = Icon as typeof Wheat;
              return (
                <div key={label as string} className="rounded-xl border border-border bg-card p-6">
                  <C className="size-7 text-primary" />
                  <h3 className="mt-4 font-display text-2xl font-semibold">{label as string}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="font-display text-4xl font-semibold">Explore o cardápio completo</h2>
        <p className="mt-4 text-muted-foreground">Mais de 80 produtos disponíveis — pães, queijos, geleias, doces, cestas e muito mais.</p>
        <Link to="/cardapio" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Ver o cardápio <ArrowRight className="size-4" /></Link>
      </section>
    </>
  );
}
