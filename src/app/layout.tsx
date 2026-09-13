import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site-config";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

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
 * Kök layout: yalnızca <html>/<body>, global stiller, grain ve site-geneli JSON-LD.
 * Header/Footer locale-özel layout'larda: (site) = TR, en = EN.
 */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <div className="grain-overlay" aria-hidden />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
