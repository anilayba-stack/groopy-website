import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { footerNav, enFooterNav } from "@/lib/navigation";
import { SITE } from "@/lib/site-config";
import { routes, enRoutes } from "@/lib/routes";

const STRINGS = {
  tr: {
    tagline: `${SITE.tagline}. Web geliştirme, SEO + GEO, Google Reklam Yönetimi ve sosyal medya yönetimi.`,
    rights: "Tüm hakları saklıdır.",
  },
  en: {
    tagline:
      "Software company based in Istanbul. Website development, SEO + GEO, Google Ads Management, and social media management.",
    rights: "All rights reserved.",
  },
} as const;

export function Footer({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const year = new Date().getFullYear();
  const t = STRINGS[locale];
  const nav = locale === "en" ? enFooterNav : footerNav;
  const home = locale === "en" ? enRoutes.home : routes.home;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo href={home} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t.tagline}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
              <a href={`mailto:${SITE.contact.email}`} className="inline-flex items-center gap-2 hover:text-[var(--color-text)]">
                <Mail className="size-4" aria-hidden /> {SITE.contact.email}
              </a>
              <a href={`tel:${SITE.contact.phone}`} className="inline-flex items-center gap-2 hover:text-[var(--color-text)]">
                <Phone className="size-4" aria-hidden /> {SITE.contact.phoneDisplay}
              </a>
              {SITE.social.instagram ? (
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--color-text)]"
                >
                  <InstagramIcon className="size-4" /> Instagram
                </a>
              ) : null}
              {SITE.social.linkedin ? (
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--color-text)]"
                >
                  <LinkedInIcon className="size-4" /> LinkedIn
                </a>
              ) : null}
            </div>
          </div>

          {nav.map((group) => (
            <div key={group.label}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-faint)]">
                {group.label}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.children?.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--color-text-faint)]">
            © {year} {SITE.name}. {t.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
