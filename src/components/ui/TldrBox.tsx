/**
 * "Özet" kutusu — answer-first format (CLAUDE.md / GEO).
 * Hizmet ve blog sayfalarında içeriğin en üstünde.
 */
export function TldrBox({ children }: { children: string }) {
  return (
    <div className="surface-glass relative overflow-hidden rounded-xl border border-[var(--color-border-strong)] p-5 sm:p-6">
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"
        aria-hidden
      />
      <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-faint)]">
        Özet
      </p>
      <p className="text-[1.0625rem] leading-relaxed text-[var(--color-text)]">
        {children}
      </p>
    </div>
  );
}
