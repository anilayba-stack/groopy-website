"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { clients, clientsAriaLabel, type Client } from "@content/clients";

const BASE_LOGO_H = 36;

function Item({ client }: { client: Client }) {
  const wordmark = (
    <span className="marquee__word whitespace-nowrap text-lg font-medium tracking-tight">
      {client.name}
    </span>
  );

  const inner = client.logo ? (
    <>
      <Image
        src={client.logo.src}
        alt={client.name}
        width={client.logo.w}
        height={client.logo.h}
        className="marquee__logo w-auto max-w-[190px] object-contain"
        style={{ height: BASE_LOGO_H * (client.logo.scale ?? 1) }}
      />
      {client.logo.withName ? wordmark : null}
    </>
  ) : (
    wordmark
  );

  const cls = "marquee__item flex shrink-0 items-center gap-3 px-10";

  return client.url ? (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      aria-label={client.name}
    >
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  );
}

/**
 * Hero altında soldan sağa akan marka şeridi.
 * - İçerik birkaç kez basılır → dikişsiz döngü (tek `translateX`, GPU).
 * - Şeride hover → akış durur; öğeye hover → o öğe belirginleşir.
 * - Ekrandan çıkınca durur (IntersectionObserver). Görünür etiket yok.
 * - Liste boşsa hiç render edilmez.
 */
export function ClientMarquee({ ariaLabel = clientsAriaLabel }: { ariaLabel?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => el.toggleAttribute("data-io-hidden", !e.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (clients.length === 0) return null;

  const row = [...clients, ...clients, ...clients, ...clients];

  return (
    <section ref={ref} className="marquee py-9" aria-label={ariaLabel}>
      <div className="marquee__mask">
        <div className="marquee__track">
          {row.map((c, i) => (
            <Item key={`${c.name}-${i}`} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
