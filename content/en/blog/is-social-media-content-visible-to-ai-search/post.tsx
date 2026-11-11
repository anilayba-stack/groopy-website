import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "is-social-media-content-visible-to-ai-search",
  title: "Is Social Media Content Visible to AI Search?",
  metaTitle: "Does ChatGPT See Your Social Media Posts?",
  description:
    "We checked Instagram, TikTok, and LinkedIn's own robots.txt files: all three block ChatGPT, Claude, and Perplexity's crawlers almost entirely. The one real exception, and what it means in practice.",
  publishedAt: "2026-11-11",
  tldr: "No, mostly not. Instagram and TikTok's own official robots.txt files fully block nearly every major AI crawler, including GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, and Google-Extended — these bots can't read content on either platform for training or for live search. The one narrow exception is LinkedIn: it specifically allows OAI-SearchBot (ChatGPT) and Claude-SearchBot access to public profile pages (/public-profile/). Practical takeaway: social media content isn't directly cited as an AI search source — its GEO contribution is indirect, through brand consistency and traffic.",
  author: "Anıl Ay",
  hubService: "social-media-management",
  readingMinutes: 8,
  coverImage: {
    src: "/images/blog/sosyal-medya-yapay-zeka-aramalarinda-gorunur-mu.jpg",
    alt: "A smartphone screen showing the Instagram, Pinterest, Twitter, and Snapchat app icons",
  },
  faq: [
    {
      question: "Do my Instagram posts show up in ChatGPT?",
      answer:
        "No. Instagram's own robots.txt file separately and fully blocks both GPTBot (ChatGPT's training crawler) and OAI-SearchBot (ChatGPT's live search crawler). ChatGPT can't read your Instagram posts for training or for live search.",
    },
    {
      question: "Are TikTok videos visible in AI search?",
      answer:
        "No. TikTok's robots.txt explicitly blocks nearly every known AI crawler, including GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, Perplexity-User, and Google-Extended.",
    },
    {
      question: "Why is LinkedIn different?",
      answer:
        "LinkedIn's robots.txt also blocks AI crawlers generally, but has one narrow exception: OAI-SearchBot and Claude-SearchBot are specifically allowed to access public profile pages (/public-profile/). That means ChatGPT's and Claude's live search features can surface a LinkedIn profile page, but not feed/post content.",
    },
    {
      question: "Does social media do nothing at all for GEO?",
      answer:
        "It's not a direct citation channel, but it does contribute indirectly: consistent brand presence, traffic to your website, and (for LinkedIn) a complete company page all support your overall digital consistency — which feeds the GEO work actually done on your website and Google Business Profile.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Posting consistent, quality content on social media is a good
        investment for your brand — but does that content actually get
        cited as a source when ChatGPT, Claude, or Perplexity answer a
        question? Rather than assume, we checked Instagram&apos;s,
        TikTok&apos;s, and LinkedIn&apos;s own official robots.txt files.
        Short answer: no, mostly not — and there&apos;s exactly one narrow
        exception.
      </p>

      <h2 id="instagram-tiktok">What Instagram and TikTok&apos;s own robots.txt says</h2>
      <p>
        <a
          href="https://www.instagram.com/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram&apos;s published robots.txt file
        </a>{" "}
        has separate lines for GPTBot, ClaudeBot, PerplexityBot, and
        Google-Extended, and they all resolve the same way:{" "}
        <code>Disallow: /</code> — the entire site is closed to these
        crawlers.{" "}
        <a
          href="https://www.tiktok.com/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok&apos;s robots.txt
        </a>{" "}
        blocks an even longer list: GPTBot, OAI-SearchBot, ClaudeBot,
        Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User,
        Google-Extended, Applebot-Extended, and CCBot are all set to{" "}
        <code>Disallow: /</code>, covering nearly every known AI crawler.
        In practice, this means these bots can access neither platform&apos;s
        content for training nor for ChatGPT&apos;s, Claude&apos;s, or
        Perplexity&apos;s live search features.
      </p>

      <h2 id="linkedin-exception">LinkedIn&apos;s narrow exception</h2>
      <p>
        <a
          href="https://www.linkedin.com/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn&apos;s robots.txt
        </a>{" "}
        also blocks GPTBot, ClaudeBot, PerplexityBot, and Google-Extended
        broadly with <code>Disallow: /</code> — but two crawlers get a
        different rule: OAI-SearchBot (ChatGPT&apos;s live search crawler)
        and Claude-SearchBot (Claude&apos;s live search crawler) only
        disallow the <code>/public-profile/</code> path — meaning there&apos;s
        a specific access allowance for public profile pages. In practice,
        this means ChatGPT&apos;s and Claude&apos;s live search features can
        surface a LinkedIn profile (personal or company page), but not the
        content in the feed/post stream.
      </p>

      <h2 id="indirect-contribution">So does social media contribute nothing to GEO?</h2>
      <p>
        It isn&apos;t a direct citation channel, but it isn&apos;t entirely
        irrelevant either. What AI tools know about your brand comes from two
        places:{" "}
        <Link href="/en/blog/what-is-geo">frozen training data and live web search</Link>
        . Social media posts themselves don&apos;t feed either channel
        directly, but the traffic and brand consistency that social media
        generates indirectly strengthens your website and Google Business
        Profile — and that&apos;s where the actual GEO work happens.{" "}
        <Link href="/en/blog/how-to-make-your-brand-visible-in-chatgpt">
          How to Make Your Brand Visible in ChatGPT and AI Search
        </Link>{" "}
        covers that website-centered approach in detail.
      </p>

      <h2 id="what-to-do">What to do in practice</h2>
      <p>
        The practical takeaway isn&apos;t to abandon social media — it&apos;s
        to expect the right thing from it. Use Instagram and TikTok as brand
        awareness and website-traffic tools, not as AI search sources. On
        LinkedIn, keeping your company page and profiles complete and
        current means you&apos;re actually making use of a narrow but real
        access channel. Keep investing your actual GEO effort — structured
        data, an AI-crawler-friendly robots.txt, answer-first content — on
        your own website.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        Instagram and TikTok block nearly every AI crawler in their own
        robots.txt files; LinkedIn grants only a narrow allowance to
        ChatGPT&apos;s and Claude&apos;s live search bots on public profile
        pages. That means your social media content isn&apos;t directly
        cited in AI search results — its contribution is indirect. If
        you&apos;d like us to build your social media strategy around this
        reality, take a look at our{" "}
        <Link href="/en/services/social-media-management">
          Social Media Management service
        </Link>{" "}
        or <Link href="/en/contact">book a call</Link>.
      </p>
    </>
  );
}
