import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import { serviceSlugs } from "@content/services";
import { sortedPosts } from "@content/blog";
import { caseStudySlugs } from "@content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPaths: { path: string; priority: number }[] = [
    { path: routes.home, priority: 1 },
    { path: routes.services, priority: 0.9 },
    { path: routes.work, priority: 0.5 },
    { path: routes.blog, priority: 0.7 },
    { path: routes.about, priority: 0.6 },
    { path: routes.contact, priority: 0.8 },
  ];

  const servicePaths = serviceSlugs().map((slug) => ({
    path: routes.service(slug),
    priority: 0.9,
  }));

  const casePaths = caseStudySlugs().map((slug) => ({
    path: routes.caseStudy(slug),
    priority: 0.5,
  }));

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths,
    ...servicePaths,
    ...casePaths,
  ].map((e) => ({
    url: `${base}${e.path === "/" ? "" : e.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: e.priority,
  }));

  for (const post of sortedPosts()) {
    entries.push({
      url: `${base}${routes.post(post.meta.slug)}`,
      lastModified: new Date(post.meta.updatedAt ?? post.meta.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
