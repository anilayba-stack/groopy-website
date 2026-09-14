/**
 * Groopy — tek merkezî site yapılandırması.
 * Marka bilgisi, iletişim, sosyal medya ve SEO temelleri burada; başka yerde tekrar edilmez.
 */

export const SITE = {
  name: "Groopy",
  legalName: "Groopy",
  /** TR konumlandırma cümlesi — "ajans" değil "yazılım şirketi". */
  tagline: "İstanbul merkezli yazılım şirketi",
  descriptionTr:
    "Groopy bir yazılım şirketi. Web sitesi ve yazılım geliştirme, SEO + GEO stratejisi ve sosyal medya yönetimi hizmetleri sunar. İstanbul merkezli; Türkiye ve yurt dışına hizmet.",
  descriptionEn:
    "Groopy is a software company offering website and software development, SEO + GEO strategy, and social media management. Based in Istanbul, serving Turkey and abroad.",

  /** Kanonik üretim adresi. */
  url: "https://groopyagency.com",
  domain: "groopyagency.com",

  locales: ["tr", "en"] as const,
  defaultLocale: "tr" as const,

  contact: {
    email: "info@groopyagency.com",
    /** E.164 — tel: ve wa.me için. */
    phone: "+905550682050",
    phoneDisplay: "+90 555 068 20 50",
    whatsapp: "905550682050",
  },

  /**
   * Fiziksel ofis yok — şirket şu an tamamen online hizmet veriyor.
   * Bu yüzden LocalBusiness schema kullanılmaz; Organization + areaServed yeterli.
   */
  address: null as null | {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  },
  areaServed: ["İstanbul", "Türkiye", "Global"],

  /** JSON-LD sameAs + footer. Yalnızca gerçek profiller. */
  social: {
    instagram: "https://instagram.com/groopy_agency",
  } as Record<string, string>,

  /** E-E-A-T — Article yazarı ve Hakkımızda. */
  founder: {
    name: "Anıl Ay",
    role: "Kurucu",
  },

} as const;

export type Locale = (typeof SITE.locales)[number];

/** wa.me linki (opsiyonel ön-doldurulmuş mesajla). */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${SITE.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
