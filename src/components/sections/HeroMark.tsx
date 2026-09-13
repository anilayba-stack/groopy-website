"use client";

import { useEffect, useRef } from "react";

/**
 * Hero logo işareti — süzülen ışık + nefes alan hale.
 * Performans: animasyonlar YALNIZCA fare hero üzerindeyken çalışır
 * (`.hero-band[data-hot]`); ping'ler ise hero görünürken (IntersectionObserver).
 * Stiller: globals.css `.hero-mark*`.
 */
export function HeroMark({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = ref.current?.closest<HTMLElement>(".hero-band");
    if (!band) return;

    const io = new IntersectionObserver(
      ([entry]) => band.toggleAttribute("data-io-hidden", !entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(band);

    const hot = () => band.setAttribute("data-hot", "");
    const cold = () => band.removeAttribute("data-hot");
    band.addEventListener("pointerenter", hot);
    band.addEventListener("pointerleave", cold);

    return () => {
      io.disconnect();
      band.removeEventListener("pointerenter", hot);
      band.removeEventListener("pointerleave", cold);
      band.removeAttribute("data-hot");
    };
  }, []);

  return (
    <div ref={ref} className={`hero-mark ${className}`} aria-hidden>
      <div className="hero-mark__aura" />
      <div className="hero-mark__layer hero-mark__base" />
      <div className="hero-mark__layer hero-mark__sheen" />
    </div>
  );
}
