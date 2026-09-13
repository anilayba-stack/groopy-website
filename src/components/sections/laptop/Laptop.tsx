"use client";

import { useEffect, useRef } from "react";
import { diagnostics } from "@content/diagnostics";
import { DiagnosticScreen } from "./Screens";

const REST_RX = 8;
const REST_RY = -17;

export function Laptop({ activeId }: { activeId: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const laptop = laptopRef.current;
    if (!stage || !laptop) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const target = { rx: REST_RX, ry: REST_RY };
    const cur = { rx: REST_RX, ry: REST_RY };
    let raf = 0;

    const tick = () => {
      cur.rx += (target.rx - cur.rx) * 0.12;
      cur.ry += (target.ry - cur.ry) * 0.12;
      laptop.style.setProperty("--rx", `${cur.rx.toFixed(2)}deg`);
      laptop.style.setProperty("--ry", `${cur.ry.toFixed(2)}deg`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.ry = REST_RY + px * 16;
      target.rx = REST_RX - py * 12;
      laptop.classList.add("is-live");
    };
    const onLeave = () => {
      target.rx = REST_RX;
      target.ry = REST_RY;
      laptop.classList.remove("is-live");
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="laptop-stage">
      <div ref={laptopRef} className="laptop">
        <div className="laptop__bloom" aria-hidden />
        <div className="laptop__lid">
          <span className="laptop__cam" />
          <div className="laptop__screen">
            {diagnostics.map((d) => (
              <DiagnosticScreen key={d.id} d={d} active={d.id === activeId} />
            ))}
          </div>
        </div>
        <div className="laptop__hinge" aria-hidden />
        <div className="laptop__deck" aria-hidden />
        <div className="laptop__shadow" aria-hidden />
      </div>
    </div>
  );
}
