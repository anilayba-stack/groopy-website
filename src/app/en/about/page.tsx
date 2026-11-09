import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, founderSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "About: Istanbul-Based Software Company",
  description:
    "Groopy is an Istanbul-based software company. Founded by Anıl Ay. We provide website development, SEO + GEO, Google Ads Management, and social media management.",
  path: enRoutes.about,
  locale: "en",
  alternatePath: routes.about,
});

export default function EnAboutPage() {
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "About", path: enRoutes.about },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), founderSchema("en")]} />
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

          <h2>Who we work with</h2>
          <p>
            Groopy isn&apos;t limited to one industry. We run website,
            SEO&nbsp;+&nbsp;GEO, Google Ads Management, and social media
            management projects for dentists and dental clinics, doctors and
            healthcare providers, e-commerce sites, restaurants, and
            businesses across many other sectors. Search behavior and the
            customer journey differ by industry, so each project is built
            around that business&apos;s actual needs rather than a
            one-size-fits-all template.
          </p>
          <p>
            You can see some of our real projects on the{" "}
            <Link href={enRoutes.work} className="underline underline-offset-2">
              case studies
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
