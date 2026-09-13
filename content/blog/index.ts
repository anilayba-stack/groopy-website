import type { BlogPost } from "../types";
import {
  meta as webSitesiMaliyeti2026Meta,
  Body as WebSitesiMaliyeti2026Body,
} from "./web-sitesi-maliyeti-2026/post";

/** Yayımlanmış yazılar — en yeni önce. */
export const posts: BlogPost[] = [
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
