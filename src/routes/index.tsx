import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, Coffee, MapPin, Pizza, Star, UtensilsCrossed, Wheat } from "lucide-react";
import { contato } from "@/data/menu";

const photos = {
  facade: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkOc2tJWFftBGz_VmGPL4BzTbx_iiNTzIgR6WW15vt092jf0-MxVKEghgoTt9VIfWuLvzApI_mWoAV2nYV1UvFOxgk1LARwP6Af-ySEoP4dUqOhZ0GXz7Js6ieIGJBDkLTlFY_ro5w5WaM8=s1400",
  sweets: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlsHNnZyuMKg2RNn_PCFngpmLWqJJvmIfY6TuHq-JxfVfbH5xYiaMeR_UpPQlt49NuDdHccaDrAc28irc-la88_FuzEhRL6L5Jz_mdXVJ6bXXBlZ7sW6fUqxFcCZCXohSfPkshaT6VSGKEZ=s900",
  snack: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHxsDWvcJyc7Wie8rni80qwTmfRETGP35F5y3rUeoyPEriVOvsHup6yzCeor1TI15RM_MPeE9Olcow8Nun8N5hvNQeB1OIZcfP0aD4eIGS--jMUnqq4yl8lCUirCb5ZpDpm73r=s900",
  market: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbxrnoPSY8Z0EldvFoM3Q8guGSHZB-S93zkenaXDdW_n5NjwMfhADJIybmQ4xnDU14j89YafAmZzT9zYro-wWqJWDXccZs9Rkn-cqfQTpuHVxUmbFgUvmJZ2yrdnSKnwq6O1l2_Y5fxFQ2=s900",
  cake: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkqQbIeFzPjwZzqrL28zt7e4HBFQOOv__Vu4C4b4TrDewWRG4eeElSSdmK7y20nflAiMmE2QcNmIxOTjp62ps-koQrWnGP0kho6jZr6aRZmiSSqvE9TDU36v4lvWtHusobFUzCFtQ=s900",
  table: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmPp_nvgA7qEhNuLWo88tyauKqPJzEW7XDGt2YYPKmZhcriF-fcJwj2v2SjCTlFCx0SUoZvZzLg9nCUV8QlDJGD0L6cnF1_DWAxw2CSt1GwGK7_ezpgToZ3rBmm0Ca678IpQRjl=s900",
  food: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlgsSPJolEJTDWriEoFEVOchBIE5MYUPmBK6vaMS2Jt8XoZk_QBbWIId7un0W5P1DOfH_iHWj-ujzy24jA63Mf57MHVsnj2TuECE2RAIJPozjFSVoK7CjhBG7IBbRdUDOh2_GU=s900",
  coffee: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl8N6OiGZWGS6jMGX7TV1lukkzFnsOJaOi8FrlxEQ85HIuLFwh2h-B2l3vXyXaewDmz5iK7EoWFDqcUQQVrSLh_DSboCNS2I3m6ORmzPdTw4bfzFfW-xmQwXDpwUXSQof0ANs59RQ=s900",
  bakery: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm5pe5h8Z9ogl1sFJPzubcjFGdEoBfWAWMZLZBn0bhhBPnI1CO-fUIR1Zla4s8IDuoe4kYKuMzCNAe5sx3JEX8akCEebQ7alanWQvpPba72lKDDnpx-SDYg63VO1Lnv311ku3ck=s900",
};

const experiences = [
  { icon: Wheat, title: "Padaria artesanal", text: "Pães da casa, salgados, quiches, croissants e doces frescos." },
  { icon: Coffee, title: "Café da manhã", text: "Matinais, café expresso, cappuccino e chocolate quente desde cedo." },
  { icon: UtensilsCrossed, title: "Refeições e buffet", text: "Pratos caseiros, buffet self-service, crepes, caldos e sopas." },
  { icon: Pizza, title: "Pizzaria e vinhos", text: "Pizzas tradicionais, especiais e gourmet para fechar o dia." },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Pães e Vinhos Padaria | Sudoeste, Brasília" },
    { name: "description", content: "Padaria, cafeteria, pizzaria e restaurante no Sudoeste, Brasília. Pães artesanais, matinais, buffet, caldos, crepes e vinhos todos os dias." },
    { property: "og:title", content: "Pães e Vinhos Padaria — Brasília" },
    { property: "og:description", content: "Pães artesanais, café, refeições, pizzas e vinhos todos os dias no Sudoeste." },
  ] }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative min-h-[76vh] overflow-hidden bg-primary">
        <img src={photos.facade} alt="Fachada da Pães e Vinhos Padaria no Sudoeste" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.19_0.06_20/0.95)] via-[oklch(0.23_0.07_20/0.72)] to-transparent" />
        <div className="relative mx-auto flex min-h-[76vh] max-w-6xl items-end px-5 pb-16 pt-28 md:items-center md:pb-0">
          <div className="max-w-2xl text-primary-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Desde cedo, todos os dias</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">Sabores que fazem parte de Brasília</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">Pães artesanais, café da manhã, refeições caseiras, pizzas, caldos e vinhos em uma casa completa no coração do Sudoeste.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/cardapio" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:-translate-y-0.5">Conhecer o cardápio <ArrowRight className="size-4" /></Link>
              <a href={contato.mapa} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Como chegar</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-7 sm:grid-cols-3">
          <div className="flex items-center gap-3"><Star className="size-5 fill-accent text-accent" /><div><strong className="block">4,3 no Google</strong><span className="text-sm text-muted-foreground">mais de 3,5 mil avaliações</span></div></div>
          <div className="flex items-center gap-3"><Clock3 className="size-5 text-primary" /><div><strong className="block">Todos os dias</strong><span className="text-sm text-muted-foreground">das 6h às 23h</span></div></div>
          <div className="flex items-center gap-3"><MapPin className="size-5 text-primary" /><div><strong className="block">CLSW 103</strong><span className="text-sm text-muted-foreground">Loja 32 · Rhodes Center</span></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Uma casa para o dia inteiro</p><h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Da primeira xícara à pizza da noite</h2></div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map(({ icon: Icon, title, text }) => <article key={title} className="bg-card p-7"><Icon className="size-7 text-primary" /><h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Tradição no Sudoeste</p><h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Padaria fina, café, confeitaria e muito mais</h2><p className="mt-5 leading-relaxed text-primary-foreground/75">A Pães e Vinhos reúne pães artesanais, matinais, refeições caseiras, lanches em pães da casa, pizzaria e uma seleção de vinhos no mesmo endereço.</p><Link to="/sobre" className="mt-7 inline-flex items-center gap-2 font-semibold text-accent">Conheça a casa <ArrowRight className="size-4" /></Link></div>
          <div className="grid grid-cols-2 gap-3"><img src={photos.market} alt="Interior da Pães e Vinhos" loading="lazy" className="h-80 w-full rounded-xl object-cover" /><div className="grid gap-3"><img src={photos.snack} alt="Lanche servido na Pães e Vinhos" loading="lazy" className="h-[9.6rem] w-full rounded-xl object-cover" /><img src={photos.cake} alt="Torta preparada pela Pães e Vinhos" loading="lazy" className="h-[9.6rem] w-full rounded-xl object-cover" /></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Feito para dar vontade</p><h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Um pouco da nossa mesa</h2></div><Link to="/cardapio" className="inline-flex items-center gap-2 font-semibold text-primary">Ver cardápio completo <ArrowRight className="size-4" /></Link></div>
        <div className="mt-10 grid auto-rows-[190px] grid-cols-2 gap-3 md:grid-cols-4">
          <img src={photos.sweets} alt="Doces da Pães e Vinhos" loading="lazy" className="h-full w-full rounded-xl object-cover md:row-span-2" />
          <img src={photos.table} alt="Mesa de café na Pães e Vinhos" loading="lazy" className="h-full w-full rounded-xl object-cover md:col-span-2" />
          <img src={photos.food} alt="Prato servido na Pães e Vinhos" loading="lazy" className="h-full w-full rounded-xl object-cover" />
          <img src={photos.coffee} alt="Café servido na Pães e Vinhos" loading="lazy" className="h-full w-full rounded-xl object-cover" />
          <img src={photos.bakery} alt="Produtos da padaria Pães e Vinhos" loading="lazy" className="h-full w-full rounded-xl object-cover md:col-span-2" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Fotos do perfil público da Pães e Vinhos no Google.</p>
      </section>

      <section className="mx-5 mb-20 rounded-3xl bg-secondary px-6 py-14 text-center md:mx-auto md:max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Venha nos visitar</p><h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold">Tem sempre um bom motivo para passar na Pães e Vinhos</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{contato.endereco}<br />{contato.horario}</p><div className="mt-7 flex flex-wrap justify-center gap-3"><a href={contato.mapa} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Traçar rota</a><a href={contato.telefoneLink} className="rounded-full border border-primary/30 px-6 py-3 font-semibold text-primary">{contato.telefone}</a></div>
      </section>
    </>
  );
}
