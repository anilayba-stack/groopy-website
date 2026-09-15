import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site-config";

export function Logo({
  className = "",
  markClassName = "h-6 w-auto",
  showWordmark = true,
  priority = false,
  href = "/",
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  priority?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 text-[var(--color-text)] ${className}`}
      aria-label={`${SITE.name} — ana sayfa`}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={530}
        height={476}
        priority={priority}
        className={markClassName}
      />
      {showWordmark ? (
        <span className="text-[15px] font-semibold tracking-tight">
          {SITE.name}
        </span>
      ) : null}
    </Link>
  );
}
