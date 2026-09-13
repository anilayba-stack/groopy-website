"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Laptop } from "./laptop/Laptop";
import { diagnostics } from "@content/diagnostics";
import { routes } from "@/lib/routes";

export function DiagnosticSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeId = openId ?? diagnostics[0]?.id ?? "";

  return (
    <Section surface>
      <SectionHeading
        eyebrow="İhtiyaç analizi"
        title="Aramada görünmüyorsanız, nedeni bellidir"
        description="Çoğu görünürlük sorununun teknik bir kaynağı vardır. En sık karşılaşılan durumlar — ve nasıl çözüldüğü:"
      />

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
                      <span className="diag__label">Neden</span>
                      <p>{d.reason}</p>
                    </div>
                    <div className="diag__row">
                      <span className="diag__label">Çözüm</span>
                      <p className="diag__solution">{d.solution}</p>
                    </div>
                    <Link
                      href={routes.service(d.serviceSlug)}
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
          <Laptop activeId={activeId} />
        </div>
      </div>
    </Section>
  );
}
