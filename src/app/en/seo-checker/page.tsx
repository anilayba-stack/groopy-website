import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TldrBox } from "@/components/ui/TldrBox";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { SeoAnalyzerTool } from "@/components/tools/SeoAnalyzerTool";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import type { Faq } from "@content/types";

export const metadata: Metadata = buildMetadata({
  title: "Free SEO Checker Tool",
  description:
    "Calculate your website's SEO (Search Engine Optimization) score for free. Analyze title tags, meta description, mobile-friendliness, structured data, and AI search access in seconds, based on real, verifiable criteria.",
  path: enRoutes.seoTool,
  alternatePath: routes.seoTool,
  locale: "en",
});

const criteria = [
  "Page title and meta description length",
  "H1 heading and image alt attributes",
  "Mobile viewport and canonical tag",
  "HTTPS usage",
  "Structured data (JSON-LD) and Open Graph tags",
  "Content depth (word count)",
  "Access for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — a GEO signal",
  "Real page speed and Core Web Vitals via Google PageSpeed Insights (when available)",
];

const faq: Faq[] = [
  {
    question: "How is the SEO score calculated?",
    answer:
      "The HTML at the address you enter is fetched in real time and each of the criteria above is checked. The score is a weighted total of these checks — never a made-up or random number.",
  },
  {
    question: "Is this tool actually free?",
    answer: "Yes, no signup or payment required; analyze as many sites as you like.",
  },
  {
    question: "Are the URL I enter or the results stored anywhere?",
    answer: "No. The analysis runs fresh every time; results aren't saved to a database.",
  },
  {
    question: "How is this different from Google PageSpeed Insights?",
    answer:
      "In addition to the speed data PageSpeed measures, this tool checks on-page SEO fundamentals and AI search access (GEO) — areas Google's own tool doesn't cover.",
  },
];

export default function SeoToolPage() {
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "Free SEO Checker Tool", path: enRoutes.seoTool },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(faq),
          softwareApplicationSchema({
            name: "Groopy Free SEO Checker Tool",
            description:
              "Free, real-time tool that scores any website's SEO and GEO (AI search) readiness.",
            path: enRoutes.seoTool,
            locale: "en",
          }),
        ]}
      />
      <Container className="pt-10">
        <Breadcrumbs items={crumbs} ariaLabel="Breadcrumb" />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Free Tool"
          title="Free SEO Checker Tool"
          description="Calculate your website's SEO score for free; analyze title tags, meta description, mobile-friendliness, structured data, and AI search access in seconds, based on real, verifiable criteria."
        />
        <div className="mt-8 max-w-2xl">
          <TldrBox label="Summary">
            Enter your website address; the page is fetched in real time and
            scored on title, description, H1, mobile-friendliness, structured
            data, and AI crawler access. For anything that falls short, reach
            Groopy directly on WhatsApp from the results.
          </TldrBox>
        </div>

        <div className="mt-8 max-w-2xl">
          <SeoAnalyzerTool locale="en" />
        </div>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          What criteria are checked?
        </h2>
        <ul className="prose-groopy mt-6 max-w-2xl">
          {criteria.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
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
