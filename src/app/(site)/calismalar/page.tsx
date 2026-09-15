import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { caseStudies } from "@content/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Çalışmalar",
  description:
    "Groopy'nin vaka çalışmaları. Yalnızca müşteri izniyle ve doğrulanabilir sonuçlarla yayımlarız.",
  path: routes.work,
  alternatePath: enRoutes.work,
});

const dateFmt = new Intl.DateTimeFormat("tr-TR", { year: "numeric", month: "long" });

export default function WorkPage() {
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Çalışmalar", path: routes.work },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Container className="pt-10">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Çalışmalar"
          title="Vaka çalışmaları"
          description="Vaka çalışmalarını yalnızca müşterinin izniyle ve ölçülebilir, doğrulanabilir sonuçlarla yayımlıyoruz. Uydurma rakam veya izinsiz referans yok."
        />

        {caseStudies.length === 0 ? (
          <div className="mt-10 max-w-2xl rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
              İlk vaka çalışmalarımızı yayına hazırlıyoruz. Bir projenin sonuçlarını
              görmek isterseniz doğrudan paylaşabiliriz.
            </p>
            <Link
              href={routes.contact}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
            >
              Bize yazın <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <li key={cs.slug}>
                <Link
                  href={routes.caseStudy(cs.slug)}
                  className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-border-strong)]"
                >
                  <span className="text-xs text-[var(--color-text-faint)]">
                    {cs.client} · {dateFmt.format(new Date(cs.publishedAt))}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-text)]">
                    {cs.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {cs.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <CtaBand />
    </>
  );
}
