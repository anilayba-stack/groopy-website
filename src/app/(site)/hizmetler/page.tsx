import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { primaryServices } from "@content/services";

export const metadata: Metadata = buildMetadata({
  title: "Hizmetler",
  description:
    "Groopy'nin hizmetleri: web sitesi ve yazılım geliştirme, SEO + GEO stratejisi ve sosyal medya yönetimi.",
  path: routes.services,
  alternatePath: enRoutes.services,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana sayfa", path: "/" },
          { name: "Hizmetler", path: routes.services },
        ])}
      />
      <Container className="pt-10">
        <Breadcrumbs
          items={[
            { name: "Ana sayfa", path: "/" },
            { name: "Hizmetler", path: routes.services },
          ]}
        />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Ne yapıyoruz"
          description="Üç ana hizmetimiz — web sitesi ve yazılım geliştirme, SEO + GEO, sosyal medya yönetimi — birbirinden bağımsızdır; ayrı ayrı ya da bütünleşik biçimde sunulur."
        />
      </Section>

      <Section className="!border-t-0 !pt-0">
        <ServiceCards services={primaryServices} />
      </Section>

      <CtaBand />
    </>
  );
}
