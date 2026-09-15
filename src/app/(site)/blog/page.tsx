import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { sortedPosts } from "@content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Web geliştirme, SEO, GEO ve sosyal medya üzerine cevap-önce yazılar. Somut, doğrulanabilir, abartısız.",
  path: routes.blog,
  alternatePath: enRoutes.blog,
});

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogIndexPage() {
  const posts = sortedPosts();
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Blog", path: routes.blog },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Container className="pt-10">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="Yazılar"
          description="Önce net cevap, sonra detay. Garantiler ve doğrulanamaz yüzdeler yok."
        />

        <ul className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {posts.map((post) => (
            <li key={post.meta.slug}>
              <Link
                href={routes.post(post.meta.slug)}
                className="group block py-6"
              >
                <div className="flex items-baseline gap-3 text-xs text-[var(--color-text-faint)]">
                  <time dateTime={post.meta.publishedAt}>
                    {dateFmt.format(new Date(post.meta.publishedAt))}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{post.meta.readingMinutes} dk okuma</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
                  {post.meta.title}
                </h2>
                <p className="mt-2 max-w-2xl text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
                  {post.meta.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
