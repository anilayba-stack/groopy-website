"use client";

import { useEffect } from "react";

/** Kök <html lang> kök layout'ta sabit ("tr"); EN sayfalarında istemcide düzeltir. */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);
  return null;
}
