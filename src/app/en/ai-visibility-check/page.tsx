import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TldrBox } from "@/components/ui/TldrBox";
import { FaqList } from "@/components/ui/FaqList";
import { AiVisibilityTool } from "@/components/tools/AiVisibilityTool";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  breadcrumbSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import type { Faq } from "@content/types";

export const metadata: Metadata = buildMetadata({
  title: "Is Your Brand Visible in AI Search? Free Test",
  description:
    "Test for free whether your brand is mentioned by Google's AI, Gemini. ChatGPT, Perplexity, and Claude tests are coming soon.",
  path: enRoutes.aiVisibility,
  locale: "en",
  alternatePath: routes.aiVisibility,
});

const faq: Faq[] = [
  {
    question: "Is this tool really free?",
    answer:
      "Yes, no signup or payment required. It asks Google's Gemini model two real-time questions and shows whether your brand appears in the answer.",
  },
  {
    question: "When can I test my brand in ChatGPT?",
    answer:
      "Right now only Gemini is tested automatically; automatic testing for ChatGPT, Perplexity, and Claude is coming soon. In the meantime, see our article on AI chatbot brand tracking for ready-to-use prompts to check those platforms manually.",
  },
  {
    question: "My brand didn't show up in one test — is that a bad sign?",
    answer:
      "Not on its own. AI model answers can vary from session to session, so we recommend not treating a single result as final — try again a few days apart.",
  },
  {
    question: "Is the brand name or result I enter stored anywhere?",
    answer: "No. Each test runs live; results aren't saved to a database.",
  },
  {
    question: "What is Gemini, how is it different from ChatGPT?",
    answer:
      "Gemini is Google's own AI model — a separate model from a separate company, just as OpenAI's ChatGPT and Anthropic's Claude are. Google Search's AI Overviews feature is also largely built on Gemini.",
  },
];

export default function AiVisibilityPage() {
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "AI Visibility Check", path: enRoutes.aiVisibility },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          softwareApplicationSchema({
            name: "Groopy Free AI Visibility Check",
            description:
              "Free, real-time tool that tests whether your brand is mentioned by Google's AI, Gemini.",
            path: enRoutes.aiVisibility,
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
          title="Is Your Brand Visible in AI Search?"
          description="Test whether your brand is mentioned by ChatGPT, Gemini, Perplexity, and Claude. The Gemini test below is live now; automatic testing for the other platforms is coming soon."
        />
        <div className="mt-8 max-w-2xl">
          <TldrBox>
            Enter your brand name; Google&apos;s Gemini model is asked two
            real-time questions (your brand directly, and a category query if
            you add a city and service), and whether your brand appears in
            the answer is shown along with the full response.
          </TldrBox>
        </div>
      </Section>

      <Section className="!border-t-0 !pt-2">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Test Your Brand&apos;s Visibility in Gemini (Google&apos;s AI)
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          This test asks the Gemini model without a live search connection —
          so the answer is based on the model&apos;s training data, not
          real-time search results like Google&apos;s AI Overviews. Because
          of this, your brand can show up correctly in Google&apos;s AI
          Overviews while getting a different answer here, especially if
          you&apos;re a new or small brand. This test shows how well the
          model &quot;knows&quot; you from raw training data; for your
          visibility in Google&apos;s own live AI features, the Search
          Console performance report is a more reliable source.
        </p>
        <div className="mt-6 max-w-2xl">
          <AiVisibilityTool locale="en" />
        </div>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Test Your Brand&apos;s Visibility in ChatGPT
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          There&apos;s no automatic ChatGPT test on this page yet, but you
          can test your brand yourself in about 2 minutes: open an
          incognito/private tab, sign out of ChatGPT, and first ask
          &quot;What is [your brand] and what do they do?&quot;, then try
          &quot;Who would you recommend for [your service] in [city]?&quot;
          Ask the same questions again with web search turned off and
          compare the answers — ChatGPT&apos;s knowledge of your brand comes
          from two separate layers (frozen training data and live web
          search), and the two can give different results.{" "}
          <Link href="/en/blog/ai-chatbot-brand-tracking">
            Our article with ready-to-use prompts and a tracking template for
            all four platforms
          </Link>{" "}
          walks through this method step by step.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Test Your Brand&apos;s Visibility in Perplexity
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          There&apos;s no automatic Perplexity test on this page yet. To
          test it yourself, open an incognito tab, go to Perplexity, and try
          &quot;Tell me about [your brand]&quot; and &quot;What are the best
          options for [your service] in [city]?&quot; Perplexity&apos;s
          distinguishing trait is that it shows source links under every
          answer — when your brand appears, check which page got cited as
          the source; that tells you which of your content is treated as
          the reference.{" "}
          <Link href="/en/blog/ai-chatbot-brand-tracking">
            Our article has this method plus a ready-to-use tracking
            template for all four platforms
          </Link>
          .
        </p>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Test Your Brand&apos;s Visibility in Claude
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          There&apos;s no automatic Claude test on this page yet. To test it
          yourself, open an incognito tab and ask Claude &quot;What do you
          know about [your brand]?&quot; and &quot;Who would you recommend
          for [your service] in [city]?&quot; Unless web search is turned
          on, Claude relies largely on its training data, so it&apos;s
          normal — not a bad sign — for a new or small brand to not appear
          at all in that case.{" "}
          <Link href="/en/blog/ai-chatbot-brand-tracking">
            Our article has this method plus a ready-to-use tracking
            template for all four platforms
          </Link>
          .
        </p>
      </Section>

      <Section surface>
        <div className="max-w-3xl">
          <FaqList items={faq} title="Frequently asked questions" />
        </div>
      </Section>
    </>
  );
}
