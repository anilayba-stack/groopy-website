import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { primaryServices } from "@content/services";
import type { Faq } from "@content/types";

export const metadata: Metadata = buildMetadata({
  title: "Hizmetler",
  description:
    "Groopy'nin hizmetleri: web sitesi ve yazılım geliştirme, SEO + GEO stratejisi, Google Reklam Yönetimi ve sosyal medya yönetimi.",
  path: routes.services,
  alternatePath: enRoutes.services,
});

const faq: Faq[] = [
  {
    question: "Dört hizmeti birlikte mi almam gerekiyor?",
    answer:
      "Hayır. Web sitesi/yazılım geliştirme, SEO + GEO, Google Reklam Yönetimi ve sosyal medya yönetimi birbirinden bağımsız hizmetler; yalnızca birini de alabilirsiniz. Birlikte alındıklarında tek ekipten yürüdükleri için koordinasyon kaybı olmuyor, ama bu bir zorunluluk değil.",
  },
  {
    question: "Hangi hizmetle başlamalıyım?",
    answer:
      "Sitesi olmayan ya da teknik temeli zayıf (yavaş, mobil uyumsuz, eski bir sistemle kurulu) işletmeler için ilk adım web sitesi geliştirme. Sitesi sağlam ama Google'da ya da yapay zeka aramalarında görünmüyorsanız SEO + GEO önceliklidir. Anında, ücretli bir görünürlük istiyorsanız Google Reklam Yönetimi; düzenli içerikle marka varlığınızı sürdürmek istiyorsanız sosyal medya yönetimi devreye girer.",
  },
  {
    question: "Birden fazla hizmeti aynı anda başlatabilir miyim?",
    answer:
      "Evet. Örneğin web sitesi geliştirme sürerken SEO + GEO temelini aynı anda kurmak, siteyi yayına aldığınızda sıfırdan başlamak yerine hazır bir görünürlük altyapısıyla çıkmanızı sağlar. Tek sınır, henüz yayında olmayan bir site için Google Reklam Yönetimi'nin anlamlı bir hedefe (örneğin bir açılış sayfasına) ihtiyaç duymasıdır.",
  },
  {
    question: "Fiyatlar nasıl belirleniyor?",
    answer:
      "Her hizmetin kapsamı işletmenize göre değişir; net bir teklif ancak kısa bir görüşmeden sonra verilir. Web sitesi ve sosyal medya yönetimi için genel fiyat aralıklarını web sitesi maliyeti ve sosyal medya yönetimi fiyatları yazılarımızda paylaştık.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Ana sayfa", path: "/" },
            { name: "Hizmetler", path: routes.services },
          ]),
          faqSchema(faq),
        ]}
      />
      <Container className="pt-10">
        <Breadcrumbs
          items={[
            { name: "Ana sayfa", path: "/" },
            { name: "Hizmetler", path: routes.services },
          ]}
        />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          as="h1"
          eyebrow="Hizmetler"
          title="Ne yapıyoruz"
          description="Dört ana hizmetimiz — web sitesi ve yazılım geliştirme, SEO + GEO, Google Reklam Yönetimi, sosyal medya yönetimi — birbirinden bağımsızdır; ayrı ayrı ya da bütünleşik biçimde sunulur."
        />
      </Section>

      <Section className="!border-t-0 !pt-0">
        <ServiceCards services={primaryServices} />
      </Section>

      <Section surface>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
          Hangi hizmete ne zaman öncelik verilir?
        </h2>
        <div className="prose-groopy mt-6 max-w-2xl">
          <p>
            Dört hizmetin her biri farklı bir soruna cevap veriyor; hangisiyle
            başlayacağınız işletmenizin şu anki durumuna bağlı.
          </p>
          <dl>
            {primaryServices.map((s) => (
              <div key={s.slug} className="mb-6">
                <dt className="font-semibold text-[var(--color-text)]">
                  <Link href={routes.service(s.slug)}>{s.navLabel}</Link>
                </dt>
                <dd className="mt-1">{s.tldr}</dd>
              </div>
            ))}
          </dl>
        </div>
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
