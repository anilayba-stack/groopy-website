import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "campaign-type-selection-guide",
  title: "Search, Shopping, or Display? A Campaign Type Selection Guide",
  metaTitle: "How to Choose a Google Ads Campaign Type",
  description:
    "Choosing between Search, Shopping, Display, and Performance Max isn't about your industry — it's about your goal and what assets you have. A decision guide based on Google's own criteria.",
  publishedAt: "2026-11-11",
  tldr: "Google Ads campaign type selection isn't based on your industry — per Google's own official documentation, it's based on your marketing goal, brand strategy, and the assets you have. In practice: without a product feed (Merchant Center), Shopping and Performance Max are already off the table; for service or appointment-based businesses, Search is the default starting point; Display isn't a standalone campaign but a complement that retargets existing visitors; Performance Max kicks in once you have enough conversion data and a product feed.",
  author: "Anıl Ay",
  hubService: "google-ads-management",
  readingMinutes: 8,
  coverImage: {
    src: "/images/blog/kampanya-turu-secim-rehberi.jpg",
    alt: "Hands reviewing marketing strategy and data charts spread across a table",
  },
  faq: [
    {
      question: "Which Google Ads campaign type should I start with?",
      answer:
        "If you're a service or appointment-based business (clinic, consultancy, service provider), Search is the default starting point — users are already actively searching. If you sell physical products and have a product feed set up in Merchant Center, Shopping is worth considering.",
    },
    {
      question: "What do I need for a Google Shopping campaign?",
      answer:
        "A Google Merchant Center account and an approved product feed (with price, image, and stock status) are required. Without this infrastructure, Shopping or the product side of Performance Max simply won't work.",
    },
    {
      question: "Is Display advertising enough on its own?",
      answer:
        "No. Per Google's own definition, Display is a tool to expand your reach beyond Google Search and keep your brand top of mind — it's used as a complement that retargets people who've already visited your site, not as a first-contact lead-generation campaign.",
    },
    {
      question: "When should I move to Performance Max?",
      answer:
        "Google only shows Performance Max as an option once your objective is set to \"Sales,\" \"Leads,\" or \"Local store visits.\" In practice, as with smart bidding strategies generally, the system needs a certain volume of conversion data accumulated in the account to optimize effectively.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Businesses new to Google Ads usually ask, &quot;which campaign type
        is right for my industry?&quot; But Google&apos;s own official
        documentation says campaign type selection isn&apos;t based on your
        industry at all — it&apos;s based on your goal, your brand strategy,
        and the assets you have (especially whether you have a product
        feed). This article covers that official criterion, what each of the
        four main campaign types actually does, and how to decide for your
        own situation.
      </p>

      <h2 id="why-not-industry">Why &quot;my industry&quot; is the wrong question</h2>
      <p>
        Per{" "}
        <a
          href="https://support.google.com/google-ads/answer/2567043?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s official &quot;Choose the right campaign type&quot;
          page
        </a>
        , campaign type selection is based on &quot;marketing goals, brand
        strategy, and how much time you can invest&quot; — industry isn&apos;t
        mentioned at all. The practical consequence: two businesses in the
        same industry (say, two clinics) can land on different campaign
        types — one collecting appointments/leads should start with Search,
        while another selling a physical product (say, a medical supply
        store) should consider Shopping. The right question isn&apos;t
        &quot;what&apos;s my industry,&quot; it&apos;s &quot;what&apos;s my
        goal, and do I have an asset like a product feed?&quot;
      </p>

      <h2 id="search-default">Search: the default starting point for service businesses</h2>
      <p>
        Google defines Search campaigns as being for &quot;driving sales,
        leads, or traffic to your website, as you can show your ads to
        people actively searching for your products and services&quot; —
        meaning you show up while the user is already actively searching.
        For appointment-based, consultancy, or service-type businesses, this
        is usually the lowest entry threshold and the most directly
        measurable campaign type, giving you direct control over keywords,
        bids, and ad copy.{" "}
        <Link href="/en/blog/physiotherapist-google-ads-guide">
          Our Google Ads Guide for Physiotherapists
        </Link>{" "}
        walks through a Search setup for a service business step by step.
      </p>

      <h2 id="shopping-product-feed">Shopping: this campaign doesn&apos;t work without a product feed</h2>
      <p>
        Google explicitly defines Shopping campaigns as &quot;ideal if
        you&apos;re a retailer looking to sell your product inventory,&quot;
        and requires a Google Merchant Center account with an approved
        product feed (price, image, stock data) to run them. If that
        infrastructure isn&apos;t set up, Shopping isn&apos;t even an option
        — for a business that sells a service, this campaign type is off the
        table from the start, no debate needed.
      </p>

      <h2 id="display-complement">Display: a complement, not a standalone</h2>
      <p>
        In Google&apos;s own words, Display campaigns are &quot;a great way
        to expand your reach and stay top of mind with an audience beyond
        just Google Search&quot; — meaning the primary purpose isn&apos;t
        first-contact lead generation, it&apos;s expanding reach and keeping
        your brand visible. The most common and effective use is retargeting:
        reaching people who already visited your site but haven&apos;t
        converted yet. It&apos;s rarely the right call for Display to be a
        business&apos;s only campaign; it&apos;s usually best thought of as
        a secondary budget line that complements Search.
      </p>

      <h2 id="performance-max">Performance Max: when it kicks in</h2>
      <p>
        Per a note on the same Google page, Performance Max appears as an
        option once your objective is set to &quot;Sales,&quot;
        &quot;Leads,&quot; or &quot;Local store visits and promotions&quot; —
        meaning you need a defined conversion goal first. In practice, this
        means Performance Max, like other smart bidding strategies, needs a
        certain volume of conversion data in the account to optimize
        effectively — the same logic we covered for smart bidding strategies
        in{" "}
        <Link href="/en/blog/google-ads-budget-guide">
          How Much Should Your Google Ads Budget Be?
        </Link>
        . For a newly opened account with no conversion history yet, it&apos;s
        more realistic to build up data with Search first rather than moving
        to Performance Max early.
      </p>

      <h2 id="decision-tree">A decision tree for your situation</h2>
      <p>
        You can narrow down your own situation quickly with four questions:
      </p>
      <ol>
        <li>
          <strong>Do you have an approved product feed in Google Merchant
          Center?</strong> If not, the product side of Shopping and
          Performance Max is already closed — continue with Search.
        </li>
        <li>
          <strong>Are users actively searching for you, or do they not know
          your brand yet?</strong> Active search → Search. Brand
          awareness/recall goal → Display is worth considering.
        </li>
        <li>
          <strong>Does your account have enough conversion history?</strong>{" "}
          If not, start with Search, where you have more manual control,
          rather than an automatically-optimizing type like Performance Max.
        </li>
        <li>
          <strong>Have you built up an audience of visitors who didn&apos;t
          convert?</strong> If so, bring in Display for retargeting as an
          addition to Search, not a replacement for it.
        </li>
      </ol>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        Campaign type selection isn&apos;t based on your industry — per
        Google&apos;s own criteria, it&apos;s based on your goal and the
        assets you have (product feed, conversion history). Without a
        product feed, Shopping/Performance Max isn&apos;t on the table yet;
        for service businesses, the default starting point is Search;
        Display is a complement, not a standalone campaign. If you&apos;d
        like us to set up the right campaign type and budget together, take
        a look at our{" "}
        <Link href="/en/services/google-ads-management">
          Google Ads Management service
        </Link>{" "}
        or <Link href="/en/contact">book a call</Link>.
      </p>
    </>
  );
}
