import Link from "next/link";

/**
 * TR / EN geçişi. v1: TR tam, EN sadeleştirilmiş (Faz 2'de tam ayna).
 * Aktif dil vurgulu; diğeri karşılık gelen köke bağlanır.
 */
export function LangSwitcher({
  locale,
  className = "",
}: {
  locale: "tr" | "en";
  className?: string;
}) {
  const trActive = locale === "tr";
  const item = "rounded-md px-2 py-1 transition-colors";
  const active = "bg-white/[0.08] text-[var(--color-text)]";
  const idle = "text-[var(--color-text-faint)] hover:text-[var(--color-text)]";

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg border border-[var(--color-border)] p-0.5 text-xs font-medium ${className}`}
    >
      <Link
        href="/"
        aria-current={trActive ? "true" : undefined}
        className={`${item} ${trActive ? active : idle}`}
      >
        TR
      </Link>
      <Link
        href="/en"
        aria-current={!trActive ? "true" : undefined}
        className={`${item} ${!trActive ? active : idle}`}
      >
        EN
      </Link>
    </div>
  );
}
