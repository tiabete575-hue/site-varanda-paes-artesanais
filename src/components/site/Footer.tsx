import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import { contato } from "@/data/menu";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo variant="horizontal" size="sm" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Pães especiais, cozinha afetiva e o aconchego de um casarão mineiro no coração
            de Brasília.
          </p>
        </div>

        <div className="space-y-3 text-sm text-foreground/80">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" /> {contato.endereco}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-4 text-primary" />
            <a href={contato.telefoneLink} className="hover:text-primary">
              {contato.telefone}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="size-4 text-primary" /> {contato.horario}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <Link to="/cardapio" className="block text-foreground/80 hover:text-primary">
            Cardápio
          </Link>
          <Link to="/sobre" className="block text-foreground/80 hover:text-primary">
            A Casa
          </Link>
          <Link to="/contato" className="block text-foreground/80 hover:text-primary">
            Contato
          </Link>
          <div className="flex gap-4 pt-2">
            <a
              href={contato.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Parentela"
              className="text-primary hover:opacity-70"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={contato.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Parentela"
              className="text-primary hover:opacity-70"
            >
              <Facebook className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Parentela Casa de Pães — Brasília, DF
      </div>
    </footer>
  );
}
