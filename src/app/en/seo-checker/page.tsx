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
    "Calculate your website's SEO score for free. Analyze title tags, mobile-friendliness, structured data, and AI search access in seconds, based on real criteria.",
  path: enRoutes.seoTool,
  alternatePath: routes.seoTool,
  locale: "en",
});

const criteria: { label: string; weight: number; rule: string }[] = [
  { label: "Page title", weight: 12, rule: "Tag is present and under 60 characters" },
  { label: "Meta description", weight: 10, rule: "50-160 characters (recommended: 120-160)" },
  { label: "H1 heading", weight: 8, rule: "Exactly one H1 on the page" },
  { label: "Mobile viewport", weight: 8, rule: "Viewport meta tag present" },
  { label: "HTTPS", weight: 7, rule: "Site is served over HTTPS" },
  { label: "Structured data (JSON-LD)", weight: 7, rule: "At least one JSON-LD script on the page" },
  { label: "Image alt attributes", weight: 6, rule: "At least 80% of images have an alt attribute" },
  { label: "Content depth", weight: 6, rule: "At least 300 words on the page" },
  {
    label: "AI search access (GEO)",
    weight: 6,
    rule: "GPTBot, ClaudeBot, PerplexityBot, Google-Extended are not blocked in robots.txt",
  },
  { label: "Open Graph tags", weight: 5, rule: "og:title and og:description present" },
  { label: "Canonical tag", weight: 5, rule: "A canonical link tag is present" },
  {
    label: "Google PageSpeed (performance)",
    weight: 20,
    rule: "Mobile performance score is used — only counted when this tool has PageSpeed access configured",
  },
];

const fixes: { problem: string; fix: string }[] = [
  {
    problem: "No title tag, or it's over 60 characters",
    fix: "Add a page-specific <title> tag short enough (50-60 characters) not to get cut off in search results.",
  },
  {
    problem: "Meta description missing, too short, or too long",
    fix: "Write a 120-160 character meta description that honestly summarizes the page's content, with the keyword worked in naturally.",
  },
  {
    problem: "Multiple H1s, or none at all",
    fix: "Use exactly one H1 per page — it tells both readers and search engines what the page is actually about.",
  },
  {
    problem: "Most images are missing alt text",
    fix: "Add a descriptive alt attribute to every image; a purely decorative image can use an empty alt=\"\" — what matters is that the attribute is never missing entirely.",
  },
  {
    problem: "Content is under 300 words",
    fix: "Add a real block of text that answers the visitor's actual question — padding with repetition to hit a word count lowers quality; add genuine information instead.",
  },
  {
    problem: "AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are blocked",
    fix: "Don't Disallow these bots in robots.txt — being reachable is the precondition for being cited by AI search tools like ChatGPT, Perplexity, and Google AI Overviews.",
  },
];

const faq: Faq[] = [
  {
    question: "How is the SEO score calculated?",
    answer:
      "The HTML at the address you enter is fetched in real time and each of the criteria above is checked. The score is a weighted total of these checks — never a made-up or random number.",
  },
  {
    question: "Is a score under 80 bad?",
    answer:
      "Not on its own. The score exists to point you to which items are missing — what matters is looking at the detailed results and prioritizing what's failing. A gap that's critical for an e-commerce site may be minor for a blog.",
  },
  {
    question: "Why does the PageSpeed score sometimes not show up?",
    answer:
      "The Google PageSpeed Insights check (including Core Web Vitals) only runs when this tool has PageSpeed API access configured; if it doesn't, that 20-point criterion is skipped and the total is calculated out of the remaining 80 points. In that case a page that passes every other criterion still shows 100.",
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
          How is the score calculated?
        </h2>
        <p className="prose-groopy mt-4 max-w-2xl">
          The total score is a weighted sum of the criteria below. The 11
          criteria other than PageSpeed make up an 80-point base; when Google
          PageSpeed access is configured, a 20-point performance criterion is
          added on top.
        </p>
        <div className="prose-groopy mt-6 max-w-2xl overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Weight</th>
                <th>Pass condition</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.label}>
                  <td>{c.label}</td>
                  <td>{c.weight}</td>
                  <td>{c.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Common issues and how to fix them
        </h2>
        <div className="prose-groopy mt-6 max-w-2xl">
          <dl>
            {fixes.map((f) => (
              <div key={f.problem} className="mb-6">
                <dt className="font-semibold text-[var(--color-text)]">{f.problem}</dt>
                <dd className="mt-1">{f.fix}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section surface>
        <div className="max-w-3xl">
          <FaqList items={faq} title="Frequently asked questions" />
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
