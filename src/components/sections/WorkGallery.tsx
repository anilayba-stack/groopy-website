import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { WorkEntry } from "@content/types";

const dateFmtTr = new Intl.DateTimeFormat("tr-TR", { year: "numeric", month: "long" });
const dateFmtEn = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" });

interface WorkGalleryProps {
  entries: WorkEntry[];
  locale?: "tr" | "en";
}

export function WorkGallery({ entries, locale = "tr" }: WorkGalleryProps) {
  if (entries.length === 0) return null;

  const dateFmt = locale === "en" ? dateFmtEn : dateFmtTr;

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            {entry.photos[0] && (
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={entry.photos[0].src}
                  alt={entry.photos[0].alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover brightness-75 transition-[filter] duration-300 ease-out hover:brightness-100"
                />
              </div>
            )}
            <figcaption className="flex flex-1 flex-col p-4">
              <div className="flex flex-wrap gap-1.5">
                {entry.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]">{entry.summary}</p>
              <p className="mt-2 text-xs text-[var(--color-text-faint)]">
                {entry.client} · {entry.location} · {dateFmt.format(new Date(entry.date))}
              </p>
              {entry.website && (
                <a
                  href={entry.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                >
                  {entry.website.label} <ExternalLink className="size-3.5" aria-hidden />
                </a>
              )}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
