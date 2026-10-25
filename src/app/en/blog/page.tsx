import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import { sortedPosts } from "@content/en/blog";
import { primaryServices } from "@content/en/services";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Answer-first articles on website development, SEO, GEO, and social media. Concrete, verifiable, no hype.",
  path: enRoutes.blog,
  locale: "en",
  alternatePath: routes.blog,
});

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function EnBlogIndexPage() {
  const posts = sortedPosts();
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "Blog", path: enRoutes.blog },
  ];

  const groups = primaryServices.map((service) => ({
    service,
    posts: posts.filter((post) => post.meta.hubService === service.slug),
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Container className="pt-10">
        <Breadcrumbs ariaLabel="Breadcrumb" items={crumbs} />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="Articles"
          description="The clear answer first, detail after. No guarantees, no unverifiable percentages."
        />

        <div className="mt-10 space-y-16">
          {groups.map(({ service, posts: groupPosts }) =>
            groupPosts.length > 0 ? (
              <div key={service.slug} id={service.slug} className="scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-border)] pb-4">
                  <h2 className="text-lg font-semibold tracking-tight text-[var(--color-text)]">
                    {service.navLabel}
                  </h2>
                  <Link
                    href={enRoutes.service(service.slug)}
                    className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                  >
                    View service
                  </Link>
                </div>

                <ul className="divide-y divide-[var(--color-border)]">
                  {groupPosts.map((post) => (
                    <li key={post.meta.slug}>
                      <Link
                        href={enRoutes.post(post.meta.slug)}
                        className="group block py-6"
                      >
                        <div className="flex items-baseline gap-3 text-xs text-[var(--color-text-faint)]">
                          <time dateTime={post.meta.publishedAt}>
                            {dateFmt.format(new Date(post.meta.publishedAt))}
                          </time>
                          <span aria-hidden>·</span>
                          <span>{post.meta.readingMinutes} min read</span>
                        </div>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
                          {post.meta.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
                          {post.meta.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null,
          )}
        </div>
      </Section>

      <CtaBand locale="en" />
    </>
  );
}
