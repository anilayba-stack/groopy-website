import type { WorkEntry } from "../types";

/**
 * Real client work — NOT a case study, no heavy metrics dashboard. Only
 * shows the service delivered and (if any) real visual proof. The `results`
 * field is used only for verified, sourced results directly attributable to
 * our own work (e.g. a new website) — not the general performance of assets
 * the client already had before us (e.g. their GBP).
 */
export const workGallery: WorkEntry[] = [
  {
    slug: "tike-zekeriyakoy",
    client: "Tike",
    location: "Zekeriyaköy, Istanbul",
    services: ["Website development", "SEO and GEO strategy", "Google Ads management", "Social media management"],
    summary: "We run website development, SEO+GEO strategy, and Google Ads management for Tike Zekeriyaköy; a frame from a shoot day under our social media management service.",
    website: { url: "https://tikezekeriyakoy.com/", label: "tikezekeriyakoy.com" },
    logo: { src: "/logos/tike-zekeriyakoy.png", w: 2000, h: 988 },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/tike-zekeriyakoy-urun-cekimi.jpg",
        alt: "Studio lighting and camera setup during a product photo shoot for Tike in Zekeriyaköy",
      },
    ],
    date: "2026-10-25",
    results: [
      "Two weeks after launch: ranks at an average position of 1 in Google for the \"Tike Zekeriyaköy\" brand search, with 2,325 impressions / 82 clicks (Search Console)",
      "Already getting organic visits from AI assistants (ChatGPT, Gemini, etc.) (Google Analytics)",
    ],
  },
  {
    slug: "busra-kayan-kemerburgaz",
    client: "Dt. Büşra Kayan",
    location: "Kemerburgaz, Istanbul",
    services: ["Website development", "SEO and GEO strategy", "Google Ads management", "Social media management"],
    summary: "We run website development, SEO+GEO strategy, and Google Ads management for Dt. Büşra Kayan; a frame from her clinic under our social media management service.",
    website: { url: "https://dtbusrakayan.com/", label: "dtbusrakayan.com" },
    logo: { src: "/logos/dt-busra-kayan.png", w: 1400, h: 780 },
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
    logo: { src: "/logos/kozmoz.png", w: 2000, h: 430 },
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
    logo: { src: "/logos/mevlut-bilgin.png", w: 600, h: 144 },
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
