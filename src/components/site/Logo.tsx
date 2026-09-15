interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "image";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm:  "h-12",   // header mobile
  md:  "h-16",   // header desktop
  lg:  "h-24",   // hero / uso isolado
};

export function Logo({ variant = "horizontal", size = "md", className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo-varanda.jpg"
        alt="Varanda Pães Artesanais"
        className={`${sizeMap[size]} w-auto object-contain`}
      />
    </div>
  );
}
