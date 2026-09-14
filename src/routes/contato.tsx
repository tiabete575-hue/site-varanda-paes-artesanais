import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { contato } from "@/data/menu";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Endereço | Parentela Casa de Pães — Asa Sul, Brasília" },
      {
        name: "description",
        content:
          "Endereço, telefone e horários da Parentela Casa de Pães na Asa Sul, Brasília. Aberto todos os dias até às 22h.",
      },
      { property: "og:title", content: "Contato — Parentela Casa de Pães" },
      {
        property: "og:description",
        content: "Asa Sul, Brasília. Telefone (61) 3273-0219. Aberto todos os dias até 22h.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl md:text-5xl">Contato</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Estamos na Asa Sul, em Brasília. Ligue para reservas e encomendas ou venha tomar um
        café com a gente.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-display text-xl">Endereço</h2>
              <p className="text-muted-foreground">{contato.endereco}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-display text-xl">Telefone</h2>
              <a href={contato.telefoneLink} className="text-muted-foreground hover:text-primary">
                {contato.telefone}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-display text-xl">Horário</h2>
              <p className="text-muted-foreground">{contato.horario}</p>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href={contato.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
            >
              <Instagram className="size-4" /> Instagram
            </a>
            <a
              href={contato.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
            >
              <Facebook className="size-4" /> Facebook
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Mapa da Parentela Casa de Pães na Asa Sul"
            src="https://www.google.com/maps?q=Parentela+Casa+de+P%C3%A3es+Asa+Sul+Bras%C3%ADlia&output=embed"
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
