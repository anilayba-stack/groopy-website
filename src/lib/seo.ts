import type { Metadata } from "next";
import { SITE } from "./site-config";
import type { Faq } from "@content/types";
import type { BlogPostMeta, Service } from "@content/types";

const BASE = SITE.url;

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Kök-göreli yol, örn. "/hizmetler/web-sitesi-gelistirme" veya "/en/services/..." */
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
  /** Sayfa dili — varsayılan "tr". */
  locale?: "tr" | "en";
  /** Diğer dildeki karşılık path'i (kök-göreli, /en dahil) — verilirse hreflang üretilir. */
  alternatePath?: string;
}

/** Her sayfa için tek noktadan benzersiz, tutarlı metadata. */
export function buildMetadata(input: BuildMetadataInput): Metadata {
  const locale = input.locale ?? "tr";
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

  const alternateUrl = input.alternatePath
    ? `${BASE}${input.alternatePath === "/" ? "" : input.alternatePath}`
    : undefined;

  return {
    title,
    description: input.description,
    alternates: {
      canonical: url,
      ...(alternateUrl
        ? {
            languages: {
              "tr-TR": locale === "tr" ? url : alternateUrl,
              en: locale === "en" ? url : alternateUrl,
              "x-default": locale === "tr" ? url : alternateUrl,
            },
          }
        : {}),
    },
    robots: input.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: input.ogType ?? "website",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description: input.description,
      locale: locale === "en" ? "en_US" : "tr_TR",
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

export function organizationSchema(locale: "tr" | "en" = "tr"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    legalName: SITE.legalName,
    url: BASE,
    logo: `${BASE}/icon.png`,
    description: locale === "en" ? SITE.descriptionEn : SITE.descriptionTr,
    inLanguage: locale === "en" ? "en" : "tr-TR",
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    areaServed: SITE.areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.contact.email,
      telephone: SITE.contact.phone,
      contactType: "customer service",
      areaServed: SITE.areaServed,
      availableLanguage: ["Turkish", "English"],
    },
    founder: { "@id": `${BASE}/#founder` },
    sameAs: Object.values(SITE.social),
  };
}

export function websiteSchema(locale: "tr" | "en" = "tr"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: SITE.name,
    alternateName: SITE.alternateName,
    inLanguage: locale === "en" ? "en" : "tr-TR",
    publisher: { "@id": `${BASE}/#organization` },
  };
}

/**
 * @param path Sayfanın kök-göreli tam yolu (örn. "/hizmetler/x" veya "/en/services/x").
 *             Verilmezse TR varsayılan yoluna düşer (geriye dönük uyumluluk).
 */
export function serviceSchema(
  service: Service,
  opts?: { path?: string; locale?: "tr" | "en" },
): JsonLd {
  const path = opts?.path ?? `/hizmetler/${service.slug}`;
  const locale = opts?.locale ?? "tr";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.navLabel,
    description: service.metaDescription,
    url: `${BASE}${path}`,
    inLanguage: locale === "en" ? "en" : "tr-TR",
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

/**
 * @param path Sayfanın kök-göreli tam yolu (örn. "/blog/x" veya "/en/blog/x").
 *             Verilmezse TR varsayılan yoluna düşer (geriye dönük uyumluluk).
 */
export function blogPostingSchema(
  meta: BlogPostMeta,
  opts?: { path?: string; locale?: "tr" | "en" },
): JsonLd {
  const path = opts?.path ?? `/blog/${meta.slug}`;
  const locale = opts?.locale ?? "tr";
  const url = `${BASE}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    url,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    author:
      meta.author === SITE.founder.name
        ? { "@id": `${BASE}/#founder` }
        : { "@type": "Person", name: meta.author },
    publisher: { "@id": `${BASE}/#organization` },
    inLanguage: locale === "en" ? "en" : "tr-TR",
    mainEntityOfPage: url,
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

/**
 * Ücretsiz araç sayfaları için (ör. SEO analiz aracı) — "ücretsiz X aracı"
 * türü sorgularda Google/AI arama motorlarının bunu bir yazılım/araç olarak
 * tanıması için (fiyat, kategori dahil).
 */
export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  path: string;
  locale?: "tr" | "en";
}): JsonLd {
  const locale = input.locale ?? "tr";
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: `${BASE}${input.path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: locale === "en" ? "en" : "tr-TR",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@id": `${BASE}/#organization` },
  };
}
