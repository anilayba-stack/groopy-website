import { routes, enRoutes } from "./routes";
import { primaryServices } from "@content/services";
import { primaryServices as enPrimaryServices } from "@content/en/services";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavLink[];
}

/** Ana navigasyon. Üç ana hizmet + Çalışmalar / Blog / Hakkımızda. */
export const mainNav: NavGroup[] = [
  {
    label: "Hizmetler",
    href: routes.services,
    children: [
      ...primaryServices.map((s) => ({
        label: s.navLabel,
        href: routes.service(s.slug),
      })),
      { label: "Tüm hizmetler", href: routes.services },
    ],
  },
  { label: "Çalışmalar", href: routes.work },
  { label: "Blog", href: routes.blog },
  { label: "Hakkımızda", href: routes.about },
];

export const footerNav: NavGroup[] = [
  {
    label: "Hizmetler",
    children: primaryServices.map((s) => ({
      label: s.navLabel,
      href: routes.service(s.slug),
    })),
  },
  {
    label: "Şirket",
    children: [
      { label: "Çalışmalar", href: routes.work },
      { label: "Blog", href: routes.blog },
      { label: "Hakkımızda", href: routes.about },
      { label: "İletişim", href: routes.contact },
    ],
  },
];

/** EN ana navigasyon. */
export const enMainNav: NavGroup[] = [
  {
    label: "Services",
    href: enRoutes.services,
    children: [
      ...enPrimaryServices.map((s) => ({
        label: s.navLabel,
        href: enRoutes.service(s.slug),
      })),
      { label: "All services", href: enRoutes.services },
    ],
  },
  { label: "Case Studies", href: enRoutes.work },
  { label: "Blog", href: enRoutes.blog },
  { label: "About", href: enRoutes.about },
];

export const enFooterNav: NavGroup[] = [
  {
    label: "Services",
    children: enPrimaryServices.map((s) => ({
      label: s.navLabel,
      href: enRoutes.service(s.slug),
    })),
  },
  {
    label: "Company",
    children: [
      { label: "Case Studies", href: enRoutes.work },
      { label: "Blog", href: enRoutes.blog },
      { label: "About", href: enRoutes.about },
      { label: "Contact", href: enRoutes.contact },
    ],
  },
];
