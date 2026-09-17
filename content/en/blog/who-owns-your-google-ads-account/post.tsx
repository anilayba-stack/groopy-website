import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "who-owns-your-google-ads-account",
  title: "Who Owns Your Google Ads Account? A Transparency Guide",
  metaTitle: "Who Owns Your Google Ads Account?",
  description:
    "Is your Google Ads account owned by you or your agency? Google's own documentation on manager-account (MCC) mechanics and the correct setup.",
  publishedAt: "2026-10-01",
  tldr: "In Google Ads, a manager account (MCC) automatically becomes the owner of a client account it CREATES itself — but when it links to an ALREADY EXISTING account, it does not become owner by default; ownership is a separate privilege that must be explicitly granted. Google's own help documentation recommends granting ownership \"only when required.\" The correct setup: the account is opened by and stays with the client, and the agency gets manager (Standard) access — not ownership. Under the wrong setup, switching agencies can mean losing historical campaign data, conversion history, and audience lists.",
  author: "Anıl Ay",
  hubService: "google-ads-management",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/google-ads-hesabiniz-kimde.jpg",
    alt: "A hand signing a contract with a pen, next to a printed 'SIGNATURE' line",
  },
  faq: [
    {
      question: "How do I check who owns my Google Ads account?",
      answer:
        "Go to Tools and Settings > Setup > Access and security > Managers. This shows which manager account, if any, holds the 'owner' role. If you're not the owner, the account is technically under someone else's control.",
    },
    {
      question: "What happens if I switch away from the agency that opened my account?",
      answer:
        "If the account was opened in your name and the agency only ever had manager access, unlinking them is enough — campaign history, conversion data, and audience lists stay with you. If the agency opened the account under its own manager account, you can't technically 'take over' that history; you may need to start a new account from scratch.",
    },
    {
      question: "What access level should I give my agency?",
      answer:
        "Standard access is enough for most agency relationships: it allows creating and editing campaigns but not changing user access or account ownership. Reserve Admin or ownership for cases where it's genuinely needed, and only with a party you trust.",
    },
    {
      question: "Why should there be at least two admins?",
      answer:
        "Per Google's own recommendation, if an account has only one admin and that person becomes unreachable, you risk losing access to the account. Keeping at least two admins reduces that risk.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        When a business starts running Google Ads, it usually hands the
        process to an agency or freelancer — and rarely pays attention to
        how the account itself gets set up. That one unasked question at
        setup time can turn into either a simple formality or a real
        data loss, months or years later, the moment you want to switch
        agencies.
      </p>
      <p>
        This isn&apos;t about trust — it&apos;s mechanics. Google Ads&apos;
        own system automatically determines who becomes the
        &quot;owner&quot; of an account based on how it was created. Most
        business owners don&apos;t even know this distinction exists,
        because it doesn&apos;t show up in day-to-day use — campaigns
        run, reports arrive. The difference only surfaces the moment you
        decide to switch agencies. This post explains, based on
        Google&apos;s own documentation, how that mechanism actually
        works and what a correct setup looks like.
      </p>

      <h2 id="mcc-mechanics">
        How a manager account (MCC) works: who owns it, the creator or
        the linker?
      </h2>
      <p>
        Per Google Ads&apos; own{" "}
        <a
          href="https://support.google.com/google-ads/answer/7456532"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;About ownership of client accounts&quot; help page
        </a>
        , a manager account (MCC) can relate to a client account in two
        different ways, and the outcome differs each time. In the
        page&apos;s own words: &quot;If a manager creates a new account,
        they automatically become the owner of that account.&quot; By
        contrast, &quot;if a manager links an existing account, they
        don&apos;t become the owner of that newly linked client account
        by default.&quot;
      </p>
      <p>This describes two genuinely different scenarios:</p>
      <ul>
        <li>
          <strong>The agency opens the account itself:</strong> The
          agency creates a new Google Ads account on your behalf and
          adds it under its own manager account. In this case the agency
          automatically becomes the account&apos;s owner.
        </li>
        <li>
          <strong>The agency links to your existing account:</strong>{" "}
          You open your own Google Ads account and invite the agency as
          a manager. In this case the agency gets no ownership — it
          works with whatever access level you grant it.
        </li>
      </ul>
      <p>
        The same page sets a clear principle on when ownership should be
        granted at all: &quot;It&apos;s recommended that managers be made
        owners only if the manager account requires these
        privileges.&quot; In other words, Google itself treats ownership
        as an exceptional privilege, not a default. Ownership also{" "}
        <a
          href="https://support.google.com/google-ads/answer/7456532"
          target="_blank"
          rel="noopener noreferrer"
        >
          passes upward through the hierarchy
        </a>
        : if a manager account owns a client account, every manager
        account above it in the hierarchy inherits that ownership too —
        so figuring out who actually owns an account can require looking
        at the whole hierarchy, not just one relationship.
      </p>
      <p>
        A client account can have only one owner at a time, and the
        client can remove that owner independently at any point. Per{" "}
        <a
          href="https://support.google.com/google-ads/answer/6139186"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads&apos; help page on manager accounts
        </a>
        , in a link-only relationship (no ownership), the agency cannot
        change &quot;proprietary information&quot; on the account, such
        as its sign-in credentials. The practical setup works like this:
        the agency operates through a linked MCC, and your own
        account&apos;s admin decides, from Access and Security &gt;
        Managers, whether to grant that agency ownership at all.
      </p>

      <h2 id="how-to-check">How do you check ownership on your own account?</h2>
      <p>
        You don&apos;t need a technical team to find this out — it takes
        a few minutes yourself:
      </p>
      <ol>
        <li>Sign in to your Google Ads account.</li>
        <li>
          Go to the tools icon in the top right, then Setup &gt; Access
          and security.
        </li>
        <li>
          Switch to the &quot;Managers&quot; tab — this lists every
          manager account linked to yours and each one&apos;s role
          (owner or standard access).
        </li>
        <li>
          If your agency&apos;s name shows up as &quot;Owner,&quot; the
          account is technically under its control.
        </li>
      </ol>
      <p>
        If you&apos;re not the owner and want to change that, it
        generally requires the current owner (the agency) to transfer
        ownership or step down from it — you can&apos;t take it on your
        own, without the agency&apos;s agreement. This is why getting
        the setup right from the start is far easier than fixing it
        later.
      </p>

      <h2 id="access-levels">Access levels: how much does an agency actually need?</h2>
      <p>
        Google Ads&apos;{" "}
        <a
          href="https://support.google.com/google-ads/answer/9978556"
          target="_blank"
          rel="noopener noreferrer"
        >
          own documentation
        </a>{" "}
        defines five access levels. For an agency to do its day-to-day
        work, ownership isn&apos;t necessary — the &quot;Standard&quot;
        level in the table below is usually enough:
      </p>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>What it allows</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admin</td>
            <td>
              Full control: edit campaigns, manage user access, add or
              remove product links (like Analytics), accept or reject
              manager-account link requests.
            </td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>
              Create and edit campaigns, create conversions from linked
              Analytics events — but cannot manage user access or
              product links.
            </td>
          </tr>
          <tr>
            <td>Read-only</td>
            <td>
              View campaigns, use planning tools, view and run reports —
              cannot make changes.
            </td>
          </tr>
          <tr>
            <td>Email-only</td>
            <td>Receives notification emails/reports only.</td>
          </tr>
          <tr>
            <td>Billing</td>
            <td>
              View and edit billing info, manage payment methods — no
              access to campaigns.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The same Google Ads help page flags a security risk too: &quot;If
        your account has only one administrator, you may lose access to
        your tags if that user becomes unavailable.&quot; That&apos;s why
        Google recommends keeping <strong>at least two admins</strong> on
        an account — in practice, that can mean both you and someone at
        your agency hold admin, while ownership still stays with you.
      </p>

      <h2 id="real-scenario">A concrete scenario</h2>
      <p>
        Picture two businesses. The first opens its own Google account
        and invites an agency as a manager. The second works with an
        agency that says &quot;don&apos;t worry about any of this, we&apos;ll
        set it up,&quot; and the account gets created under the
        agency&apos;s own manager account. For the first year, there&apos;s
        no visible difference between the two — campaigns run the same
        way, reports arrive the same way.
      </p>
      <p>
        The difference shows up when the second business becomes
        unhappy with its agency and wants to switch. For the first
        business, switching is just a matter of removing the old agency
        and adding the new one from Access and Security — campaign
        history, conversion data, and audience lists stay put. For the
        second business, &quot;taking over&quot; the account isn&apos;t
        technically possible; if the old agency refuses to hand it over
        (or simply becomes unreachable), the only option left is
        starting a new account from zero.
      </p>

      <h2 id="ownership-vs-access">
        Ownership and access level aren&apos;t the same thing
      </h2>
      <p>
        A common point of confusion: granting an agency Admin access is
        not the same as granting it ownership. Admin access lets it
        manage campaigns and user permissions day-to-day, but it doesn&apos;t
        change who is registered as the account&apos;s &quot;owner&quot;
        — ownership is a separate privilege that has to be explicitly
        granted (and can be explicitly revoked). A business can give its
        agency Admin access for daily work and still keep ownership for
        itself; that&apos;s a different, but still safe, middle ground
        from the setup we recommend. The real risk is ownership shifting
        to the agency automatically, without ever being discussed,
        simply because of how the account happened to be created.
      </p>

      <h2 id="what-is-lost">What actually gets lost when you switch agencies?</h2>
      <p>
        If the account was created under the agency&apos;s own manager
        account and ownership was never transferred to you, you can&apos;t
        technically &quot;inherit&quot; that history when the
        relationship ends — you may need to start over with a new
        account. There&apos;s a named case that puts a real number on
        this cost: per{" "}
        <a
          href="https://ppchero.com/who-owns-your-ppc-ads-account/"
          target="_blank"
          rel="noopener noreferrer"
        >
          paid-search industry publication PPC Hero
        </a>
        , a client who regained control of their account found $1,004 in
        wasted spend just by reviewing the negative-keyword history — in
        five days. PPC Hero&apos;s direct recommendation follows from
        that experience: the client should hold Admin access, and the
        agency should get Standard access only — in the article&apos;s
        own words, <em>&quot;transparency is accountability.&quot;</em>
      </p>
      <p>
        Even when ownership isn&apos;t the issue, what&apos;s lost isn&apos;t
        just &quot;old reports&quot;: remarketing audience lists, linked
        Google Analytics/Merchant Center integrations, and accumulated
        conversion data are all tied to the account. A freshly created
        account has to rebuild that data from zero, which means
        automated bidding strategies (Smart Bidding) need extra time to
        stabilize again — exactly how many conversions that takes varies
        by account, so we won&apos;t put a specific number on it here.
      </p>
      <p>
        Worth being precise about: Google&apos;s own documentation
        doesn&apos;t contain an explicit policy sentence like
        &quot;clients should own their own account.&quot; But the
        mechanics above (self-created account = automatic ownership,
        linked account = no ownership by default) and the &quot;grant
        ownership only when required&quot; principle both point toward
        a system that defaults to favoring client-owned setups.
      </p>

      <h2 id="why-agencies-prefer">
        Why do some agencies prefer opening the account themselves?
      </h2>
      <p>
        It wouldn&apos;t be fair to say this practice is always done in
        bad faith. For some agencies, managing many client accounts
        under one manager account is simply more convenient
        operationally — they can track dozens of accounts from a single
        panel, simplify billing under their own arrangements, and reduce
        new-client onboarding to a standard template. In other cases, it
        comes from the business itself never having had a Google account
        or never wanting to deal with technical setup.
      </p>
      <p>
        But operational convenience and account ownership are two
        separate questions. An agency can get the same single-panel
        convenience by linking to an EXISTING client account under its
        own manager account — the MCC structure was built precisely to
        manage many linked accounts from one panel. So the need for
        &quot;single-panel management&quot; doesn&apos;t technically
        require the agency to create the account; ownership is a
        separate choice.
      </p>

      <h2 id="correct-setup">The correct setup: a checklist</h2>
      <p>
        When setting up a new Google Ads account, or auditing an
        existing one, check:
      </p>
      <ul>
        <li>
          <strong>The account should be opened with the business&apos;s
          own Google account</strong>, not the agency&apos;s — this
          follows directly from the mechanics above: whoever creates the
          account becomes the owner by default.
        </li>
        <li>
          <strong>The agency should get access, not ownership</strong>{" "}
          — Standard level is enough for most day-to-day campaign
          management; reserve ownership or Admin for cases where it&apos;s
          genuinely needed.
        </li>
        <li>
          <strong>At least one (ideally two) admins should be controlled
          by the business</strong> — this is Google&apos;s own
          recommendation; a single admin risks locking the account.
        </li>
        <li>
          <strong>The Access and Security &gt; Managers list should be
          reviewed regularly</strong> — access for agencies or
          freelancers no longer working on the account should be removed
          promptly; this isn&apos;t just security hygiene, it also
          limits unnecessary data sharing.
        </li>
        <li>
          <strong>Billing should be linked to the business&apos;s own
          payment method</strong>, not the agency&apos;s card or billing
          account — otherwise a payment issue on the agency&apos;s side
          can directly affect the account.
        </li>
      </ul>
      <p>
        At Groopy, our{" "}
        <Link href="/en/services/google-ads-management">
          Google Ads Management
        </Link>{" "}
        service is built on exactly this principle: the account always
        stays with the client, and we connect as a linked manager. We
        covered{" "}
        <Link href="/en/blog/how-to-choose-a-google-ads-agency">
          what to look for when choosing a Google Ads team
        </Link>{" "}
        in more depth separately — account ownership is one of the
        first items on that list.
      </p>

      <h2 id="competitive-gap">
        Why this claim usually stays a slogan
      </h2>
      <p>
        Groopy operates out of Istanbul, and when we reviewed
        Turkish-language content ranking for searches like &quot;how to
        choose a Google Ads agency,&quot; we found that some of it
        already says account ownership should stay with the client —
        that&apos;s not a claim we&apos;re making alone in that market.
        But none of the content we reviewed backed that claim with
        Google&apos;s own MCC mechanics, its access-level taxonomy, or a
        named source — the sentence &quot;the account should be
        yours&quot; was usually left standing on its own, with no
        verifiable basis attached. We haven&apos;t run the same check
        against English-language search results, so we won&apos;t claim
        this gap is universal — only that it&apos;s what we found in the
        market we operate in.
      </p>
      <p>
        That gap matters, because giving a business owner a reason to
        actually follow this advice means saying not &quot;trust
        us,&quot; but &quot;here&apos;s exactly how it works, and where
        to check it yourself.&quot; This post&apos;s contribution isn&apos;t
        a new claim — it&apos;s making an existing claim verifiable
        against Google&apos;s own documentation.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        Who owns your Google Ads account looks like a detail that
        doesn&apos;t matter — until the day you decide to switch
        agencies, when it becomes the thing that decides how that switch
        goes. Google&apos;s own system design draws a clean line: open
        the account yourself and link the agency as a manager, and
        ownership stays with you; let the agency open it, and ownership
        goes to them. Knowing that line means knowing the right question
        to ask at setup time.
      </p>
      <p>
        Learning the answer today costs nothing — checking Access and
        Security takes a few minutes. Learning it on the day you want to
        switch agencies can cost real budget, or force you to start
        over, as in PPC Hero&apos;s case example. The only difference is
        when you ask the question.
      </p>
      <p>
        Want to review your current setup? Start with your Access and
        Security &gt; Managers menu. If you&apos;d like to talk through a
        transparent setup,{" "}
        <Link href="/en/contact">book a call</Link>. Wondering{" "}
        <Link href="/en/blog/google-ads-or-seo">
          whether Google Ads works better alongside SEO or on its own
        </Link>
        ? We covered that separately too.
      </p>
    </>
  );
}
