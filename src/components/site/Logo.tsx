import logoImg from "@/assets/logo-parentela.jpg";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "image";
  size?: "sm" | "md" | "lg";
}

/**
 * Ícone vetorial fiel da janela colonial típica dos casarões mineiros da Parentela
 */
export function ColonialWindowIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Peitoril / Moldura de base com beiral clássico */}
      <path
        d="M2 49H42V52C42 53.1 41.1 54 40 54H4C2.9 54 2 53.1 2 52V49Z"
        fill="#A63A2B"
      />
      <rect x="5" y="47" width="34" height="3" fill="#A63A2B" />

      {/* Moldura externa do casarão */}
      <rect
        x="6"
        y="5"
        width="32"
        height="42"
        rx="1"
        stroke="#A63A2B"
        strokeWidth="3.5"
        fill="transparent"
      />

      {/* Moldura interna superior / arremate */}
      <line x1="6" y1="5" x2="38" y2="5" stroke="#A63A2B" strokeWidth="4" />

      {/* Travessas verticais dos caixilhos/vidraças */}
      <line x1="14" y1="6" x2="14" y2="47" stroke="#A63A2B" strokeWidth="1.8" />
      <line x1="22" y1="6" x2="22" y2="47" stroke="#A63A2B" strokeWidth="2.2" />
      <line x1="30" y1="6" x2="30" y2="47" stroke="#A63A2B" strokeWidth="1.8" />

      {/* Travessas horizontais das vidraças */}
      <line x1="6" y1="13" x2="38" y2="13" stroke="#A63A2B" strokeWidth="1.8" />
      <line x1="6" y1="21" x2="38" y2="21" stroke="#A63A2B" strokeWidth="1.8" />
      <line x1="6" y1="29" x2="38" y2="29" stroke="#A63A2B" strokeWidth="2.2" />
      <line x1="6" y1="37" x2="38" y2="37" stroke="#A63A2B" strokeWidth="1.8" />
    </svg>
  );
}

export function Logo({ variant = "horizontal", size = "md", className = "" }: LogoProps) {
  if (variant === "image") {
    const sizeClasses = {
      sm: "h-10",
      md: "h-14",
      lg: "h-20",
    };
    return (
      <img
        src={logoImg}
        alt="Parentela Casa de Pães"
        className={`mix-blend-multiply object-contain ${sizeClasses[size]} ${className}`}
      />
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <ColentialWindowBadge size={size} />
        <span className="mt-2 font-display text-2xl font-bold tracking-[0.2em] text-[#1a365d]">
          PARENTELA
        </span>
        <span className="font-serif italic text-sm tracking-wide text-[#A63A2B] -mt-0.5">
          Casa de pães
        </span>
      </div>
    );
  }

  // Variant horizontal (ideal para o Header)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ColentialWindowBadge size={size} />
      <div className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-[0.14em] text-[#1c355e]">
          PARENTELA
        </span>
        <span className="mt-1 font-serif italic text-xs tracking-wider text-[#A63A2B]">
          Casa de pães
        </span>
      </div>
    </div>
  );
}

function ColentialWindowBadge({ size }: { size: "sm" | "md" | "lg" }) {
  const iconSizes = {
    sm: "size-7",
    md: "size-9",
    lg: "size-12",
  };

  return (
    <div className="flex shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] p-1.5 shadow-xs border border-[#A63A2B]/20">
      <ColonialWindowIcon className={iconSizes[size]} />
    </div>
  );
}
