import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import { primaryServices } from "@content/en/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Groopy's services: website & software development, SEO + GEO strategy, and social media management.",
  path: enRoutes.services,
  locale: "en",
  alternatePath: routes.services,
});

export default function EnServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: enRoutes.home },
          { name: "Services", path: enRoutes.services },
        ])}
      />
      <Container className="pt-10">
        <Breadcrumbs
          ariaLabel="Breadcrumb"
          items={[
            { name: "Home", path: enRoutes.home },
            { name: "Services", path: enRoutes.services },
          ]}
        />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="What we do"
          description="Our three core services — website & software development, SEO + GEO, and social media management — are independent of each other; take them separately or as an integrated program."
        />
      </Section>

      <Section className="!border-t-0 !pt-0">
        <ServiceCards services={primaryServices} hrefFor={enRoutes.service} />
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
