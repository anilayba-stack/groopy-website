import type { Diagnostic } from "@content/diagnostics";

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

function SerpScreen({ query }: { query: string }) {
  return (
    <>
      <ChromeBar label={`google.com/search?q=${query}`} />
      <div className="dscreen__body">
        <div className="dserp">
          <SerpRow />
          <SerpRow />
          <div className="dserp__row--you">siteniz sonuçlarda yok</div>
          <SerpRow />
          <SerpRow />
          <SerpRow />
        </div>
      </div>
    </>
  );
}

function AiScreen({ query }: { query: string }) {
  return (
    <>
      <ChromeBar label="yapay zekâ yanıtı" />
      <div className="dscreen__body" style={{ display: "flex", flexDirection: "column" }}>
        <div className="dai__q">{query}</div>
        <div className="dai__a">
          <Bar className="dbar--line" />
          <Bar className="dbar--line" />
          <Bar className="dbar--line-short" />
          <div className="dai__chips">
            <span className="dai__chip">kaynak</span>
            <span className="dai__chip">kaynak</span>
            <span className="dai__chip dai__chip--missing">siz yoksunuz</span>
          </div>
        </div>
      </div>
    </>
  );
}

function LocalScreen({ query }: { query: string }) {
  return (
    <>
      <ChromeBar label={`haritalar · ${query}`} />
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
          <div className="dlocal__card dlocal__card--you">
            işletmeniz haritada yok
          </div>
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

function SiteScreen() {
  return (
    <>
      <ChromeBar label="kliniginiz.com" />
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

function SocialScreen() {
  return (
    <>
      <ChromeBar label="sosyal medya · profil" />
      <div className="dscreen__body dsocial">
        <div className="dsocial__head">
          <span className="dsocial__avatar" />
          <div className="dsocial__meta">
            <Bar className="dbar--line-short" />
            <span className="dsocial__note">son paylaşım: 2 ay önce</span>
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

export function DiagnosticScreen({ d, active }: { d: Diagnostic; active: boolean }) {
  return (
    <div className="dscreen" data-active={active} aria-hidden={!active}>
      {d.screen === "serp" && <SerpScreen query={d.query ?? ""} />}
      {d.screen === "ai" && <AiScreen query={d.query ?? ""} />}
      {d.screen === "local" && <LocalScreen query={d.query ?? ""} />}
      {d.screen === "perf" && <PerfScreen />}
      {d.screen === "site" && <SiteScreen />}
      {d.screen === "social" && <SocialScreen />}
    </div>
  );
}
