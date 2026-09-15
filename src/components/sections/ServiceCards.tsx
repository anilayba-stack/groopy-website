import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@content/types";
import { routes } from "@/lib/routes";
import { ServiceVisual } from "./services/ServiceVisual";

function Card({
  service,
  large = false,
  hrefFor,
}: {
  service: Service;
  large?: boolean;
  hrefFor: (slug: string) => string;
}) {
  const Icon = service.icon;
  return (
    <Link
      href={hrefFor(service.slug)}
      className={`surface-glass group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[var(--shadow-card-hover)] ${
        large ? "min-h-[240px] sm:col-span-2 sm:p-8" : "min-h-[200px]"
      }`}
    >
      <ServiceVisual
        slug={service.slug}
        className="svisual--card"
      />

      <span
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative z-[1] flex items-start justify-between">
        <span className="grid size-10 place-items-center rounded-lg border border-[var(--color-border)] bg-white/[0.04] text-[var(--color-text)] backdrop-blur-sm">
          <Icon className="size-5" aria-hidden strokeWidth={1.75} />
        </span>
        <ArrowUpRight
          className="size-5 text-[var(--color-text-faint)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-text)]"
          aria-hidden
        />
      </div>
      <h3
        className={`relative z-[1] mt-5 font-semibold tracking-tight text-[var(--color-text)] ${
          large ? "text-xl" : "text-lg"
        }`}
      >
        {service.navLabel}
      </h3>
      <p className="relative z-[1] mt-2 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] transition-opacity duration-300 group-hover:opacity-0">
        {service.summary}
      </p>
    </Link>
  );
}

/** Ana hizmetler ızgarası. İlk (flagship) kart geniş. */
export function ServiceCards({
  services,
  hrefFor = routes.service,
}: {
  services: Service[];
  hrefFor?: (slug: string) => string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((s, i) => (
        <Card key={s.slug} service={s} large={i === 0 && s.featured} hrefFor={hrefFor} />
      ))}
    </div>
  );
}
