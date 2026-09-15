"use client";

import { useState, type FormEvent } from "react";
import { Search, Loader2, CheckCircle2, XCircle, Gauge } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";
import { RabbitLoader } from "@/components/ui/RabbitLoader";
import type { AuditResult } from "@/lib/site-audit";

const STRINGS = {
  tr: {
    placeholder: "https://siteniz.com",
    button: "Analiz Et",
    loading: "Analiz ediliyor…",
    loadingHint: "Beyaz tavşanı takip ediyoruz…",
    scoreLabel: "SEO Puanı",
    pageSpeedLabel: "Google PageSpeed (mobil)",
    lcp: "LCP",
    cls: "CLS",
    inp: "INP",
    ctaTitle: "Bu sorunları çözelim",
    ctaBody:
      "Yukarıdaki eksikleri Groopy ile kapatabilirsiniz — kısa bir görüşmeyle başlayalım.",
    ctaButton: "WhatsApp'tan yazın",
    errorGeneric: "Bir şeyler ters gitti, lütfen tekrar deneyin.",
  },
  en: {
    placeholder: "https://yoursite.com",
    button: "Analyze",
    loading: "Analyzing…",
    loadingHint: "Following the white rabbit…",
    scoreLabel: "SEO Score",
    pageSpeedLabel: "Google PageSpeed (mobile)",
    lcp: "LCP",
    cls: "CLS",
    inp: "INP",
    ctaTitle: "Let's fix these",
    ctaBody: "Groopy can close these gaps — let's start with a short call.",
    ctaButton: "Message us on WhatsApp",
    errorGeneric: "Something went wrong, please try again.",
  },
} as const;

/** Bu eşiğin altındaki puanlar veya en az bir başarısız kontrol WhatsApp CTA'sını tetikler. */
const SCORE_THRESHOLD = 80;

export function SeoAnalyzerTool({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const t = STRINGS[locale];
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/seo-analiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, locale }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : t.errorGeneric);
        return;
      }
      setResult(data as AuditResult);
    } catch {
      setError(t.errorGeneric);
    } finally {
      setLoading(false);
    }
  }

  const failedChecks = result?.checks.filter((c) => !c.passed) ?? [];
  const showCta = result ? result.score < SCORE_THRESHOLD || failedChecks.length > 0 : false;

  const whatsappMessage = result
    ? locale === "en"
      ? `Hi, I ran the free SEO check on ${result.url} and got a score of ${result.score}/100. Can you help fix: ${
          failedChecks.map((c) => c.label).join(", ") || "the issues found"
        }?`
      : `Merhaba, ${result.url} için ücretsiz SEO analizini çalıştırdım, puan ${result.score}/100 çıktı. Şu eksikleri düzeltmemde yardımcı olur musunuz: ${
          failedChecks.map((c) => c.label).join(", ") || "tespit edilen sorunlar"
        }?`
    : undefined;

  return (
    <div className="surface-glass rounded-2xl border border-[var(--color-border-strong)] p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-text-faint)]"
            aria-hidden
          />
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t.placeholder}
            className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] py-2.5 pl-10 pr-3.5 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-accent)]"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-contrast)] transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-60"
        >
          {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
          {loading ? t.loading : t.button}
        </button>
      </form>

      {loading ? <RabbitLoader caption={t.loadingHint} /> : null}

      {error ? (
        <p className="mt-4 rounded-lg border border-[var(--color-danger)] px-3.5 py-2.5 text-sm text-[var(--color-danger)]">
          {error}
        </p>
      ) : null}

      {result ? (
        <div className="mt-6">
          <div className="flex items-center gap-4">
            <div className="grid size-16 shrink-0 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white/[0.03] text-xl font-semibold text-[var(--color-text)]">
              {result.score}
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-text)]">{t.scoreLabel}</p>
              <p className="text-xs text-[var(--color-text-faint)]">{result.url}</p>
            </div>
          </div>

          <ul className="mt-6 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {result.checks.map((c) => (
              <li key={c.id} className="flex items-start gap-3 py-3">
                {c.passed ? (
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden />
                ) : (
                  <XCircle className="mt-0.5 size-4 shrink-0 text-[var(--color-danger)]" aria-hidden />
                )}
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{c.label}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{c.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          {result.pageSpeed ? (
            <div className="mt-6">
              <p className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
                <Gauge className="size-4" aria-hidden />
                {t.pageSpeedLabel}: {result.pageSpeed.performanceScore}/100
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-[var(--color-text-muted)]">
                {result.pageSpeed.lcp ? (
                  <span>
                    {t.lcp}: {result.pageSpeed.lcp}
                  </span>
                ) : null}
                {result.pageSpeed.cls ? (
                  <span>
                    {t.cls}: {result.pageSpeed.cls}
                  </span>
                ) : null}
                {result.pageSpeed.inp ? (
                  <span>
                    {t.inp}: {result.pageSpeed.inp}
                  </span>
                ) : null}
              </div>
            </div>
          ) : null}

          {showCta ? (
            <div className="mt-6 rounded-xl border border-[var(--color-border-strong)] bg-white/[0.03] p-5">
              <p className="text-[1.0625rem] font-medium text-[var(--color-text)]">{t.ctaTitle}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {t.ctaBody}
              </p>
              <a
                href={whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-contrast)] hover:bg-[var(--color-accent-hover)]"
              >
                {t.ctaButton}
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
