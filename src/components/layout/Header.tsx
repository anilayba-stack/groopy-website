"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { mainNav, enMainNav } from "@/lib/navigation";
import { PRIMARY_CTA, EN_PRIMARY_CTA, routes, enRoutes } from "@/lib/routes";

const STRINGS = {
  tr: {
    navLabel: "Ana menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
  },
  en: {
    navLabel: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
} as const;

export function Header({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = STRINGS[locale];
  const nav = locale === "en" ? enMainNav : mainNav;
  const cta = locale === "en" ? EN_PRIMARY_CTA : PRIMARY_CTA;
  const home = locale === "en" ? enRoutes.home : routes.home;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-black/55 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">
      <Container className="flex h-16 items-center justify-between">
        <Logo priority href={home} />

        {/* Masaüstü */}
        <nav className="hidden items-center gap-1 md:flex" aria-label={t.navLabel}>
          {nav.map((group) =>
            group.children ? (
              <div key={group.label} className="group relative">
                <Link
                  href={group.href ?? "#"}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {group.label}
                  <ChevronDown className="size-3.5" aria-hidden />
                </Link>
                <div className="invisible absolute left-0 top-full min-w-64 translate-y-1 rounded-xl border border-[var(--color-border-strong)] bg-[#0d0d0f]/95 p-1.5 opacity-0 shadow-[var(--shadow-card-hover)] backdrop-blur-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {group.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-white/[0.06] hover:text-[var(--color-text)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={group.href}
                href={group.href ?? "#"}
                aria-current={pathname === group.href ? "page" : undefined}
                className="rounded-md px-3 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] aria-[current=page]:text-[var(--color-text)]"
              >
                {group.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangSwitcher locale={locale} />
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>

        {/* Mobil aç/kapa */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-[var(--color-text)] md:hidden"
          aria-expanded={open}
          aria-label={open ? t.closeMenu : t.openMenu}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobil menü */}
      {open ? (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.flatMap((group) => {
              const items = group.children ?? [group as { label: string; href: string }];
              return items.map((child) => (
                <Link
                  key={child.href + child.label}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)]"
                >
                  {child.label}
                </Link>
              ));
            })}
            <div className="px-3 pt-3">
              <ButtonLink href={cta.href} className="w-full">
                {cta.label}
              </ButtonLink>
            </div>
            <div className="px-3 pt-2">
              <LangSwitcher locale={locale} />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
