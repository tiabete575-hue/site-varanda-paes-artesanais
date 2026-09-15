import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, Leaf, MapPin, Package, Star, Wheat } from "lucide-react";
import { contato } from "@/data/menu";

const photos = {
  hero: "/menu/hero.jpg",
  interior: "/menu/interior.jpg",
  paes: "/menu/paes-fermentacao.jpg",
  folhados: "/menu/folhados.jpg",
  queijos: "/menu/queijos.jpg",
  doces: "/menu/doces.jpg",
  diversos: "/menu/diversos.jpg",
  cestas: "/menu/cestas.jpg",
};

const experiences = [
  { icon: Wheat, title: "Fermentação Natural", text: "Pães com levain, longa fermentação, sem aditivos químicos excessivos. Do jeito certo." },
  { icon: Leaf, title: "Grãos Ancestrais", text: "Espelta, Einkorn, Khorasan, centeio e farinhas especiais diretamente nas suas receitas." },
  { icon: Package, title: "Empório Artesanal", text: "Queijos selecionados, geleias, patês, kombucha e acessórios para quem aprecia o bom." },
  { icon: Star, title: "Cestas & Presentes", text: "Monte sua cesta especial com os produtos favoritos da Varanda. Ideal para presentear." },
];

export const Route = createFileRoute("/")(({
  head: () => ({ meta: [
    { title: "Varanda Pães Artesanais | Asa Norte, Brasília" },
    { name: "description", content: "Padaria artesanal de fermentação natural na Asa Norte, Brasília. Pães com levain, croissants, queijos artesanais, geleias e muito mais." },
    { property: "og:title", content: "Varanda Pães Artesanais — Brasília" },
    { property: "og:description", content: "Pães de fermentação natural, folhados artesanais, queijos selecionados e empório na Asa Norte." },
  ] }),
  component: Home,
}));

function Home() {
  return (
    <>
      <section className="relative min-h-[76vh] overflow-hidden bg-primary">
        <img src={photos.hero} alt="Fachada da Varanda Pães Artesanais na Asa Norte" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.012_255/0.95)] via-[oklch(0.18_0.012_255/0.72)] to-transparent" />
        <div className="relative mx-auto flex min-h-[76vh] max-w-6xl items-end px-5 pb-16 pt-28 md:items-center md:pb-0">
          <div className="max-w-2xl text-primary-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Pães que levam tempo. Do jeito certo.</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">Fermentação natural na Asa Norte</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">Pães artesanais com levain, grãos ancestrais, queijos selecionados e empório em uma casa feita para quem aprecia o que é verdadeiro.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/cardapio" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:-translate-y-0.5">Ver o cardápio <ArrowRight className="size-4" /></Link>
              <a href={contato.mapa} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Como chegar</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-7 sm:grid-cols-3">
          <div className="flex items-center gap-3"><Star className="size-5 fill-accent text-accent" /><div><strong className="block">4,6 no Google</strong><span className="text-sm text-muted-foreground">mais de 800 avaliações</span></div></div>
          <div className="flex items-center gap-3"><Clock3 className="size-5 text-primary" /><div><strong className="block">Terça a sábado</strong><span className="text-sm text-muted-foreground">das 9h às 19h</span></div></div>
          <div className="flex items-center gap-3"><MapPin className="size-5 text-primary" /><div><strong className="block">CLN 215, Bloco D</strong><span className="text-sm text-muted-foreground">Loja 39 · Asa Norte</span></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Uma padaria feita com propósito</p><h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Do levain ao empório</h2></div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map(({ icon: Icon, title, text }) => <article key={title} className="bg-card p-7"><Icon className="size-7 text-primary" /><h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Tradição na Asa Norte</p><h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Pão feito à mão, como deve ser</h2><p className="mt-5 leading-relaxed text-primary-foreground/75">A Varanda é especializada em pães de fermentação natural, produzidos quase totalmente à mão, sem aditivos químicos excessivos. Usamos farinhas especiais como espelta, einkorn e khorasan — grãos ancestrais com mais nutrientes e menos glúten modificado.</p><Link to="/sobre" className="mt-7 inline-flex items-center gap-2 font-semibold text-accent">Conhecer a padaria <ArrowRight className="size-4" /></Link></div>
          <div className="grid grid-cols-2 gap-3"><img src={photos.interior} alt="Interior da Varanda Pães Artesanais" loading="lazy" className="h-80 w-full rounded-xl object-cover" /><div className="grid gap-3"><img src={photos.paes} alt="Pães de fermentação natural da Varanda" loading="lazy" className="h-[9.6rem] w-full rounded-xl object-cover" /><img src={photos.folhados} alt="Croissants e folhados da Varanda" loading="lazy" className="h-[9.6rem] w-full rounded-xl object-cover" /></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Feito para dar vontade</p><h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Um pouco da nossa mesa</h2></div><Link to="/cardapio" className="inline-flex items-center gap-2 font-semibold text-primary">Ver cardápio completo <ArrowRight className="size-4" /></Link></div>
        <div className="mt-10 grid auto-rows-[190px] grid-cols-2 gap-3 md:grid-cols-4">
          <img src={photos.paes} alt="Pães artesanais de fermentação natural" loading="lazy" className="h-full w-full rounded-xl object-cover md:row-span-2" />
          <img src={photos.queijos} alt="Tábua de queijos artesanais" loading="lazy" className="h-full w-full rounded-xl object-cover md:col-span-2" />
          <img src={photos.folhados} alt="Croissants e cinnamon rolls" loading="lazy" className="h-full w-full rounded-xl object-cover" />
          <img src={photos.doces} alt="Doces e chocolates artesanais" loading="lazy" className="h-full w-full rounded-xl object-cover" />
          <img src={photos.diversos} alt="Geleias e empório" loading="lazy" className="h-full w-full rounded-xl object-cover md:col-span-2" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Imagens ilustrativas dos produtos da Varanda Pães Artesanais.</p>
      </section>

      <section className="mx-5 mb-20 rounded-3xl bg-secondary px-6 py-14 text-center md:mx-auto md:max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Venha nos visitar</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold">Tem sempre um bom motivo para passar na Varanda</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{contato.endereco}<br />{contato.horario}<br /><span className="text-sm">{contato.horarioDetalhe}</span></p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href={contato.mapa} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Traçar rota</a>
          <a href={contato.telefoneLink} className="rounded-full border border-primary/30 px-6 py-3 font-semibold text-primary">{contato.telefone}</a>
        </div>
      </section>
    </>
  );
}
