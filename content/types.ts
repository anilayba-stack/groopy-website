/**
 * Dosya tabanlı içerik modelleri (tek source of truth).
 * v1: TS modülleri. Vaka/blog sıklığı artarsa MDX veya CMS'e geçiş bu tipleri korur.
 */

import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export type ServiceTier = "primary" | "secondary";

export interface ServiceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  /** URL slug — /hizmetler/<slug> */
  slug: string;
  tier: ServiceTier;
  /** Navigasyon/kart adı (kısa) */
  navLabel: string;
  /** Sayfa H1 */
  title: string;
  /** Meta title'da kullanılan kısa ad */
  metaTitle: string;
  metaDescription: string;
  /** Kart/liste özeti — 1 cümle */
  summary: string;
  /** "Özet" (TL;DR) — answer-first, AI alıntısı için */
  tldr: string;
  icon: LucideIcon;
  /** Homepage'de flagship kartı büyütmek için */
  featured?: boolean;
  sections: ServiceSection[];
  process?: ProcessStep[];
  faq?: Faq[];
  /** İlgili blog yazısı slug'ları (iç linkleme) */
  relatedPosts?: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  /** ISO tarih */
  publishedAt: string;
  updatedAt?: string;
  /** answer-first açılış — TL;DR kutusu */
  tldr: string;
  author: string;
  /** İlgili hizmet slug'ı (hub) */
  hubService?: string;
  faq?: Faq[];
  /** Okuma süresi (dk) — elle */
  readingMinutes: number;
  /** Opsiyonel kapak görseli — public/ altında yol. Yoksa hero'da görsel gösterilmez. */
  coverImage?: { src: string; alt: string };
}

export interface BlogPost {
  meta: BlogPostMeta;
  Body: ComponentType;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  publishedAt: string;
  /** İlgili hizmet hattı */
  serviceLine: string;
  /** Doğrulanabilir sonuçlar — yoksa vaka yayımlanmaz */
  results: { label: string; value: string }[];
  Body: ComponentType;
}
