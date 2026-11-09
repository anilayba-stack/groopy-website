import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { workGallery } from "@content/work-gallery";
import { WorkGallery } from "@/components/sections/WorkGallery";

export const metadata: Metadata = buildMetadata({
  title: "Çalışmalar",
  description:
    "Groopy'nin gerçek müşteri çalışmaları — web sitesi, SEO+GEO ve sosyal medya yönetimi projelerinden kareler.",
  path: routes.work,
  alternatePath: enRoutes.work,
});

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

        <div className="mt-10">
          <WorkGallery entries={workGallery} locale="tr" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
