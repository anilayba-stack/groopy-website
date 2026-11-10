"use client";

import { useEffect, useState } from "react";
import { Bot, X } from "lucide-react";
import { AiVisibilityTool } from "@/components/tools/AiVisibilityTool";

const STRINGS = {
  tr: {
    label: "AI Görünürlük Testi",
    modalTitle: "Ücretsiz AI Görünürlük Testi",
    modalSubtitle: "Markanızın Gemini'de bahsedilip bahsedilmediğini anında test edin.",
    close: "Kapat",
  },
  en: {
    label: "AI Visibility Check",
    modalTitle: "Free AI Visibility Check",
    modalSubtitle: "Test instantly whether your brand is mentioned by Gemini.",
    close: "Close",
  },
} as const;

/**
 * Sağ altta, SEO analizi düğmesinin hemen solunda görünen üçüncü düğme.
 * Tıklayınca ücretsiz AI görünürlük testini bir modal içinde açar.
 */
export function AiVisibilityFloat({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const t = STRINGS[locale];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        onClick={() => setOpen(true)}
        aria-label={t.label}
        className={`group flex items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-[#0d0d0f]/90 py-1.5 pl-1.5 pr-1.5 shadow-[var(--shadow-card-hover)] backdrop-blur-xl transition-all duration-300 sm:pr-4 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="grid size-9 place-items-center rounded-full bg-white/[0.06] text-[var(--color-text)]">
          <Bot className="size-4" aria-hidden />
        </span>
        <span className="hidden text-[13px] font-medium text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text)] sm:inline">
          {t.label}
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.modalTitle}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label={t.close}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-[var(--color-bg)] p-5 shadow-[var(--shadow-card-hover)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[var(--color-text)]">
                  {t.modalTitle}
                </h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {t.modalSubtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="grid size-8 shrink-0 place-items-center rounded-lg text-[var(--color-text-faint)] hover:bg-white/[0.06] hover:text-[var(--color-text)]"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
            <div className="mt-5">
              <AiVisibilityTool locale={locale} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
