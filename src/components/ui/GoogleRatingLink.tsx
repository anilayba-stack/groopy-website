import { Star } from "lucide-react";
import { SITE } from "@/lib/site-config";

const STRINGS = {
  tr: (count: number) => `${count} yorum`,
  en: (count: number) => `${count} ${count === 1 ? "review" : "reviews"}`,
};

/**
 * Google İşletme Profili puanı — gerçek, elle güncellenen değer
 * (bkz. SITE.googleRating). Tıklanınca GBP sayfasına gider.
 */
export function GoogleRatingLink({
  locale = "tr",
  className = "inline-flex items-center gap-2 hover:text-[var(--color-text)]",
}: {
  locale?: "tr" | "en";
  className?: string;
}) {
  const { value, count } = SITE.googleRating;
  const filled = Math.round(value);
  return (
    <a
      href={SITE.social.googleBusiness}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={
              i < filled
                ? "size-4 shrink-0 fill-[var(--color-accent)] text-[var(--color-accent)]"
                : "size-4 shrink-0 text-[var(--color-text-faint)]"
            }
          />
        ))}
      </span>
      <span>
        {value.toFixed(1)} · {STRINGS[locale](count)}
      </span>
    </a>
  );
}
