import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "About: Istanbul-Based Software Company",
  description:
    "Groopy is an Istanbul-based software company. Founded by Anıl Ay. We provide website development, SEO + GEO, Google Ads Management, and social media management.",
  path: enRoutes.about,
  locale: "en",
  alternatePath: routes.about,
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#founder`,
  name: SITE.founder.name,
  jobTitle: SITE.founder.roleEn,
  worksFor: { "@id": `${SITE.url}/#organization` },
};

export default function EnAboutPage() {
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "About", path: enRoutes.about },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), personSchema]} />
      <Container className="pt-10">
        <Breadcrumbs ariaLabel="Breadcrumb" items={crumbs} />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="Groopy: an Istanbul-based software company"
          description="We're based in Istanbul and serve businesses across Turkey and internationally. Not an agency — an engineering-led software company."
        />
        <div className="prose-groopy mt-8 max-w-3xl">
          <p>
            Groopy, led by founder Anıl Ay, provides website & software
            development, SEO&nbsp;+&nbsp;GEO strategy, Google Ads Management,
            and social media management. Software is at the core of what we
            do: we build products tied to a measurable business goal,
            without off-the-shelf themes.
          </p>
          <h2>Working principles</h2>
          <ul>
            <li>
              <strong>Engineering discipline.</strong> Measurable outcomes
              over marketing language; every project runs on code ownership
              and technical documentation.
            </li>
            <li>
              <strong>Transparency.</strong> We don&apos;t start until scope,
              timeline, and price are in writing. The code belongs to the
              client.
            </li>
            <li>
              <strong>Focus.</strong> We&apos;re not a do-everything shop. We focus
              on four core services — website & software development,
              SEO&nbsp;+&nbsp;GEO, Google Ads Management, and social media
              management — each offered independently.
            </li>
          </ul>
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
