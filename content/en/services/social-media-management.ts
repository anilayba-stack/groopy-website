import { Megaphone } from "lucide-react";
import type { Service } from "../../types";

export const socialMediaManagement: Service = {
  slug: "social-media-management",
  tier: "primary",
  navLabel: "Social Media Management",
  title: "Social Media Management",
  metaTitle: "Social Media Management",
  metaDescription:
    "Content planning, photo–video production, and community management for your business. A consistent, on-brand presence on Instagram, LinkedIn, and TikTok — with measurable goals.",
  summary:
    "Content planning, photo–video production, and community management — consistent and measurable.",
  tldr: "Groopy runs a business's social accounts as one system: content calendar, photo and video production, and community management. Platform choice and content tone are set around the business goal; each month reports what was published, what worked, and the plan for the next month.",
  icon: Megaphone,
  sections: [
    {
      heading: "Scope",
      body: "Not one post at a time — a system: which platform, what frequency, and what purpose content is produced for is planned upfront.",
      bullets: [
        "Content strategy and a monthly calendar",
        "Graphic and copy production (per brand guide)",
        "Photo and video shoots",
        "Video editing and production",
        "Publishing and scheduling",
        "Comment and message management",
        "Monthly performance report and next month's plan",
      ],
    },
    {
      heading: "Photo & video production",
      body: "Visual production for social content is included: product and location photography, short-form video shoots, editing, and platform-native formatting. On-site shoot requirements are identified during planning and added to the monthly calendar. Larger production needs are scoped separately in the consultation.",
    },
    {
      heading: "Platform selection",
      body: "Not every business needs to be on every platform. LinkedIn for B2B, Instagram for visual products, TikTok for reach with a younger audience. Being consistent on the right 1–2 platforms beats spreading resources thin.",
    },
    {
      heading: "Brand voice",
      body: "Content carries your business's voice — not ours. A tone and visual framework is set in the first month; production then runs inside that framework.",
    },
    {
      heading: "Standalone or integrated",
      body: "Social media management is offered as a standalone service. If website or SEO work is also underway, social content is tied to those traffic and conversion goals — but that's not a prerequisite.",
    },
  ],
  process: [
    {
      title: "Account & goal analysis",
      description:
        "Current state, competitors, and realistic goals (reach, engagement, referred traffic) are identified.",
    },
    {
      title: "Strategy & tone",
      description: "Platforms, content types, publishing frequency, and brand voice are defined.",
    },
    {
      title: "Production cycle",
      description: "Monthly calendar, content production, approval, and publishing.",
    },
    {
      title: "Reporting",
      description:
        "What was published, what worked, what changes next month — in writing.",
    },
  ],
  faq: [
    {
      question: "How much does social media management cost?",
      answer:
        "For a project run from Istanbul, professional service typically runs $350–$1,400 per month (USD, Istanbul market rate); the deciding factors are number of platforms, content frequency, and production needs. A firm quote is shared based on your scope.",
    },
    {
      question: "Do you handle the content shoots yourselves?",
      answer:
        "Yes. Photo and video shoots, editing, and production are part of the service. On-site shoot requirements are scheduled during planning.",
    },
    {
      question: "Do you manage ad budgets?",
      answer:
        "Organic management and content are the core of this service. If you need Meta/TikTok ad management, it's assessed in the consultation.",
    },
  ],
  relatedPosts: ["social-media-management-pricing-2026"],
};
