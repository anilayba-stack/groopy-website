import type { WorkEntry } from "../types";

/**
 * Real client work — carries no result or metric claim, NOT a case study.
 * Only shows the service delivered and (if any) real visual proof.
 */
export const workGallery: WorkEntry[] = [
  {
    slug: "tike-zekeriyakoy",
    client: "Tike",
    location: "Zekeriyaköy, Istanbul",
    services: ["Website development", "SEO and GEO strategy", "Google Ads management", "Social media management"],
    summary: "We run website development, SEO+GEO strategy, and Google Ads management for Tike Zekeriyaköy; a frame from a shoot day under our social media management service.",
    website: { url: "https://tikezekeriyakoy.com/", label: "tikezekeriyakoy.com" },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/tike-zekeriyakoy-urun-cekimi.jpg",
        alt: "Studio lighting and camera setup during a product photo shoot for Tike in Zekeriyaköy",
      },
    ],
    date: "2026-10-25",
  },
  {
    slug: "busra-kayan-kemerburgaz",
    client: "Dt. Büşra Kayan",
    location: "Kemerburgaz, Istanbul",
    services: ["Website development", "SEO and GEO strategy", "Google Ads management", "Social media management"],
    summary: "We run website development, SEO+GEO strategy, and Google Ads management for Dt. Büşra Kayan; a frame from her clinic under our social media management service.",
    website: { url: "https://dtbusrakayan.com/", label: "dtbusrakayan.com" },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/busra-kayan-klinik.jpg",
        alt: "A portrait of Dt. Büşra Kayan wearing dental loupes and a surgical mask in her clinic",
      },
    ],
    date: "2026-10-28",
  },
  {
    slug: "kozmoz724",
    client: "Kozmoz724",
    location: "Istanbul",
    services: ["Website development", "SEO and GEO strategy"],
    summary: "We run website development and SEO+GEO strategy for Kozmoz724; a screenshot from the live site.",
    website: { url: "https://kozmoz724.com/", label: "kozmoz724.com" },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/kozmoz724-site-ekrani.jpg",
        alt: "Homepage screenshot from Kozmoz724's live website, presenting its shopping and health categories",
      },
    ],
    date: "2026-11-09",
  },
  {
    slug: "mevlut-bilgin",
    client: "Fzt. Mevlüt Bilgin",
    location: "Istanbul",
    services: ["Website development", "SEO and GEO strategy"],
    summary: "We run website development and SEO+GEO strategy for Fzt. Mevlüt Bilgin; a screenshot from the live site.",
    website: { url: "https://fztmevlutbilgin.com/", label: "fztmevlutbilgin.com" },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/mevlut-bilgin-site-ekrani.jpg",
        alt: "Homepage screenshot from Fzt. Mevlüt Bilgin's live website, showing a manual therapy session",
      },
    ],
    date: "2026-11-09",
  },
];
