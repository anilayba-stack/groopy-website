"use client";

import { usePathname } from "next/navigation";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { SeoCheckFloat } from "./SeoCheckFloat";
import { AiVisibilityFloat } from "./AiVisibilityFloat";
import { routes, enRoutes } from "@/lib/routes";

/**
 * Sağ altta sabit, WhatsApp + ücretsiz SEO analizi + AI görünürlük testi
 * düğmelerini bir arada tutan sarmalayıcı. Bir aracın kendi sayfasındayken
 * o aracın float düğmesi gizlenir — form zaten sayfanın içinde gösteriliyor.
 */
export function FloatingActions({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const pathname = usePathname();
  const seoToolPath = locale === "en" ? enRoutes.seoTool : routes.seoTool;
  const aiVisibilityPath = locale === "en" ? enRoutes.aiVisibility : routes.aiVisibility;
  const onSeoToolPage = pathname === seoToolPath;
  const onAiVisibilityPage = pathname === aiVisibilityPath;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:flex-row sm:items-center">
      {onSeoToolPage ? null : <SeoCheckFloat locale={locale} />}
      {onAiVisibilityPage ? null : <AiVisibilityFloat locale={locale} />}
      <WhatsAppFloat locale={locale} />
    </div>
  );
}
