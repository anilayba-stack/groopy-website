import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "own-website-vs-marketplace",
  title: "Own Website or Marketplace? A Decision Guide for Product Sellers",
  metaTitle: "Own Website or Marketplace?",
  description:
    "Choosing between marketplaces like Trendyol and Hepsiburada and your own website: what you need to know about cost, control, and customer data.",
  publishedAt: "2026-12-03",
  tldr: "Both are legitimate options, not a false choice. A marketplace gives you ready-made traffic and established trust; in exchange you pay commission and shape your brand experience around the platform's rules. Per Amazon.com.tr's official pricing page, commission ranges from 6% to 20% depending on category; Turkey's Trendyol and Hepsiburada also charge category-based commission, but exact rates sit behind seller-panel logins, so check your own account. Under Article 10 of Türkiye's Law No. 6563 on the Regulation of Electronic Commerce, a service provider can't pass on personal data it collects to third parties without consent; in practice, this means you may not have direct access to a customer's contact details when you sell through a marketplace. In 2024, 600,800 businesses in Türkiye did e-commerce (Ministry of Trade). For most growing businesses, the realistic path is using both together.",
  author: "Anıl Ay",
  hubService: "website-development",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/kendi-web-sitesi-mi-pazaryeri-mi.jpg",
    alt: "A close-up of a cardboard shipping box printed with 'PO#, Item#, Description'",
  },
  faq: [
    {
      question: "How much is marketplace commission?",
      answer:
        "It depends on the category. Per Amazon.com.tr's official pricing page, examples include 6% for computers, 15.5% for clothing, and 17% for shoes and bags. Trendyol and Hepsiburada also charge category-based commission; check your own seller panel for the exact rate, since this information usually sits behind a login.",
    },
    {
      question: "Can I access a customer's information after a marketplace sale?",
      answer:
        "Under Article 10 of Law No. 6563, a service provider can't pass on personal data it collects to third parties without the individual's consent. In practice, this means you may not always have direct access to a customer's contact details after a marketplace sale; that's a meaningful limit if you want to run remarketing or a loyalty program.",
    },
    {
      question: "Can I sell on a marketplace and my own site at the same time?",
      answer:
        "Yes, and for most growing businesses that's the recommended path. Use the marketplace for new-customer acquisition and demand testing, and your own site for brand independence and customer data; you'll need to keep price and stock in sync across both.",
    },
    {
      question: "Which should I start with if I'm new?",
      answer:
        "If your budget and time are limited, starting on a marketplace with built-in traffic can be a lower-risk way to test demand. Once demand is confirmed and you have steady sales volume, investing in your own site reduces commission cost and platform dependency.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        This isn&apos;t a false choice; the marketplace side has real
        advantages. The question isn&apos;t &quot;which is better,&quot;
        it&apos;s &quot;which is right for your situation.&quot; This
        article compares both honestly, then makes concrete the hybrid
        approach that&apos;s realistic for most businesses.
      </p>

      <h2 id="short-answer">Short answer: it depends on your situation</h2>
      <table>
        <thead>
          <tr>
            <th>Your situation</th>
            <th>Option that stands out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Just starting, still testing demand</td>
            <td>Marketplace (lower risk, fast start)</td>
          </tr>
          <tr>
            <td>Steady sales volume, brand identity matters</td>
            <td>Own website (control and brand independence)</td>
          </tr>
          <tr>
            <td>Repeat contact with customers (remarketing) is a priority</td>
            <td>Own website (customer data is directly yours)</td>
          </tr>
          <tr>
            <td>Want to grow without depending on a single channel</td>
            <td>Both together</td>
          </tr>
        </tbody>
      </table>

      <h2 id="marketplace-advantages">The marketplace&apos;s real advantages</h2>
      <p>
        The biggest advantage of opening a store on a marketplace is not
        having to build traffic from zero. You join a platform with
        millions of monthly visitors and reach potential customers through
        its search, category pages, and its own ad/recommendation systems.
        The platform&apos;s established trust (payment protection, return
        policy, brand recognition) works in your favor too; a new customer
        may be more comfortable buying from a marketplace they already
        know than from a brand-new site they&apos;ve never heard of.
      </p>
      <p>
        Setup is fast too: product listing, payment infrastructure, and
        shipping integration usually come ready-made, so you can start
        selling without the{" "}
        <Link href="/en/blog/how-long-does-a-website-take">
          development timeline
        </Link>{" "}
        a website build requires.
      </p>

      <h2 id="marketplace-costs">The marketplace&apos;s cost and limits</h2>
      <p>
        These advantages come at a price: commission and lost control. Per
        Amazon.com.tr&apos;s{" "}
        <a
          href="https://satis.amazon.com.tr/ucretlendirme"
          target="_blank"
          rel="noopener noreferrer"
        >
          official pricing page
        </a>
        , sales commission ranges from 6% to 20% depending on category (for
        example, 6% for computers, 15.5% for clothing, 17% for shoes and
        bags), plus a fixed monthly membership fee of 99 TL+VAT (currently
        waived under a promotion). Trendyol and Hepsiburada similarly
        charge category-based commission, but exact rates sit behind
        seller-panel logins and we could not confirm them from a public,
        verifiable source, so check your own account.
      </p>
      <p>
        Control is limited too: your store page&apos;s design, product
        presentation, and much of the customer experience stay bound to
        the platform&apos;s template. Since price comparison happens
        directly within the platform, your differentiation can largely
        get reduced to price and review score.
      </p>

      <h2 id="commission-example">What commission does to your margin, concretely</h2>
      <p>
        Let&apos;s make this concrete: take Amazon.com.tr&apos;s stated
        15.5% commission for clothing. On a product you sell for 500 TL,
        you&apos;d pay roughly 77.50 TL in commission, leaving 422.50 TL to
        cover product cost, shipping, and any ad spend. Sell the same
        product on your own site and that 77.50 TL share drops to a
        payment-processing fee (typically in the 2-3% range, varying by
        provider); the difference goes straight to your margin. That
        difference should of course be weighed against the cost of
        generating that sale&apos;s traffic yourself (ads, SEO work); it
        isn&apos;t a guaranteed profit, but seeing the size of the
        commission in concrete terms makes the decision easier.
      </p>

      <h2 id="dependency-risk">The risk of depending on a single platform</h2>
      <p>
        If all your sales come from one marketplace, you have no backup
        channel if the platform raises its commission, changes its
        algorithm, or you run into a dispute over your account. This isn&apos;t
        a statistic, it&apos;s a structural risk: putting a variable
        outside your control at the center of your revenue. Having your
        own website doesn&apos;t eliminate this risk entirely, but it moves
        part of your sales into a channel you control.
      </p>

      <h2 id="customer-data">Who owns the customer data?</h2>
      <p>
        This is a point most sellers overlook. Under Article 10 of{" "}
        <a
          href="https://mevzuat.gov.tr/MevzuatMetin/1.5.6563.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Türkiye&apos;s Law No. 6563 on the Regulation of Electronic
          Commerce
        </a>
        , a service provider or intermediary service provider is
        responsible for storing the personal data it collects under this
        law and cannot pass it on to third parties without the individual&apos;s
        consent. In practice, this means you may not always have direct
        access to a customer&apos;s email or phone number after a
        marketplace sale; that data legally stays with the platform. If
        you want to run a promotional campaign, a loyalty program, or
        remarketing, this limit affects your revenue directly.
      </p>

      <h2 id="own-site-advantages">The advantages of your own website</h2>
      <p>
        On your own site, this limit disappears: visitor data, customer
        contact information, and sales history are directly yours. You
        build the brand experience (design, tone, product story) entirely
        yourself, and the SEO/GEO investment you make compounds over time
        into an asset independent of any platform; effort spent on a
        marketplace grows the platform&apos;s traffic, effort spent on your
        own site grows your own presence.
      </p>
      <p>
        Over the long run, commission cost disappears too; only payment
        infrastructure and hosting costs remain, which are typically lower
        than marketplace commission.
      </p>

      <h2 id="own-site-costs">The cost of your own website</h2>
      <p>
        In exchange, you have to generate the traffic yourself; there is no
        built-in visitor flow like a marketplace, so you need to invest in
        SEO, ads, or social media. Setup is also a time and budget line
        item; we covered these in detail in our{" "}
        <Link href="/en/blog/website-cost-2026">website cost</Link> and{" "}
        <Link href="/en/blog/how-long-does-a-website-take">
          completion timeline
        </Link>{" "}
        articles. You also need to set up (or have someone set up) payment
        infrastructure, shipping integration, and inventory management
        yourself.
      </p>

      <h2 id="turkey-context">The picture in Türkiye</h2>
      <p>
        Per the Ministry of Trade&apos;s{" "}
        <a
          href="https://ticaret.gov.tr/duyurular/turkiyede-e-ticaretin-gorunumu-raporu-yayinlandi-06-05-2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          report published on May 6, 2025
        </a>
        , 600,800 businesses in Türkiye did e-commerce in 2024; 78.6% of
        them were sole proprietorships, 17.8% limited companies, and 3.6%
        joint-stock companies. The report doesn&apos;t break down how many
        of these sold through marketplaces versus their own sites, so we
        could not find a verifiable source for a claim like &quot;X% of
        Turkish businesses prefer marketplaces.&quot;
      </p>

      <h2 id="product-fit">Which product type leans which way</h2>
      <p>
        Broadly popular, high-demand products (electronics accessories,
        everyday clothing, home goods) are easy to find in marketplace
        search; the buyer is often already searching the platform for that
        exact product. For custom-made, niche-brand, or service-adjacent
        products (items that require an appointment, are made to order, or
        rely on a strong brand story), the reverse tends to be true: buyers
        usually arrive by searching for the brand itself, which makes your
        own site&apos;s visibility more valuable. Whichever group your
        product falls into is a reasonable starting point for which
        channel to prioritize.
      </p>

      <h2 id="hybrid">The hybrid model: using both together</h2>
      <p>
        For most growing businesses, the realistic path is using the two
        as complements rather than substitutes: the marketplace for
        new-customer acquisition and demand testing, your own site for
        brand independence, customer data, and long-term SEO/GEO
        investment. All this requires is keeping price and stock
        consistent across both channels; inconsistent pricing erodes trust
        in either one.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        A marketplace gives you ready traffic and trust, and takes a
        commission and your customer data in return. Your own site gives
        you full control and a lasting digital asset, and requires you to
        generate traffic yourself. The right answer is usually not
        choosing between the two, but using both in the right order and
        the right proportion.
      </p>
      <p>
        If you&apos;d like to evaluate building your own website or a site
        that supports your marketplace sales, you can look at our{" "}
        <Link href="/en/services/website-development">
          website development service
        </Link>{" "}
        or <Link href="/en/contact">book a call</Link>.
      </p>
    </>
  );
}
