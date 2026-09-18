import { Search } from "lucide-react";
import type { Service } from "../../types";

export const seoAndGeoStrategy: Service = {
  slug: "seo-and-geo-strategy",
  tier: "primary",
  navLabel: "SEO & GEO Strategy",
  title: "SEO & GEO (AI Search) Strategy",
  metaTitle: "SEO & GEO Strategy",
  metaDescription:
    "One strategy to be found in Google search and cited in AI answers (ChatGPT, Perplexity, AI Overviews). Technical SEO, content architecture, and GEO infrastructure.",
  summary:
    "Technical SEO, content, and GEO work that moves your site up in Google rankings.",
  tldr: "SEO (Search Engine Optimization) aims to rank your page in Google; GEO (Generative Engine Optimization) aims to get your brand cited as a source inside AI answers from tools like ChatGPT, Perplexity, Gemini, and Google AI Overviews. Neither replaces the other — they're built together. Groopy brings technical foundation, content architecture, and structured data into one plan.",
  icon: Search,
  sections: [
    {
      heading: "SEO vs. GEO",
      body: "Classic search still sends far more traffic than AI engines combined — it's too early to drop SEO. But a growing share of users now get their answer directly from AI and never visit a site. GEO makes sure your brand's name and link show up inside that answer.",
    },
    {
      heading: "Technical SEO",
      body: "The precondition for ranking is that a site is crawlable and fast. For most sites, this is where the biggest gains are.",
      bullets: [
        "Crawl and indexing audit, redirect cleanup",
        "Core Web Vitals and page speed",
        "Title/meta structure, internal linking architecture",
        "hreflang, sitemap, robots configuration",
      ],
    },
    {
      heading: "Content architecture",
      body: "Not random blog posts — a hub-and-spoke structure: each core service is a hub page, supported by posts linked to it and to each other. Planned around search intent — information, comparison, price, purchase.",
    },
    {
      heading: "GEO infrastructure",
      body: "What's needed for AI crawlers to read your content and prefer citing it.",
      bullets: [
        "Opening access to GPTBot, ClaudeBot, PerplexityBot, Google-Extended",
        "Answer-first content format: the result first, detail after",
        "Structured data (Organization, Service, FAQ, Article)",
        "Entity clarity: consistent brand, location, and service names",
        "Verifiable, specific statements — not vague claims",
      ],
    },
    {
      heading: "Measurement and management",
      body: "Once Google's tools are set up, this service covers their ongoing monitoring and management. It typically takes 4–8 weeks from launch to appear in an AI answer.",
      bullets: [
        "Search Console: crawl errors, indexing status, and search performance tracking",
        "Google Analytics: traffic and conversion reporting",
        "Google Business Profile: posts, updates, and review management",
        "A monthly manual check for citations in AI answers on target queries",
      ],
    },
  ],
  process: [
    {
      title: "Audit",
      description:
        "Technical state, current rankings, competitor gaps, and AI visibility are mapped out.",
    },
    {
      title: "Priority plan",
      description:
        "The highest-impact fixes and content clusters are prioritized.",
    },
    {
      title: "Implementation",
      description:
        "Technical fixes, content production, and structured data go live.",
    },
    {
      title: "Monitoring",
      description:
        "Monthly reporting: organic traffic, ranking changes, and AI citation status.",
    },
  ],
  faq: [
    {
      question: "What is GEO?",
      answer:
        "Generative Engine Optimization — optimizing content so it's cited as a source inside the answers AI search engines generate. It doesn't replace SEO; it complements it.",
    },
    {
      question: "Do I need to add llms.txt?",
      answer:
        "It's not required and Google ignores it. Some AI tools use it; it's added because the cost is low, but it isn't decisive for results.",
    },
    {
      question: "When do results show up?",
      answer:
        "Technical fixes show effect within weeks; ranking gains from content and AI citations typically take 2–4 months. No guarantees are given — be wary of anyone who gives them.",
    },
    {
      question: "Do you manage Google Ads or paid advertising?",
      answer:
        "This service is focused on organic visibility. Paid advertising management is offered as a separate service — see Google Ads Management.",
    },
  ],
  relatedPosts: [
    "physiotherapist-digital-marketing-guide",
    "dentist-digital-marketing-guide",
    "why-isnt-my-site-on-google",
    "what-is-geo",
    "google-ads-or-seo",
    "how-to-choose-an-seo-agency",
    "website-cost-2026",
  ],
};
