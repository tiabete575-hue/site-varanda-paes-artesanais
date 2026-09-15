import { Link } from "@tanstack/react-router";
import { Clock3, Instagram, MapPin, Phone } from "lucide-react";
import { contato } from "@/data/menu";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-[oklch(0.15_0.012_255)] text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_1fr_0.6fr]">
        <div><div className="inline-block rounded-lg bg-white px-3 py-2"><Logo variant="horizontal" size="sm" /></div><p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/65">Pães de fermentação natural, folhados artesanais, queijos selecionados, geleias e café na Asa Norte, Brasília.</p></div>
        <div className="space-y-4 text-sm text-primary-foreground/75"><p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" /><span>{contato.endereco}</span></p><p className="flex items-center gap-3"><Clock3 className="size-4 text-accent" /><span>{contato.horario}<br /><span className="text-xs text-primary-foreground/50">{contato.horarioDetalhe}</span></span></p><p className="flex items-center gap-3"><Phone className="size-4 text-accent" /><a href={contato.telefoneLink} className="hover:text-white">{contato.telefone}</a></p></div>
        <nav className="space-y-3 text-sm"><Link to="/cardapio" className="block hover:text-accent">Cardápio</Link><Link to="/sobre" className="block hover:text-accent">A Padaria</Link><Link to="/contato" className="block hover:text-accent">Contato</Link><a href={contato.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 pt-2 text-accent"><Instagram className="size-5" /> Instagram</a></nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/45">© {new Date().getFullYear()} Varanda Pães Artesanais — Brasília, DF</div>
    </footer>
  );
}
