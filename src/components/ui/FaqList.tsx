import type { Faq } from "@content/types";

/** JavaScript'siz açılır-kapanır FAQ (native details/summary). */
export function FaqList({ items, title = "Sık sorulan sorular" }: { items: Faq[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.0625rem] font-medium text-[var(--color-text)] [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="shrink-0 text-[var(--color-text-faint)] transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
