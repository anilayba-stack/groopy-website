import type { ProcessStep } from "@content/types";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative pt-4">
          <span
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[var(--color-text-faint)] to-transparent"
            aria-hidden
          />
          <span className="font-mono text-xs text-[var(--color-text-faint)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-[15px] font-semibold text-[var(--color-text)]">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
