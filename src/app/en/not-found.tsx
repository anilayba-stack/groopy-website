import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { enRoutes } from "@/lib/routes";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm text-[var(--color-text-faint)]">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <div className="mt-6 flex gap-4 text-sm font-medium">
        <Link href={enRoutes.home} className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]">
          Home
        </Link>
        <Link href={enRoutes.services} className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]">
          Services
        </Link>
        <Link href={enRoutes.contact} className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]">
          Contact
        </Link>
      </div>
    </Container>
  );
}
