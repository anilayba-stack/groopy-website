import { sendGAEvent } from "@next/third-parties/google";

/**
 * Dönüşüm/etkileşim event'leri — tek yerden, GA4'e `@next/third-parties`
 * üzerinden gönderilir. GoogleAnalytics bileşeni her iki root layout'ta da
 * kurulu (gtag hazır) olduğu için burada başka bir init'e gerek yok.
 */

export type Locale = "tr" | "en";

/** WhatsApp'a tıklanan her nokta — float buton, form sonrası, SEO aracı sonucu. */
export function trackWhatsAppClick(
  source: "floating_button" | "contact_form" | "seo_tool_result",
  locale: Locale,
) {
  sendGAEvent("event", "whatsapp_click", { source, locale });
}

/** İletişim formu sunucu tarafında doğrulanıp gerçek bir talebe dönüştüğünde. */
export function trackGenerateLead(
  method: "email" | "whatsapp_fallback",
  locale: Locale,
) {
  sendGAEvent("event", "generate_lead", { method, locale });
}

/** Ücretsiz SEO analiz aracı başarıyla bir sonuç döndürdüğünde. */
export function trackSeoToolUsed(score: number, locale: Locale) {
  sendGAEvent("event", "seo_tool_used", { score, locale });
}

/** Ücretsiz AI görünürlük testi (Gemini) başarıyla bir sonuç döndürdüğünde. */
export function trackAiVisibilityToolUsed(mentioned: boolean, locale: Locale) {
  sendGAEvent("event", "ai_visibility_tool_used", { mentioned, locale });
}
