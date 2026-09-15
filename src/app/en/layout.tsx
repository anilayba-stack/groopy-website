import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { HtmlLang } from "./HtmlLang";

/** EN yerelinin sayfa çerçevesi (Header + Footer) — TR (site)/layout.tsx'in aynısı. */
export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HtmlLang lang="en" />
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
    </>
  );
}
