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
    photos: [
      {
        src: "/images/work/tike-zekeriyakoy-urun-cekimi.jpg",
        alt: "Studio lighting and camera setup during a product photo shoot for Tike in Zekeriyaköy",
      },
    ],
    date: "2026-10-25",
  },
];
