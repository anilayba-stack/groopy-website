import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "how-to-choose-an-seo-agency",
  title: "How to Choose an SEO Agency: 7 Concrete Criteria",
  metaTitle: "How to Choose an SEO Agency",
  description:
    "What to actually check before hiring an SEO agency: contract length, who owns your Search Console and Analytics access, ranking guarantees, and reporting transparency — 7 concrete criteria.",
  publishedAt: "2026-09-17",
  tldr: "A good SEO agency never guarantees a specific ranking, leaves Google Search Console and Analytics access in your hands, doesn't lock you into a long mandatory contract, and reports conversions, not just traffic. This guide covers 7 concrete criteria and the promises worth walking away from.",
  author: "Anıl Ay",
  hubService: "seo-and-geo-strategy",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/seo-ajansi-secerken.jpg",
    alt: "Two people shaking hands over contract documents at a meeting table",
  },
  faq: [
    {
      question: "Can an SEO agency guarantee rankings?",
      answer:
        "No. Google itself states plainly that no one can guarantee a #1 ranking. Be wary of any agency promising a specific position, a fixed timeline, or a 'special relationship' with Google.",
    },
    {
      question: "How long does it take to see SEO results?",
      answer:
        "Technical fixes typically show effect within weeks; ranking and traffic gains from content work usually take 2–4 months. Treat a shorter promise with suspicion.",
    },
    {
      question: "How long should an SEO contract run?",
      answer:
        "Prefer a model with scope, timeline, and price in writing that continues based on performance rather than a mandatory long-term lock-in. A good agency keeps you through results, not through a contract clause.",
    },
    {
      question: "Should I hire an SEO agency or a GEO agency?",
      answer:
        "Neither replaces the other. SEO targets classic Google rankings; GEO targets visibility inside AI answers like ChatGPT and Google AI Overviews. As of 2026, a team that plans both together has a real advantage.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Hiring an SEO agency is usually a 6-to-12-month commitment — get it
        wrong, and you lose more than the fee. You also lose the months that
        agency spent not fixing the things that actually move rankings.
        Most agency websites make nearly identical promises:
        &quot;we&apos;ll grow your organic traffic,&quot; &quot;we&apos;ll get
        you to the top of Google,&quot; &quot;proven results.&quot; None of
        those sentences protect you from a bad choice, because almost every
        agency says the same thing.
      </p>
      <p>
        What actually separates a good agency from a bad one isn&apos;t
        marketing language — it&apos;s how they work, who controls your data,
        and how long they lock you in. These criteria are especially useful
        if you&apos;re hiring an SEO agency for the first time, had a bad
        experience with one before, or are evaluating alternatives to your
        current provider. Here are 7 concrete criteria to check before or
        during that first call.
      </p>

      <h2 id="strategy-or-template">Do they propose a strategy, or sell a package?</h2>
      <p>
        If an agency quotes a price on the first call without looking at
        your site or your competitors, that&apos;s a warning sign. A serious
        SEO engagement starts with an audit of your current technical state,
        your target audience, and where competitors are outperforming you.
        That audit typically covers crawlability and indexing status, which
        pages currently hold your rankings, where competitors are ahead, and
        which content gaps are worth filling.
      </p>
      <p>
        A &quot;one package fits everyone&quot; approach means the work
        isn&apos;t actually tailored to your industry or goals. A dental
        clinic and an e-commerce store don&apos;t have the same SEO
        priorities — one lives or dies on local search and its Google
        Business Profile, the other on product-page architecture and
        technical scale at volume. An agency selling a standard package
        usually misses that distinction entirely.
      </p>
      <p>
        The question to ask is simple: &quot;What will you actually analyze
        for my business, and when do I see the first findings?&quot; An
        agency that can&apos;t describe a real discovery process is likely
        running the same template on every client — one that may not
        address your actual problem.
      </p>

      <h2 id="ranking-guarantees">Do they guarantee a specific ranking? (Red flag)</h2>
      <p>
        Google is explicit about this:{" "}
        <a
          href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;No one can guarantee a #1 ranking on Google&quot;
        </a>
        , and it warns directly against SEOs who claim to guarantee rankings,
        allege a special relationship with Google, or advertise a
        &quot;priority submit.&quot; The reason is straightforward: ranking
        involves hundreds of signals evaluated simultaneously, and those
        signals change constantly. No agency — however experienced — controls
        that system on its own.
      </p>
      <p>
        If an agency promises a #1 position for a specific keyword by a
        specific date, either they&apos;re misrepresenting how the algorithm
        works, or they&apos;re planning to use short-lived, risky tactics —
        purchased links, hidden text, automated content at scale. Those
        tactics can lift rankings briefly, but Google&apos;s spam updates
        catch sites like this on a regular cycle, and recovering from a
        penalty is often harder than starting over.
      </p>
      <p>
        A credible agency talks about process and timeline instead: technical
        fixes show effect within weeks, while ranking and organic traffic
        growth typically take 2–4 months. That&apos;s the difference between
        not guaranteeing and being vague — a good agency gives you a range
        and can explain why.
      </p>
      <p>
        It&apos;s also worth knowing that what you personally see when you
        search isn&apos;t what everyone sees. Google results are personalized
        by location, device, and search history, so you searching from your
        own phone and not seeing your site at #1 tells you very little —
        someone else might see it differently. Aggregate Search Console data
        is a far more reliable signal than any single search.
      </p>

      <h2 id="data-access">Who keeps access to Search Console and Analytics?</h2>
      <p>
        This is one of the most concrete criteria and one most comparison
        articles skip entirely: does the agency set up Google Search Console,
        Analytics, and your Business Profile under their own account, or
        under yours? It should be yours. Your search performance data and
        historical record should belong to you — switching agencies later
        shouldn&apos;t mean losing years of that history.
      </p>
      <p>
        In practice, check whether you appear as the account owner, not just
        a viewer. If the agency only grants view-level access while keeping
        actual ownership under their own account, you&apos;re at risk of losing
        years of performance history the moment the relationship ends.
      </p>
      <p>
        This distinction separates two different jobs:{" "}
        <strong>setup</strong> (opening and verifying accounts — a one-time
        task) and <strong>management</strong> (ongoing monitoring, reporting,
        and optimization). An agency that blurs the two and says &quot;we
        hold the account, we&apos;ll grant access if you ask&quot; hasn&apos;t
        actually clarified who owns your data. A good agency explains this
        distinction before you have to ask.
      </p>
      <p>
        The same logic applies to your Google Business Profile: the
        &quot;primary owner&quot; role should be yours, with the agency
        holding a &quot;manager&quot; role. The distinction matters more than
        it sounds — a primary owner can unilaterally revoke any other
        access; a manager cannot.
      </p>

      <h2 id="track-record">What does their own site and track record actually show?</h2>
      <p>
        An SEO agency&apos;s own website is the easiest evidence to check.
        If they don&apos;t apply basic technical SEO on their own site —
        fast loading, mobile-friendliness, clean title/meta structure,
        working structured data — the odds they&apos;ll apply it to yours
        are low. You don&apos;t need a special tool for this; search for
        their own service pages on Google and see how visible they actually
        are.
      </p>
      <p>
        Look carefully at their portfolio, too. A &quot;work we&apos;ve
        done&quot; page filled with stock photography, unnamed
        &quot;Client X&quot; examples, or a lone screenshot of a rising
        graph proves nothing — a graph going up could be the SEO work, or it
        could be seasonality, or an unrelated campaign. A trustworthy agency
        can walk you through at least one example: what they changed, and
        what measurable outcome it connected to, with the method disclosed.
      </p>
      <p>
        For independent verification, check their Google Business Profile
        reviews, genuine LinkedIn recommendations, or industry reference
        platforms where relevant. One negative review isn&apos;t a red flag
        on its own — but an agency with zero independent references and only
        self-published claims deserves more scrutiny.
      </p>

      <h2 id="contract-length">How long should the contract run? Watch for lock-in</h2>
      <p>
        Most SEO-agency guides talk about technical competence and reporting,
        and almost never mention contract length. But it&apos;s one of the
        clearest signals of how &quot;performance-based&quot; the engagement
        actually is.
      </p>
      <p>
        An agency pushing a mandatory long-term contract (12–24 months, with
        a penalty for early exit) is keeping you through a contract clause,
        not through results. The same goes for a proposal demanding the
        entire year&apos;s fee upfront — that&apos;s often a sign the agency
        plans to retain you by locking you in early rather than by keeping
        you satisfied over time.
      </p>
      <p>
        Prefer a model with scope, timeline, and price in writing that also
        leaves a reasonable exit path (a defined notice period, for example)
        if performance falls short. That doesn&apos;t imply the agency will
        do bad work — on the contrary, an agency confident in its own work
        usually doesn&apos;t hesitate to offer that flexibility.
      </p>

      <h2 id="traffic-vs-conversions">Do reports show traffic, or conversions?</h2>
      <p>
        Rising visitor counts can be a good sign, but they&apos;re not
        sufficient on their own. If the people arriving don&apos;t land on
        the right page with the right content, that traffic never becomes a
        business outcome. A service page&apos;s visits could double and
        still contribute
        nothing if the page has no clear form or call to action.
      </p>
      <p>
        Good reporting includes business outcomes — form submissions, quote
        requests, sales — not just &quot;rankings went up&quot; or
        &quot;traffic increased.&quot; This requires the agency to have set
        up conversion or goal tracking in Analytics, which loops directly
        back to the data-ownership question above.
      </p>
      <p>
        Ask directly: &quot;What metrics will I see in the monthly
        report?&quot; If the answer is only traffic and rankings, clarify
        upfront how conversions will be measured. Page views, social shares,
        or &quot;engagement rate&quot; can be added to a report, but on their
        own they&apos;re sometimes called vanity metrics — numbers that look good
        without proving business impact. The real question is whether those
        figures translate into measurable leads, or just a chart that looks
        good.
      </p>

      <h2 id="seo-vs-geo">SEO agency or GEO agency? (Does it matter in 2026)</h2>
      <p>
        As of 2026, this distinction can&apos;t be ignored. Classic SEO
        targets ranking in Google&apos;s search results; GEO (generative
        engine optimization, sometimes called AI search optimization)
        targets being cited as a source inside AI answers from ChatGPT,
        Perplexity, and Google AI Overviews. Classic search still sends far
        more traffic overall, but a growing share of users now get their
        answer directly from AI and never visit a site at all.
      </p>
      <p>
        In practice, GEO readiness means the site is open to AI crawlers
        (GPTBot, ClaudeBot, PerplexityBot, and similar), content is written
        answer-first (the result stated clearly, then the detail), and
        structured data (Organization, Service, Article schema) is properly
        implemented. None of this is complex or expensive, but most agencies
        still don&apos;t have it on their radar.
      </p>
      <p>
        If an agency can&apos;t give you a clear answer to &quot;what do you
        do for GEO,&quot; they&apos;re likely still operating with an
        early-2020s idea of SEO. A team that plans both together tends to
        produce a more coherent result than buying the two as separate
        services later, since the technical foundation — speed, crawlability,
        structured data — is shared ground for both.
      </p>
      <p>
        Measuring GEO is also fundamentally different from classic SEO.
        Search Console tells you which queries brought you into Google; no
        equivalent official dashboard yet shows whether ChatGPT or Perplexity
        cited your brand in an answer. The only reliable method today is
        manually checking target queries against those tools on a regular
        cadence and logging the result. If an agency can&apos;t describe how
        they track that, they may be using &quot;GEO&quot; as a marketing
        word rather than a real practice.
      </p>

      <h2 id="before-you-decide">Before you decide</h2>
      <p>
        What ties these 7 criteria together: none of them are marketing
        language — they&apos;re verifiable behaviors. When you talk to an
        agency, write down their answers to these questions, not their
        pitch:
      </p>
      <ul>
        <li>Do they propose a strategy specific to your site, or sell a standard package?</li>
        <li>Do they avoid guaranteeing a specific ranking?</li>
        <li>Do you keep ownership of Search Console and Analytics access?</li>
        <li>Does their own site and track record hold up to scrutiny?</li>
        <li>Does the contract keep you through results, not through a clause?</li>
        <li>Does reporting cover conversions, not just traffic?</li>
        <li>Do they factor GEO (AI search optimization) into the plan?</li>
      </ul>
      <p>
        No single criterion here is decisive on its own — but an agency
        that can&apos;t answer most of them clearly is signaling a broader
        transparency problem, not just one weak spot. Conversely, an agency
        that answers these comfortably, with concrete examples, has likely
        faced these questions before and built its way of working around
        them.
      </p>
      <p>
        At Groopy, this is how we run our own{" "}
        <Link href="/en/services/seo-and-geo-strategy">
          SEO + GEO Strategy
        </Link>{" "}
        service: access and data stay yours, there&apos;s no mandatory
        long-term contract, and reporting covers conversions as much as
        traffic. Want to see where your own site stands? Try our{" "}
        <Link href="/en/seo-checker">free SEO checker</Link>, or go straight
        to{" "}
        <Link href="/en/contact">booking a discovery call</Link>.
      </p>
    </>
  );
}
