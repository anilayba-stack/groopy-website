import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
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
  description: SITE.descriptionEn,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    url: `${SITE.url}/en`,
  },
};

/**
 * EN kök layout'u (Next.js "çoklu kök layout" deseni — bkz. (site)/layout.tsx).
 * <html lang="en"> burada statik/build-zamanlı olarak sabit — artık istemci
 * tarafında düzeltmeye (eski HtmlLang.tsx) gerek yok, sunucu doğru üretiyor.
 */
export default function EnLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <div className="grain-overlay" aria-hidden />
        <JsonLd data={[organizationSchema("en"), websiteSchema("en")]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-accent-contrast)]"
        >
          Skip to content
        </a>
        <Header locale="en" />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale="en" />
        <FloatingActions locale="en" />
      </body>
    </html>
  );
}
