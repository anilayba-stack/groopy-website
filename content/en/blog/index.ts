import type { BlogPost } from "../../types";
import { meta as websiteCost2026Meta, Body as WebsiteCost2026Body } from "./website-cost-2026/post";

/** Published posts — newest first. */
export const posts: BlogPost[] = [
  { meta: websiteCost2026Meta, Body: WebsiteCost2026Body },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export function postSlugs(): string[] {
  return posts.map((p) => p.meta.slug);
}

export function sortedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => +new Date(b.meta.publishedAt) - +new Date(a.meta.publishedAt),
  );
}
