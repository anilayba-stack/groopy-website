import { ExternalLink } from "lucide-react";
import type { WorkEntry } from "@content/types";
import { WorkPhotoLightbox } from "./WorkPhotoLightbox";

const dateFmtTr = new Intl.DateTimeFormat("tr-TR", { year: "numeric", month: "long" });
const dateFmtEn = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" });

interface WorkGalleryProps {
  entries: WorkEntry[];
  locale?: "tr" | "en";
}

/**
 * İkili ritim: büyük/küçük, ofsetli/ofsetsiz, dikey/yatay kadraj — editoryal
 * bir galeri hissi için art arda gelen girişler hizalı bir ızgaraya değil,
 * hafif asimetrik bir düzene oturur. Yeni girişler eklendikçe desen tekrar eder.
 */
const LAYOUT = [
  { span: "lg:col-span-6", aspect: "aspect-[5/4]", offset: "" },
  { span: "lg:col-span-5 lg:col-start-8", aspect: "aspect-[3/4]", offset: "lg:mt-20" },
] as const;

export function WorkGallery({ entries, locale = "tr" }: WorkGalleryProps) {
  if (entries.length === 0) return null;

  const dateFmt = locale === "en" ? dateFmtEn : dateFmtTr;

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-12 lg:gap-y-24">
      {entries.map((entry, i) => {
        const layout = LAYOUT[i % LAYOUT.length];
        return (
          <li key={entry.slug} className={`${layout.span} ${layout.offset}`}>
            <figure>
              <WorkPhotoLightbox
                entry={entry}
                aspect={layout.aspect}
                priority={i === 0}
                locale={locale}
              />
              <figcaption className="mt-5 max-w-sm">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {entry.services.map((service) => (
                    <span
                      key={service}
                      className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-faint)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 text-2xl font-semibold leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-3xl">
                  {entry.client}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {entry.summary}
                </p>
                <p className="mt-3 text-xs text-[var(--color-text-faint)]">
                  {entry.location} · {dateFmt.format(new Date(entry.date))}
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
        );
      })}
    </ul>
  );
}
