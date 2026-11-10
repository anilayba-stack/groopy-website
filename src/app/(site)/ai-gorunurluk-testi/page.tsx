import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TldrBox } from "@/components/ui/TldrBox";
import { FaqList } from "@/components/ui/FaqList";
import { AiVisibilityTool } from "@/components/tools/AiVisibilityTool";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  breadcrumbSchema,
  softwareApplicationSchema,
} from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import type { Faq } from "@content/types";

export const metadata: Metadata = buildMetadata({
  title: "Markanız Yapay Zeka Aramalarında Görünüyor mu? Ücretsiz Test",
  description:
    "Markanızın Google'ın yapay zekası Gemini'de bahsedilip bahsedilmediğini ücretsiz test edin. ChatGPT, Perplexity ve Claude testleri yakında ekleniyor.",
  path: routes.aiVisibility,
  alternatePath: enRoutes.aiVisibility,
});

const faq: Faq[] = [
  {
    question: "Bu araç gerçekten ücretsiz mi?",
    answer:
      "Evet, kayıt veya ödeme gerektirmez. Google'ın Gemini modeline gerçek zamanlı iki soru sorulur ve markanızın cevapta geçip geçmediği gösterilir.",
  },
  {
    question: "ChatGPT'de markamı ne zaman test edebilirim?",
    answer:
      "Şu an için yalnızca Gemini otomatik test ediliyor; ChatGPT, Perplexity ve Claude için otomatik test yakında ekleniyor. Bu arada bu platformları manuel olarak nasıl kontrol edeceğinizi, hazır promptlarla birlikte, AI sohbet botlarında marka takibi yazımızda bulabilirsiniz.",
  },
  {
    question: "Tek bir testte markam çıkmadı, bu kötü bir işaret mi?",
    answer:
      "Tek başına hayır. AI modellerinin cevapları oturumdan oturuma değişebilir; bu yüzden tek bir sonucu kesin kabul etmemenizi, birkaç gün arayla tekrar denemenizi öneririz.",
  },
  {
    question: "Girdiğim marka adı veya sonuçlar saklanıyor mu?",
    answer: "Hayır. Her test anlık çalışır; sonuçlar bir veritabanında saklanmaz.",
  },
  {
    question: "Gemini nedir, ChatGPT'den farkı ne?",
    answer:
      "Gemini, Google'ın kendi yapay zekâ modeli — OpenAI'nin ChatGPT'si, Anthropic'in Claude'u gibi ayrı bir şirkete ait, ayrı bir model. Google Arama'nın AI Overviews özelliği de büyük ölçüde Gemini altyapısını kullanır.",
  },
];

export default function AiVisibilityPage() {
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "AI Görünürlük Testi", path: routes.aiVisibility },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          softwareApplicationSchema({
            name: "Groopy Ücretsiz AI Görünürlük Testi",
            description:
              "Markanızın Google'ın yapay zekası Gemini'de bahsedilip bahsedilmediğini ücretsiz, gerçek zamanlı test eden araç.",
            path: routes.aiVisibility,
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
          title="Markanız Yapay Zeka Aramalarında Görünüyor mu?"
          description="ChatGPT, Gemini, Perplexity ve Claude'da markanızın bahsedilip bahsedilmediğini test edin. Aşağıdaki Gemini testi şu an canlı; diğer platformlar için otomatik test yakında ekleniyor."
        />
        <div className="mt-8 max-w-2xl">
          <TldrBox>
            Marka adınızı girin; Google&apos;ın yapay zekâ modeli Gemini&apos;ye
            gerçek zamanlı iki soru sorulur (markanız doğrudan, ve varsa
            şehir+hizmet bazlı) ve markanızın cevapta geçip geçmediği, cevabın
            tamamıyla birlikte gösterilir.
          </TldrBox>
        </div>
      </Section>

      <Section className="!border-t-0 !pt-2">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Gemini (Google Yapay Zekası) ile Markanızın Görünürlüğünü Test Edin
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          Bu test, Gemini modeline canlı arama bağlantısı olmadan soruluyor —
          yani cevaplar modelin eğitim verisine dayanıyor, Google
          Arama&apos;daki &quot;AI Bakışı&quot; gibi anlık arama sonuçlarına
          değil. Bu yüzden markanız Google Arama&apos;nın AI Bakışı&apos;nda
          doğru görünse bile, burada farklı bir cevap alabilirsiniz —
          özellikle yeni veya küçük bir markaysanız. Bu test size modelin
          sizi &quot;ham bilgisiyle&quot; ne kadar tanıdığını gösterir;
          Google&apos;ın canlı yapay zekâ özelliklerindeki görünürlüğünüz
          için Search Console&apos;daki arama performansı raporu daha
          güvenilir bir kaynaktır.
        </p>
        <div className="mt-6 max-w-2xl">
          <AiVisibilityTool />
        </div>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          ChatGPT&apos;de Markanızın Görünürlüğünü Test Edin
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          Otomatik ChatGPT testi şu an bu sayfada yok, ama markanızı 2
          dakikada kendiniz test edebilirsiniz: gizli/özel bir sekmede
          ChatGPT&apos;ye oturum açmadan girin, önce &quot;[Marka adınız]
          nedir, ne yapar?&quot; sorun, sonra &quot;[Şehir]&apos;de
          [hizmetiniz] için kimi önerirsin?&quot; sorusunu deneyin. Aynı
          soruları bir de arama özelliği kapalıyken sorup cevabı
          karşılaştırın — ChatGPT&apos;nin markanız hakkındaki bilgisi iki
          farklı katmandan geliyor (dondurulmuş eğitim verisi ve canlı web
          araması) ve bu ikisi farklı sonuç verebilir.{" "}
          <Link href="/blog/ai-sohbet-botlarinda-marka-takibi">
            Dört platform için hazır promptlar ve bir kayıt şablonu
            sunduğumuz yazımızda
          </Link>{" "}
          bu yöntemi adım adım anlatıyoruz.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Perplexity&apos;de Markanızın Görünürlüğünü Test Edin
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          Otomatik Perplexity testi şu an bu sayfada yok. Kendiniz test etmek
          için gizli bir sekmede Perplexity&apos;ye girin ve &quot;[Marka
          adınız] hakkında bilgi ver&quot; ile &quot;[Şehir]&apos;de
          [hizmetiniz] için en iyi seçenekler neler?&quot; sorularını
          deneyin. Perplexity&apos;nin farkı: her cevabın altında kaynak
          linkleri gösterir — markanız geçtiğinde hangi sayfaya link
          verdiğine bakın, bu size hangi içeriğinizin kaynak olarak
          görüldüğünü gösterir.{" "}
          <Link href="/blog/ai-sohbet-botlarinda-marka-takibi">
            Yazımızda bu yöntemi ve dört platform için hazır bir kayıt
            şablonunu
          </Link>{" "}
          bulabilirsiniz.
        </p>
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Claude&apos;da Markanızın Görünürlüğünü Test Edin
        </h2>
        <p className="prose-groopy mt-3 max-w-2xl">
          Otomatik Claude testi şu an bu sayfada yok. Kendiniz test etmek
          için gizli bir sekmede Claude&apos;a &quot;[Marka adınız] hakkında
          ne biliyorsun?&quot; ve &quot;[Şehir]&apos;de [hizmetiniz] için
          kimi önerirsin?&quot; sorularını sorun. Claude, web araması açık
          olmadığı sürece büyük ölçüde eğitim verisine dayanır; yeni veya
          küçük bir marka için bu durumda hiç geçmemek normaldir, panik
          sebebi değildir.{" "}
          <Link href="/blog/ai-sohbet-botlarinda-marka-takibi">
            Yazımızda bu yöntemi ve dört platform için hazır bir kayıt
            şablonunu
          </Link>{" "}
          bulabilirsiniz.
        </p>
      </Section>

      <Section surface>
        <div className="max-w-3xl">
          <FaqList items={faq} />
        </div>
      </Section>
    </>
  );
}
