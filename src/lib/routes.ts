/**
 * Merkezî yol tanımları. TR (kök) ve EN (/en) — Faz 2 (2026-09-14): tam ayna.
 */

export const routes = {
  home: "/",
  services: "/hizmetler",
  service: (slug: string) => `/hizmetler/${slug}`,
  work: "/calismalar",
  caseStudy: (slug: string) => `/calismalar/${slug}`,
  blog: "/blog",
  post: (slug: string) => `/blog/${slug}`,
  about: "/hakkimizda",
  contact: "/iletisim",
  seoTool: "/seo-analiz-araci",
} as const;

/** Tek birincil CTA — tüm sitede aynı (karar: 2026-09-02). */
export const PRIMARY_CTA = {
  label: "Teklif Al",
  href: routes.contact,
} as const;

/** EN yol tanımları — İngilizce slug'larla (SEO için, TR slug'ların çevirisi değil). */
export const enRoutes = {
  home: "/en",
  services: "/en/services",
  service: (slug: string) => `/en/services/${slug}`,
  work: "/en/case-studies",
  caseStudy: (slug: string) => `/en/case-studies/${slug}`,
  blog: "/en/blog",
  post: (slug: string) => `/en/blog/${slug}`,
  about: "/en/about",
  contact: "/en/contact",
  seoTool: "/en/seo-checker",
} as const;

export const EN_PRIMARY_CTA = {
  label: "Get a Quote",
  href: enRoutes.contact,
} as const;
