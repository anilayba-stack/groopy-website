/**
 * AI Görünürlük Testi — Gemini üzerinden markanın bahsedilip bahsedilmediğini
 * kontrol eden sunucu tarafı mantık. API anahtarı yalnızca sunucuda kullanılır,
 * istemciye hiç gönderilmez.
 */

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkAiVisibilityRateLimit(key: string): boolean {
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

export class AiVisibilityError extends Error {
  code: "invalid_input" | "upstream_unavailable" | "upstream_error";
  constructor(code: AiVisibilityError["code"], message: string) {
    super(message);
    this.code = code;
  }
}

const GEMINI_MODEL = "gemini-3.5-flash-lite";

export interface VisibilityCheckInput {
  brand: string;
  service?: string;
  city?: string;
  locale: "tr" | "en";
}

export interface VisibilityCheckItem {
  question: string;
  answer: string;
  mentioned: boolean;
}

export interface VisibilityCheckResult {
  brand: string;
  items: VisibilityCheckItem[];
}

function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr")
    .replace(/[ğg]/g, "g")
    .replace(/[üu]/g, "u")
    .replace(/[şs]/g, "s")
    .replace(/[ıi]/g, "i")
    .replace(/[öo]/g, "o")
    .replace(/[çc]/g, "c")
    .trim();
}

function mentionsBrand(answer: string, brand: string): boolean {
  const normAnswer = normalize(answer);
  const normBrand = normalize(brand);
  if (normBrand.length < 2) return false;
  return normAnswer.includes(normBrand);
}

async function askGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new AiVisibilityError("upstream_unavailable", "GEMINI_API_KEY not configured");
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
      signal: AbortSignal.timeout(20_000),
    },
  );

  if (res.status === 429) {
    throw new AiVisibilityError("upstream_unavailable", "Gemini rate limited");
  }
  if (res.status === 503) {
    throw new AiVisibilityError("upstream_unavailable", "Gemini temporarily unavailable");
  }
  if (!res.ok) {
    throw new AiVisibilityError("upstream_error", `Gemini error ${res.status}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (typeof text !== "string" || !text.trim()) {
    throw new AiVisibilityError("upstream_error", "Empty Gemini response");
  }
  return text.trim();
}

const QUESTIONS = {
  tr: {
    brandOnly: (brand: string) => `${brand} nedir, ne iş yapar? Kısaca açıkla.`,
    category: (service: string, city: string) =>
      `${city}'de ${service} için hangi şirketleri/işletmeleri önerirsin? Birkaç isim ver.`,
  },
  en: {
    brandOnly: (brand: string) => `What is ${brand} and what do they do? Explain briefly.`,
    category: (service: string, city: string) =>
      `Who would you recommend for ${service} in ${city}? Give a few names.`,
  },
} as const;

export async function runVisibilityCheck(
  input: VisibilityCheckInput,
): Promise<VisibilityCheckResult> {
  const brand = input.brand.trim();
  if (!brand || brand.length > 80) {
    throw new AiVisibilityError("invalid_input", "Invalid brand name");
  }
  const service = input.service?.trim().slice(0, 80);
  const city = input.city?.trim().slice(0, 80);

  const q = QUESTIONS[input.locale];
  const prompts: string[] = [q.brandOnly(brand)];
  if (service && city) {
    prompts.push(q.category(service, city));
  }

  const items: VisibilityCheckItem[] = [];
  for (const prompt of prompts) {
    const answer = await askGemini(prompt);
    items.push({ question: prompt, answer, mentioned: mentionsBrand(answer, brand) });
  }

  return { brand, items };
}
