import type { Metadata } from "next";
import { SITE } from "./site-config";
import type { Faq } from "@content/types";
import type { BlogPostMeta, Service } from "@content/types";

const BASE = SITE.url;

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Kök-göreli yol, örn. "/hizmetler/web-sitesi-gelistirme" */
  path: string;
  /** Anasayfada true — title şablon uygulanmaz */
  isHome?: boolean;
  ogType?: "website" | "article";
  /** OG görsel yolu (public/) — verilmezse site varsayılanı */
  image?: string;
  /** article için */
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

/** Her sayfa için tek noktadan benzersiz, tutarlı metadata. */
export function buildMetadata(input: BuildMetadataInput): Metadata {
  const url = `${BASE}${input.path === "/" ? "" : input.path}`;
  const fullTitle = input.isHome
    ? `${input.title} — ${SITE.name}`
    : `${input.title} | ${SITE.name}`;
  // Root layout'ta title.template ("%s | Groopy") var; iç sayfalar şablona giren
  // ham başlığı döndürür. Anasayfa şablonu atlar (absolute), anahtar kelime önde.
  const title: Metadata["title"] = input.isHome
    ? { absolute: fullTitle }
    : input.title;

  // Görsel verilmezse root opengraph-image.tsx dosya-kuralı devreye girer.
  const explicitImage = input.image ? `${BASE}${input.image}` : undefined;

  return {
    title,
    description: input.description,
    alternates: {
      canonical: url,
      // hreflang: EN yayına girene kadar (Faz 2) eklenmiyor.
    },
    robots: input.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: input.ogType ?? "website",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description: input.description,
      locale: "tr_TR",
      ...(explicitImage
        ? {
            images: [
              { url: explicitImage, width: 1200, height: 630, alt: fullTitle },
            ],
          }
        : {}),
      ...(input.ogType === "article"
        ? {
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime ?? input.publishedTime,
            authors: [SITE.founder.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      ...(explicitImage ? { images: [explicitImage] } : {}),
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD üreticileri — yalnızca gerçek/doğrulanabilir bilgi.         */
/* Uydurma AggregateRating / Review YOK (CLAUDE.md).                   */
/* ------------------------------------------------------------------ */

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: BASE,
    logo: `${BASE}/icon.png`,
    description: SITE.descriptionTr,
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    areaServed: SITE.areaServed,
    founder: { "@type": "Person", name: SITE.founder.name },
    sameAs: Object.values(SITE.social),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: SITE.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${BASE}/#organization` },
  };
}

export function serviceSchema(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.navLabel,
    description: service.metaDescription,
    url: `${BASE}/hizmetler/${service.slug}`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: SITE.areaServed,
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function blogPostingSchema(meta: BlogPostMeta): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    url: `${BASE}/blog/${meta.slug}`,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author: { "@type": "Person", name: meta.author },
    publisher: { "@id": `${BASE}/#organization` },
    inLanguage: "tr-TR",
    mainEntityOfPage: `${BASE}/blog/${meta.slug}`,
  };
}

export function faqSchema(faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
