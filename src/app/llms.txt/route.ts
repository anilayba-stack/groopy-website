import { SITE } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import { services } from "@content/services";
import { sortedPosts } from "@content/blog";

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
    `- [Ücretsiz SEO Analiz Aracı](${SITE.url}${routes.seoTool})`,
    `- [İletişim](${SITE.url}${routes.contact})`,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
