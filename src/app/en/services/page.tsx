import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import { primaryServices } from "@content/en/services";
import type { Faq } from "@content/types";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Groopy's services: website & software development, SEO + GEO strategy, Google Ads Management, and social media management.",
  path: enRoutes.services,
  locale: "en",
  alternatePath: routes.services,
});

const faq: Faq[] = [
  {
    question: "Do I have to take all four services together?",
    answer:
      "No. Website/software development, SEO + GEO, Google Ads management, and social media management are independent services; you can take just one. Taking them together avoids coordination loss since one team runs all of them, but it's never a requirement.",
  },
  {
    question: "Which service should I start with?",
    answer:
      "If you have no website, or a weak technical foundation (slow, not mobile-friendly, built on an old system), website development is the first step. If your site is solid but doesn't show up on Google or in AI search, SEO + GEO comes first. If you want instant, paid visibility, Google Ads management is the one; if you want to maintain your brand presence with regular content, social media management fits.",
  },
  {
    question: "Can I start more than one service at the same time?",
    answer:
      "Yes. For example, setting up the SEO + GEO foundation while the website is still being built means you launch with visibility infrastructure already in place, instead of starting from zero. The one limit is that Google Ads management needs a live, meaningful destination (such as a landing page) to point traffic to, so it works best once a site exists.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Each service's scope depends on your business; a firm quote only comes after a short call. For website development and social media management, we've shared general price ranges in our website cost and social media management pricing articles.",
  },
];

export default function EnServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: enRoutes.home },
            { name: "Services", path: enRoutes.services },
          ]),
          faqSchema(faq),
        ]}
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
          description="Our four core services — website & software development, SEO + GEO, Google Ads Management, and social media management — are independent of each other; take them separately or as an integrated program."
        />
      </Section>

      <Section className="!border-t-0 !pt-0">
        <ServiceCards services={primaryServices} hrefFor={enRoutes.service} />
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Which service should you prioritize, and when?
        </h2>
        <div className="prose-groopy mt-6 max-w-2xl">
          <p>
            Each of the four services answers a different problem; which one
            to start with depends on where your business stands today.
          </p>
          <dl>
            {primaryServices.map((s) => (
              <div key={s.slug} className="mb-6">
                <dt className="font-semibold text-[var(--color-text)]">
                  <Link href={enRoutes.service(s.slug)}>{s.navLabel}</Link>
                </dt>
                <dd className="mt-1">{s.tldr}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <FaqList items={faq} title="Frequently asked questions" />
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
