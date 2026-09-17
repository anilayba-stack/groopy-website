import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { HeroMark } from "./HeroMark";
import { HeroFx } from "./HeroFx";
import { PRIMARY_CTA, EN_PRIMARY_CTA, routes, enRoutes } from "@/lib/routes";

const STRINGS = {
  tr: {
    badge: "Yazılım şirketi",
    h1: "İstanbul’da web sitesi geliştirme, SEO ve sosyal medya yönetimi",
    description:
      "İşletmenizi Google ve yapay zekâ aramalarında görünür kılıyoruz. Web geliştirme, SEO + GEO ve sosyal medya yönetimi hizmetlerini bağımsız ya da bütünleşik olarak sunuyoruz.",
    cta: PRIMARY_CTA,
    secondaryCta: "Hizmetleri gör",
    servicesHref: routes.services,
    scopeItems: [
      {
        key: "web",
        label: "Kurumsal web sitesi ve özel yazılım",
        href: routes.service("web-sitesi-gelistirme"),
      },
      {
        key: "seo",
        label: "SEO + GEO ile arama görünürlüğü",
        href: routes.service("seo-ve-geo"),
      },
      {
        key: "ads",
        label: "Google Reklam Yönetimi",
        href: routes.service("google-reklam-yonetimi"),
      },
      {
        key: "social",
        label: "Sosyal medya yönetimi",
        href: routes.service("sosyal-medya-yonetimi"),
      },
    ],
  },
  en: {
    badge: "Software company",
    h1: "Website development, SEO, and social media management in Istanbul",
    description:
      "We make your business visible in Google and AI search. We offer website development, SEO + GEO, and social media management — independently or as an integrated program.",
    cta: EN_PRIMARY_CTA,
    secondaryCta: "See services",
    servicesHref: enRoutes.services,
    scopeItems: [
      {
        key: "web",
        label: "Corporate websites and custom software",
        href: enRoutes.service("website-development"),
      },
      {
        key: "seo",
        label: "Search visibility with SEO + GEO",
        href: enRoutes.service("seo-and-geo-strategy"),
      },
      {
        key: "ads",
        label: "Google Ads Management",
        href: enRoutes.service("google-ads-management"),
      },
      {
        key: "social",
        label: "Social media management",
        href: enRoutes.service("social-media-management"),
      },
    ],
  },
} as const;

export function Hero({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const t = STRINGS[locale];
  return (
    <section className="hero-band relative overflow-hidden border-b border-[var(--color-border)] lg:min-h-[540px]">
      {/* Merkezî parlayan işaret — mobilde metnin üstünde, lg'de tam ortada */}
      <div className="flex justify-center px-6 pt-12 sm:pt-14 lg:pointer-events-none lg:absolute lg:inset-0 lg:items-center lg:p-0">
        <HeroMark className="w-[132px] sm:w-[150px] lg:w-[248px] xl:w-[280px]" />
      </div>

      <HeroFx />

      <Container className="relative flex min-h-full flex-col justify-center py-14 sm:py-16 lg:py-20">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-lg lg:max-w-[26rem]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] backdrop-blur-sm">
              <span
                className="size-1.5 rounded-full bg-[var(--color-success)]"
                aria-hidden
              />
              {t.badge}
            </p>
            <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-[2.5rem] lg:text-[2.75rem]">
              {t.h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              {t.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={t.cta.href}>{t.cta.label}</ButtonLink>
              <ButtonLink href={t.servicesHref} variant="ghost" withArrow>
                {t.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <ul className="mt-10 space-y-3 text-sm lg:mt-0 lg:max-w-[13.5rem] lg:text-right">
            {t.scopeItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-hero-target={item.key}
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
