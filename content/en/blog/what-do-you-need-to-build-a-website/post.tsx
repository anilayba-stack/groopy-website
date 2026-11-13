import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "what-do-you-need-to-build-a-website",
  title: "What Do You Need to Build a Website? Domain, Hosting, and Software Basics",
  metaTitle: "What Do You Need to Build a Website?",
  description:
    "What is a domain, how do you choose hosting, and why is an SSL certificate required? Based on MDN's and Let's Encrypt's own technical definitions, we explain the three core components behind every website.",
  publishedAt: "2026-11-11",
  tldr: "Every website rests on three independent components: the domain and DNS record that translates an address into an IP address, the server (hosting) that stores its files, and the SSL/TLS certificate that encrypts the connection between browser and server. Per MDN's definition, DNS works like \"an address book for websites\"; per Let's Encrypt's own data, SSL certificates are now free and automated to obtain. Choosing these three — and the platform on top of them (off-the-shelf CMS vs. custom software) — are independent decisions, and each is costly to undo later if chosen wrong.",
  author: "Anıl Ay",
  hubService: "website-development",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/web-sitesi-kurmak-icin-neler-gerekli.jpg",
    alt: "Server cabinets connected with red and blue cables in a white-floored data center",
  },
  faq: [
    {
      question: "What's the total cost of domain, hosting, and SSL?",
      answer:
        "These three line items are a relatively small cost compared to the design/development side of a website project. For a detailed cost breakdown of the design and development side, see our How Much Does a Website Cost in 2026 guide.",
    },
    {
      question: "Should I set up my website myself?",
      answer:
        "For a simple brochure page, you can start yourself with an off-the-shelf site builder. But a misconfigured DNS record can break email delivery, a skipped SSL setup triggers a \"Not Secure\" browser warning, and the wrong hosting choice can make the site slow or crash under load. For a business-critical site, having these steps managed professionally prevents problems that surface later.",
    },
    {
      question: "Who should the domain name be registered to?",
      answer:
        "You — your business, in your name. A domain is one of the most fundamental parts of a business's digital identity; the same principle we cover in our Who Owns Your Google Ads Account guide — ownership should sit with you — applies here.",
    },
    {
      question: "Is an SSL certificate really free?",
      answer:
        "Yes. Let's Encrypt is a free, open Certificate Authority run by the nonprofit ISRG for the public's benefit, and the certificate issuance process is automated. Nearly every hosting provider can now enable it from a control panel with one click.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        When you want to build a website, you&apos;re actually facing three
        separate, independent decisions: a domain name, hosting, and a
        security certificate (SSL). On top of that, there&apos;s a platform or
        software choice. These are often sold as a single bundle, but each
        is really a distinct component you can understand — and source —
        separately.
      </p>

      <h2 id="what-is-a-domain">What is a domain, and how do you choose one?</h2>
      <p>
        Per{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Developer Network&apos;s (MDN) technical definition
        </a>
        , the
        domain in a web address represents the top-level location of the
        server you&apos;re connecting to. Browsers actually work with IP
        addresses (numbers like <code>192.0.2.172</code>); domain names
        translate those numbers into something humans can remember. The
        system that performs that translation is DNS (the Domain Name
        System) — in MDN&apos;s words, it works &quot;like an address book for
        websites&quot;: when you type a web address into your browser, the
        browser looks up the real IP address in DNS before retrieving the
        site. When choosing a domain, three things matter: how closely it
        matches your brand, how memorable it is, and which top-level
        extension (.com, .com.tr, etc.) fits your target audience.
      </p>

      <h2 id="what-is-hosting">What is hosting, and what types exist?</h2>
      <p>
        Per MDN&apos;s definition of a server, servers are computers that store
        webpages, sites, or apps; when a client wants to access a page, a
        copy of the page&apos;s code is downloaded from the server to the
        client machine and rendered by the browser. Hosting is the service
        of renting that server capacity, and it comes in a few forms:
        shared hosting (multiple sites share the same server resources —
        the most affordable but least isolated option), a VPS (virtual
        private server — resources are partitioned but dedicated), a
        dedicated server (the entire machine is allocated to one site), and
        cloud hosting (capacity that scales on demand across multiple
        physical servers). For a small business site, the right choice
        usually comes down to expected traffic and the site&apos;s complexity —
        a static page versus an application that needs a database.
      </p>

      <h2 id="why-ssl-is-required">Why is an SSL certificate required?</h2>
      <p>
        An SSL/TLS certificate encrypts the connection between browser and
        server so that transmitted data — form inputs, login credentials —
        can&apos;t be intercepted and read.{" "}
        <a
          href="https://letsencrypt.org/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let&apos;s Encrypt
        </a>
        , a free Certificate Authority run by the nonprofit ISRG for the
        public&apos;s benefit, describes itself as automated and open, with
        a stated goal of creating &quot;a more secure and privacy-respecting
        Web.&quot; Per{" "}
        <a
          href="https://developers.google.com/search/blog/2014/08/https-as-ranking-signal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s own official statement
        </a>
        , HTTPS is used as &quot;a very
        lightweight&quot; ranking signal — a point we also covered in our{" "}
        <Link href="/en/blog/7-signs-its-time-to-redesign-your-website">
          7 signs it&apos;s time to redesign your website
        </Link>{" "}
        guide. Today, nearly every hosting provider can enable a Let&apos;s
        Encrypt certificate from the control panel with one click and no
        cost — so this is no longer a cost question, it&apos;s a setup step.
      </p>

      <h2 id="platform-choice">Platform choice: off-the-shelf CMS or custom software?</h2>
      <p>
        Once domain, hosting, and SSL are settled, the next decision is
        which platform the site runs on: an off-the-shelf content
        management system like WordPress, or custom software like Next.js?
        This comes down to how much specialized functionality — a booking
        system, a custom account portal, an integration — the site needs.
        Our{" "}
        <Link href="/en/blog/wordpress-vs-nextjs">
          WordPress vs. Next.js
        </Link>{" "}
        guide compares this decision in detail across performance,
        security, and long-term flexibility.
      </p>

      <h2 id="who-should-manage-this">Who should manage this process?</h2>
      <p>
        Four independent components — domain, hosting, SSL, platform —
        means four separate places things can go wrong. A misconfigured
        DNS record can break email delivery; a skipped SSL setup shows a
        trust warning in the browser; the wrong hosting choice can crash
        the site when traffic spikes. That makes this less a one-time setup
        and more an ongoing responsibility for the life of the site. The
        difference between a site simple enough to manage yourself and{" "}
        <Link href="/en/blog/own-website-vs-marketplace">
          a business site that needs professional management
        </Link>{" "}
        usually shows up exactly in how critical these details are.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        The domain is your brand&apos;s address, hosting is the storage behind
        that address, SSL is the security layer between the two — and the
        platform choice determines what gets built on top of all three.
        Getting these four decisions right matters for much longer than
        just the site&apos;s launch day. If you&apos;d like us to manage this
        process end to end, take a look at our{" "}
        <Link href="/en/services/website-development">
          Website / Software Development service
        </Link>{" "}
        or <Link href="/en/contact">book a call</Link>.
      </p>
    </>
  );
}
