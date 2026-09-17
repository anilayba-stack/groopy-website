import { Target } from "lucide-react";
import type { Service } from "../../types";

export const googleAdsManagement: Service = {
  slug: "google-ads-management",
  tier: "primary",
  navLabel: "Google Ads Management",
  title: "Google Ads Management",
  metaTitle: "Google Ads Management",
  metaDescription:
    "We set up and manage your Google Ads search, shopping, and display campaigns. The ad account is yours; transparent budget and monthly reporting.",
  summary:
    "We set up, manage, and report on Google Ads campaigns — the ad account stays yours.",
  tldr: "Google Ads Management covers setting up, optimizing, and reporting on search, shopping, and display campaigns in your business's own Google Ads account. The account and budget are yours; we run campaigns with manager-level access. The difference from SEO + GEO: SEO targets organic, long-term visibility; this service delivers paid, immediate visibility — neither replaces the other.",
  icon: Target,
  sections: [
    {
      heading: "What we do",
      body: "We handle Google Ads management end to end — from campaign setup to audience targeting and conversion tracking.",
      bullets: [
        "Search campaigns",
        "Shopping campaigns",
        "Display and remarketing",
        "Keyword, audience, and conversion tracking setup",
      ],
    },
    {
      heading: "The ad account is yours",
      body: "The Google Ads account is opened in your name, or your existing account is used; we run campaigns through manager-level access. Ad spend is paid directly to Google, with no hidden markup on top of it — our management fee is stated separately and clearly.",
    },
    {
      heading: "Relationship to SEO + GEO",
      body: "This service delivers paid, not organic, visibility. Planned together with SEO + GEO strategy, it covers both the paid and organic areas of search results; it can also be taken as a standalone service.",
    },
  ],
  process: [
    {
      title: "Discovery",
      description:
        "We define the business goal, budget range, and target audience, and settle on the right campaign types.",
    },
    {
      title: "Setup",
      description:
        "The account, campaign structure, keywords, and conversion tracking are set up.",
    },
    {
      title: "Launch and optimization",
      description:
        "Campaigns go live; bidding, targeting, and ad copy are continuously optimized.",
    },
    {
      title: "Reporting",
      description:
        "Monthly reporting: spend, clicks, conversions, and cost per result.",
    },
  ],
  faq: [
    {
      question: "What ad budget do I need?",
      answer:
        "Budget depends on your industry and goal; a clear range is shared during the discovery call. No specific result or ranking is guaranteed.",
    },
    {
      question: "Who keeps the ad account?",
      answer:
        "The account is yours. Even if the engagement ends, the account and its historical performance data stay with you.",
    },
    {
      question: "Should I take this instead of SEO?",
      answer:
        "No, they serve different purposes — SEO is organic and long-term, Google Ads is immediate and paid. They can be taken together or separately.",
    },
  ],
  relatedPosts: [
    "how-to-choose-a-google-ads-agency",
    "google-ads-or-seo",
  ],
};
