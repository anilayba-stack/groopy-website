import { WhatsAppFloat } from "./WhatsAppFloat";
import { SeoCheckFloat } from "./SeoCheckFloat";

/** Sağ altta sabit, WhatsApp + ücretsiz SEO analizi düğmelerini bir arada tutan sarmalayıcı. */
export function FloatingActions({ locale = "tr" }: { locale?: "tr" | "en" }) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:flex-row sm:items-center">
      <SeoCheckFloat locale={locale} />
      <WhatsAppFloat locale={locale} />
    </div>
  );
}
