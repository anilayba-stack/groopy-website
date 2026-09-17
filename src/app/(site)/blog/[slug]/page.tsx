import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
import { routes, enRoutes } from "@/lib/routes";
import { POST_SLUG_TR_TO_EN } from "@/lib/i18n-routes";
import { SITE } from "@/lib/site-config";
import { getPost, postSlugs } from "@content/blog";
import { getService } from "@content/services";

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
  const enSlug = POST_SLUG_TR_TO_EN[post.meta.slug];
  return buildMetadata({
    title: post.meta.metaTitle ?? post.meta.title,
    description: post.meta.description,
    path: routes.post(post.meta.slug),
    ogType: "article",
    publishedTime: post.meta.publishedAt,
    modifiedTime: post.meta.updatedAt ?? post.meta.publishedAt,
    alternatePath: enSlug ? enRoutes.post(enSlug) : undefined,
    image: post.meta.coverImage?.src,
  });
}

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, Body } = post;
  const hub = meta.hubService ? getService(meta.hubService) : undefined;
  const authorByline =
    meta.author === SITE.founder.name
      ? `${meta.author} — Groopy Kurucusu`
      : meta.author;
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Blog", path: routes.blog },
    { name: meta.title, path: routes.post(meta.slug) },
  ];

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(meta),
          breadcrumbSchema(crumbs),
          ...(meta.faq && meta.faq.length > 0 ? [faqSchema(meta.faq)] : []),
        ]}
      />

      <article>
        {meta.coverImage ? (
          <section className="service-hero relative isolate overflow-hidden border-b border-[var(--color-border)]">
            <div className="service-hero__media">
              <Image
                src={meta.coverImage.src}
                alt={meta.coverImage.alt}
                fill
                priority
                sizes="100vw"
                className="service-hero__img"
              />
              <span className="service-hero__fade" aria-hidden />
            </div>
            <Container className="relative pt-10 pb-16 sm:pb-20">
              <Breadcrumbs items={crumbs} />
              <header className="mt-6 max-w-3xl">
                <div className="flex items-baseline gap-3 text-xs text-[var(--color-text-faint)]">
                  <time dateTime={meta.publishedAt}>
                    {dateFmt.format(new Date(meta.publishedAt))}
                  </time>
                  {meta.updatedAt ? (
                    <span>
                      · Güncellendi {dateFmt.format(new Date(meta.updatedAt))}
                    </span>
                  ) : null}
                  <span aria-hidden>·</span>
                  <span>{meta.readingMinutes} dk okuma</span>
                </div>
                <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl">
                  {meta.title}
                </h1>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                  {meta.author === SITE.founder.name ? (
                    <Link href={routes.about} className="hover:text-[var(--color-text)]">
                      {authorByline}
                    </Link>
                  ) : (
                    authorByline
                  )}
                </p>
              </header>
            </Container>
          </section>
        ) : (
          <Container className="pt-10">
            <Breadcrumbs items={crumbs} />
            <header className="max-w-3xl">
              <div className="flex items-baseline gap-3 text-xs text-[var(--color-text-faint)]">
                <time dateTime={meta.publishedAt}>
                  {dateFmt.format(new Date(meta.publishedAt))}
                </time>
                {meta.updatedAt ? (
                  <span>
                    · Güncellendi {dateFmt.format(new Date(meta.updatedAt))}
                  </span>
                ) : null}
                <span aria-hidden>·</span>
                <span>{meta.readingMinutes} dk okuma</span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:text-4xl">
                {meta.title}
              </h1>
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                {meta.author === SITE.founder.name ? (
                  <Link href={routes.about} className="hover:text-[var(--color-text)]">
                    {authorByline}
                  </Link>
                ) : (
                  authorByline
                )}
              </p>
            </header>
          </Container>
        )}

        <Container className="pt-10">
          <div className="max-w-3xl">
            <TldrBox>{meta.tldr}</TldrBox>
          </div>

          <div className="prose-groopy mt-10 max-w-3xl">
            <Body />
          </div>

          {meta.faq && meta.faq.length > 0 ? (
            <div className="mt-16 max-w-3xl">
              <FaqList items={meta.faq} />
            </div>
          ) : null}

          {hub ? (
            <div className="mt-16 max-w-3xl rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
              <p className="text-sm text-[var(--color-text-muted)]">
                İlgili hizmetler:
              </p>
              <Link
                href={routes.service(hub.slug)}
                className="mt-1 inline-block text-[1.0625rem] font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
              >
                {hub.navLabel} →
              </Link>
            </div>
          ) : null}

          <div className="mt-12 max-w-3xl">
            <Link
              href={routes.blog}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              <ArrowLeft className="size-4" aria-hidden /> Tüm yazılar
            </Link>
          </div>
        </Container>
      </article>

      <div className="mt-20">
        <CtaBand
          title="Bu işi sizin için yapalım"
          description={`${SITE.name} bir yazılım şirketi. Kısa bir keşif görüşmesiyle başlıyoruz.`}
        />
      </div>
    </>
  );
}
