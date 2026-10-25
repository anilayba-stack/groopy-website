import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import { caseStudies } from "@content/en/case-studies";
import { workGallery } from "@content/en/work-gallery";
import { WorkGallery } from "@/components/sections/WorkGallery";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Groopy's real client work — photos from website development, SEO+GEO, and social media management projects.",
  path: enRoutes.work,
  locale: "en",
  alternatePath: routes.work,
});

const dateFmt = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" });

export default function EnWorkPage() {
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "Case Studies", path: enRoutes.work },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Container className="pt-10">
        <Breadcrumbs ariaLabel="Breadcrumb" items={crumbs} />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Case Studies"
          title="Projects we've worked on"
          description="Real projects shared only with client permission. No invented numbers or unauthorized references."
        />

        {caseStudies.length > 0 && (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <li key={cs.slug}>
                <Link
                  href={enRoutes.caseStudy(cs.slug)}
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
          <WorkGallery entries={workGallery} locale="en" />
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
