import { isIP } from "node:net";
import { lookup as dnsLookup } from "node:dns/promises";
import * as cheerio from "cheerio";

export type AuditLocale = "tr" | "en";

export interface AuditCheck {
  id: string;
  label: string;
  passed: boolean;
  detail: string;
}

export interface PageSpeedResult {
  performanceScore: number;
  lcp?: string;
  cls?: string;
  inp?: string;
}

export interface AuditResult {
  url: string;
  score: number;
  checks: AuditCheck[];
  pageSpeed?: PageSpeedResult;
  fetchedAt: string;
}

export class AuditError extends Error {
  constructor(
    message: string,
    public code: "invalid_url" | "unsafe_target" | "fetch_failed" | "rate_limited",
  ) {
    super(message);
  }
}

/* ------------------------------------------------------------------ */
/* SSRF koruması — özel/yerel IP aralıklarına giden istekler reddedilir. */
/* ------------------------------------------------------------------ */

function ipv4ToInt(ip: string): number {
  return ip.split(".").reduce((acc, octet) => (acc << 8) + Number(octet), 0) >>> 0;
}

function inIpv4Range(ip: string, base: string, bits: number): boolean {
  const n = ipv4ToInt(ip);
  const mask = bits === 0 ? 0 : (~0 << (32 - bits)) >>> 0;
  return (n & mask) === (ipv4ToInt(base) & mask);
}

function isPrivateIPv4(ip: string): boolean {
  return (
    inIpv4Range(ip, "10.0.0.0", 8) ||
    inIpv4Range(ip, "172.16.0.0", 12) ||
    inIpv4Range(ip, "192.168.0.0", 16) ||
    inIpv4Range(ip, "127.0.0.0", 8) ||
    inIpv4Range(ip, "169.254.0.0", 16) ||
    inIpv4Range(ip, "0.0.0.0", 8) ||
    inIpv4Range(ip, "100.64.0.0", 10)
  );
}

function isPrivateIPv6(ip: string): boolean {
  const lower = ip.toLowerCase();
  if (lower === "::1" || lower === "::") return true;
  if (/^fe[89ab]/.test(lower)) return true; // fe80::/10 link-local
  if (lower.startsWith("fc") || lower.startsWith("fd")) return true; // fc00::/7 unique local
  const mapped = lower.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) return isPrivateIPv4(mapped[1]);
  return false;
}

function isPrivateIp(ip: string): boolean {
  const version = isIP(ip);
  if (version === 4) return isPrivateIPv4(ip);
  if (version === 6) return isPrivateIPv6(ip);
  return true;
}

/** Hedef host'un güvenli (herkese açık) olduğunu doğrular — DNS çözümlemesi dahil. */
async function assertSafeHost(hostname: string): Promise<void> {
  const lower = hostname.toLowerCase();
  if (lower === "localhost" || lower.endsWith(".localhost") || lower === "0.0.0.0") {
    throw new AuditError("Unsafe host", "unsafe_target");
  }
  const literalVersion = isIP(hostname);
  if (literalVersion > 0) {
    if (isPrivateIp(hostname)) throw new AuditError("Unsafe host", "unsafe_target");
    return;
  }
  // DNS-rebinding tam önlemi (çözümleme anı ile fetch anı arasındaki fark) v1
  // kapsamı dışında — bu "best effort" bir kontrol.
  let addresses: { address: string }[];
  try {
    addresses = await dnsLookup(hostname, { all: true });
  } catch {
    throw new AuditError("Could not resolve host", "unsafe_target");
  }
  if (addresses.length === 0 || addresses.some((a) => isPrivateIp(a.address))) {
    throw new AuditError("Unsafe host", "unsafe_target");
  }
}

const MAX_BYTES = 3 * 1024 * 1024;
const MAX_REDIRECTS = 5;
const FETCH_TIMEOUT_MS = 9000;

/** SSRF korumalı, boyut/zaman sınırlı, manuel yönlendirme takip eden fetch. */
async function safeFetchText(
  targetUrl: string,
): Promise<{ text: string; status: number; finalUrl: string; elapsedMs: number }> {
  let current = new URL(targetUrl);
  const startedAt = Date.now();

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    if (current.protocol !== "http:" && current.protocol !== "https:") {
      throw new AuditError("Only http/https is allowed", "invalid_url");
    }
    await assertSafeHost(current.hostname);

    const res = await fetch(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { "user-agent": "GroopySeoChecker/1.0 (+https://groopyagency.com)" },
    });

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location) throw new AuditError("Redirect with no location", "fetch_failed");
      current = new URL(location, current);
      continue;
    }

    const reader = res.body?.getReader();
    if (!reader) return { text: "", status: res.status, finalUrl: current.toString(), elapsedMs: Date.now() - startedAt };

    const decoder = new TextDecoder();
    let text = "";
    let total = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BYTES) {
        await reader.cancel().catch(() => {});
        break;
      }
      text += decoder.decode(value, { stream: true });
    }
    return { text, status: res.status, finalUrl: current.toString(), elapsedMs: Date.now() - startedAt };
  }

  throw new AuditError("Too many redirects", "fetch_failed");
}

/* ------------------------------------------------------------------ */
/* Basit IP bazlı hız sınırlama (in-memory — tek serverless instance   */
/* için "best effort"; instance'lar arası paylaşılmaz).                */
/* ------------------------------------------------------------------ */

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

/* ------------------------------------------------------------------ */
/* robots.txt — AI botlarına erişim (GEO sinyali). Best-effort.        */
/* ------------------------------------------------------------------ */

const AI_BOTS = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"];

function checkRobotsAiAccess(robotsTxt: string): { blocked: string[]; checked: boolean } {
  const blocked: string[] = [];
  for (const bot of AI_BOTS) {
    const blockRe = new RegExp(`user-agent:\\s*${bot}([\\s\\S]*?)(?=\\nuser-agent:|$)`, "i");
    const match = robotsTxt.match(blockRe);
    const block = match?.[1] ?? "";
    if (/disallow:\s*\/\s*(\r?\n|$)/i.test(block)) blocked.push(bot);
  }
  // Bot özel olarak anılmıyorsa, genel "*" bloğu her şeyi kapatıyor mu bak.
  const wildcard = robotsTxt.match(/user-agent:\s*\*([\s\S]*?)(?=\nuser-agent:|$)/i);
  if (wildcard && /disallow:\s*\/\s*(\r?\n|$)/i.test(wildcard[1])) {
    for (const bot of AI_BOTS) {
      const mentioned = new RegExp(`user-agent:\\s*${bot}\\b`, "i").test(robotsTxt);
      if (!mentioned && !blocked.includes(bot)) blocked.push(bot);
    }
  }
  return { blocked, checked: true };
}

/* ------------------------------------------------------------------ */
/* Google PageSpeed Insights (opsiyonel — key yoksa/başarısızsa atlanır). */
/* ------------------------------------------------------------------ */

async function fetchPageSpeed(targetUrl: string): Promise<PageSpeedResult | undefined> {
  const key = process.env.GOOGLE_PAGESPEED_API_KEY;
  if (!key) return undefined;
  try {
    const endpoint = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
    endpoint.searchParams.set("url", targetUrl);
    endpoint.searchParams.set("key", key);
    endpoint.searchParams.set("strategy", "mobile");
    endpoint.searchParams.set("category", "performance");
    // Google'ın tam Lighthouse analizi genelde 15-30sn sürüyor; kısa tutulursa
    // her seferinde sessizce zaman aşımına uğrar (ölçüldü: gerçek çağrı ~33sn).
    const res = await fetch(endpoint, { signal: AbortSignal.timeout(45000) });
    if (!res.ok) return undefined;
    const json = (await res.json()) as {
      lighthouseResult?: {
        categories?: { performance?: { score?: number } };
        audits?: Record<string, { displayValue?: string }>;
      };
    };
    const score = json.lighthouseResult?.categories?.performance?.score;
    if (typeof score !== "number") return undefined;
    const audits = json.lighthouseResult?.audits ?? {};
    return {
      performanceScore: Math.round(score * 100),
      lcp: audits["largest-contentful-paint"]?.displayValue,
      cls: audits["cumulative-layout-shift"]?.displayValue,
      inp:
        audits["interaction-to-next-paint"]?.displayValue ??
        audits["experimental-interaction-to-next-paint"]?.displayValue,
    };
  } catch {
    return undefined;
  }
}

/* ------------------------------------------------------------------ */
/* Ana analiz.                                                         */
/* ------------------------------------------------------------------ */

const T = {
  tr: {
    title: { label: "Sayfa başlığı (title)" },
    description: { label: "Meta açıklama (description)" },
    h1: { label: "H1 başlığı" },
    viewport: { label: "Mobil uyum (viewport)" },
    canonical: { label: "Canonical etiketi" },
    https: { label: "HTTPS" },
    jsonLd: { label: "Yapılandırılmış veri (JSON-LD)" },
    openGraph: { label: "Open Graph etiketleri" },
    imgAlt: { label: "Görsel alt etiketleri" },
    wordCount: { label: "İçerik derinliği" },
    geoRobots: { label: "Yapay zekâ arama erişimi (GEO)" },
  },
  en: {
    title: { label: "Page title" },
    description: { label: "Meta description" },
    h1: { label: "H1 heading" },
    viewport: { label: "Mobile viewport" },
    canonical: { label: "Canonical tag" },
    https: { label: "HTTPS" },
    jsonLd: { label: "Structured data (JSON-LD)" },
    openGraph: { label: "Open Graph tags" },
    imgAlt: { label: "Image alt attributes" },
    wordCount: { label: "Content depth" },
    geoRobots: { label: "AI search access (GEO)" },
  },
} as const;

export async function runSiteAudit(rawUrl: string, locale: AuditLocale): Promise<AuditResult> {
  let url: URL;
  try {
    url = new URL(rawUrl.trim());
  } catch {
    throw new AuditError("Invalid URL", "invalid_url");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new AuditError("Only http/https is allowed", "invalid_url");
  }

  const { text: html, elapsedMs } = await safeFetchText(url.toString());
  const $ = cheerio.load(html);
  const t = T[locale];
  const checks: AuditCheck[] = [];
  let achieved = 0;
  let maxBase = 0;

  const add = (id: keyof typeof T["tr"], weight: number, passed: boolean, detail: string) => {
    checks.push({ id, label: t[id].label, passed, detail });
    maxBase += weight;
    if (passed) achieved += weight;
  };

  // Title (12)
  const title = $("title").first().text().trim();
  const titleLen = title.length;
  add(
    "title",
    12,
    titleLen > 0 && titleLen <= 60,
    locale === "tr"
      ? titleLen === 0
        ? "Title etiketi bulunamadı."
        : `Title ${titleLen} karakter${titleLen > 60 ? " — 60 karakterin altında olması önerilir." : "."}`
      : titleLen === 0
        ? "No title tag found."
        : `Title is ${titleLen} characters${titleLen > 60 ? " — under 60 is recommended." : "."}`,
  );

  // Description (10)
  const description = $('meta[name="description"]').attr("content")?.trim() ?? "";
  const descLen = description.length;
  add(
    "description",
    10,
    descLen >= 50 && descLen <= 160,
    locale === "tr"
      ? descLen === 0
        ? "Meta açıklama bulunamadı."
        : `Açıklama ${descLen} karakter (önerilen: 120-160).`
      : descLen === 0
        ? "No meta description found."
        : `Description is ${descLen} characters (recommended: 120-160).`,
  );

  // H1 (8)
  const h1Count = $("h1").length;
  add(
    "h1",
    8,
    h1Count === 1,
    locale === "tr"
      ? h1Count === 0
        ? "Sayfada H1 başlığı yok."
        : h1Count === 1
          ? "Tek H1 başlığı bulundu."
          : `${h1Count} adet H1 bulundu — tek bir H1 önerilir.`
      : h1Count === 0
        ? "No H1 heading found on the page."
        : h1Count === 1
          ? "Exactly one H1 found."
          : `${h1Count} H1 headings found — a single H1 is recommended.`,
  );

  // Viewport (8)
  const hasViewport = Boolean($('meta[name="viewport"]').attr("content"));
  add(
    "viewport",
    8,
    hasViewport,
    locale === "tr"
      ? hasViewport
        ? "Mobil uyum (viewport) etiketi mevcut."
        : "Viewport meta etiketi bulunamadı — mobil uyum riskli."
      : hasViewport
        ? "Viewport meta tag present."
        : "No viewport meta tag found — mobile responsiveness at risk.",
  );

  // Canonical (5)
  const hasCanonical = Boolean($('link[rel="canonical"]').attr("href"));
  add(
    "canonical",
    5,
    hasCanonical,
    locale === "tr"
      ? hasCanonical
        ? "Canonical etiketi mevcut."
        : "Canonical etiketi bulunamadı."
      : hasCanonical
        ? "Canonical tag present."
        : "No canonical tag found.",
  );

  // HTTPS (7)
  const isHttps = url.protocol === "https:";
  add(
    "https",
    7,
    isHttps,
    locale === "tr"
      ? isHttps
        ? "Site HTTPS üzerinden sunuluyor."
        : "Site HTTPS kullanmıyor."
      : isHttps
        ? "Site is served over HTTPS."
        : "Site is not using HTTPS.",
  );

  // JSON-LD (7)
  const hasJsonLd = $('script[type="application/ld+json"]').length > 0;
  add(
    "jsonLd",
    7,
    hasJsonLd,
    locale === "tr"
      ? hasJsonLd
        ? "Yapılandırılmış veri (JSON-LD) bulundu."
        : "Yapılandırılmış veri (JSON-LD) bulunamadı."
      : hasJsonLd
        ? "Structured data (JSON-LD) found."
        : "No structured data (JSON-LD) found.",
  );

  // Open Graph (5)
  const hasOg = Boolean($('meta[property="og:title"]').attr("content")) &&
    Boolean($('meta[property="og:description"]').attr("content"));
  add(
    "openGraph",
    5,
    hasOg,
    locale === "tr"
      ? hasOg
        ? "Open Graph etiketleri (og:title, og:description) mevcut."
        : "Open Graph etiketleri eksik."
      : hasOg
        ? "Open Graph tags (og:title, og:description) present."
        : "Open Graph tags are missing.",
  );

  // Image alt ratio (6) — alt="" kasıtlı olarak geçerli (dekoratif görsel,
  // ekran okuyucunun yanındaki görünür metni tekrar okumasını önler); yalnızca
  // alt niteliğinin TAMAMEN yokluğu eksik sayılır.
  const images = $("img");
  const totalImages = images.length;
  const withAlt = images.filter((_, el) => $(el).attr("alt") !== undefined).length;
  const altRatio = totalImages === 0 ? 1 : withAlt / totalImages;
  add(
    "imgAlt",
    6,
    altRatio >= 0.8,
    locale === "tr"
      ? totalImages === 0
        ? "Sayfada görsel yok."
        : `${withAlt}/${totalImages} görselde alt etiketi var (%${Math.round(altRatio * 100)}).`
      : totalImages === 0
        ? "No images on the page."
        : `${withAlt}/${totalImages} images have alt text (${Math.round(altRatio * 100)}%).`,
  );

  // Word count (6)
  const bodyClone = $("body").clone();
  bodyClone.find("script, style, noscript").remove();
  const wordCount = bodyClone
    .text()
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
  add(
    "wordCount",
    6,
    wordCount >= 300,
    locale === "tr"
      ? `Sayfada yaklaşık ${wordCount} kelime var${wordCount < 300 ? " — düşük içerik derinliği (\"thin content\") riski." : "."}`
      : `The page has roughly ${wordCount} words${wordCount < 300 ? " — thin-content risk." : "."}`,
  );

  // robots.txt AI erişimi (6) — fetch başarısızsa kontrolü tamamen atla.
  try {
    const robotsRes = await safeFetchText(new URL("/robots.txt", url.origin).toString());
    if (robotsRes.status < 400 && robotsRes.text.trim().length > 0) {
      const { blocked } = checkRobotsAiAccess(robotsRes.text);
      add(
        "geoRobots",
        6,
        blocked.length === 0,
        locale === "tr"
          ? blocked.length === 0
            ? "Yapay zekâ botlarına (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) engel yok."
            : `Şu yapay zekâ botları engellenmiş: ${blocked.join(", ")}.`
          : blocked.length === 0
            ? "No AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) are blocked."
            : `These AI crawlers are blocked: ${blocked.join(", ")}.`,
      );
    }
  } catch {
    // robots.txt yok/erişilemedi — bu kontrol puana dahil edilmez.
  }

  const pageSpeed = await fetchPageSpeed(url.toString());
  let totalMax = maxBase;
  let totalAchieved = achieved;
  if (pageSpeed) {
    totalMax += 20;
    totalAchieved += (pageSpeed.performanceScore / 100) * 20;
  }

  const score = totalMax === 0 ? 0 : Math.round((totalAchieved / totalMax) * 100);

  void elapsedMs;
  return {
    url: url.toString(),
    score,
    checks,
    pageSpeed,
    fetchedAt: new Date().toISOString(),
  };
}
