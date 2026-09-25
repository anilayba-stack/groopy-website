import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "what-are-core-web-vitals",
  title: "What Are Core Web Vitals? Why They Matter for Your Business",
  metaTitle: "What Are Core Web Vitals?",
  description:
    "Core Web Vitals (LCP, INP, CLS) explained: how they affect Google ranking, and why real case studies show they matter for revenue.",
  publishedAt: "2026-11-26",
  tldr: "Core Web Vitals are three metrics: loading speed (LCP, 2.5 seconds or less is considered good), interaction responsiveness (INP, 200 milliseconds or less), and visual stability (CLS, 0.1 or less), per web.dev's official documentation. Google says it uses these in its ranking systems, but also states plainly that it always prioritizes relevant content, so a perfect score doesn't rescue weak content. Per Google's own case studies, a 31% LCP improvement raised Vodafone's total sales by 8%, and a 1-second LCP improvement raised Renault's conversion rate by 13%. We measured our own site: 96/100 on mobile, LCP 2.8s, but since the site is new there's no real-user field data yet, which is itself a good illustration of the gap between lab and field data.",
  author: "Anıl Ay",
  hubService: "website-development",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/core-web-vitals-nedir.jpg",
    alt: "A person working on a laptop at a wooden desk, with a notebook and a coffee cup nearby",
  },
  faq: [
    {
      question: "How many metrics make up Core Web Vitals?",
      answer:
        "Three: LCP (Largest Contentful Paint, loading speed), INP (Interaction to Next Paint, interaction responsiveness), and CLS (Cumulative Layout Shift, visual stability). INP is the current metric that replaced FID (First Input Delay) in 2024.",
    },
    {
      question: "Does a bad Core Web Vitals score directly hurt Google ranking?",
      answer:
        "Google says it uses these metrics in its ranking systems, but also says \"Search always seeks to show the most relevant content, even if the page experience is sub-par.\" So a weak score alone isn't decisive; it's weighed together with content quality.",
    },
    {
      question: "Why does the PageSpeed Insights score differ from the Search Console report?",
      answer:
        "PageSpeed Insights shows both lab data (a one-time, controlled measurement) and, when available, field data (real experience gathered from Chrome users). The Search Console Core Web Vitals report uses field data only. Sites without enough traffic may show no field data at all — that's a data-availability gap, not an error.",
    },
    {
      question: "How can I test my own site?",
      answer:
        "Enter your site's address at pagespeed.web.dev; within 30 seconds you'll see a green/yellow/red result for LCP, INP, and CLS. If you'd like to see this alongside core SEO checks, you can also use our free SEO checker tool.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        We measured our own site with PageSpeed Insights: 96/100 on mobile,
        LCP 2.8 seconds, CLS 0. This article explains what those numbers mean
        and why they matter for your business; the last section shows how to
        test your own site.
      </p>

      <h2 id="definition">What exactly are Core Web Vitals?</h2>
      <p>
        Per Google&apos;s{" "}
        <a
          href="https://web.dev/articles/vitals"
          target="_blank"
          rel="noopener noreferrer"
        >
          official web.dev documentation
        </a>
        , Core Web Vitals consist of three metrics, and the &quot;good&quot;
        threshold for each is set at the 75th percentile of field data,
        meaning the experience 75% of users actually get:
      </p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>What it measures</th>
            <th>&quot;Good&quot; threshold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LCP (Largest Contentful Paint)</td>
            <td>How long it takes the largest content on the page to render</td>
            <td>2.5 seconds or less</td>
          </tr>
          <tr>
            <td>INP (Interaction to Next Paint)</td>
            <td>How fast the screen responds to a click or tap</td>
            <td>200 milliseconds or less</td>
          </tr>
          <tr>
            <td>CLS (Cumulative Layout Shift)</td>
            <td>How much page elements shift around while loading</td>
            <td>0.1 or less</td>
          </tr>
        </tbody>
      </table>
      <p>
        INP is relatively new: per web.dev, it was promoted from experimental
        to &quot;pending&quot; status in 2023 with the intent of retiring FID
        (First Input Delay), and became a stable Core Web Vital in 2024. So
        an up-to-date guide should reference INP, not FID.
      </p>
      <p>
        In practical terms, these three metrics map to: LCP is the answer to
        a visitor&apos;s &quot;did the page load?&quot; question; if it&apos;s
        slow, they may leave before ever seeing the page. INP is what happens
        when you tap a button and the screen responds late; a high INP makes
        a site feel &quot;stuck.&quot; CLS is content or a button shifting
        position while the page loads, sometimes causing a misclick; on a
        form or checkout page this is especially frustrating.
      </p>

      <h2 id="ranking">How much does this affect Google ranking?</h2>
      <p>
        Google Search Central&apos;s{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/page-experience"
          target="_blank"
          rel="noopener noreferrer"
        >
          page experience page
        </a>{" "}
        (last updated September 22, 2026) states plainly: &quot;Core Web
        Vitals are used by our ranking systems.&quot; But it immediately
        balances that: &quot;Google Search always seeks to show the most
        relevant content, even if the page experience is sub-par.&quot; The
        practical upshot: a perfect Core Web Vitals score doesn&apos;t
        rescue weak or irrelevant content, but a speed advantage can matter
        between two pieces of content of similar quality.
      </p>

      <h2 id="business-impact">Why it matters for business: three verified case studies</h2>
      <p>
        Independent of ranking, speed has a direct effect on user behavior.
        Three of Google&apos;s own published case studies, across different
        industries, point the same direction. This data is from 2020-2022;
        it isn&apos;t current research, but the methodology (A/B testing) and
        results are still published in Google&apos;s official case study
        archive.
      </p>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>What was done</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://web.dev/case-studies/vodafone"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vodafone
              </a>{" "}
              (2021)
            </td>
            <td>31% LCP improvement, A/B test at ~100K clicks/day</td>
            <td>+8% total sales, +15% lead-to-visit rate</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://web.dev/case-studies/renault"
                target="_blank"
                rel="noopener noreferrer"
              >
                Renault
              </a>{" "}
              (2020-2021, 10M visits)
            </td>
            <td>Measured the effect of a 1-second LCP improvement</td>
            <td>+13% conversion rate, -14ppt bounce rate</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://web.dev/case-studies/rakuten"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rakuten 24
              </a>{" "}
              (2022)
            </td>
            <td>Optimized one landing page for Core Web Vitals, ran a month-long A/B test</td>
            <td>+33% conversion rate, +53% revenue per visitor</td>
          </tr>
        </tbody>
      </table>
      <p>
        To make this concrete: per Renault&apos;s data, shaving just 1 second
        off your site&apos;s load time could mean roughly 13 more conversions
        (a purchase, a form fill, a booking) out of every 100 visitors.
        That&apos;s the result of three separate A/B tests at three different
        companies, not a guarantee for your specific site, but the direction
        is consistent.
      </p>

      <h2 id="measurement">How it&apos;s measured: lab data vs. field data</h2>
      <p>
        Per web.dev&apos;s{" "}
        <a
          href="https://web.dev/articles/lab-and-field-data-differences"
          target="_blank"
          rel="noopener noreferrer"
        >
          official explanation
        </a>
        , PageSpeed Insights combines two data sources: lab data (a one-time
        measurement Lighthouse runs in a controlled environment) and field
        data, when available (from the Chrome User Experience Report, based
        on real users&apos; experience over the last 28 days). The Search
        Console Core Web Vitals report uses field data only.
      </p>
      <p>
        Our own site is a concrete example of this gap: running
        groopyagency.com through PageSpeed Insights gives a lab score of
        96/100 on mobile and 99/100 on desktop (LCP 2.8s, CLS 0). But because
        the site doesn&apos;t yet have enough visitor traffic, no field data
        shows up at all. That&apos;s not a bug; Chrome requires a minimum
        traffic threshold to report field data. If your own site is new or
        low-traffic, seeing only lab data with an empty field-data section in
        PageSpeed Insights is normal.
      </p>
      <p>
        In practice, this distinction matters: lab data is repeatable because
        it&apos;s measured on one device/connection speed in a controlled
        setting, but it doesn&apos;t map one-to-one onto what your actual
        visitors experience. Field data is more realistic because it&apos;s
        gathered from real users across different devices, connections, and
        locations, but it stays invisible until enough traffic accumulates.
        The data used in Search Console&apos;s report and in ranking is field
        data; so for a new, low-traffic site, a good lab score is necessary
        but not, on its own, a guarantee.
      </p>

      <h2 id="misconceptions">Two common misconceptions</h2>
      <p>
        <strong>&quot;If my score is 100, I&apos;ll rank first.&quot;</strong>{" "}
        The Google quote above says the opposite: if the content isn&apos;t
        relevant, a perfect speed score won&apos;t save the ranking. Core Web
        Vitals is a potential tiebreaker between two pages of similar
        quality, not a ranking strategy on its own.
      </p>
      <p>
        <strong>&quot;I measured it once, it was good, done.&quot;</strong>{" "}
        A lab score can change the moment you add a new image, a third-party
        script (a live chat widget, an ad tag), or a design change. Field
        data is also a rolling 28-day window that shifts over time. So Core
        Web Vitals isn&apos;t a one-time check, it&apos;s an ongoing signal
        worth revisiting whenever a meaningful change goes onto the site.
      </p>

      <h2 id="test-it">Test your own site in 30 seconds</h2>
      <p>Concretely:</p>
      <ol>
        <li>
          Go to{" "}
          <a
            href="https://pagespeed.web.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            pagespeed.web.dev
          </a>{" "}
          and enter your site&apos;s address.
        </li>
        <li>
          Check the mobile result first (Google&apos;s mobile-first indexing
          makes it more decisive than desktop).
        </li>
        <li>
          Check the green/yellow/red color for LCP, INP, and CLS; if anything
          is red, make that metric your priority.
        </li>
        <li>
          If the field data section is empty, that means low traffic; rely
          on the lab data to assess the score in the meantime.
        </li>
      </ol>
      <p>
        If you&apos;d like to see this alongside core SEO checks, you can use
        our{" "}
        <Link href="/en/seo-checker">free SEO checker tool</Link>, which
        shows PageSpeed data together with SEO and GEO criteria in one
        report.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        Core Web Vitals alone isn&apos;t a ranking guarantee, but Google
        states plainly that it uses these in its ranking systems, and
        Google&apos;s own case studies show speed has a direct effect on
        sales, conversion, and bounce rate. If you&apos;re building a new
        site, a technology choice that targets these metrics from the start
        (see{" "}
        <Link href="/en/blog/wordpress-vs-nextjs">
          WordPress vs. Next.js
        </Link>
        ) costs less than optimizing after the fact; we covered the phases of
        that process separately in{" "}
        <Link href="/en/blog/how-long-does-a-website-take">
          how long does a website take to build
        </Link>
        .
      </p>
      <p>
        If you&apos;d like to review your site&apos;s Core Web Vitals as
        part of a{" "}
        <Link href="/en/services/website-development">
          website built on fast technology from the start
        </Link>
        , you can <Link href="/en/contact">book a call</Link>.
      </p>
    </>
  );
}
