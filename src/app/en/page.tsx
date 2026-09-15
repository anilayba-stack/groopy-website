import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ProofBand } from "@/components/sections/ProofBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import type { Faq } from "@content/types";
import { primaryServices } from "@content/en/services";
import { diagnostics } from "@content/en/diagnostics";

export const metadata: Metadata = buildMetadata({
  title: "Website Development, SEO and GEO in Istanbul",
  description:
    "Groopy is an Istanbul-based software company; we make your business visible in Google and AI search through website development, SEO + GEO, and social media management.",
  path: enRoutes.home,
  isHome: true,
  locale: "en",
  alternatePath: routes.home,
});

const homeFaq: Faq[] = [
  {
    question: "Where is Groopy based and how do you work?",
    answer:
      "Groopy is an Istanbul-based software company offering website development, SEO + GEO strategy, and social media management. We work with businesses across Turkey and internationally; meetings are held online or in person.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Price is set per project scope — there's no fixed package. After the discovery call, scope, timeline, and price are shared in writing; there are no surprise costs along the way.",
  },
  {
    question: "How does a project move forward?",
    answer:
      "In four steps: discovery (business goal and success metric), plan (scope, timeline, price), production (design and development, with checkpoint approvals), and launch (performance, search visibility, and conversion tracking).",
  },
  {
    question: "Is support provided after launch?",
    answer:
      "Yes. Performance and search visibility are monitored and fine-tuned in the first period after launch. An optional maintenance agreement covers ongoing updates and development.",
  },
  {
    question: "Do I have to take the services one at a time?",
    answer:
      "No. Website development, SEO + GEO, and social media management are independent of each other; you can take just one. When planned together, measurement and reporting are consolidated — but that's not required.",
  },
];

const companyProcess = [
  {
    title: "Discovery",
    description:
      "We talk through the business goal, target audience, and success metric. What we'll do gets written down.",
  },
  {
    title: "Plan",
    description: "Scope, timeline, and price are locked in. No surprises.",
  },
  {
    title: "Production",
    description:
      "Design and development move together, with checkpoint approvals along the way.",
  },
  {
    title: "Launch & measurement",
    description:
      "Performance, search visibility, and conversion are tracked; the first months bring fine-tuning.",
  },
];

export default function EnHomePage() {
  return (
    <>
      <Hero locale="en" />
      <ClientMarquee ariaLabel="Selected clients" />
      <DiagnosticSection locale="en" diagnostics={diagnostics} />

      <Section>
        <SectionHeading
          eyebrow="Core services"
          title="Website development, SEO + GEO, and social media management"
          description="Groopy is an Istanbul-based software company offering corporate website development, SEO, GEO (AI search optimization), and social media management. All of it is aimed at growing your brand on Google and social media."
        />
        <div className="mt-10">
          <ServiceCards services={primaryServices} hrefFor={enRoutes.service} />
        </div>
      </Section>

      <Section surface>
        <ProofBand locale="en" />
      </Section>

      <Section>
        <SectionHeading eyebrow="Approach" title="How we work" />
        <div className="mt-10">
          <ProcessSteps steps={companyProcess} />
        </div>
      </Section>

      <Section surface>
        <JsonLd data={faqSchema(homeFaq)} />
        <div className="max-w-3xl">
          <FaqList items={homeFaq} title="Frequently asked questions" />
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
