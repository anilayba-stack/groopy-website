"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternatePath } from "@/lib/i18n-routes";

/**
 * TR / EN geçişi. Geçerli sayfanın karşılığına linkler (örn.
 * /hizmetler/seo-ve-geo ↔ /en/services/seo-and-geo-strategy).
 * Aktif dil vurgulu.
 */
export function LangSwitcher({
  locale,
  className = "",
}: {
  locale: "tr" | "en";
  className?: string;
}) {
  const pathname = usePathname() ?? (locale === "tr" ? "/" : "/en");
  const trActive = locale === "tr";
  const trHref = trActive ? pathname : getAlternatePath(pathname, "en");
  const enHref = trActive ? getAlternatePath(pathname, "tr") : pathname;

  const item = "rounded-md px-2 py-1 transition-colors";
  const active = "bg-white/[0.08] text-[var(--color-text)]";
  const idle = "text-[var(--color-text-faint)] hover:text-[var(--color-text)]";

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border border-[var(--color-border)] p-0.5 text-xs font-medium ${className}`}
    >
      <Link
        href={trHref}
        aria-current={trActive ? "true" : undefined}
        className={`${item} ${trActive ? active : idle}`}
      >
        TR
      </Link>
      <Link
        href={enHref}
        aria-current={!trActive ? "true" : undefined}
        className={`${item} ${!trActive ? active : idle}`}
      >
        EN
      </Link>
    </div>
  );
}
