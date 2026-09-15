import type { Diagnostic } from "@content/diagnostics";

type Locale = "tr" | "en";

interface Microcopy {
  aiTab: string;
  notInResults: string;
  source: string;
  youAreMissing: string;
  mapsTab: string;
  notOnMap: string;
  siteTab: string;
  socialTab: string;
  lastPost: string;
}

const MICROCOPY: Record<Locale, Microcopy> = {
  tr: {
    aiTab: "yapay zekâ yanıtı",
    notInResults: "siteniz sonuçlarda yok",
    source: "kaynak",
    youAreMissing: "siz yoksunuz",
    mapsTab: "haritalar",
    notOnMap: "işletmeniz haritada yok",
    siteTab: "kliniginiz.com",
    socialTab: "sosyal medya · profil",
    lastPost: "son paylaşım: 2 ay önce",
  },
  en: {
    aiTab: "AI answer",
    notInResults: "your site isn't in the results",
    source: "source",
    youAreMissing: "you're missing",
    mapsTab: "maps",
    notOnMap: "your business isn't on the map",
    siteTab: "yourclinic.com",
    socialTab: "social media · profile",
    lastPost: "last post: 2 months ago",
  },
} as const;

function Bar({ className = "" }: { className?: string }) {
  return <div className={`dbar ${className}`} />;
}

function SerpRow() {
  return (
    <div className="dserp__row">
      <Bar className="dbar--title" />
      <Bar className="dbar--line" />
      <Bar className="dbar--line-short" />
    </div>
  );
}

function ChromeBar({ label }: { label: string }) {
  return (
    <div className="dscreen__bar">
      <span className="dscreen__dot" />
      <span className="dscreen__dot" />
      <span className="dscreen__dot" />
      <span className="dscreen__url">{label}</span>
    </div>
  );
}

function SerpScreen({ query, t }: { query: string; t: Microcopy }) {
  return (
    <>
      <ChromeBar label={`google.com/search?q=${query}`} />
      <div className="dscreen__body">
        <div className="dserp">
          <SerpRow />
          <SerpRow />
          <div className="dserp__row--you">{t.notInResults}</div>
          <SerpRow />
          <SerpRow />
          <SerpRow />
        </div>
      </div>
    </>
  );
}

function AiScreen({ query, t }: { query: string; t: Microcopy }) {
  return (
    <>
      <ChromeBar label={t.aiTab} />
      <div className="dscreen__body" style={{ display: "flex", flexDirection: "column" }}>
        <div className="dai__q">{query}</div>
        <div className="dai__a">
          <Bar className="dbar--line" />
          <Bar className="dbar--line" />
          <Bar className="dbar--line-short" />
          <div className="dai__chips">
            <span className="dai__chip">{t.source}</span>
            <span className="dai__chip">{t.source}</span>
            <span className="dai__chip dai__chip--missing">{t.youAreMissing}</span>
          </div>
        </div>
      </div>
    </>
  );
}

function LocalScreen({ query, t }: { query: string; t: Microcopy }) {
  return (
    <>
      <ChromeBar label={`${t.mapsTab} · ${query}`} />
      <div className="dscreen__body dlocal">
        <div className="dlocal__map">
          <span className="dlocal__pin" style={{ left: "24%", top: "32%" }} />
          <span className="dlocal__pin" style={{ left: "58%", top: "52%" }} />
          <span className="dlocal__pin" style={{ left: "40%", top: "74%" }} />
        </div>
        <div className="dlocal__list">
          <div className="dlocal__card">
            <Bar className="dbar--title" />
            <Bar className="dbar--line-short" />
          </div>
          <div className="dlocal__card dlocal__card--you">{t.notOnMap}</div>
        </div>
      </div>
    </>
  );
}

function PerfScreen() {
  return (
    <>
      <ChromeBar label="Core Web Vitals" />
      <div className="dscreen__body">
        <div className="dperf">
          {["LCP", "INP", "CLS"].map((l) => (
            <div className="dperf__col" key={l}>
              <div className="dperf__meter">
                <div className="dperf__fill dperf__fill--bad" />
              </div>
              <span className="dperf__label">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function SiteScreen({ t }: { t: Microcopy }) {
  return (
    <>
      <ChromeBar label={t.siteTab} />
      <div className="dscreen__body dsite">
        <div className="dsite__nav">
          <span className="dsite__logo" />
          <span className="dsite__navitem" />
          <span className="dsite__navitem" />
          <span className="dsite__navitem" />
        </div>
        <div className="dsite__hero">
          <Bar className="dbar--title" />
          <Bar className="dbar--line" />
          <span className="dsite__btn" />
        </div>
        <div className="dsite__cards">
          <span className="dsite__card" />
          <span className="dsite__card" />
          <span className="dsite__card" />
        </div>
      </div>
    </>
  );
}

function SocialScreen({ t }: { t: Microcopy }) {
  return (
    <>
      <ChromeBar label={t.socialTab} />
      <div className="dscreen__body dsocial">
        <div className="dsocial__head">
          <span className="dsocial__avatar" />
          <div className="dsocial__meta">
            <Bar className="dbar--line-short" />
            <span className="dsocial__note">{t.lastPost}</span>
          </div>
        </div>
        <div className="dsocial__grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`dsocial__tile ${i > 1 ? "dsocial__tile--empty" : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function DiagnosticScreen({
  d,
  active,
  locale = "tr",
}: {
  d: Diagnostic;
  active: boolean;
  locale?: Locale;
}) {
  const t = MICROCOPY[locale];
  return (
    <div className="dscreen" data-active={active} aria-hidden={!active}>
      {d.screen === "serp" && <SerpScreen query={d.query ?? ""} t={t} />}
      {d.screen === "ai" && <AiScreen query={d.query ?? ""} t={t} />}
      {d.screen === "local" && <LocalScreen query={d.query ?? ""} t={t} />}
      {d.screen === "perf" && <PerfScreen />}
      {d.screen === "site" && <SiteScreen t={t} />}
      {d.screen === "social" && <SocialScreen t={t} />}
    </div>
  );
}
