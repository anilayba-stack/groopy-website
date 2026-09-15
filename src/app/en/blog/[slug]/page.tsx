import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TldrBox } from "@/components/ui/TldrBox";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  blogPostingSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import { POST_SLUG_EN_TO_TR } from "@/lib/i18n-routes";
import { SITE } from "@/lib/site-config";
import { getPost, postSlugs } from "@content/en/blog";
import { getService } from "@content/en/services";

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const trSlug = POST_SLUG_EN_TO_TR[post.meta.slug];
  return buildMetadata({
    title: post.meta.metaTitle ?? post.meta.title,
    description: post.meta.description,
    path: enRoutes.post(post.meta.slug),
    ogType: "article",
    publishedTime: post.meta.publishedAt,
    modifiedTime: post.meta.updatedAt ?? post.meta.publishedAt,
    locale: "en",
    alternatePath: trSlug ? routes.post(trSlug) : undefined,
  });
}

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function EnBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, Body } = post;
  const hub = meta.hubService ? getService(meta.hubService) : undefined;
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "Blog", path: enRoutes.blog },
    { name: meta.title, path: enRoutes.post(meta.slug) },
  ];

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(meta, { path: enRoutes.post(meta.slug), locale: "en" }),
          breadcrumbSchema(crumbs),
          ...(meta.faq && meta.faq.length > 0 ? [faqSchema(meta.faq)] : []),
        ]}
      />

      <Container className="pt-10">
        <Breadcrumbs ariaLabel="Breadcrumb" items={crumbs} />
        <article>
          <header className="max-w-3xl">
            <div className="flex items-baseline gap-3 text-xs text-[var(--color-text-faint)]">
              <time dateTime={meta.publishedAt}>
                {dateFmt.format(new Date(meta.publishedAt))}
              </time>
              {meta.updatedAt ? (
                <span>
                  · Updated {dateFmt.format(new Date(meta.updatedAt))}
                </span>
              ) : null}
              <span aria-hidden>·</span>
              <span>{meta.readingMinutes} min read</span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl">
              {meta.title}
            </h1>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              {meta.author}
            </p>
          </header>

          <div className="mt-8 max-w-3xl">
            <TldrBox label="Summary">{meta.tldr}</TldrBox>
          </div>

          <div className="prose-groopy mt-10 max-w-3xl">
            <Body />
          </div>

          {meta.faq && meta.faq.length > 0 ? (
            <div className="mt-16 max-w-3xl">
              <FaqList items={meta.faq} title="Frequently asked questions" />
            </div>
          ) : null}

          {hub ? (
            <div className="mt-16 max-w-3xl rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
              <p className="text-sm text-[var(--color-text-muted)]">
                We work on this:
              </p>
              <Link
                href={enRoutes.service(hub.slug)}
                className="mt-1 inline-block text-[1.0625rem] font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
              >
                {hub.navLabel} →
              </Link>
            </div>
          ) : null}

          <div className="mt-12 max-w-3xl">
            <Link
              href={enRoutes.blog}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <ArrowLeft className="size-4" aria-hidden /> All articles
            </Link>
          </div>
        </article>
      </Container>

      <div className="mt-20">
        <CtaBand
          locale="en"
          title="Let's do this for you"
          description={`${SITE.name} is a software company. We start with a short discovery call.`}
        />
      </div>
    </>
  );
}
