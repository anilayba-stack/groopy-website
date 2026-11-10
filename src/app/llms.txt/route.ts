import { SITE } from "@/lib/site-config";
import { routes, enRoutes } from "@/lib/routes";
import { services } from "@content/services";
import { services as enServices } from "@content/en/services";
import { sortedPosts } from "@content/blog";
import { sortedPosts as enSortedPosts } from "@content/en/blog";

/**
 * /llms.txt — bazı yapay zeka araçları için düz metin özet.
 * Zorunlu değil; Google yok sayar. Bkz. docs/research/03-geo-stratejisi.md.
 */
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.descriptionTr}`,
    "",
    `İletişim: ${SITE.contact.email} · ${SITE.contact.phoneDisplay}`,
    `Konum: online (İstanbul merkezli), hizmet alanı: ${SITE.areaServed.join(", ")}`,
    "",
    "## Hizmetler",
  ];

  for (const s of services) {
    lines.push(
      `- [${s.navLabel}](${SITE.url}${routes.service(s.slug)}): ${s.summary}`,
    );
  }

  lines.push(
    "",
    "## Ücretsiz Araçlar",
    `- [Ücretsiz SEO Analiz Aracı](${SITE.url}${routes.seoTool}): Herhangi bir web sitesinin SEO ve GEO (yapay zekâ arama) puanını gerçek zamanlı, ücretsiz hesaplar — kayıt gerektirmez.`,
    `- [Ücretsiz AI Görünürlük Testi](${SITE.url}${routes.aiVisibility}): Markanızın Gemini (Google'ın yapay zekâsı) tarafından bahsedilip bahsedilmediğini gerçek zamanlı, ücretsiz test eder.`,
  );

  lines.push("", "## Blog");
  for (const p of sortedPosts()) {
    lines.push(`- [${p.meta.title}](${SITE.url}${routes.post(p.meta.slug)})`);
  }

  lines.push(
    "",
    "## Sayfalar",
    `- [Hizmetler](${SITE.url}${routes.services})`,
    `- [Çalışmalar](${SITE.url}${routes.work})`,
    `- [Hakkımızda](${SITE.url}${routes.about})`,
    `- [İletişim](${SITE.url}${routes.contact})`,
    "",
    "---",
    "",
    `# ${SITE.name} (English)`,
    "",
    `> ${SITE.descriptionEn}`,
    "",
    `Contact: ${SITE.contact.email} · ${SITE.contact.phoneDisplay}`,
    `Location: online (based in Istanbul), service area: ${SITE.areaServed.join(", ")}`,
    "",
    "## Services",
  );

  for (const s of enServices) {
    lines.push(
      `- [${s.navLabel}](${SITE.url}${enRoutes.service(s.slug)}): ${s.summary}`,
    );
  }

  lines.push(
    "",
    "## Free Tools",
    `- [Free SEO Checker Tool](${SITE.url}${enRoutes.seoTool}): Calculates any website's SEO and GEO (AI search) score in real time, for free — no signup required.`,
    `- [Free AI Visibility Check](${SITE.url}${enRoutes.aiVisibility}): Tests in real time, for free, whether your brand is mentioned by Gemini (Google's AI).`,
  );

  lines.push("", "## Blog");
  for (const p of enSortedPosts()) {
    lines.push(`- [${p.meta.title}](${SITE.url}${enRoutes.post(p.meta.slug)})`);
  }

  lines.push(
    "",
    "## Pages",
    `- [Services](${SITE.url}${enRoutes.services})`,
    `- [Case Studies](${SITE.url}${enRoutes.work})`,
    `- [About](${SITE.url}${enRoutes.about})`,
    `- [Contact](${SITE.url}${enRoutes.contact})`,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
