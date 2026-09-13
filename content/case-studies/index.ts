import type { CaseStudy } from "../types";

/**
 * Vaka çalışmaları — GERÇEK müşteri izniyle paylaşılabilecek proje ve
 * DOĞRULANABİLİR sonuç olmadan buraya kayıt eklenmez (CLAUDE.md).
 * v1: boş. Altyapı (liste + [slug] route + schema) hazır.
 */
export const caseStudies: CaseStudy[] = [];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
