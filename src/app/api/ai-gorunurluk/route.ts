import { NextRequest, NextResponse } from "next/server";
import {
  runVisibilityCheck,
  checkAiVisibilityRateLimit,
  AiVisibilityError,
} from "@/lib/ai-visibility";

export const runtime = "nodejs";
export const maxDuration = 30;

const MESSAGES = {
  tr: {
    rateLimited: "Çok fazla istek gönderildi. Lütfen bir dakika sonra tekrar deneyin.",
    invalidInput: "Lütfen bir marka adı girin.",
    unavailable: "Şu anda yoğunluk var, lütfen birkaç dakika sonra tekrar deneyin.",
    upstreamError: "Bir şeyler ters gitti, lütfen tekrar deneyin.",
  },
  en: {
    rateLimited: "Too many requests. Please try again in a minute.",
    invalidInput: "Please enter a brand name.",
    unavailable: "High demand right now — please try again in a few minutes.",
    upstreamError: "Something went wrong, please try again.",
  },
} as const;

export async function POST(req: NextRequest) {
  let body: { brand?: unknown; service?: unknown; city?: unknown; locale?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const locale = body.locale === "en" ? "en" : "tr";
  const t = MESSAGES[locale];

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (!checkAiVisibilityRateLimit(ip)) {
    return NextResponse.json({ error: t.rateLimited }, { status: 429 });
  }

  const brand = typeof body.brand === "string" ? body.brand : "";
  const service = typeof body.service === "string" ? body.service : undefined;
  const city = typeof body.city === "string" ? body.city : undefined;

  if (!brand.trim()) {
    return NextResponse.json({ error: t.invalidInput }, { status: 400 });
  }

  try {
    const result = await runVisibilityCheck({ brand, service, city, locale });
    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof AiVisibilityError) {
      const message =
        err.code === "invalid_input"
          ? t.invalidInput
          : err.code === "upstream_unavailable"
            ? t.unavailable
            : t.upstreamError;
      const status = err.code === "invalid_input" ? 400 : 502;
      return NextResponse.json({ error: message }, { status });
    }
    return NextResponse.json({ error: t.upstreamError }, { status: 502 });
  }
}
