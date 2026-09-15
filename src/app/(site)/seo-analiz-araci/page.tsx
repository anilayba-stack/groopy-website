import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TldrBox } from "@/components/ui/TldrBox";
import { FaqList } from "@/components/ui/FaqList";
import { CtaBand } from "@/components/sections/CtaBand";
import { SeoAnalyzerTool } from "@/components/tools/SeoAnalyzerTool";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import type { Faq } from "@content/types";

export const metadata: Metadata = buildMetadata({
  title: "Ücretsiz SEO Analiz Aracı",
  description:
    "Web sitenizin SEO puanını ücretsiz hesaplayın. Başlık, meta açıklama, mobil uyum, yapılandırılmış veri ve yapay zekâ arama erişimi gibi gerçek kriterlere göre saniyeler içinde web sitesi analizi yapın.",
  path: routes.seoTool,
  alternatePath: enRoutes.seoTool,
});

const criteria = [
  "Sayfa başlığı (title) ve meta açıklama uzunluğu",
  "H1 başlığı ve görsellerde alt etiketi kullanımı",
  "Mobil uyum (viewport) ve canonical etiketi",
  "HTTPS kullanımı",
  "Yapılandırılmış veri (JSON-LD) ve Open Graph etiketleri",
  "İçerik derinliği (kelime sayısı)",
  "Yapay zekâ botlarına (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) erişim — GEO sinyali",
  "Google PageSpeed Insights ile gerçek sayfa hızı ve Core Web Vitals (varsa)",
];

const faq: Faq[] = [
  {
    question: "SEO puanı nasıl hesaplanıyor?",
    answer:
      "Girilen adresin HTML'i o an gerçekten çekilir ve yukarıdaki kriterler tek tek kontrol edilir. Puan, bu kontrollerin ağırlıklı toplamından hesaplanır — uydurma veya rastgele bir sayı gösterilmez.",
  },
  {
    question: "Bu araç gerçekten ücretsiz mi?",
    answer: "Evet, kayıt veya ödeme gerektirmez; istediğiniz kadar site analiz edebilirsiniz.",
  },
  {
    question: "Girdiğim site adresi veya sonuçlar saklanıyor mu?",
    answer:
      "Hayır. Analiz her seferinde yeniden çalışır; sonuçlar bir veritabanında saklanmaz.",
  },
  {
    question: "Google PageSpeed Insights ile farkı ne?",
    answer:
      "Bu araç, PageSpeed'in ölçtüğü hız verisine ek olarak SEO temelleri ve yapay zekâ arama erişimi (GEO) gibi Google'ın kendi aracının kapsamadığı kriterleri de kontrol eder.",
  },
];

export default function SeoToolPage() {
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Ücretsiz SEO Analiz Aracı", path: routes.seoTool },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(faq),
          softwareApplicationSchema({
            name: "Groopy Ücretsiz SEO Analiz Aracı",
            description:
              "Herhangi bir web sitesinin SEO ve GEO (yapay zekâ arama) puanını ücretsiz, gerçek zamanlı hesaplayan araç.",
            path: routes.seoTool,
          }),
        ]}
      />
      <Container className="pt-10">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Ücretsiz Araç"
          title="Ücretsiz SEO Analiz Aracı"
          description="Web sitenizin SEO puanını ücretsiz hesaplayın; başlık, açıklama, mobil uyum, yapılandırılmış veri ve yapay zekâ arama erişimi gibi gerçek kriterlere göre saniyeler içinde web sitesi analizi yapın."
        />
        <div className="mt-8 max-w-2xl">
          <TldrBox>
            Web adresinizi girin; sayfa gerçek zamanlı olarak çekilip title,
            açıklama, H1, mobil uyum, yapılandırılmış veri ve yapay zekâ
            botlarına erişim gibi kriterlere göre puanlanır. Sonuçta eksik
            çıkan maddeler için Groopy&apos;ye WhatsApp&apos;tan ulaşabilirsiniz.
          </TldrBox>
        </div>

        <div className="mt-8 max-w-2xl">
          <SeoAnalyzerTool />
        </div>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Hangi kriterler kontrol ediliyor?
        </h2>
        <ul className="prose-groopy mt-6 max-w-2xl">
          {criteria.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
