import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import { SITE } from "@/lib/site-config";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.descriptionTr,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE.name,
    url: SITE.url,
  },
};

/**
 * TR kök layout'u (Next.js "çoklu kök layout" deseni — bkz. en/layout.tsx).
 * <html lang="tr"> burada statik/build-zamanlı olarak sabit; bu sayede
 * lang/şema doğruluğu için request-time bir API (headers()) gerekmiyor ve
 * sayfalar tamamen statik (○) kalıyor.
 */
export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <div className="grain-overlay" aria-hidden />
        <JsonLd data={[organizationSchema("tr"), websiteSchema("tr")]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-accent-contrast)]"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
      <GoogleAnalytics gaId="G-MBK9KMLX6R" />
    </html>
  );
}
