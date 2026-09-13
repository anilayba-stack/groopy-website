import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { footerNav } from "@/lib/navigation";
import { SITE } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              {SITE.tagline}. Web geliştirme, SEO + GEO ve sosyal medya yönetimi.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
              <a href={`mailto:${SITE.contact.email}`} className="inline-flex items-center gap-2 hover:text-[var(--color-text)]">
                <Mail className="size-4" aria-hidden /> {SITE.contact.email}
              </a>
              <a href={`tel:${SITE.contact.phone}`} className="inline-flex items-center gap-2 hover:text-[var(--color-text)]">
                <Phone className="size-4" aria-hidden /> {SITE.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {footerNav.map((group) => (
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
            © {year} {SITE.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            {SITE.social.instagram ? (
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-text)]"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </footer>
  );
}
