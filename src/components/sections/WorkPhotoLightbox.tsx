"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import type { WorkEntry } from "@content/types";

const STRINGS = {
  tr: { view: "Fotoğrafı gör", close: "Kapat" },
  en: { view: "View photo", close: "Close" },
} as const;

/**
 * Galeri kartının görsel alanı — varsayılan olarak müşteri logosunu gösterir
 * (gerçek fotoğraf tıklanmadan görünmez, çalışmalar sayfası daha sade durur).
 * Tıklanınca gerçek fotoğraf lightbox'ta açılır. Yalnızca bu kısım client —
 * başlık/özet/etiketler WorkGallery'de server-rendered kalır.
 */
export function WorkPhotoLightbox({
  entry,
  aspect,
  priority,
  locale = "tr",
}: {
  entry: WorkEntry;
  aspect: string;
  priority?: boolean;
  locale?: "tr" | "en";
}) {
  const [open, setOpen] = useState(false);
  const t = STRINGS[locale];
  const photo = entry.photos[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => photo && setOpen(true)}
        disabled={!photo}
        aria-label={photo ? `${t.view}: ${entry.client}` : entry.client}
        className={`group relative block w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors ${
          photo ? "cursor-pointer hover:border-[var(--color-border-strong)]" : "cursor-default"
        } ${aspect}`}
      >
        <span className="absolute inset-0 flex items-center justify-center p-10 sm:p-12">
          <Image
            src={entry.logo.src}
            alt={entry.client}
            width={entry.logo.w}
            height={entry.logo.h}
            priority={priority}
            className="h-auto max-h-full w-full max-w-[220px] object-contain opacity-70 brightness-0 invert transition-opacity duration-300 ease-out group-hover:opacity-100"
          />
        </span>
        {photo && (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] bg-black/60 px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-muted)] opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-out group-hover:opacity-100">
            <Maximize2 className="size-3" aria-hidden />
            {t.view}
          </span>
        )}
      </button>

      {open && photo ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={entry.client}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label={t.close}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />
          <div className="relative max-h-[90vh] max-w-[min(90vw,32rem)]">
            <button
              type="button"
              aria-label={t.close}
              onClick={() => setOpen(false)}
              className="absolute -top-11 right-0 grid size-9 place-items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <X className="size-4" aria-hidden />
            </button>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              sizes="(min-width: 640px) 32rem, 90vw"
              className="max-h-[90vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
