import { NextRequest, NextResponse } from "next/server";
import { runSiteAudit, checkRateLimit, AuditError } from "@/lib/site-audit";

export const runtime = "nodejs";
/** Google PageSpeed analizi ~30sn sürebiliyor — Vercel'in varsayılan 10sn fonksiyon süresini uzat. */
export const maxDuration = 60;

const MESSAGES = {
  tr: {
    rateLimited: "Çok fazla istek gönderildi. Lütfen bir dakika sonra tekrar deneyin.",
    invalidUrl: "Geçerli bir web adresi girin (örn. https://siteniz.com).",
    unsafeTarget: "Bu adres analiz edilemez.",
    fetchFailed: "Site şu anda erişilemez durumda görünüyor.",
  },
  en: {
    rateLimited: "Too many requests. Please try again in a minute.",
    invalidUrl: "Enter a valid website address (e.g. https://yoursite.com).",
    unsafeTarget: "This address can't be analyzed.",
    fetchFailed: "The site appears to be unreachable right now.",
  },
} as const;

export async function POST(req: NextRequest) {
  let body: { url?: unknown; locale?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const locale = body.locale === "en" ? "en" : "tr";
  const t = MESSAGES[locale];
  const url = typeof body.url === "string" ? body.url : "";

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: t.rateLimited }, { status: 429 });
  }

  if (!url) {
    return NextResponse.json({ error: t.invalidUrl }, { status: 400 });
  }

  try {
    const result = await runSiteAudit(url, locale);
    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof AuditError) {
      const message = err.code === "invalid_url" ? t.invalidUrl : err.code === "unsafe_target" ? t.unsafeTarget : t.fetchFailed;
      return NextResponse.json({ error: message }, { status: 400 });
    }
    return NextResponse.json({ error: t.fetchFailed }, { status: 502 });
  }
}
