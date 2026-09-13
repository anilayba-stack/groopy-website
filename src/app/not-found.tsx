import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
          <p className="font-mono text-sm text-[var(--color-text-faint)]">404</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
            Sayfa bulunamadı
          </h1>
          <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
            Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
          </p>
          <div className="mt-6 flex gap-4 text-sm font-medium">
            <Link href={routes.home} className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]">
              Ana sayfa
            </Link>
            <Link href={routes.services} className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]">
              Hizmetler
            </Link>
            <Link href={routes.contact} className="text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]">
              İletişim
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
