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
    "SEO puanınızı ücretsiz hesaplayın. Başlık, mobil uyum, yapılandırılmış veri ve yapay zekâ erişimi gibi gerçek kriterlere göre saniyeler içinde analiz yapın.",
  path: routes.seoTool,
  alternatePath: enRoutes.seoTool,
});

const criteria: { label: string; weight: number; rule: string }[] = [
  { label: "Sayfa başlığı (title)", weight: 12, rule: "Etiket var ve 60 karakterin altında" },
  { label: "Meta açıklama", weight: 10, rule: "50-160 karakter arasında (önerilen: 120-160)" },
  { label: "H1 başlığı", weight: 8, rule: "Sayfada tam olarak bir tane H1 var" },
  { label: "Mobil uyum (viewport)", weight: 8, rule: "Viewport meta etiketi mevcut" },
  { label: "HTTPS", weight: 7, rule: "Site HTTPS üzerinden sunuluyor" },
  { label: "Yapılandırılmış veri (JSON-LD)", weight: 7, rule: "Sayfada en az bir JSON-LD script'i var" },
  { label: "Görsel alt etiketleri", weight: 6, rule: "Görsellerin en az %80'inde alt etiketi var" },
  { label: "İçerik derinliği", weight: 6, rule: "Sayfada en az 300 kelime var" },
  {
    label: "Yapay zekâ arama erişimi (GEO)",
    weight: 6,
    rule: "GPTBot, ClaudeBot, PerplexityBot, Google-Extended robots.txt'te engellenmemiş",
  },
  { label: "Open Graph etiketleri", weight: 5, rule: "og:title ve og:description mevcut" },
  { label: "Canonical etiketi", weight: 5, rule: "Sayfada canonical link etiketi var" },
  {
    label: "Google PageSpeed (performans)",
    weight: 20,
    rule: "Mobil performans skoru kullanılır — yalnızca bu araca PageSpeed erişimi tanımlıysa puana dahil edilir",
  },
];

const fixes: { problem: string; fix: string }[] = [
  {
    problem: "Title yok ya da 60 karakterden uzun",
    fix: "Her sayfaya, o sayfaya özgü ve arama sonucunda kesilmeyecek kadar kısa (50-60 karakter) bir <title> etiketi ekleyin.",
  },
  {
    problem: "Meta açıklama eksik ya da çok kısa/uzun",
    fix: "Sayfanın içeriğini gerçekçi şekilde özetleyen, 120-160 karakter arası bir meta description yazın; anahtar kelimeyi doğal şekilde geçirin.",
  },
  {
    problem: "Birden fazla H1 ya da hiç H1 yok",
    fix: "Sayfada tek bir H1 kullanın — bu, sayfanın ana konusunu hem kullanıcıya hem arama motoruna netleştirir.",
  },
  {
    problem: "Görsellerin çoğunda alt etiketi yok",
    fix: "Her görsele açıklayıcı bir alt metni ekleyin; tamamen dekoratif görsellerde boş alt=\"\" da geçerlidir, önemli olan etiketin hiç eksik olmaması.",
  },
  {
    problem: "İçerik 300 kelimenin altında",
    fix: "Sayfaya, ziyaretçinin sorusunu gerçekten yanıtlayan somut bir metin bloğu ekleyin — kelime sayısını doldurmak için tekrar yazmak puanı düşürür, gerçek bilgi ekler.",
  },
  {
    problem: "Yapay zekâ botları (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) engelli",
    fix: "robots.txt dosyanızda bu botlara Disallow uygulamayın; AI arama motorlarında (ChatGPT, Perplexity, Google AI Overviews) atıf almanın ön koşulu erişilebilir olmaktır.",
  },
];

const faq: Faq[] = [
  {
    question: "SEO puanı nasıl hesaplanıyor?",
    answer:
      "Girilen adresin HTML'i o an gerçekten çekilir ve yukarıdaki kriterler tek tek kontrol edilir. Puan, bu kontrollerin ağırlıklı toplamından hesaplanır — uydurma veya rastgele bir sayı gösterilmez.",
  },
  {
    question: "80 puanın altındaysam kötü mü?",
    answer:
      "Tek başına değil. Puan, hangi maddelerin eksik olduğunu göstermek için var — asıl önemli olan sonuçtaki detay listesinde hangi kriterlerin geçmediğini görüp önceliklendirmek. Bir e-ticaret sitesi için kritik olan bir eksik, bir blog için önemsiz olabilir.",
  },
  {
    question: "PageSpeed puanı bazen neden görünmüyor?",
    answer:
      "Google PageSpeed Insights analizi (Core Web Vitals dahil) yalnızca bu araca API erişimi tanımlıysa çalışır; tanımlı değilse bu 20 puanlık kriter atlanır ve toplam skor geri kalan 80 puan üzerinden hesaplanır. Bu durumda diğer kriterlerin tamamını geçen bir sayfa yine 100 gösterir.",
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
          Puanlama nasıl çalışıyor?
        </h2>
        <p className="prose-groopy mt-4 max-w-2xl">
          Toplam puan, aşağıdaki kriterlerin ağırlıklı toplamı. PageSpeed
          hariç 11 kriter 80 puanlık tabanı oluşturur; Google PageSpeed
          erişimi tanımlıysa buna 20 puanlık bir performans kriteri daha
          eklenir.
        </p>
        <div className="prose-groopy mt-6 max-w-2xl overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Kriter</th>
                <th>Ağırlık</th>
                <th>Geçme koşulu</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.label}>
                  <td>{c.label}</td>
                  <td>{c.weight}</td>
                  <td>{c.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Sık görülen sorunlar ve düzeltme yolları
        </h2>
        <div className="prose-groopy mt-6 max-w-2xl">
          <dl>
            {fixes.map((f) => (
              <div key={f.problem} className="mb-6">
                <dt className="font-semibold text-[var(--color-text)]">{f.problem}</dt>
                <dd className="mt-1">{f.fix}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section surface>
        <div className="max-w-3xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
