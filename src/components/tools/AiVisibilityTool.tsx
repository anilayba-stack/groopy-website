"use client";

import { useState, type FormEvent } from "react";
import { Sparkles, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";
import { RabbitLoader } from "@/components/ui/RabbitLoader";
import { trackAiVisibilityToolUsed, trackWhatsAppClick } from "@/lib/analytics";
import type { VisibilityCheckResult } from "@/lib/ai-visibility";

const STRINGS = {
  tr: {
    brandLabel: "Marka adınız",
    brandPlaceholder: "Groopy",
    serviceLabel: "Hizmetiniz (opsiyonel)",
    servicePlaceholder: "web sitesi geliştirme",
    cityLabel: "Şehir (opsiyonel)",
    cityPlaceholder: "İstanbul",
    button: "Gemini'de Test Et",
    loading: "Soruluyor…",
    loadingHint: "Gemini'ye soruyoruz…",
    mentioned: "Markanız geçti",
    notMentioned: "Markanız geçmedi",
    disclaimer:
      "Bu, tek bir anlık test — AI yanıtları oturumdan oturuma değişebilir. Kesin bir sonuç olarak değil, bir başlangıç noktası olarak okuyun.",
    errorGeneric: "Bir şeyler ters gitti, lütfen tekrar deneyin.",
    ctaTitle: "Görünür olmak için ne yapabilirsiniz?",
    ctaBody:
      "Markanızın yapay zekâ aramalarında görünürlüğünü birlikte değerlendirelim.",
    ctaButton: "WhatsApp'tan yazın",
  },
  en: {
    brandLabel: "Your brand name",
    brandPlaceholder: "Groopy",
    serviceLabel: "Your service (optional)",
    servicePlaceholder: "website development",
    cityLabel: "City (optional)",
    cityPlaceholder: "Istanbul",
    button: "Test on Gemini",
    loading: "Asking…",
    loadingHint: "Asking Gemini…",
    mentioned: "Your brand was mentioned",
    notMentioned: "Your brand wasn't mentioned",
    disclaimer:
      "This is a single snapshot test — AI answers can vary from session to session. Treat it as a starting point, not a definitive result.",
    errorGeneric: "Something went wrong, please try again.",
    ctaTitle: "What can you do to become visible?",
    ctaBody: "Let's work through your brand's visibility in AI search together.",
    ctaButton: "Message us on WhatsApp",
  },
} as const;

export function AiVisibilityTool({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const t = STRINGS[locale];
  const [brand, setBrand] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VisibilityCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/ai-gorunurluk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand, service, city, locale }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : t.errorGeneric);
        return;
      }
      const r = data as VisibilityCheckResult;
      setResult(r);
      trackAiVisibilityToolUsed(
        r.items.some((i) => i.mentioned),
        locale,
      );
    } catch {
      setError(t.errorGeneric);
    } finally {
      setLoading(false);
    }
  }

  const anyMentioned = result?.items.some((i) => i.mentioned) ?? false;
  const whatsappMessage = result
    ? locale === "en"
      ? `Hi, I tested "${result.brand}" with the free AI visibility tool (Gemini) and ${
          anyMentioned ? "it was mentioned" : "it wasn't mentioned"
        }. Can you help improve this?`
      : `Merhaba, "${result.brand}" için ücretsiz AI görünürlük testini (Gemini) çalıştırdım, ${
          anyMentioned ? "markam geçti" : "markam geçmedi"
        }. Bu konuda yardımcı olur musunuz?`
    : undefined;

  return (
    <div className="surface-glass rounded-2xl border border-[var(--color-border-strong)] p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-3">
        <div>
          <label htmlFor="ai-vis-brand" className="text-xs font-medium text-[var(--color-text-muted)]">
            {t.brandLabel}
          </label>
          <input
            id="ai-vis-brand"
            type="text"
            required
            maxLength={80}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder={t.brandPlaceholder}
            className="mt-1 w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-accent)]"
          />
        </div>
        <div>
          <label htmlFor="ai-vis-service" className="text-xs font-medium text-[var(--color-text-muted)]">
            {t.serviceLabel}
          </label>
          <input
            id="ai-vis-service"
            type="text"
            maxLength={80}
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder={t.servicePlaceholder}
            className="mt-1 w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-accent)]"
          />
        </div>
        <div>
          <label htmlFor="ai-vis-city" className="text-xs font-medium text-[var(--color-text-muted)]">
            {t.cityLabel}
          </label>
          <input
            id="ai-vis-city"
            type="text"
            maxLength={80}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={t.cityPlaceholder}
            className="mt-1 w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3.5 py-2.5 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-accent)]"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-contrast)] transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-60 sm:col-span-3 sm:mt-2 sm:w-fit"
        >
          {loading ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Sparkles className="size-4" aria-hidden />}
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
        <div className="mt-6 space-y-4">
          {result.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-border-strong)] bg-white/[0.03] p-5"
            >
              <div className="flex items-center gap-2">
                {item.mentioned ? (
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-400" aria-hidden />
                ) : (
                  <XCircle className="size-4 shrink-0 text-[var(--color-danger)]" aria-hidden />
                )}
                <p className="text-sm font-medium text-[var(--color-text)]">
                  {item.mentioned ? t.mentioned : t.notMentioned}
                </p>
              </div>
              <p className="mt-2 text-xs text-[var(--color-text-faint)]">{item.question}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {item.answer}
              </p>
            </div>
          ))}

          <p className="text-xs text-[var(--color-text-faint)]">{t.disclaimer}</p>

          <div className="rounded-xl border border-[var(--color-border-strong)] bg-white/[0.03] p-5">
            <p className="text-[1.0625rem] font-medium text-[var(--color-text)]">{t.ctaTitle}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t.ctaBody}
            </p>
            <a
              href={whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("seo_tool_result", locale)}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-contrast)] hover:bg-[var(--color-accent-hover)]"
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
