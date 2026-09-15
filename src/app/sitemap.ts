import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";
import { routes, enRoutes } from "@/lib/routes";
import { serviceSlugs } from "@content/services";
import { sortedPosts } from "@content/blog";
import { caseStudySlugs } from "@content/case-studies";
import { serviceSlugs as enServiceSlugs } from "@content/en/services";
import { sortedPosts as enSortedPosts } from "@content/en/blog";
import { caseStudySlugs as enCaseStudySlugs } from "@content/en/case-studies";

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
    { path: enRoutes.home, priority: 0.9 },
    { path: enRoutes.services, priority: 0.8 },
    { path: enRoutes.work, priority: 0.4 },
    { path: enRoutes.blog, priority: 0.6 },
    { path: enRoutes.about, priority: 0.5 },
    { path: enRoutes.contact, priority: 0.7 },
  ];

  const servicePaths = [
    ...serviceSlugs().map((slug) => ({ path: routes.service(slug), priority: 0.9 })),
    ...enServiceSlugs().map((slug) => ({ path: enRoutes.service(slug), priority: 0.8 })),
  ];

  const casePaths = [
    ...caseStudySlugs().map((slug) => ({ path: routes.caseStudy(slug), priority: 0.5 })),
    ...enCaseStudySlugs().map((slug) => ({ path: enRoutes.caseStudy(slug), priority: 0.4 })),
  ];

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

  for (const post of enSortedPosts()) {
    entries.push({
      url: `${base}${enRoutes.post(post.meta.slug)}`,
      lastModified: new Date(post.meta.updatedAt ?? post.meta.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
