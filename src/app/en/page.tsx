import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { HeroMark } from "@/components/sections/HeroMark";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} — Software company in Istanbul` },
  description:
    "Istanbul-based software company Groopy makes your business visible in Google and AI search — with website development, SEO + GEO and social media management.",
  // Faz 2'de tam EN sitesi yayına girene kadar dizine eklenmez.
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.url}/en` },
};

const services = [
  {
    title: "Website & software development",
    body: "Corporate websites, e-commerce and custom software — built from scratch with Next.js. Fast, findable, easy to maintain.",
  },
  {
    title: "SEO + GEO strategy",
    body: "One plan for Google rankings and for being cited in AI answers (ChatGPT, Perplexity, AI Overviews).",
  },
  {
    title: "Social media management",
    body: "Content planning, production and community management with measurable goals.",
  },
];

export default function EnHome() {
  return (
    <>
      <section className="hero-band relative overflow-hidden border-b border-[var(--color-border)] lg:min-h-[480px]">
        <div className="flex justify-center px-6 pt-12 sm:pt-14 lg:pointer-events-none lg:absolute lg:inset-0 lg:items-center lg:p-0">
          <HeroMark className="w-[132px] sm:w-[150px] lg:w-[240px]" />
        </div>
        <Container className="relative flex min-h-full flex-col justify-center py-14 sm:py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] backdrop-blur-sm">
              <span
                className="size-1.5 rounded-full bg-[var(--color-success)]"
                aria-hidden
              />
              Software company based in Istanbul
            </p>
            <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-[2.5rem] lg:text-[2.75rem]">
              Website development, SEO and social media
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              We make your business visible in Google and AI search. We provide
              website development, SEO&nbsp;+&nbsp;GEO and social media management
              as independent or integrated services.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={`mailto:${SITE.contact.email}`} external>
                Get a quote
              </ButtonLink>
              <Link
                href="/"
                className="px-2 py-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                Türkçe siteye geç →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Website development, SEO + GEO and social media management"
          description="Istanbul-based software company Groopy runs these three services separately or as one integrated program, shaped to your needs. For the strongest results, we recommend combining all three."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="surface-glass rounded-xl border border-[var(--color-border)] p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section surface>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
            Let&apos;s talk about your project
          </h2>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
            The full English site is in preparation. For now, reach us directly —
            we reply within 1–2 business days.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]"
            >
              {SITE.contact.email}
            </a>
            <a
              href={`tel:${SITE.contact.phone}`}
              className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]"
            >
              {SITE.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
