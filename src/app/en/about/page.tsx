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
  title: "About",
  description:
    "Groopy is an Istanbul-based software company. Founded by Anıl Ay. We provide website development, SEO + GEO, and social media management.",
  path: enRoutes.about,
  locale: "en",
  alternatePath: routes.about,
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.founder.name,
  jobTitle: SITE.founder.role,
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
          eyebrow="About"
          title="Groopy is a software company"
          description="We're based in Istanbul and serve businesses across Turkey and internationally. Not an agency — an engineering-led software company."
        />
        <div className="prose-groopy mt-8 max-w-3xl">
          <p>
            Groopy provides website & software development, SEO&nbsp;+&nbsp;GEO
            strategy, and social media management. Software is at the core of
            what we do: we build products tied to a measurable business goal,
            without off-the-shelf themes.
          </p>
          <h2>How we work</h2>
          <ul>
            <li>
              <strong>Proof first.</strong> Measurable outcomes over slogans.
              This site itself was built to our own standards.
            </li>
            <li>
              <strong>Transparency.</strong> We don&apos;t start until scope,
              timeline, and price are in writing. The code belongs to the
              client.
            </li>
            <li>
              <strong>Focus.</strong> We&apos;re not a do-everything shop. We focus
              on three core services — website & software development,
              SEO&nbsp;+&nbsp;GEO, and social media management — each offered
              independently.
            </li>
          </ul>
          <h2>Team</h2>
          <p>
            Founded by {SITE.founder.name}. We work project-by-project with
            specialists for design, content, and production.
          </p>
          <h2>Location</h2>
          <p>
            We currently work fully remote, with no physical office. Meetings
            are held over video call, and projects run remotely.
          </p>
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
