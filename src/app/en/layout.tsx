import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LangSwitcher } from "@/components/layout/LangSwitcher";
import { SITE } from "@/lib/site-config";
import { HtmlLang } from "./HtmlLang";

/**
 * EN yerelinin sadeleştirilmiş çerçevesi.
 * v1: yalnızca ana sayfa. Faz 2'de tam ayna (hizmetler, blog, iletişim…).
 */
export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HtmlLang lang="en" />
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-black/55 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/en"
            className="inline-flex items-center gap-2.5 text-[var(--color-text)]"
            aria-label={`${SITE.name} — home`}
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={530}
              height={476}
              priority
              className="h-6 w-auto"
            />
            <span className="text-[15px] font-semibold tracking-tight">
              {SITE.name}
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <LangSwitcher locale="en" />
            <ButtonLink href={`mailto:${SITE.contact.email}`} external>
              Get a quote
            </ButtonLink>
          </div>
        </Container>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="flex flex-col items-start justify-between gap-3 py-8 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Software company based in
            Istanbul.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="hover:text-[var(--color-text)]"
            >
              {SITE.contact.email}
            </a>
            <Link href="/" className="hover:text-[var(--color-text)]">
              Türkçe
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
}
