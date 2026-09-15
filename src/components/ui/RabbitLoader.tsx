/**
 * "Beyaz tavşanı takip et" yükleme göstergesi — hero'daki tavşan easter egg'inin
 * bağımsız (hero geometrisine bağlı olmayan), kendi kendine yeten hâli.
 * Yalnızca async bir işlem sürerken (ör. SEO analizi) gösterilir; sayfa ilk
 * yüklendiğinde render edilmez, bu yüzden SEO/CWV'yi etkilemez.
 */

const RUN_DUR = 2.6; // sn — "yavaş yavaş" koşu

export function RabbitLoader({ caption }: { caption: string }) {
  return (
    <div className="mt-3 flex flex-col items-center gap-2">
      <svg viewBox="0 0 240 40" className="h-10 w-60" aria-hidden>
        <g opacity={0}>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.06;0.88;1"
            dur={`${RUN_DUR}s`}
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 8 26 L 216 26"
            dur={`${RUN_DUR}s`}
            repeatCount="indefinite"
          />
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -3.4; 0 0"
              dur="0.36s"
              repeatCount="indefinite"
              additive="sum"
            />
            {/* Lucide "rabbit" — 24×24, sağa bakar */}
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
      </svg>
      <p className="text-xs text-[var(--color-text-faint)]">{caption}</p>
    </div>
  );
}
