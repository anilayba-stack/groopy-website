import Link from "next/link";
import type { BlogPostMeta } from "../../../types";

export const meta: BlogPostMeta = {
  slug: "how-long-does-a-website-take",
  title: "How Long Does a Website Take to Build?",
  metaTitle: "How Long Does a Website Take to Build?",
  description:
    "Why website projects run long, what phases the process goes through, and what actually shortens the timeline — a sourced, concrete guide.",
  publishedAt: "2026-11-19",
  tldr: "Per GoodFirms' 2024 data, based on more than 100 web development companies, timelines scale with complexity: small-business/corporate sites take 1-12 weeks, e-commerce 4-16 weeks, custom web applications 16-30 weeks. But the real reason these ranges are so wide isn't technology, it's process: per Ignition's 2025 agency survey, 57% of agencies lose $1K-$5K a month in unbilled work to scope creep, and that lost work maps directly onto a longer project. The real driver of timeline isn't coding speed; it's when content is ready, how many rounds approvals take, and how clearly scope was defined up front.",
  author: "Anıl Ay",
  hubService: "website-development",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/web-sitesi-ne-kadar-surede.jpg",
    alt: "A green pen resting on a hand-drawn wireframe sketch in a notebook, with a blurred mouse in the background",
  },
  faq: [
    {
      question: "How many weeks does a website typically take?",
      answer:
        "There's no single right number. Per GoodFirms' 2024 data, small-business/corporate sites run 1-12 weeks, e-commerce 4-16 weeks, and custom web applications 16-30 weeks. At Groopy, the typical range for brochure and corporate sites is 3-6 weeks; the exact timeline is set after the discovery call.",
    },
    {
      question: "What actually stretches the timeline the most?",
      answer:
        "Not coding speed — scope creep and the approval process. Per Ignition's 2025 agency survey, 57% of agencies lose $1K-$5K a month in unbilled work to scope creep, and most of that extra work shows up in the project calendar too.",
    },
    {
      question: "Should we prepare the content (copy, images) ourselves?",
      answer:
        "Usually yes, at least a first draft. Content is the single most important piece of work that can run in parallel with design and development; it not being ready is one of the most common reasons a site sits finished in code but unpublished.",
    },
    {
      question: "What happens if we expand scope partway through?",
      answer:
        "Both time and budget grow — that's natural. The problem isn't scope growing, it's growth that isn't tracked in writing. In a good process, every additional request is approved in writing along with a new delivery date, so nobody has to guess why the project ran long.",
    },
    {
      question: "Should design revision rounds be limited?",
      answer:
        "Yes, it's advisable. For example, treating a first draft plus one revision round as standard, with any further round requiring extra time in writing, makes clients prepare feedback more carefully and keeps the project out of an open-ended revision loop.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        The honest answer to &quot;how long will it take?&quot; is never a
        single number. What actually determines timeline isn&apos;t how fast
        the code gets written, it&apos;s how clearly the scope was defined
        and when the content is ready. Instead of giving a generic
        &quot;4-8 weeks&quot; figure, this article breaks the process into
        phases, shows with sourced data what really extends a project, and
        makes concrete what you can do to shorten it.
      </p>
      <p>
        We covered the price side separately in our{" "}
        <Link href="/en/blog/website-cost-2026">website cost guide</Link>;
        this article focuses on time.
      </p>

      <h2 id="short-answer">Short answer: a range by complexity</h2>
      <p>
        Per GoodFirms&apos;{" "}
        <a
          href="https://www.einpresswire.com/article/687456237/goodfirms-rolls-out-website-construction-costs-timelines-for-2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          2024 website construction costs and timelines survey
        </a>
        , based on data from more than 100 web development companies,
        completion time scales roughly linearly with complexity. This is an
        international dataset; we could not find a source specific to the
        Turkish market, so read it as a general trend.
      </p>
      <table>
        <thead>
          <tr>
            <th>Project type</th>
            <th>Typical time (GoodFirms, 2024)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Personal/simple brochure site</td>
            <td>1-4 weeks</td>
          </tr>
          <tr>
            <td>Small business / corporate site</td>
            <td>1-12 weeks</td>
          </tr>
          <tr>
            <td>E-commerce</td>
            <td>4-16 weeks</td>
          </tr>
          <tr>
            <td>Custom web application</td>
            <td>16-30 weeks</td>
          </tr>
          <tr>
            <td>SaaS product</td>
            <td>12-48 weeks</td>
          </tr>
        </tbody>
      </table>
      <p>
        At Groopy, the typical range for brochure and corporate sites is 3-6
        weeks; on our{" "}
        <Link href="/en/services/website-development">
          website development service page
        </Link>
        , the exact timeline is set after the discovery call. Even within the
        same project type, here&apos;s why the range stays this wide.
      </p>

      <h2 id="bottlenecks">The real bottleneck changes by project type</h2>
      <p>
        One reason these ranges are so wide is that time loss piles up in a
        different place depending on project type. For corporate/brochure
        sites, most time goes into copy and image approval; the technical
        side is relatively simple. For e-commerce, the bottleneck is usually
        product data entry (getting hundreds of products into the system
        with photos, descriptions, and stock info) and testing
        payment/shipping integrations, both of which are separate workloads
        that need to run in parallel with development, not as part of it.
        For custom web applications, the biggest risk is third-party APIs
        (payment providers, CRM, accounting software) behaving differently
        than expected, which typically only surfaces during integration. So
        the answer to &quot;why is our project taking longer&quot; is often
        not development speed, it&apos;s the bottleneck specific to that
        project type.
      </p>

      <h2 id="pricing-model">How does the pricing model affect timeline?</h2>
      <p>
        In a fixed-scope proposal (a defined page/feature list at a fixed
        price), any request outside that scope needs a separate approval and
        extra time; this gives clarity but costs flexibility. In a
        time-and-materials (hourly/monthly) model, changes are easier to
        make, but the total duration is harder to estimate up front.
        Clarifying which model you&apos;re working under, and how an
        out-of-scope request will affect the timeline, up front prevents a
        &quot;why did this take so long&quot; conversation weeks later.
      </p>

      <h2 id="discovery-call">What gets clarified in the discovery call?</h2>
      <p>
        A firm timeline can usually only be given after the first
        conversation, because most of the variables that determine it
        surface there. Concretely, these get discussed:
      </p>
      <ul>
        <li>
          <strong>Page and feature list:</strong> How many pages, which
          forms, which integrations (payment, booking, CRM) are needed.
        </li>
        <li>
          <strong>Content readiness:</strong> Whether copy and images are
          ready, need to be written from scratch, or migrated from an
          existing site.
        </li>
        <li>
          <strong>Approval chain:</strong> Who approves design and content,
          and how many people&apos;s input is needed.
        </li>
        <li>
          <strong>Pricing model:</strong> Whether a fixed-scope or a
          phased/flexible approach is preferred.
        </li>
      </ul>
      <p>
        A date given before these four points are clear is little more than
        a guess; a proposal that says &quot;we&apos;ll share the exact
        timeline after the call&quot; is a sign of realism, not uncertainty.
      </p>

      <h2 id="phases">What phases does the process go through?</h2>
      <p>
        The standard lifecycle of a software/web project has five phases:
        planning and requirements gathering, system/business analysis,
        design and development, testing, and deployment and maintenance.
        This sequence is defined as a{" "}
        <a
          href="https://cuny.manifoldapp.org/read/project-planning/section/83a5dd44-c0bd-435f-bfe4-9ed716fbcdc2"
          target="_blank"
          rel="noopener noreferrer"
        >
          standard project management framework
        </a>{" "}
        in open courseware. Who is expected to deliver what in each phase
        directly determines how long the project takes:
      </p>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>The agency&apos;s job</th>
            <th>The client&apos;s job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Planning and requirements</td>
            <td>Clarifies scope, page list, and goals</td>
            <td>States business goals and priorities clearly</td>
          </tr>
          <tr>
            <td>Analysis and design</td>
            <td>Prepares information architecture and visual design</td>
            <td>Reviews and approves design promptly, in one round</td>
          </tr>
          <tr>
            <td>Development</td>
            <td>Writes the code, sets up integrations</td>
            <td>Delivers copy, images, and product/service information</td>
          </tr>
          <tr>
            <td>Testing</td>
            <td>Runs functional and mobile testing</td>
            <td>Checks the accuracy of its own content</td>
          </tr>
          <tr>
            <td>Deployment and maintenance</td>
            <td>Publishes the site, sets up measurement tools</td>
            <td>Provides domain/account access on time</td>
          </tr>
        </tbody>
      </table>
      <p>
        What stands out in the table: at every step except development, the
        client also has an active task. Timeline depends not only on the
        agency&apos;s speed but on how quickly these tasks get done. Phases
        also don&apos;t have to fully wait on each other: content prep can
        run alongside design, and testing alongside development of some
        integrations. Whether that parallel work actually happens largely
        depends on when the client delivers content.
      </p>

      <h2 id="scope-creep">What really extends the timeline: scope creep</h2>
      <p>
        Per Ignition&apos;s{" "}
        <a
          href="https://www.ignitionapp.com/2025-agency-pricing-cashflow-report"
          target="_blank"
          rel="noopener noreferrer"
        >
          2025 Agency Pricing & Cash Flow Report
        </a>
        , 57% of agencies lose $1K-$5K a month in unbilled work to scope
        creep. That&apos;s not just a cost problem: that unbilled work means
        someone spent extra time somewhere, which means the project ran that
        much longer too.
      </p>
      <p>
        In a web project, scope creep usually looks like: &quot;let&apos;s
        also add a blog while we&apos;re at it,&quot; &quot;we revised the
        homepage three times in three different directions,&quot;
        &quot;we said we&apos;d go multilingual but never discussed the
        details.&quot; None of this is done in bad faith; the problem is
        that these changes never get recorded in writing along with how much
        extra time they need.
      </p>

      <h2 id="diagnosis">If your project is taking longer than expected</h2>
      <p>
        The three reasons below are the most common structural causes behind
        a delay; not a statistic, just the natural result of how the phases
        work:
      </p>
      <ol>
        <li>
          <strong>Content arrives late.</strong> Design and development can
          move forward without copy and images, but the site can only go
          live with real content. Content is often one of the last things
          people think about, but it&apos;s the work that should start
          earliest.
        </li>
        <li>
          <strong>Approval doesn&apos;t finish in one round.</strong> Every
          extra revision round adds a new wait to the calendar, especially
          if the approver changes or feedback arrives piecemeal.
        </li>
        <li>
          <strong>Scope grows along the way.</strong> As the Ignition data
          above shows, every added feature or page silently extends the
          project unless it&apos;s reflected in the timeline in writing.
        </li>
      </ol>

      <h2 id="speed-up">What you can do to speed up the process</h2>
      <ul>
        <li>
          <strong>Prepare content before development starts:</strong> Have at
          least a first draft of the homepage and service/product copy ready
          before kickoff.
        </li>
        <li>
          <strong>Name a single approver:</strong> Keep the person approving
          design and content fixed; conflicting feedback from multiple
          people multiplies revision rounds.
        </li>
        <li>
          <strong>Define scope in writing:</strong> Get the page list,
          features, and integrations clear up front; when an extra request
          comes in, discuss its effect on the timeline at the same time.
        </li>
        <li>
          <strong>Provide domain and account access early:</strong> One of
          the most common delays at launch is development being finished
          while domain or hosting access still hasn&apos;t arrived.
        </li>
        <li>
          <strong>Clarify the pricing model and the out-of-scope process:</strong>{" "}
          Agree up front on whether you&apos;re working fixed-price or
          hourly/monthly, and how an extra request will affect the timeline;
          this prevents a mismatch in expectations later.
        </li>
      </ul>

      <h2 id="good-proposal">What does a good timeline proposal look like?</h2>
      <p>
        A proposal that gives only a single end date can&apos;t show what
        held up what along the way. A useful timeline dates the five phases
        above separately and states what each one depends on to start: for
        example, &quot;development starts after design approval, development
        runs in parallel with content delivery, testing waits on
        integrations being complete.&quot; That way, if there&apos;s a
        delay, which side held up which deliverable also becomes visible;
        &quot;why did the project run long&quot; turns into looking at a
        line in the timeline, not an argument.
      </p>
      <p>
        It also helps to cap revision rounds up front: for instance, treating
        two rounds (a first draft and one revision) as standard for design,
        with a written note that a third round needs extra time or a fee.
        This doesn&apos;t ban revisions; it just stops unlimited revisions
        from extending the project indefinitely.
      </p>

      <h2 id="data-limits">A note on the limits of the data</h2>
      <p>
        We could not find an independent survey of website development
        timelines specific to the Turkish market; the GoodFirms data above
        comes from an international sample. There&apos;s also no official
        source on how many days local steps like domain/SSL setup or a KVKK
        compliance review add to a project; these should be thought of as
        small items that often need to be built into the timeline but are
        frequently skipped, not as a fixed number of days.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        The length of a website project is, to a large extent, a shared
        responsibility: the agency writes the code, but content, approval
        speed, and scope clarity sit with the client. The most reliable way
        to shorten the timeline isn&apos;t finding a faster team, it&apos;s
        getting these three things clear from the start. Technology choice
        affects the process too; we covered that comparison separately in{" "}
        <Link href="/en/blog/wordpress-vs-nextjs">
          WordPress vs. Next.js
        </Link>
        .
      </p>
      <p>
        If you&apos;d like to work out your project&apos;s scope and a
        realistic timeline together, you can{" "}
        <Link href="/en/contact">book a call</Link>.
      </p>
    </>
  );
}
