import type { Service } from "../../types";
import { websiteDevelopment } from "./website-development";
import { seoAndGeoStrategy } from "./seo-and-geo-strategy";
import { socialMediaManagement } from "./social-media-management";

/** Order = presentation priority. Flagship (website) first. */
export const services: Service[] = [
  websiteDevelopment,
  seoAndGeoStrategy,
  socialMediaManagement,
];

/** All services are currently primary; there is no secondary tier. */
export const primaryServices = services;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceSlugs(): string[] {
  return services.map((s) => s.slug);
}
