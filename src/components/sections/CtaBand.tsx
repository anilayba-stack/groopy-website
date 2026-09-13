import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PRIMARY_CTA } from "@/lib/routes";

export function CtaBand({
  title = "Projenizi konuşalım.",
  description = "Kısa bir keşif görüşmesiyle başlıyoruz. Kapsam ve takvim yazılı hale gelmeden fiyat vermiyoruz.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-[var(--color-border)]">
      <Container className="py-16 sm:py-20">
        <div className="surface-glass ambient-top relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] p-8 sm:p-12">
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
                {description}
              </p>
            </div>
            <ButtonLink href={PRIMARY_CTA.href} className="shrink-0">
              {PRIMARY_CTA.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
