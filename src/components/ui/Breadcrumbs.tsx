import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({
  items,
  ariaLabel = "Site haritası",
}: {
  items: Crumb[];
  ariaLabel?: string;
}) {
  return (
    <nav aria-label={ariaLabel} className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-text-faint)]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-[var(--color-text-muted)]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-[var(--color-text)]">
                    {item.name}
                  </Link>
                  <ChevronRight className="size-3.5" aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
