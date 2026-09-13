import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.tagline}`;

const logoDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "logo-mark.png"),
).toString("base64")}`;

/** Tüm sayfalar için varsayılan OG görseli. Sistem fontuyla, dış kaynak yok. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "80px",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img src={logoDataUri} width={44} height={40} alt="" />
          <div style={{ fontSize: 30, fontWeight: 600 }}>{SITE.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 900,
              letterSpacing: "-0.02em",
            }}
          >
            İşletmeniz için hızlı, bulunabilir web siteleri ve yazılım.
          </div>
          <div style={{ fontSize: 27, color: "#a1a1aa" }}>
            Web geliştirme · SEO + GEO · Sosyal medya yönetimi
          </div>
        </div>
      </div>
    ),
    size,
  );
}
