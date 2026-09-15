import type { Diagnostic } from "../diagnostics";

export type { Diagnostic } from "../diagnostics";

export const diagnostics: Diagnostic[] = [
  {
    id: "brand-search",
    problem: "We don't even rank first when someone searches our own business name.",
    reason:
      "Either the site was never indexed, or technical barriers — robots configuration, broken redirects, missing heading structure — make it hard to crawl.",
    solution:
      "It starts with a technical SEO audit: indexing status, sitemap, robots, title and meta structure, and internal links are reviewed. Ranking first for a brand search is the first goal.",
    serviceSlug: "seo-and-geo-strategy",
    serviceLabel: "SEO & GEO Strategy",
    screen: "serp",
    query: "your business name",
  },
  {
    id: "service-search",
    problem:
      "Searches like \"dentist in Istanbul\" or \"physiotherapist\" show competitors — not us.",
    reason:
      "There are no pages targeting the service and location, or the content doesn't match search intent. Local search signals (Google Business Profile, consistent contact info, local content) are missing.",
    solution:
      "A service-and-location page architecture is built around search intent, and local search signals are cleaned up. The goal is a first-page spot for the service being searched.",
    serviceSlug: "seo-and-geo-strategy",
    serviceLabel: "SEO & GEO Strategy",
    screen: "serp",
    query: "istanbul dentist",
  },
  {
    id: "ai-answers",
    problem:
      "Our name never comes up when someone asks ChatGPT or Google's AI answers.",
    reason:
      "The site is closed to AI crawlers, content isn't in answer-first format, and there's no structured data. As a result, AI engines have no reason to prefer citing it.",
    solution:
      "GEO infrastructure is put in place: access opens up to AI crawlers, content is restructured answer-first, and Organization / Service / FAQ schema is added. The goal is to appear as a cited source in AI answers.",
    serviceSlug: "seo-and-geo-strategy",
    serviceLabel: "SEO & GEO Strategy",
    screen: "ai",
    query: "Can you recommend a good physiotherapist in Istanbul?",
  },
  {
    id: "restaurant",
    problem:
      "We have a restaurant, but people searching \"restaurant near me\" can't find us.",
    reason:
      "Google doesn't fully know who you are. Your business listing is incomplete or outdated, and your site doesn't clearly tell Google where you are, when you're open, and what's on the menu.",
    solution:
      "The Google Business Profile is rebuilt from scratch; address, phone, hours, and menu are added to the site in a format Google can read clearly. That way, someone searching for a nearby place finds you on the map and in search.",
    serviceSlug: "seo-and-geo-strategy",
    serviceLabel: "SEO & GEO Strategy",
    screen: "local",
    query: "restaurant near me",
  },
  {
    id: "need-website",
    problem: "Do I actually need a website for my clinic?",
    reason:
      "People check Google before going anywhere. If you have no site, or yours is old and slow, whoever's searching for you doesn't trust it and goes elsewhere. Your real customers come from search.",
    solution:
      "A simple, fast site is built for your business: what you do, where you are, and how to reach you, stated clearly. It's visible in Google and AI search, and whoever lands on it trusts it at first glance. If you already have a site, it's migrated and search rankings are preserved.",
    serviceSlug: "website-development",
    serviceLabel: "Website Development",
    screen: "site",
  },
  {
    id: "social",
    problem:
      "We post on Instagram, but the account is dead — no engagement, no follower growth.",
    reason:
      "Posting without a plan doesn't work. If when and what to post isn't clear, the account stalls — no followers, no customers. Social media needs a system: a content calendar, a consistent tone, regular production.",
    solution:
      "The account is run as one system: content planning, production, and community management. Which platform, what frequency, and what purpose content is produced for is planned upfront. Each month reports what was published and what worked.",
    serviceSlug: "social-media-management",
    serviceLabel: "Social Media Management",
    screen: "social",
  },
];
