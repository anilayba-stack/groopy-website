import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";

/** Dikey ritim + opsiyonel yüzey arka planı olan bölüm sarmalayıcı. */
export function Section({
  children,
  as: Tag = "section",
  surface = false,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  as?: ElementType;
  surface?: boolean;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <Tag
      className={`border-t border-[var(--color-border)] py-16 sm:py-20 lg:py-24 ${
        surface ? "bg-[var(--color-surface)]" : ""
      } ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-faint)]">
          <span className="inline-block h-px w-6 bg-[var(--color-border-strong)]" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
