import type { Service } from "../types";
import { webSitesiGelistirme } from "./web-sitesi-gelistirme";
import { seoVeGeo } from "./seo-ve-geo";
import { sosyalMedyaYonetimi } from "./sosyal-medya-yonetimi";

/** Sıra = sunum önceliği. Flagship (web) en başta. */
export const services: Service[] = [
  webSitesiGelistirme,
  seoVeGeo,
  sosyalMedyaYonetimi,
];

/** Şu an tüm hizmetler birincil; ikincil hizmet yok. */
export const primaryServices = services;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceSlugs(): string[] {
  return services.map((s) => s.slug);
}
