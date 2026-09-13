import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 active:translate-y-px";

const styles: Record<Variant, string> = {
  // Beyaz zemin / siyah metin — üstten highlight, hafif hacim, basınca iner.
  primary:
    "px-5 py-2.5 text-[var(--color-accent-contrast)] " +
    "bg-[linear-gradient(180deg,var(--btn-primary-from),var(--btn-primary-to))] " +
    "shadow-[var(--shadow-btn)] hover:brightness-[1.06] hover:-translate-y-px",
  // Cam — ince kenarlık, backdrop blur, hover'da hafif aydınlanır.
  secondary:
    "px-5 py-2.5 text-[var(--color-text)] border border-[var(--color-border-strong)] " +
    "bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/25 hover:-translate-y-px",
  ghost:
    "px-2 py-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
}

/** Site içinde tüm eylemler bağlantıdır (form gönder butonu hariç). */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  external = false,
}: ButtonLinkProps) {
  const cls = `${base} ${styles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
