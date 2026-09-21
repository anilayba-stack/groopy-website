import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "agency-vs-freelancer-vs-in-house",
  title:
    "Agency, Freelancer, or In-House? Choosing the Right Social Media Model",
  metaTitle: "Agency, Freelancer, or In-House? Social Media",
  description:
    "Should you hand social media to an agency, a freelancer, or an in-house hire? Cost structure, risks, and a decision guide for the Turkish market.",
  publishedAt: "2026-11-05",
  tldr: "The right model depends on your content volume, the range of skills you need, and how much time you can spend managing it. In-house gives you the most control, but even a minimum-wage employee costs an employer 40,214 TL a month in Türkiye in 2026 (Ministry of Labour and Social Security), and expecting strategy, design, and video skills from one person is unrealistic. A freelancer can be flexible and economical, but continuity rests on one person. An agency or team model offers scope and backup in exchange for some control. Whichever you choose, your business should own the accounts, and responsibility for ad disclosure (Ministry of Trade) stays with the advertiser regardless of the model.",
  author: "Anıl Ay",
  hubService: "social-media-management",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/ajans-freelancer-in-house.jpg",
    alt: "A team of three working with laptops and notebooks around a wooden table",
  },
  faq: [
    {
      question: "Is an agency or a freelancer better for social media?",
      answer:
        "It depends on scope and how much continuity matters to you. A freelancer can be enough for a single platform and a small, clearly defined job; if you need several platforms, photo and video production, and regular reporting, a team model is safer. Either way, your business should own the accounts.",
    },
    {
      question: "What is the minimum cost of hiring an in-house social media employee?",
      answer:
        "According to the Ministry of Labour and Social Security's 2026 calculation, a minimum-wage employee costs the employer 40,214.03 TL a month in total (with the 2-point premium discount) or 40,874.63 TL (without it). That is a floor. We give no figure for an experienced specialist because we could not find a verifiable market range, and equipment and software come on top.",
    },
    {
      question: "If I give my accounts to an agency or freelancer, do I lose ownership?",
      answer:
        "Not if it is set up correctly. Per Meta's developer documentation, the business remains the owner of a Facebook Page; an agency works with a separate access role and the owner can remove that access. For this, pages and ad accounts must sit under your business's Business Manager, not a personal account.",
    },
    {
      question: "Should a freelancer in Türkiye send an invoice or a receipt?",
      answer:
        "It depends on their tax status. Self-employed professionals (serbest meslek erbabı) are required to issue an e-Serbest Meslek Makbuzu (per the Revenue Administration); those working under commercial income issue invoices. Confirm which applies with your accountant, and do not pay without documentation.",
    },
    {
      question: "Can the models be combined?",
      answer:
        "Yes, and it is common. For example, one person in-house owns brand voice and approvals while production and reporting run with an external team. In this setup, it is important to separate responsibilities and account access in writing.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        This question is usually asked as &quot;which is cheaper?&quot;, but
        the more useful question is who will do the work, and what happens
        when that person is out for a week. Running social media in-house,
        handing it to an independent specialist, or working with a team can
        each be right; which one is right depends on your content volume, the
        range of skills you need, and the time you can spend managing it.
      </p>
      <p>
        We covered the price side separately in{" "}
        <Link href="/en/blog/social-media-management-pricing-2026">
          social media management pricing
        </Link>
        . This article focuses on the model rather than the price: what each
        one solves, what it doesn&apos;t, and the rules that hold whichever you
        choose. It is written for the Turkish market.
      </p>

      <h2 id="short-answer">Short answer: which model fits your situation?</h2>
      <p>
        The table below is a decision framework, not a rule. More than one row
        may apply to a single business.
      </p>
      <table>
        <thead>
          <tr>
            <th>Your situation</th>
            <th>Model that stands out</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              One platform, low content volume; someone in-house knows the
              brand and has time
            </td>
            <td>In-house</td>
            <td>Control and brand knowledge are already inside</td>
          </tr>
          <tr>
            <td>
              Limited budget, a clearly defined small job (e.g., a weekly
              post plan and publishing)
            </td>
            <td>Freelancer</td>
            <td>Flexibility and direct communication; a continuity plan is a must</td>
          </tr>
          <tr>
            <td>
              Several platforms, photo and video production, and regular
              reporting are needed
            </td>
            <td>Agency / team</td>
            <td>Scope and backup under one roof</td>
          </tr>
          <tr>
            <td>Brand voice is managed centrally but production load is high</td>
            <td>Hybrid (core in-house, production outside)</td>
            <td>Decision authority stays in-house, workforce stays flexible</td>
          </tr>
          <tr>
            <td>Campaign-based or seasonal peaks</td>
            <td>Freelancer or team, project-based</td>
            <td>Capacity is added without creating a fixed cost</td>
          </tr>
        </tbody>
      </table>

      <h2 id="comparison">The three models compared</h2>
      <p>
        The comparison below reflects general tendencies. For any individual
        person or company the opposite can hold, so question each criterion
        separately for the candidate or quote in front of you.
      </p>
      <table>
        <thead>
          <tr>
            <th>Criterion</th>
            <th>In-house</th>
            <th>Freelancer</th>
            <th>Agency / team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cost structure</td>
            <td>Fixed salary, social security, equipment, and software</td>
            <td>Project or monthly service fee</td>
            <td>Monthly service fee; varies with scope</td>
          </tr>
          <tr>
            <td>Breadth of skills</td>
            <td>Limited to the person&apos;s expertise</td>
            <td>Usually strong in one or two areas</td>
            <td>Strategy, design, video, and reporting sit with different people</td>
          </tr>
          <tr>
            <td>Continuity</td>
            <td>Knowledge leaves with the person, but the archive stays with the company</td>
            <td>Depends on one person</td>
            <td>The team provides backup; the account manager may change</td>
          </tr>
          <tr>
            <td>Control</td>
            <td>Highest</td>
            <td>High, direct communication</td>
            <td>Achieved through contract and process</td>
          </tr>
          <tr>
            <td>Management load</td>
            <td>You are the manager</td>
            <td>Briefing and approval are on you</td>
            <td>Calendar and reporting run on the team; approval is yours</td>
          </tr>
          <tr>
            <td>Scaling</td>
            <td>Requires a new hire</td>
            <td>Capacity is limited</td>
            <td>Scope can be expanded</td>
          </tr>
        </tbody>
      </table>

      <h2 id="in-house">In-house: the real limit is scope, not salary</h2>
      <p>
        The floor cost of the in-house model is public. According to the
        Ministry of Labour and Social Security&apos;s{" "}
        <a
          href="https://www.csgb.gov.tr/Media/gm2fekds/asgari-%C3%BCcret-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          2026 minimum wage calculation
        </a>
        , an employee on the minimum wage (33,030 TL gross, 28,075.50 TL net)
        costs the employer 40,214.03 TL a month in total when the 2-point
        premium discount applies, and 40,874.63 TL when it does not. Read
        this figure not as a social media specialist&apos;s salary but as the
        floor cost of putting one person on payroll. We could not find a
        verifiable market range for an experienced specialist&apos;s pay, so
        we give no separate figure.
      </p>
      <p>
        Beyond salary, equipment such as cameras and lighting, design and
        editing software, and work stopping during leave or illness belong in
        the calculation. But the in-house model&apos;s real limit isn&apos;t
        cost, it is scope: expecting strategy, design, shooting, editing, and
        community management from one person may not be a realistic job
        description.
      </p>
      <p>
        Sprout Social&apos;s{" "}
        <a
          href="https://sproutsocial.com/insights/social-media-team-hiring/"
          target="_blank"
          rel="noopener noreferrer"
        >
          piece on hiring for social media teams
        </a>{" "}
        shows this specialization: about 86% of marketing leaders plan to hire
        for at least two new social roles this year, and the roles sought are
        distinct skills such as social intelligence, creative direction, and
        influencer marketing. On the same page, 66% of social marketers say
        they feel like they are doing more than one job. This is vendor
        research; the surveys cover marketers in the US, the UK, and
        Australia and cannot be applied directly to small and mid-sized
        businesses in Türkiye. The direction is still clear: social media is
        growing less as a one-person job description and more as a set of
        complementary specialties.
      </p>
      <p>
        <strong>When does it make sense?</strong> When content flow is
        continuous and high, brand knowledge is tied to the product and
        operations (for example, daily shooting at a branch), and someone
        in-house can manage the work. <strong>Main risk:</strong> all
        knowledge concentrated in one person.
      </p>

      <h2 id="freelancer">Freelancer: gains flexibility, leaves a continuity debt</h2>
      <p>
        The strengths of the freelancer model are clear: it creates no fixed
        employer cost, communication is direct, and work can move quickly when
        scope is small and well defined. The risks are structural and should
        be discussed before a contract:
      </p>
      <ul>
        <li>
          <strong>Dependence on one person:</strong> Leave, illness, or another
          workload can stop the publishing flow. &quot;How does publishing
          continue if they are unreachable for a week?&quot; should have a
          written answer.
        </li>
        <li>
          <strong>Breadth of skills:</strong> One person is usually strong in
          strategy, or design, or video; expecting all of them at the same
          quality is unrealistic.
        </li>
        <li>
          <strong>Account access:</strong> If accounts are managed through the
          freelancer&apos;s personal account, access leaves with them. We
          cover this separately below.
        </li>
        <li>
          <strong>Documents and tax:</strong> According to the Revenue
          Administration, self-employed professionals are{" "}
          <a
            href="https://ebelge.gib.gov.tr/esmmhakkinda.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            required to issue an e-Serbest Meslek Makbuzu
          </a>
          . Which document applies depends on the person&apos;s tax status;
          confirm it with your accountant and do not pay without
          documentation.
        </li>
        <li>
          <strong>Contract:</strong> Scope, delivery schedule, who owns the
          content and raw files, and exit terms should be in writing.
        </li>
      </ul>

      <h2 id="agency">Agency or team model: scope and backup, in exchange for some control</h2>
      <p>
        By &quot;agency&quot; here we mean an external team of several people:
        a structure where strategy, design, shooting, editing, publishing,
        and reporting sit with different people. Its strengths are that work
        doesn&apos;t stop when one person is out and that the process (content
        calendar, approval steps, monthly report) belongs to the team. The
        risks to watch in return:
      </p>
      <ul>
        <li>
          <strong>Template work:</strong> Content that isn&apos;t specific to
          your brand, with the same visual pattern repeated across many
          clients. Ask for sample work and how content is produced.
        </li>
        <li>
          <strong>Out-of-scope items:</strong> Whether shooting, video editing,
          and ad management are included changes from quote to quote; see our{" "}
          <Link href="/en/blog/social-media-management-pricing-2026">
            pricing article
          </Link>{" "}
          for details.
        </li>
        <li>
          <strong>Account manager vs. production team:</strong> Find out
          whether the person you meet in the sales conversation is the same
          person who does the work.
        </li>
        <li>
          <strong>Commitment period:</strong> Long commitments and exit terms
          should be explicit in the contract.
        </li>
      </ul>
      <p>
        A large team doesn&apos;t mean a good one; for a small business what
        matters is that the scope assigned to you is clear and reported. Much
        of the evaluation logic applies regardless of service area. You can
        see the same logic in the criteria we wrote for{" "}
        <Link href="/en/blog/how-to-choose-an-seo-agency">
          choosing an SEO agency
        </Link>
        .
      </p>

      <h2 id="which-when">Which one when? The hybrid model</h2>
      <p>
        For most businesses the real decision isn&apos;t &quot;one or the
        other.&quot; In Gartner&apos;s{" "}
        <a
          href="https://www.chiefmarketer.com/gartner-39-of-cmos-plan-to-reduce-labor-costs-and-cut-agency-allocations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          2025 CMO spend survey
        </a>{" "}
        (402 marketing leaders), agency spend makes up 20.7% of the marketing
        budget and in-house labor 21.9%. That the two lines are of similar
        size suggests using both models together is common; but the survey
        does not measure small and mid-sized businesses in Türkiye separately,
        so it should not be read as a target ratio.
      </p>
      <p>In practice, four scenarios stand out:</p>
      <ul>
        <li>
          <strong>Single-location local business:</strong> A freelancer or a
          small team may be enough; the critical issues are uninterrupted
          publishing and the account staying with the business.
        </li>
        <li>
          <strong>Growing, multi-platform business:</strong> When production and
          reporting load rises, the one-person model falls short and a team
          model makes sense.
        </li>
        <li>
          <strong>Multi-location or centrally managed brand voice:</strong> An
          in-house core (brand voice, approvals) with an external production
          team.
        </li>
        <li>
          <strong>Campaign-based or seasonal peaks:</strong> Project-based
          freelancers or a team instead of permanent staff.
        </li>
      </ul>

      <h2 id="constants">Four rules that hold whichever model you choose</h2>

      <h3 id="account-ownership">1. The business should own the account</h3>
      <p>
        In Meta&apos;s developer documentation, the business that owns a
        Facebook Page is described as the party that{" "}
        <a
          href="https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          holds full management of the Page
        </a>
        , while an agency works with a separate access role. The owner can
        remove the agencies or businesses it has granted access to, while the
        agency cannot re-share the Page with another business. The practical
        outcome: pages and ad accounts should be set up under your
        business&apos;s Business Manager rather than a personal account. The
        same principle applies to ad accounts; we cover it in{" "}
        <Link href="/en/blog/who-owns-your-google-ads-account">
          Who owns your Google Ads account?
        </Link>
      </p>

      <h3 id="ad-disclosure">2. Responsibility for ad disclosure cannot be delegated</h3>
      <p>
        In the Ministry of Trade&apos;s{" "}
        <a
          href="https://ticaret.gov.tr/haberler/ticaret-bakanligi-sosyal-medya-etkileyicileri-icin-kilavuz-yayimladi"
          target="_blank"
          rel="noopener noreferrer"
        >
          2021 guide for social media influencers
        </a>
        , advertisers, advertising agencies, media organizations, and
        influencers are each held separately responsible for complying with
        the guide. According to the Ministry&apos;s{" "}
        <a
          href="https://ticaret.gov.tr/haberler/aldaticici-reklam-ve-haksiz-ticari-uygulamalarla-mucadelede-yeni-donem-basliyor"
          target="_blank"
          rel="noopener noreferrer"
        >
          announcement
        </a>
        , an amendment published in Official Gazette no. 33297 on July 1, 2026
        took effect on August 1, 2026: where an influencer post involves
        compensation, a discounted product, or another benefit, the label
        &quot;reklam&quot; (advertisement) or &quot;tanıtım&quot; (promotion)
        is mandatory. The upshot: handing social media to an outside team does
        not remove the business&apos;s responsibility. Who checks the label on
        influencer collaborations should be written into the brief. This is
        not legal advice; check the current text before a campaign.
      </p>

      <h3 id="archive-access">3. The archive and access list stay with the business</h3>
      <p>
        Raw photos and videos, design files, the brand guide, and a list of who
        has access to which account should be kept by the business. When you
        change models (for example, from a freelancer to a team), these speed
        up the handover.
      </p>

      <h3 id="contract">4. Exit terms should be written up front</h3>
      <p>
        Notice period, handover support, intellectual property in the content,
        and confidentiality clauses belong in the contract under every model.
        For an employee these are covered by an employment contract; for
        external models, by a service contract.
      </p>

      <h2 id="questions">8 questions to ask when evaluating a quote or candidate</h2>
      <ol>
        <li>Whose name are the accounts under, and who can remove access?</li>
        <li>
          What exactly is in scope (number of platforms, monthly content
          count, shooting, editing, community management)? What is not?
        </li>
        <li>If one person is out for a week, how does publishing continue?</li>
        <li>
          Who produces the content; is it brand-specific or template-based?
          Can sample work be shown?
        </li>
        <li>
          What metrics are in the monthly report, and which goal do they tie to?
        </li>
        <li>
          Who owns the rights to the produced content and the raw files?
        </li>
        <li>
          What are the termination terms, notice period, and handover support?
        </li>
        <li>
          Who checks the &quot;reklam&quot; label on influencer or
          collaboration content?
        </li>
      </ol>

      <h2 id="pilot">Before you decide: test with a small pilot</h2>
      <p>
        It is hard to know in advance which model suits you, so treating the
        first two or three months as a trial period makes sense. For a pilot
        to work, three things should be settled before it starts: what you
        will look at at the end (observable criteria such as publishing
        regularity, approval time, and how readable the report is), under
        what conditions the pilot can be ended, and how account access is
        granted. The decision at the end should weigh how tiring the process
        was for you as much as the quality of the content: if the management
        load is heavier than you expected, that is part of the real cost of
        that model.
      </p>

      <h2 id="switching">A handover checklist for switching models</h2>
      <p>
        Moving from a freelancer to a team, or from an outside team to
        in-house, may become unavoidable. To keep the switch from interrupting
        publishing, work through these steps in order:
      </p>
      <ol>
        <li>
          List who has access to which account; once the new party has
          access, remove the previous one&apos;s.
        </li>
        <li>
          Take delivery of the raw photos and videos, design files, and the
          brand guide.
        </li>
        <li>
          Take over the approved content calendar and scheduled posts; do not
          leave a publishing gap in the handover week.
        </li>
        <li>
          Hold a short knowledge-transfer session with the outgoing party:
          what worked, and which topics were tried and dropped.
        </li>
        <li>
          Plan for the new party to start before the contract&apos;s notice
          period ends; a short overlap between the two periods is usually
          cheaper than a gap.
        </li>
      </ol>

      <h2 id="transparency">A transparency note and the limits of the data</h2>
      <p>
        Groopy is a software company and offers social media management as a
        team model. To keep this comparison neutral, we relied only on
        third-party sources and public data, and we claim no results from our
        own clients. We could not find a verifiable source for market-wide
        preference rates among these three models in Türkiye, or for
        freelancer and agency fee ranges, so we left such figures out. We
        recommend treating unsourced claims of the &quot;X% of businesses
        outsource&quot; kind with caution.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        The right model isn&apos;t settled by a price comparison alone. In-house
        gives control but limits scope; a freelancer is flexible but
        continuity rests on one person; a team model provides scope and backup
        but requires a clear contract and reporting routine. Whichever you
        choose, keep account ownership, the archive, and exit terms with your
        business from the start.
      </p>
      <p>
        If you&apos;d like to work through which model fits your social media
        needs, you can look at the{" "}
        <Link href="/en/services/social-media-management">
          scope of our social media management service
        </Link>{" "}
        or <Link href="/en/contact">book a call</Link>.
      </p>
    </>
  );
}
