import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "why-isnt-my-site-on-google",
  title: "Why Isn't My Site Showing Up on Google? 8 Reasons and a Checklist",
  metaTitle: "Why Isn't My Site on Google?",
  description:
    "If your website isn't showing up on Google, it's likely one of these 8 issues. A self-diagnosis checklist to help you find the technical cause.",
  publishedAt: "2026-10-17",
  tldr: "The most common reasons a site doesn't show up on Google: the site is too new, a robots.txt block, an accidental noindex tag, password protection, never being added to Search Console, weak internal linking, and manual action penalties. The first step is always the same: search site:yourdomain.com to tell whether the site is truly out of the index or just not ranking for the term you searched.",
  author: "Anıl Ay",
  hubService: "seo-and-geo-strategy",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/google-neden-cikmiyorum.jpg",
    alt: "A woman sitting at a laptop with her hands raised, looking confused",
  },
  faq: [
    {
      question: "Is my site not on Google at all, or just not ranking for my search term?",
      answer:
        "Search 'site:yourdomain.com' on Google. If results appear, your site is indexed — the issue isn't indexing, it's ranking for that specific term. If nothing appears, the site is genuinely out of the index.",
    },
    {
      question: "How long does it take for a new site to appear on Google?",
      answer:
        "It varies, but without a technical blocker, the first pages are typically crawled and indexed within days to a few weeks. Submitting a sitemap and requesting indexing in Search Console can speed this up.",
    },
    {
      question: "How do I check my robots.txt file?",
      answer:
        "Visit yourdomain.com/robots.txt in a browser. A line like 'Disallow: /' blocks the entire site; a line targeting a specific path blocks only that section. If you find an accidental block, ask your developer to remove it.",
    },
    {
      question: "How do I know if I have a manual action (penalty)?",
      answer:
        "Check the 'Security & Manual Actions' section in the Search Console sidebar. A warning there means Google has flagged a policy violation and manually suppressed your visibility.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        The answer to &quot;why isn&apos;t my site showing up on
        Google&quot; usually comes down to one technical detail — but
        first, it&apos;s worth separating two very different problems:
        your site being <strong>completely absent from the index</strong>{" "}
        versus <strong>not ranking well for a specific search</strong>.
        This post covers 8 common causes behind both, plus a checklist you
        can run through yourself.
      </p>

      <h2 id="first-check">First check: is the site actually out of the index?</h2>
      <p>
        Go to Google and search: <code>site:yourdomain.com</code>. If
        results show up, your site is in Google&apos;s index — your
        problem isn&apos;t &quot;invisible,&quot; it&apos;s &quot;not
        ranking high enough for this specific term,&quot; which is a
        different fix (content, authority, competitive gaps) than most of
        the 8 reasons below. If nothing shows up at all, keep reading.
      </p>

      <h2 id="too-new">1. The site is too new — not crawled yet</h2>
      <p>
        Per{" "}
        <a
          href="https://support.google.com/webmasters/answer/7474347"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s own help documentation
        </a>
        , a newly published site can take time to be crawled and indexed.
        This is the most harmless but most common cause on this list —
        especially if you never added the site to Search Console, Google
        is relying entirely on its own discovery process, which can take
        weeks.
      </p>
      <p>
        The most effective way to speed this up is submitting a sitemap in
        Search Console and requesting indexing for the homepage directly —
        this signals Google instead of waiting on natural discovery. Even
        so, no exact timeline can be promised; Google decides based on its
        own crawl priority.
      </p>

      <h2 id="robots-txt">2. robots.txt is blocking the page</h2>
      <p>
        Visit <code>yourdomain.com/robots.txt</code> in a browser. A line
        like <code>Disallow: /</code>{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/robots/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          blocks the entire site from Google&apos;s crawler
        </a>{" "}
        — usually a setting left over from a staging environment that got
        forgotten during launch. One wrong line can undo months of SEO
        work.
      </p>
      <p>
        This mistake is especially common during site relaunches: blocking
        search engines on a staging environment is correct practice. But
        forgetting to remove that <code>Disallow: /</code> line when the
        site goes live is easy to miss. It&apos;s the single most common
        pattern we run into on the ground: a relaunch ships, the site goes
        live, and the one leftover staging line sits there unnoticed for
        weeks. Checking robots.txt right after launch catches this in
        minutes instead of weeks.
      </p>

      <h2 id="noindex">3. An accidental noindex tag</h2>
      <p>
        If the page&apos;s source code contains{" "}
        <code>&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code>
        ,{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google won&apos;t index the page even if it crawls it
        </a>
        . This usually comes from a CMS setting (like a &quot;hide from
        search engines&quot; checkbox left ticked). The URL Inspection tool
        in Search Console surfaces this tag immediately.
      </p>

      <h2 id="password-protection">4. Password protection or an access block</h2>
      <p>
        If the site is still behind a development password (like a
        hosting provider&apos;s default &quot;Coming Soon&quot;
        protection),{" "}
        <a
          href="https://sitechecker.pro/google-search-console/blocked-due-to-unauthorized-request/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s crawler can&apos;t authenticate and can&apos;t
          access the content at all
        </a>
        . Confirming this step was removed during launch is a simple but
        frequently skipped check.
      </p>

      <h2 id="not-in-search-console">5. Never added to Search Console</h2>
      <p>
        Not being in Search Console doesn&apos;t by itself block your site
        from Google, but it seriously slows things down —{" "}
        <a
          href="https://support.google.com/webmasters/answer/9128668"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Google&apos;s own description
        </a>{" "}
        you lose the ability to submit a sitemap or catch crawl errors
        early. Setting this up is a standard part of{" "}
        <Link href="/en/services/website-development">
          our website development process
        </Link>{" "}
        for exactly this reason.
      </p>

      <h2 id="weak-internal-links">6. Weak internal linking</h2>
      <p>
        If nothing on the site links to a page (an &quot;orphan
        page&quot;),{" "}
        <a
          href="https://ahrefs.com/blog/orphan-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google struggles to find it
        </a>{" "}
        — even if it&apos;s in the sitemap. Every important page needs at
        least one internal link from the navigation, a related-content
        block, or another
        page.
      </p>
      <p>
        This is especially common with blog posts: a post gets published
        but never gets linked from the blog archive or a related service
        page — it doesn&apos;t become fully invisible since it&apos;s
        still in the sitemap, but the importance Google assigns it (and
        how often it gets recrawled) drops significantly.
      </p>

      <h2 id="manual-action">7. Manual action or a security issue</h2>
      <p>
        If there&apos;s a warning under &quot;Security &amp; Manual
        Actions&quot; in the Search Console sidebar,{" "}
        <a
          href="https://support.google.com/webmasters/answer/9044175"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google has detected a policy violation
        </a>{" "}
        (spam links, malware, low-quality automated content) and manually
        suppressed your visibility. In this case you need to fix the
        underlying issue first, then submit a reconsideration request to
        Google.
      </p>
      <p>
        Manual actions rarely come out of nowhere — they&apos;re usually
        the result of accumulated violations like purchased spam links,
        automated or duplicate content generation, or cloaked redirects.
        The best defense is{" "}
        <Link href="/en/blog/how-to-choose-an-seo-agency">
          working with a team that doesn&apos;t recommend these kinds of shortcuts
          in the first place
        </Link>
        .
      </p>

      <h2 id="migration-error">8. A site migration or redesign error</h2>
      <p>
        During a domain change, an HTTP-to-HTTPS move, or a site redesign,
        if{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
          target="_blank"
          rel="noopener noreferrer"
        >
          301 redirects
        </a>{" "}
        from old URLs to new ones aren&apos;t set up correctly, Google
        drops the old pages from the index before fully replacing them
        with the new ones — visibility dips temporarily during this
        transition. A properly built redirect map prevents this loss.
      </p>

      <h2 id="summary-table">Summary: what to check, and who fixes it</h2>
      <table>
        <thead>
          <tr>
            <th>Reason</th>
            <th>How to check</th>
            <th>Who fixes it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Site too new</td>
            <td>Crawl history in Search Console</td>
            <td>Search Console setup + sitemap</td>
          </tr>
          <tr>
            <td>robots.txt block</td>
            <td>yourdomain.com/robots.txt</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>noindex tag</td>
            <td>Page source / URL Inspection tool</td>
            <td>Developer or CMS admin</td>
          </tr>
          <tr>
            <td>Password protection</td>
            <td>Visit the site in a logged-out browser</td>
            <td>Hosting provider / developer</td>
          </tr>
          <tr>
            <td>Missing from Search Console</td>
            <td>search.google.com/search-console</td>
            <td>Site owner or SEO team</td>
          </tr>
          <tr>
            <td>Weak internal linking</td>
            <td>Internal links report (Search Console)</td>
            <td>Content/SEO team</td>
          </tr>
          <tr>
            <td>Manual action</td>
            <td>Search Console &gt; Security &amp; Manual Actions</td>
            <td>SEO team + reconsideration request</td>
          </tr>
          <tr>
            <td>Site migration error</td>
            <td>301 check on old URLs</td>
            <td>Developer</td>
          </tr>
        </tbody>
      </table>

      <h2 id="checklist">Checklist</h2>
      <ul>
        <li>Search <code>site:yourdomain.com</code> — is it in the index at all?</li>
        <li>Does robots.txt contain a line blocking the whole site?</li>
        <li>Is there an accidental noindex tag in the page source?</li>
        <li>Is the site still behind a password/development block?</li>
        <li>Is it added to Search Console, with a sitemap submitted?</li>
        <li>Can every important page be reached by at least one internal link?</li>
        <li>Is there a warning under &quot;Security &amp; Manual Actions&quot;?</li>
        <li>Was there a recent domain/URL change with correctly set up 301 redirects?</li>
      </ul>

      <h2 id="conclusion">Still stuck?</h2>
      <p>
        These 8 items cover most cases, but some technical issues
        (JavaScript rendering problems, server errors, international
        targeting conflicts) need a deeper technical audit. Want a quick
        read on where your site stands?{" "}
        <Link href="/en/seo-checker">Try our free SEO checker</Link>, or
        for a more thorough review,{" "}
        <Link href="/en/contact">book a call</Link>. At Groopy, this kind
        of technical audit is exactly the first step in our{" "}
        <Link href="/en/services/seo-and-geo-strategy">
          SEO + GEO Strategy
        </Link>{" "}
        service.
      </p>
    </>
  );
}
