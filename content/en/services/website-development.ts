import { Code2 } from "lucide-react";
import type { Service } from "../../types";

export const websiteDevelopment: Service = {
  slug: "website-development",
  tier: "primary",
  featured: true,
  navLabel: "Website & Software Development",
  title: "Website & Software Development",
  metaTitle: "Website & Software Development",
  metaDescription:
    "We build fast, findable, easy-to-maintain websites and custom software for your business. Next.js-based, Core Web Vitals-compliant, built around a measurable outcome.",
  summary:
    "A fast-loading website your customers find through Google and AI search.",
  tldr: "Groopy builds websites and internal software from scratch with Next.js. The priorities: fast loading (Core Web Vitals), a structure that's readable by search engines and AI, and clean code that's easy to hand over. No off-the-shelf themes — every project is tied to a measurable business goal.",
  icon: Code2,
  sections: [
    {
      heading: "What we do",
      body: "From a landing page to a multi-page corporate site, e-commerce, or internal business tooling — we build web products end to end. Design and development run as one process, with no translation loss in between.",
      bullets: [
        "Corporate websites and landing pages",
        "E-commerce and product catalogs",
        "Internal dashboards, booking, and application systems",
        "Rewrites and performance fixes for existing sites",
      ],
    },
    {
      heading: "Why not a template",
      body: "Off-the-shelf themes get you started fast but come back as unused code, slow loading, and limited customization. A site built from scratch ships only the code you need: it loads faster, ranks better in search, and is cheaper to grow.",
    },
    {
      heading: "Technology",
      body: "We build server-rendered pages with Next.js (App Router) and React — content arrives ready on the first response, which matters for users, search engines, and AI crawlers alike. Fonts are self-hosted, images are optimized, and there's no unnecessary JavaScript.",
      bullets: [
        "Server components by default — minimal browser load",
        "Core Web Vitals target: \"good\" on every page",
        "Accessibility: semantic HTML, keyboard navigation, contrast",
        "Version control and automated deployment (Vercel)",
      ],
    },
    {
      heading: "Handover and independence",
      body: "The code is yours. You get repository access, architecture decisions are documented, and you're free to continue with another team if you choose. A way of working that resolves lock-in rather than creating it.",
    },
  ],
  process: [
    {
      title: "Discovery",
      description:
        "We define the business goal, target audience, and success metric. What the site needs to achieve gets written down.",
    },
    {
      title: "Design",
      description:
        "Information architecture and interface. Clarity over spectacle — one primary action per page.",
    },
    {
      title: "Development",
      description:
        "Server-rendered pages, coded against a performance and accessibility budget.",
    },
    {
      title: "Launch and measurement",
      description:
        "Core Web Vitals, search visibility, and conversion are measured; the first months bring fine-tuning.",
    },
  ],
  faq: [
    {
      question: "How long does it take to build a website?",
      answer:
        "Landing pages and corporate sites typically take 3–6 weeks; e-commerce and custom software take longer depending on scope. A firm timeline is shared after the discovery call.",
    },
    {
      question: "Is Groopy an agency or a software company?",
      answer:
        "Groopy is a software company. Design and marketing services are also offered, but the core work is software development, and the way we operate — code ownership, technical documentation, measurable goals — is engineering-led.",
    },
    {
      question: "Can you migrate my site from WordPress?",
      answer:
        "Yes. Content and link structure are preserved and redirects are set up during the move; keeping search rankings intact during migration is part of the plan.",
    },
    {
      question: "Can we update the site ourselves after launch?",
      answer:
        "Content areas are built so you can manage them yourself. For structural changes, it's either a maintenance agreement with us or handing off to your own team — your choice.",
    },
  ],
  relatedPosts: ["website-cost-2026"],
};
