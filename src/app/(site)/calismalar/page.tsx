import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { caseStudies } from "@content/case-studies";
import { workGallery } from "@content/work-gallery";
import { WorkGallery } from "@/components/sections/WorkGallery";

export const metadata: Metadata = buildMetadata({
  title: "Çalışmalar",
  description:
    "Groopy'nin gerçek müşteri çalışmaları — web sitesi, SEO+GEO ve sosyal medya yönetimi projelerinden kareler.",
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
          title="Birlikte çalıştığımız projeler"
          description="Müşterilerimizin izniyle paylaştığımız projelerimiz."
        />

        {caseStudies.length > 0 && (
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

        <div className="mt-10">
          <WorkGallery entries={workGallery} locale="tr" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
