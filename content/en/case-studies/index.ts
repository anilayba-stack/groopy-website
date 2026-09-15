import type { CaseStudy } from "../../types";

/**
 * Case studies — published only with real client permission and
 * VERIFIABLE results (CLAUDE.md). v1: empty. Infrastructure (list +
 * [slug] route + schema) is ready.
 */
export const caseStudies: CaseStudy[] = [];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
