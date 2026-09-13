/**
 * Merkezî yol tanımları. v1 yalnızca TR (kök). EN (/en) Faz 2'de buradan türetilecek.
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
} as const;

/** Tek birincil CTA — tüm sitede aynı (karar: 2026-09-02). */
export const PRIMARY_CTA = {
  label: "Teklif Al",
  href: routes.contact,
} as const;
