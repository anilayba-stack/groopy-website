/**
 * TR ↔ EN slug/segment eşlemeleri. LangSwitcher ve hreflang üretiminde kullanılır.
 * EN slug'ları Türkçe'nin çevirisi değil, İngilizce SEO için ayrı seçilmiştir.
 */

/** Üst düzey rota segmenti eşlemesi (örn. "hizmetler" ↔ "services"). */
export const SEGMENT_TR_TO_EN: Record<string, string> = {
  hizmetler: "services",
  hakkimizda: "about",
  iletisim: "contact",
  calismalar: "case-studies",
  blog: "blog",
  "seo-analiz-araci": "seo-checker",
};

export const SEGMENT_EN_TO_TR: Record<string, string> = Object.fromEntries(
  Object.entries(SEGMENT_TR_TO_EN).map(([tr, en]) => [en, tr]),
);

/** Hizmet slug eşlemesi. */
export const SERVICE_SLUG_TR_TO_EN: Record<string, string> = {
  "web-sitesi-gelistirme": "website-development",
  "seo-ve-geo": "seo-and-geo-strategy",
  "google-reklam-yonetimi": "google-ads-management",
  "sosyal-medya-yonetimi": "social-media-management",
};

export const SERVICE_SLUG_EN_TO_TR: Record<string, string> = Object.fromEntries(
  Object.entries(SERVICE_SLUG_TR_TO_EN).map(([tr, en]) => [en, tr]),
);

/** Blog yazısı slug eşlemesi. */
export const POST_SLUG_TR_TO_EN: Record<string, string> = {
  "web-sitesi-maliyeti-2026": "website-cost-2026",
};

export const POST_SLUG_EN_TO_TR: Record<string, string> = Object.fromEntries(
  Object.entries(POST_SLUG_TR_TO_EN).map(([tr, en]) => [en, tr]),
);

/**
 * Verilen path'in (TR veya EN, kök-göreli) karşılık geldiği diğer dildeki path'i döndürür.
 * LangSwitcher gibi path'i çözümleyicilerin genel amaçlı kullanımı için; sayfa
 * seviyesinde hreflang üretirken doğrudan bilinen path'leri geçirmek daha güvenilirdir.
 */
export function getAlternatePath(pathname: string, currentLocale: "tr" | "en"): string {
  if (currentLocale === "tr") {
    if (pathname === "/" || pathname === "") return "/en";
    const [seg, sub] = pathname.replace(/^\//, "").split("/");
    const enSeg = SEGMENT_TR_TO_EN[seg] ?? seg;
    if (!sub) return `/en/${enSeg}`;
    const enSub = SERVICE_SLUG_TR_TO_EN[sub] ?? POST_SLUG_TR_TO_EN[sub] ?? sub;
    return `/en/${enSeg}/${enSub}`;
  }

  if (pathname === "/en" || pathname === "/en/") return "/";
  const rest = pathname.replace(/^\/en\/?/, "");
  const [seg, sub] = rest.split("/");
  const trSeg = SEGMENT_EN_TO_TR[seg] ?? seg;
  if (!sub) return `/${trSeg}`;
  const trSub = SERVICE_SLUG_EN_TO_TR[sub] ?? POST_SLUG_EN_TO_TR[sub] ?? sub;
  return `/${trSeg}/${trSub}`;
}
