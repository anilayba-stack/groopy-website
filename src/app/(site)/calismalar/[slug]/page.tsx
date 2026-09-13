import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { getCaseStudy, caseStudySlugs } from "@content/case-studies";

/** v1: vaka çalışması yok. Route var, hiçbir sayfa üretilmez. */
export function generateStaticParams() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({
    title: cs.title,
    description: cs.description,
    path: routes.caseStudy(cs.slug),
    ogType: "article",
    publishedTime: cs.publishedAt,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Çalışmalar", path: routes.work },
    { name: cs.title, path: routes.caseStudy(cs.slug) },
  ];
  const Body = cs.Body;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Container className="pt-10">
        <Breadcrumbs items={crumbs} />
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-faint)]">
            {cs.client} · {cs.serviceLine}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {cs.title}
          </h1>
        </div>
        {cs.results.length > 0 ? (
          <dl className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-3">
            {cs.results.map((r) => (
              <div key={r.label}>
                <dt className="text-sm text-[var(--color-text-muted)]">{r.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-[var(--color-text)]">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </Container>

      <Section className="!border-t-0">
        <div className="prose-groopy max-w-3xl">
          <Body />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
