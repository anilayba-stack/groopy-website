import type { BlogPost } from "../types";
import {
  meta as webSitesiMaliyeti2026Meta,
  Body as WebSitesiMaliyeti2026Body,
} from "./web-sitesi-maliyeti-2026/post";
import {
  meta as seoAjansiSecerkenMeta,
  Body as SeoAjansiSecerkenBody,
} from "./seo-ajansi-secerken-nelere-dikkat-edilmeli/post";
import {
  meta as googleAdsMiSeoMuMeta,
  Body as GoogleAdsMiSeoMuBody,
} from "./google-ads-mi-seo-mu/post";
import {
  meta as sosyalMedyaFiyatlari2026Meta,
  Body as SosyalMedyaFiyatlari2026Body,
} from "./sosyal-medya-yonetimi-fiyatlari-2026/post";
import { meta as geoNedirMeta, Body as GeoNedirBody } from "./geo-nedir/post";
import {
  meta as googleAdsAjansiSecerkenMeta,
  Body as GoogleAdsAjansiSecerkenBody,
} from "./google-ads-ajansi-secerken-nelere-dikkat-edilmeli/post";

/** Yayımlanmış yazılar — en yeni önce. */
export const posts: BlogPost[] = [
  {
    meta: googleAdsAjansiSecerkenMeta,
    Body: GoogleAdsAjansiSecerkenBody,
  },
  { meta: geoNedirMeta, Body: GeoNedirBody },
  { meta: sosyalMedyaFiyatlari2026Meta, Body: SosyalMedyaFiyatlari2026Body },
  { meta: googleAdsMiSeoMuMeta, Body: GoogleAdsMiSeoMuBody },
  { meta: seoAjansiSecerkenMeta, Body: SeoAjansiSecerkenBody },
  { meta: webSitesiMaliyeti2026Meta, Body: WebSitesiMaliyeti2026Body },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export function postSlugs(): string[] {
  return posts.map((p) => p.meta.slug);
}

export function sortedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.meta.publishedAt).getTime() -
      new Date(a.meta.publishedAt).getTime(),
  );
}
