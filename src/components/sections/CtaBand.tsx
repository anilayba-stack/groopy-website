import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PRIMARY_CTA, EN_PRIMARY_CTA } from "@/lib/routes";

const DEFAULTS = {
  tr: {
    title: "Projenizi konuşalım.",
    description:
      "Kısa bir keşif görüşmesiyle başlıyoruz. Kapsam ve takvim yazılı hale gelmeden fiyat vermiyoruz.",
    cta: PRIMARY_CTA,
  },
  en: {
    title: "Let's talk about your project.",
    description:
      "We start with a short discovery call. We don't quote a price before scope and timeline are in writing.",
    cta: EN_PRIMARY_CTA,
  },
} as const;

export function CtaBand({
  locale = "tr",
  title,
  description,
}: {
  locale?: "tr" | "en";
  title?: string;
  description?: string;
}) {
  const d = DEFAULTS[locale];
  return (
    <section className="border-t border-[var(--color-border)]">
      <Container className="py-16 sm:py-20">
        <div className="surface-glass ambient-top relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] p-8 sm:p-12">
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                {title ?? d.title}
              </h2>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
                {description ?? d.description}
              </p>
            </div>
            <ButtonLink href={d.cta.href} className="shrink-0">
              {d.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
