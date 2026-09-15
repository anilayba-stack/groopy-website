"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Laptop } from "./laptop/Laptop";
import { diagnostics as diagnosticsTr, type Diagnostic } from "@content/diagnostics";
import { routes, enRoutes } from "@/lib/routes";

const STRINGS = {
  tr: {
    eyebrow: "İhtiyaç analizi",
    title: "Aramada görünmüyorsanız, nedeni bellidir",
    description:
      "Çoğu görünürlük sorununun teknik bir kaynağı vardır. En sık karşılaşılan durumlar — ve nasıl çözüldüğü:",
    reasonLabel: "Neden",
    solutionLabel: "Çözüm",
  },
  en: {
    eyebrow: "Needs assessment",
    title: "If you're not showing up in search, there's a clear reason",
    description:
      "Most visibility problems have a technical root cause. The most common ones — and how they're fixed:",
    reasonLabel: "Why",
    solutionLabel: "Fix",
  },
} as const;

export function DiagnosticSection({
  locale = "tr",
  diagnostics = diagnosticsTr,
}: {
  locale?: "tr" | "en";
  diagnostics?: Diagnostic[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeId = openId ?? diagnostics[0]?.id ?? "";
  const t = STRINGS[locale];
  const serviceHref = (slug: string) =>
    locale === "en" ? enRoutes.service(slug) : routes.service(slug);

  return (
    <Section surface>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        {/* Sorun listesi — tıklayınca açılır */}
        <ul>
          {diagnostics.map((d) => {
            const open = d.id === openId;
            return (
              <li key={d.id} className="diag__item" data-open={open}>
                <button
                  type="button"
                  className="diag__q"
                  aria-expanded={open}
                  onClick={() => setOpenId((c) => (c === d.id ? null : d.id))}
                >
                  <span>{d.problem}</span>
                  <Plus
                    className="diag__icon size-4 shrink-0"
                    aria-hidden
                  />
                </button>
                <div className="diag__panel">
                  <div className="diag__body">
                    <div className="diag__row">
                      <span className="diag__label">{t.reasonLabel}</span>
                      <p>{d.reason}</p>
                    </div>
                    <div className="diag__row">
                      <span className="diag__label">{t.solutionLabel}</span>
                      <p className="diag__solution">{d.solution}</p>
                    </div>
                    <Link
                      href={serviceHref(d.serviceSlug)}
                      className="diag__cta group"
                    >
                      {d.serviceLabel}
                      <ArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* 3B laptop */}
        <div className="lg:sticky lg:top-28">
          <Laptop activeId={activeId} diagnostics={diagnostics} locale={locale} />
        </div>
      </div>
    </Section>
  );
}
