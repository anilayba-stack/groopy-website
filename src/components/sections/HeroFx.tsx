"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hero etkileşim efekti — logo işaretindeki dairelere gelince, ilgili hizmet
 * maddesine doğru bir ışık izi gider.
 *
 * Konumlar mark kutusunun oranı (0–1). Logo değişirse burayı ayarla.
 * - Sağ üst küçük daire  → web
 * - Sağ alt küçük daire  → sosyal medya
 * - Ortadaki orta daire  → üçü birden ("hepsi bir bütün")
 */
const NODE_POS = {
  web: { x: 0.85, y: 0.18 },
  social: { x: 0.891, y: 0.88 },
} as const;
type NodeKey = keyof typeof NODE_POS;
const NODE_KEYS: NodeKey[] = ["web", "social"];
const HOTSPOT_R: Record<NodeKey, number> = { web: 18, social: 18 };

/** Ortadaki orta daire (mark oranı) + yarıçapı (mark genişliğinin oranı). */
const CENTER = { x: 0.435, y: 0.472, r: 0.115 };

/** is-lit için tüm hizmet anahtarları. */
type LinkKey = "web" | "seo" | "social";
const LINK_KEYS: LinkKey[] = ["web", "seo", "social"];
type Key = LinkKey | "all";

interface Pt {
  x: number;
  y: number;
}
interface Geom {
  w: number;
  h: number;
  mark: { x: number; y: number; w: number; h: number };
  nodes: Partial<Record<NodeKey, Pt>>;
  center: Pt;
  centerR: number;
  targets: Partial<Record<LinkKey, Pt>>;
}

function lerp(a: Pt, b: Pt, t: number): Pt {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

/** Noktalardan geçen yumuşak kapalı eğri (Catmull-Rom → bezier). */
function smoothClosed(pts: Pt[]): string {
  const n = pts.length;
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)} `;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += `C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(
      1,
    )} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} `;
  }
  return d;
}

function curve(a: Pt, b: Pt): string {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const k = 0.16 * len;
  const cx = (a.x + b.x) / 2 + (-dy / len) * k;
  const cy = (a.y + b.y) / 2 + (dx / len) * k;
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(
    1,
  )} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

/**
 * "Follow the white rabbit" — önce ok gider, sonra logodan yazıya doğru
 * beyaz tavşan silüeti yavaşça koşar; sona ulaşınca baştan başlar (sonsuz döngü).
 */
const RABBIT_START = 0.7; // ok bitene kadar bekle (sn)
const RABBIT_DUR = 2.8; // hedefe yavaş yavaş (sn)
const BFLY_START = 0.8;
const BFLY_DUR = 6; // 3 hedef arasında salınan tek kelebek

function RabbitRunner({ d }: { d: string }) {
  return (
    <g className="hero-fx__rabbit" opacity={0}>
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.1;0.82;1"
        begin={`${RABBIT_START}s`}
        dur={`${RABBIT_DUR}s`}
        repeatCount="indefinite"
      />
      <animateMotion
        path={d}
        begin={`${RABBIT_START}s`}
        dur={`${RABBIT_DUR}s`}
        repeatCount="indefinite"
      />
      {/* koşarken zıplama */}
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -3.4; 0 0"
          begin={`${RABBIT_START}s`}
          dur="0.36s"
          repeatCount="indefinite"
          additive="sum"
        />
        {/* Lucide "rabbit" — 24×24. Ayaklar (y≈20.5) yayın üstüne otursun diye
            yatayda ortalanıp, dikeyde ayak hizası orijine getirildi. Sağa bakar. */}
        <g
          transform="scale(1.2) translate(-13 -20.5)"
          fill="none"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 16a3 3 0 0 1 2.24 5" />
          <path d="M18 12h.01" />
          <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
          <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
          <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
        </g>
      </g>
    </g>
  );
}

const BFLY_WING =
  "M-0.8 -2 C-6 -8 -12 -6 -11 -1 C-13 1 -10 3.5 -7 2.6 C-10 5.5 -7.5 8.5 -3 5.5 C-1.6 4.4 -1 1.6 -0.8 -2 Z";

/** "all" efektinde 3 hedef arasında salınan tek beyaz kelebek. */
function ButterflyRunner({ d }: { d: string }) {
  return (
    <g className="hero-fx__butterfly" opacity={0}>
      <animate
        attributeName="opacity"
        values="0;1;1;1;0"
        keyTimes="0;0.05;0.5;0.93;1"
        begin={`${BFLY_START}s`}
        dur={`${BFLY_DUR}s`}
        repeatCount="indefinite"
      />
      <animateMotion
        path={d}
        begin={`${BFLY_START}s`}
        dur={`${BFLY_DUR}s`}
        repeatCount="indefinite"
        calcMode="linear"
      />
      {/* hafif yalpalama */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-13 0 0; 13 0 0; -13 0 0"
          dur="1.15s"
          repeatCount="indefinite"
          additive="sum"
        />
        <g transform="scale(1.15)" fill="#ffffff">
          <ellipse cx="0" cy="0" rx="1" ry="4.6" />
          <path
            d="M-0.6 -3.6 Q-3 -6.6 -4.2 -7.8"
            stroke="#ffffff"
            strokeWidth={0.9}
            fill="none"
          />
          <path
            d="M0.6 -3.6 Q3 -6.6 4.2 -7.8"
            stroke="#ffffff"
            strokeWidth={0.9}
            fill="none"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1 1; 0.32 1; 1 1"
              dur="0.22s"
              repeatCount="indefinite"
            />
            <path d={BFLY_WING} />
          </g>
          <g transform="scale(-1 1)">
            <g>
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1 1; 0.32 1; 1 1"
                dur="0.22s"
                repeatCount="indefinite"
              />
              <path d={BFLY_WING} />
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}

export function HeroFx() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [geom, setGeom] = useState<Geom | null>(null);
  const [active, setActive] = useState<Key | null>(null);
  const [nonce, setNonce] = useState(0);

  const measure = useCallback(() => {
    const root = rootRef.current;
    const section = root?.closest("section");
    const mark = section?.querySelector<HTMLElement>(".hero-mark");
    if (!root || !section || !mark) return;
    const rr = root.getBoundingClientRect();
    const mr = mark.getBoundingClientRect();
    const mx = mr.left - rr.left;
    const my = mr.top - rr.top;

    const nodes: Geom["nodes"] = {};
    for (const k of NODE_KEYS) {
      nodes[k] = {
        x: mx + NODE_POS[k].x * mr.width,
        y: my + NODE_POS[k].y * mr.height,
      };
    }
    const targets: Geom["targets"] = {};
    section
      .querySelectorAll<HTMLElement>("[data-hero-target]")
      .forEach((el) => {
        const k = el.dataset.heroTarget as LinkKey;
        const tr = el.getBoundingClientRect();
        targets[k] = { x: tr.left - rr.left, y: tr.top - rr.top + tr.height / 2 };
      });

    setGeom({
      w: rr.width,
      h: rr.height,
      mark: { x: mx, y: my, w: mr.width, h: mr.height },
      nodes,
      center: { x: mx + CENTER.x * mr.width, y: my + CENTER.y * mr.height },
      centerR: CENTER.r * mr.width,
      targets,
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1180px) and (pointer: fine)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mq.matches && !rm.matches);
    update();
    mq.addEventListener("change", update);
    rm.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      rm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    measure();
    const section = rootRef.current?.closest("section");
    const ro = new ResizeObserver(measure);
    if (section) ro.observe(section);
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 350);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
      setGeom(null);
      setActive(null);
    };
  }, [enabled, measure]);

  // Gerçek link odaklanınca da efekti tetikle (klavye)
  useEffect(() => {
    if (!enabled) return;
    const section = rootRef.current?.closest("section");
    if (!section) return;
    const onFocusIn = (e: Event) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-hero-target]",
      );
      if (el) {
        setActive(el.dataset.heroTarget as Key);
        setNonce((n) => n + 1);
      }
    };
    const onFocusOut = () => setActive(null);
    section.addEventListener("focusin", onFocusIn);
    section.addEventListener("focusout", onFocusOut);
    return () => {
      section.removeEventListener("focusin", onFocusIn);
      section.removeEventListener("focusout", onFocusOut);
    };
  }, [enabled]);

  // Hedeflere .is-lit + mark parlaması
  useEffect(() => {
    const section = rootRef.current?.closest("section");
    if (!section) return;
    const lit: string[] = active === "all" ? LINK_KEYS : active ? [active] : [];
    section
      .querySelectorAll<HTMLElement>("[data-hero-target]")
      .forEach((el) =>
        el.classList.toggle("is-lit", lit.includes(el.dataset.heroTarget ?? "")),
      );
    section
      .querySelector<HTMLElement>(".hero-mark")
      ?.classList.toggle("is-flare", active != null);
  }, [active, nonce]);

  const trigger = (k: Key) => {
    setActive(k);
    setNonce((n) => n + 1);
  };
  const clear = () => setActive(null);

  if (!enabled) return <div ref={rootRef} className="hero-fx" aria-hidden />;

  const links: LinkKey[] =
    active === "all" ? LINK_KEYS : active ? [active] : [];

  return (
    <div ref={rootRef} className="hero-fx" aria-hidden>
      {geom && (
        <>
          {/* Ortadaki daire → hepsi bir bütün */}
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            className="hero-fx__hotspot"
            style={{
              left: geom.center.x,
              top: geom.center.y,
              width: geom.centerR * 2,
              height: geom.centerR * 2,
            }}
            onPointerEnter={() => trigger("all")}
            onPointerLeave={clear}
          >
            <span className="hero-fx__ping hero-fx__ping--all" />
          </button>

          {/* Küçük daireler */}
          {NODE_KEYS.map((k) => {
            const p = geom.nodes[k];
            if (!p) return null;
            return (
              <button
                key={k}
                type="button"
                tabIndex={-1}
                aria-hidden
                className="hero-fx__hotspot"
                style={{
                  left: p.x,
                  top: p.y,
                  width: HOTSPOT_R[k] * 2,
                  height: HOTSPOT_R[k] * 2,
                }}
                onPointerEnter={() => trigger(k)}
                onPointerLeave={clear}
              >
                <span className={`hero-fx__ping hero-fx__ping--${k}`} />
              </button>
            );
          })}

          <svg
            className="hero-fx__svg"
            viewBox={`0 0 ${geom.w} ${geom.h}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroTrailGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.65" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <filter id="heroGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="2.4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g key={nonce}>
              {active === "all" && (
                <>
                  <circle
                    className="hero-fx__ring"
                    cx={geom.center.x}
                    cy={geom.center.y}
                  />
                  {geom.targets.web &&
                    geom.targets.seo &&
                    geom.targets.social && (
                      <ButterflyRunner
                        d={smoothClosed([
                          geom.center,
                          lerp(geom.center, geom.targets.web, 0.8),
                          lerp(geom.center, geom.targets.seo, 0.82),
                          lerp(geom.center, geom.targets.social, 0.8),
                        ])}
                      />
                    )}
                </>
              )}
              {links.map((lk, i) => {
                const node = geom.nodes[lk as NodeKey];
                const from = active === "all" || !node ? geom.center : node;
                const to = geom.targets[lk];
                if (!to) return null;
                const d = curve(from, to);
                const delay = i * 0.09;
                return (
                  <g key={lk}>
                    <path
                      className="hero-fx__trail"
                      d={d}
                      pathLength={1}
                      style={{ animationDelay: `${delay}s` }}
                    />
                    <circle className="hero-fx__comet" r={3.2} opacity={0}>
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.85;1"
                        begin={`${delay}s`}
                        dur="0.62s"
                        fill="freeze"
                      />
                      <animateMotion
                        path={d}
                        begin={`${delay}s`}
                        dur="0.55s"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1"
                        keyTimes="0;1"
                      />
                    </circle>
                    <circle className="hero-fx__spark" cx={to.x} cy={to.y} r={0}>
                      <animate
                        attributeName="r"
                        values="0;6;4"
                        begin={`${0.5 + delay}s`}
                        dur="0.4s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.9;0"
                        begin={`${0.55 + delay}s`}
                        dur="0.5s"
                        fill="freeze"
                      />
                    </circle>

                    {/* Follow the white rabbit — tek düğüm efektlerinde (web, sosyal) */}
                    {active !== "all" && node ? <RabbitRunner d={d} /> : null}
                  </g>
                );
              })}
            </g>
          </svg>
        </>
      )}
    </div>
  );
}
