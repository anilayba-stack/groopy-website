import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "physiotherapist-google-ads-guide",
  title: "Google Ads Guide for Physiotherapists: From Campaign Setup to Bid Strategy",
  metaTitle: "Google Ads Guide for Physiotherapists",
  description:
    "How to set up a Google Ads campaign for a physiotherapy clinic — certification, campaign structure, conversion tracking, and bid strategy, sourced from Google.",
  publishedAt: "2026-10-22",
  tldr: "Physiotherapy isn't a healthcare category that requires certification on Google Ads — so setup isn't fundamentally different from most local businesses. But two details matter: Google's Local Services Ads program covers physiotherapists but isn't yet available in Turkey, so Search campaigns should get the priority; and health is one of Google's \"sensitive interest categories,\" which bans condition-based targeting while leaving general site-visitor remarketing unaffected. On bid strategy, Google's own guidance is that Target CPA needs at least 30 conversions in 30 days to evaluate reliably — new or low-volume accounts should start with manual bidding.",
  author: "Anıl Ay",
  hubService: "google-ads-management",
  readingMinutes: 12,
  coverImage: {
    src: "/images/blog/fizyoterapistler-google-ads-rehberi.jpg",
    alt: "An abstract collage of blue-toned performance charts and bar graphs",
  },
  faq: [
    {
      question: "Do I need Google's approval or certification to advertise physiotherapy?",
      answer:
        "No. Physiotherapy doesn't appear among the categories Google Ads' healthcare and medicines policy requires certification for (online pharmacies, addiction treatment services, health insurance, etc.). Individual ads can still be disapproved if they violate general healthcare ad-content rules, like unsubstantiated treatment claims.",
    },
    {
      question: "Can I use Google's Local Services Ads?",
      answer:
        "Not yet. The LSA program covers physical therapists among many other categories in the US, Canada, the UK, and select EU countries, but Turkey isn't among them. That means Search campaigns are the primary channel for physiotherapy clinics in Turkey today.",
    },
    {
      question: "Can I retarget visitors who didn't book an appointment?",
      answer:
        "Remarketing to a general visitor list is fine. But under Google's \"health\" sensitive-interest-category policy, segmenting and targeting users by a specific health condition or diagnosis is banned — that distinction matters when you set up your audience lists.",
    },
    {
      question: "When should I switch my campaign to automated (Smart) bidding?",
      answer:
        "Per Google's own guidance, reliably evaluating Target CPA requires at least 30 conversions in the last 30 days. With a new account that doesn't have that data yet, starting with manual bidding or Maximize Clicks is more realistic.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        In our &quot;Digital Marketing Guide for Physiotherapists,&quot; we showed
        that Google Ads is a relatively efficient category for
        physiotherapy within the healthcare vertical. This post isn&apos;t a
        continuation of that overview — it&apos;s a companion to it: how to
        actually <em>set up</em> the campaign, from whether you need
        certification to how to structure bid strategy. We won&apos;t repeat
        the same cost figures here; instead we&apos;ll focus on concrete
        setup steps grounded in Google&apos;s own documentation.
      </p>
      <p>
        Most Turkish-language content for searches like &quot;how to set up
        a Google Ads campaign for physiotherapy&quot; stays at the level of
        general marketing advice — none of it addresses which
        categories require certification, whether Local Services Ads is
        available in Turkey, or what to watch for when remarketing with
        health-related data. This post answers those three concrete
        setup questions using Google&apos;s own sources.
      </p>

      <h2 id="certification">Do you need certification?</h2>
      <p>
        Per Google Ads&apos;{" "}
        <a
          href="https://support.google.com/adspolicy/answer/176031"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;Healthcare and medicines&quot; advertising policy
        </a>
        , certain healthcare categories (online pharmacies, telemedicine
        services, addiction treatment centers, drug manufacturers,
        health insurance providers, clinical trial recruitment) require
        certification before you can advertise. Physiotherapy/physical
        therapy isn&apos;t on that list — meaning a physiotherapy clinic can
        advertise without an extra approval process, like most local
        service businesses.
      </p>
      <p>
        One exception: even without certification, individual ads can
        still be disapproved under Google&apos;s general healthcare
        ad-content rules — unsubstantiated treatment claims or
        exaggerated outcome promises, for example. If that happens, you
        can appeal through Google&apos;s{" "}
        <a
          href="https://support.google.com/google-ads/troubleshooter/6099627"
          target="_blank"
          rel="noopener noreferrer"
        >
          healthcare-related advertising application process
        </a>
        .
      </p>
      <p>
        One more thing to resolve before launching the campaign: whose
        name the account gets opened under. As we detailed in{" "}
        <Link href="/en/blog/who-owns-your-google-ads-account">
          our post on Google Ads account ownership
        </Link>
        , opening the account under your own clinic&apos;s name protects
        your historical data if you ever switch agencies.
      </p>

      <h2 id="campaign-structure">
        Campaign structure: why Search campaigns come first
      </h2>
      <p>
        Per Google&apos;s own{" "}
        <a
          href="https://support.google.com/localservices/answer/6224841"
          target="_blank"
          rel="noopener noreferrer"
        >
          Local Services Ads category list
        </a>
        , &quot;Physical therapist&quot; is included — LSA is the format that
        appears at the very top of search results with a &quot;Google
        Guaranteed&quot; badge, billed per lead rather than per click. But
        this program is currently only available in the US, Canada, the
        UK, and a handful of EU countries (Germany, France, Spain,
        among others) — <strong>Turkey isn&apos;t one of them</strong>. This
        is a practical constraint almost never mentioned in Turkish
        physiotherapy marketing content: for a clinic in Turkey, LSA
        isn&apos;t an option, so budget and attention should go directly to{" "}
        <strong>Search campaigns</strong>.
      </p>
      <p>Setting up that campaign structure in practice comes down to:</p>
      <ul>
        <li>
          A separate ad group for each treatment area (orthopedic
          rehabilitation, sports injuries, neurological rehabilitation,
          etc.); each group should contain only keywords specific to
          that area rather than mixing them into one generic
          &quot;physiotherapy&quot; group.
        </li>
        <li>
          Start with phrase match or exact match rather than broad
          match — this limits budget going to irrelevant searches, and
          you can expand over time based on the search terms report.
        </li>
        <li>
          Regularly add unrelated searches (&quot;physiotherapy training,&quot;
          &quot;physiotherapist salary,&quot; &quot;physiotherapy program admission
          scores&quot;) to your negative-keyword list — reviewing the search
          terms report weekly keeps this list current.
        </li>
        <li>
          Make sure each ad group routes to a landing page that matches
          its keywords directly — routing to a generic homepage lowers
          conversion rate.
        </li>
      </ul>
      <p>
        Standard Search campaigns are also a more controllable choice
        than automated formats like Performance Max for a local service
        with a clear conversion goal like a phone call.
      </p>

      <h2 id="ad-extensions">Ad extensions: call, location, sitelink</h2>
      <p>
        Per Google Ads&apos;{" "}
        <a
          href="https://support.google.com/google-ads/answer/1704420"
          target="_blank"
          rel="noopener noreferrer"
        >
          own documentation
        </a>
        , three asset types are especially valuable for a local
        physiotherapy clinic:
      </p>
      <ul>
        <li>
          <strong>Call assets:</strong> Let a mobile user tap the ad to
          start a call directly — much less friction than navigating to
          the site to find a phone number.
        </li>
        <li>
          <strong>Location assets:</strong> Show address, directions,
          and distance to the clinic alongside the ad — a
          trust-building signal for a local-intent search.
        </li>
        <li>
          <strong>Sitelink assets:</strong> Add extra links below the ad
          like &quot;Book Appointment,&quot; &quot;Our Treatment Areas,&quot; or &quot;Pricing&quot;;
          can be added at the account, campaign, ad group, or ad level.
        </li>
      </ul>
      <p>
        An ad using all three of these takes up more screen space than
        a plain text ad and gives a patient multiple ways to act (call,
        get directions, visit the site) — which typically contributes
        to a higher click-through rate. Google can auto-generate some
        assets (especially call and sitelink) from signals on your
        site, but adding them manually lets you control the content.
      </p>

      <h2 id="conversion-tracking">
        Conversion tracking: phone calls and form fills
      </h2>
      <p>
        For a physiotherapy clinic, the real conversion is usually a
        phone call or a booking form submission. Google Ads supports
        both:
      </p>
      <ul>
        <li>
          <strong>Calls from ads:</strong> Per{" "}
          <a
            href="https://support.google.com/google-ads/answer/6095882"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s own guide
          </a>
          , you can set a minimum call duration to count as a
          conversion, or use AI-based call-quality analysis.
        </li>
        <li>
          <strong>Calls to a number on your site:</strong> Google can
          assign a call-tracking number to{" "}
          <a
            href="https://support.google.com/google-ads/answer/6095883"
            target="_blank"
            rel="noopener noreferrer"
          >
            track calls made to the number on your website
          </a>
          .
        </li>
        <li>
          <strong>Form submissions:</strong> Booking form submissions
          can be tracked with standard conversion tracking;{" "}
          <a
            href="https://support.google.com/google-ads/answer/11021502"
            target="_blank"
            rel="noopener noreferrer"
          >
            enhanced conversions
          </a>{" "}
          can improve tracking accuracy by using hashed form data
          (email/phone).
        </li>
      </ul>
      <p>
        Running a campaign without conversion tracking hides which
        keyword actually turns into an appointment — one of the most
        common obstacles to budget optimization. In practice, this can
        mean spend drifts toward keywords with high click volume rather
        than high conversion rates; two campaigns can have the same
        number of clicks while one never converts into a single
        appointment. Without conversion tracking, that difference stays
        invisible.
      </p>

      <h2 id="remarketing">Remarketing: general visitors yes, health conditions no</h2>
      <p>
        Retargeting site visitors who left without booking is generally
        cheaper than buying a new click. But there&apos;s a health-vertical
        boundary here: per Google&apos;s{" "}
        <a
          href="https://support.google.com/adspolicy/answer/16701855"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;Health in personalized advertising&quot;
        </a>{" "}
        policy, health is classified as a &quot;sensitive interest
        category,&quot; and audience lists that segment users by a specific
        health condition, diagnosis, or treatment (e.g., &quot;users with a
        herniated disc&quot;) — along with using Customer Match for this
        purpose — are banned.
      </p>
      <p>
        This doesn&apos;t stop you from reaching <strong>everyone</strong>{" "}
        who visits your site with a general remarketing list — the
        policy targets condition/diagnosis-based segmentation, not
        general visitor remarketing. Still, as a cautious approach, we
        recommend building audience lists on a general site-visitor
        basis rather than by treatment area (e.g., &quot;visitors to the
        knee page&quot;) — this both strengthens policy compliance and
        simplifies setup.
      </p>
      <p>
        Setup itself is simple: place Google Ads&apos; tag site-wide, create
        a remarketing list from Audience Manager, then attach the list
        to your Search campaigns to adjust bids or show a tailored
        message to those users. A new list needs to reach a certain
        minimum size before it can be used to target search ads — until
        then it stays inactive automatically, with no action needed on
        your end.
      </p>

      <h2 id="ad-copy">Ad copy: physical therapy&apos;s real CTR</h2>
      <p>
        Per the same LocaliQ 2025 healthcare benchmark report — a data
        point we didn&apos;t use in our previous post — physical therapy&apos;s
        average click-through rate (CTR) is <strong>6.61%</strong>. This
        is a signal of how relevant and compelling your ad copy is; a
        CTR below the vertical average usually points to a weak
        keyword-to-ad match.
      </p>
      <p>
        Per Google&apos;s own{" "}
        <a
          href="https://support.google.com/google-ads/answer/6167122"
          target="_blank"
          rel="noopener noreferrer"
        >
          guide to creating effective Search ads
        </a>
        , strong ad copy has a clear call to action (&quot;Book an
        appointment today&quot;), stays consistent with the landing page,
        and includes concrete information (a service or offer) where
        relevant. We couldn&apos;t find a reliable, healthcare-specific
        statistic on how including a price or phone number affects CTR
        — so rather than force a number, we&apos;re relying on Google&apos;s
        general guidance here.
      </p>
      <p>
        In practice, this translates to: one headline naming the
        treatment area clearly (&quot;Knee Physiotherapy — [Clinic Name]&quot;),
        another carrying a call to action (&quot;Book Online Today&quot;), and a
        description line highlighting a concrete differentiator
        (specialist staff, a specific certification, convenient
        location). Making sure the claims in your ad copy are matched
        on the treatment page itself also reduces the risk of a
        disapproval for unsubstantiated treatment claims.
      </p>

      <h2 id="common-issue">A common issue: ad disapproval</h2>
      <p>
        Google Ads community forums show physiotherapist accounts
        reporting they can&apos;t run ads related to physical therapy. This
        usually isn&apos;t a category ban — as shown above, physiotherapy
        doesn&apos;t require certification — it&apos;s more often that the ad
        copy or landing page trips the general healthcare ad-content
        rules: unsubstantiated treatment claims, exaggerated outcome
        promises, or vague &quot;guaranteed recovery&quot;-style language.
        Reviewing your copy and landing page against that lens first is
        usually faster than going straight to a certification
        application.
      </p>

      <h2 id="bid-strategy">Bid strategy: when to automate</h2>
      <p>
        Google&apos;s own{" "}
        <a
          href="https://support.google.com/google-ads/answer/6268632"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation on Target CPA bidding
        </a>{" "}
        recommends measuring performance over a period with at least 30
        conversions in the last 30 days to evaluate it reliably. This
        has a real practical consequence for a new or low-volume
        physiotherapy clinic: switching to automated strategies like
        Target CPA before that much conversion data has accumulated may
        not produce reliable results, because the algorithm doesn&apos;t yet
        have enough data to learn from.
      </p>
      <p>
        Practical recommendation: start a new account with manual
        bidding or &quot;Maximize Clicks,&quot; set up conversion tracking as
        described above, and consider switching to Target CPA once
        you&apos;re approaching 30 conversions in a 30-day window. Switching
        to automated bidding before hitting that threshold can waste
        budget during the algorithm&apos;s learning phase.
      </p>
      <p>
        This matters especially for a new clinic testing with a limited
        starting budget — the instinct to think &quot;automated bidding is
        smarter, let&apos;s switch immediately&quot; can backfire when applied
        before enough data exists. Data gathered during the manual
        period (which keywords convert, what times of day calls come
        in) both makes a later switch to automated bidding easier and
        clarifies when that switch actually makes sense.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        Setting up a Google Ads campaign for physiotherapy isn&apos;t
        fundamentally different from most local service businesses —
        certification isn&apos;t required, and standard Search campaign
        structure works. But two details make a real difference: LSA
        not yet being available in Turkey clarifies where budget should
        go, and health&apos;s sensitive-interest-category status means
        remarketing needs to be set up carefully. A campaign built
        without knowing these details either wastes time on the wrong
        platform or carries a policy-violation risk.
      </p>
      <p>
        The rest of the setup — ad group structure, conversion
        tracking, ad extensions, and bid strategy — doesn&apos;t hide much
        of a secret once applied with discipline; the real difference
        shows up in what order these steps are taken and with how much
        data. A campaign launched without conversion tracking, or an
        account switched to automated bidding before data accumulates,
        can produce far less from the same budget.
      </p>
      <p>
        Curious about your physiotherapy clinic&apos;s broader digital
        marketing strategy — website, SEO/GEO, and social media
        included? See our{" "}
        <Link href="/en/blog/physiotherapist-digital-marketing-guide">
          Digital Marketing Guide for Physiotherapists
        </Link>
        . Want help setting up your campaign?{" "}
        <Link href="/en/contact">Book a call</Link>. At Groopy, our{" "}
        <Link href="/en/services/google-ads-management">
          Google Ads Management
        </Link>{" "}
        service handles this entire setup.
      </p>
    </>
  );
}
