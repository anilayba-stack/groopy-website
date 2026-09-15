import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { routes } from "@/lib/routes";
import { SITE } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Gerçekten hiçbir route ile eşleşmeyen adresler için son çare 404.
 * (site)/not-found.tsx ve en/not-found.tsx normal kullanıcı 404'lerini
 * (tasarımlı, Header/Footer'lı) karşılıyor; bu dosya yalnızca route ağacının
 * hiçbir yerine düşmeyen, gerçekten tanımsız adresler için devreye girer —
 * bu yüzden kendi <html>/<body>'sini taşımak zorunda (üstte kök layout yok).
 */
export default function GlobalNotFound() {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col items-start justify-center bg-[var(--color-bg)] px-6 py-24 text-[var(--color-text)]">
        <p className="font-mono text-sm text-[var(--color-text-faint)]">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Sayfa bulunamadı</h1>
        <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <Link
          href={routes.home}
          className="mt-6 text-sm font-medium underline decoration-[var(--color-border-strong)] underline-offset-4 hover:decoration-[var(--color-text)]"
        >
          {SITE.name} ana sayfaya dön
        </Link>
      </body>
    </html>
  );
}
