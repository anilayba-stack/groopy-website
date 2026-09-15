import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TldrBox } from "@/components/ui/TldrBox";
import { FaqList } from "@/components/ui/FaqList";
import Image from "next/image";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { serviceImage } from "@/components/sections/services/ServiceVisual";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { SERVICE_SLUG_TR_TO_EN } from "@/lib/i18n-routes";
import { getService, serviceSlugs } from "@content/services";
import { getPost } from "@content/blog";

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

/** Yalnızca tanımlı hizmetler; kaldırılan slug'lar 404. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const enSlug = SERVICE_SLUG_TR_TO_EN[service.slug];
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: routes.service(service.slug),
    alternatePath: enSlug ? enRoutes.service(enSlug) : undefined,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Hizmetler", path: routes.services },
    { name: service.navLabel, path: routes.service(service.slug) },
  ];

  const img = serviceImage(service.slug);

  const relatedPosts = (service.relatedPosts ?? [])
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema(crumbs),
          ...(service.faq && service.faq.length > 0 ? [faqSchema(service.faq)] : []),
        ]}
      />

      <section className="service-hero relative isolate overflow-hidden border-b border-[var(--color-border)]">
        {img ? (
          <div className="service-hero__media">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="service-hero__img"
            />
            <span className="service-hero__fade" aria-hidden />
          </div>
        ) : null}

        <Container className="relative pt-10 pb-16 sm:pb-20 lg:min-h-[440px] lg:pb-24">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-faint)]">
              <span
                className="inline-block h-px w-6 bg-[var(--color-border-strong)]"
                aria-hidden
              />
              Ana hizmet
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl">
              {service.title}
            </h1>
            <div className="mt-8">
              <TldrBox>{service.tldr}</TldrBox>
            </div>
          </div>
        </Container>
      </section>

      <Section className="!border-t-0">
        <div className="prose-groopy max-w-3xl">
          {service.sections.map((sec) => (
            <div key={sec.heading}>
              <h2>{sec.heading}</h2>
              <p>{sec.body}</p>
              {sec.bullets ? (
                <ul>
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {service.process && service.process.length > 0 ? (
        <Section surface>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
            Süreç
          </h2>
          <ProcessSteps steps={service.process} />
        </Section>
      ) : null}

      {service.faq && service.faq.length > 0 ? (
        <Section>
          <div className="max-w-3xl">
            <FaqList items={service.faq} />
          </div>
        </Section>
      ) : null}

      {relatedPosts.length > 0 ? (
        <Section surface>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-faint)]">
            İlgili yazılar
          </h2>
          <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {relatedPosts.map((p) => (
              <li key={p.meta.slug}>
                <Link
                  href={routes.post(p.meta.slug)}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="text-[1.0625rem] text-[var(--color-text)]">
                    {p.meta.title}
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 text-[var(--color-text-faint)] transition-colors group-hover:text-[var(--color-text)]"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
