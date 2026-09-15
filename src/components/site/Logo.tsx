import { Wheat } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "image";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "horizontal", size = "md", className = "" }: LogoProps) {
  const sizes = { sm: "text-[1.15rem]", md: "text-2xl", lg: "text-4xl" };

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <Wheat className="mb-2 size-8 text-accent" aria-hidden="true" />
        <span className={`font-display font-semibold tracking-tight text-primary ${sizes[size]}`}>
          Pães <span className="font-normal text-accent">&amp;</span> Vinhos
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-foreground/60">
          Padaria · Brasília
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid size-9 place-items-center rounded-full border border-accent/40 bg-primary text-primary-foreground">
        <Wheat className="size-5 text-accent" aria-hidden="true" />
      </span>
      <div className="leading-none">
        <span className={`font-display font-semibold tracking-tight text-primary ${sizes[size]}`}>
          Pães <span className="font-normal text-accent">&amp;</span> Vinhos
        </span>
        <span className="mt-1 block text-[0.52rem] font-semibold uppercase tracking-[0.3em] text-foreground/55">
          Padaria · Brasília
        </span>
      </div>
    </div>
  );
}
