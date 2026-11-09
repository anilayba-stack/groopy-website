import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
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

        <div className="mt-10">
          <WorkGallery entries={workGallery} locale="en" />
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
