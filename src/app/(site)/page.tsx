import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ProofBand } from "@/components/sections/ProofBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { enRoutes } from "@/lib/routes";
import type { Faq } from "@content/types";
import { primaryServices } from "@content/services";

export const metadata: Metadata = buildMetadata({
  title: "İstanbul web sitesi geliştirme, SEO ve GEO",
  description:
    "İstanbul merkezli yazılım şirketi Groopy; web sitesi geliştirme, SEO + GEO ve sosyal medya yönetimiyle işletmenizi Google ve yapay zekâ aramalarında görünür kılar.",
  path: "/",
  isHome: true,
  alternatePath: enRoutes.home,
});

const homeFaq: Faq[] = [
  {
    question: "Groopy nerede ve nasıl çalışıyor?",
    answer:
      "Groopy, İstanbul merkezli bir yazılım şirketi olarak web sitesi geliştirme, SEO + GEO stratejisi ve sosyal medya yönetimi hizmetleri sunar. Türkiye'nin her yerinden ve yurt dışından işletmelerle çalışılır; görüşmeler çevrimiçi veya yüz yüze yapılır.",
  },
  {
    question: "Fiyatlar nasıl belirleniyor?",
    answer:
      "Ücret, her projenin kapsamına göre belirlenir; sabit paket yoktur. Keşif görüşmesinin ardından kapsam, takvim ve ücret yazılı olarak paylaşılır; süreç içinde sürpriz maliyet çıkmaz.",
  },
  {
    question: "Bir proje nasıl ilerliyor?",
    answer:
      "Dört adımda: keşif (iş hedefi ve başarı ölçütü), plan (kapsam, takvim, fiyat), üretim (tasarım ve geliştirme, ara onaylarla) ve yayın (performans, arama görünürlüğü ve dönüşüm takibi).",
  },
  {
    question: "Yayından sonra destek veriliyor mu?",
    answer:
      "Evet. Yayın sonrası ilk dönemde performans ve arama görünürlüğü izlenir, ince ayar yapılır. Sürekli bakım, güncelleme ve geliştirme için isteğe bağlı bakım anlaşması sunulur.",
  },
  {
    question: "Hizmetlerin tek tek mi alınması gerekir?",
    answer:
      "Hayır. Web sitesi geliştirme, SEO + GEO ve sosyal medya yönetimi birbirinden bağımsızdır; yalnızca biri de alınabilir. Birlikte planlandığında ölçüm ve raporlama tek yerde toplanır, ancak bu zorunlu değildir.",
  },
];

const companyProcess = [
  {
    title: "Keşif",
    description:
      "İş hedefi, hedef kitle ve başarı ölçütü konuşulur. Ne yapacağımız yazılı hale gelir.",
  },
  {
    title: "Plan",
    description: "Kapsam, takvim ve fiyat netleşir. Sürprizsiz.",
  },
  {
    title: "Üretim",
    description:
      "Tasarım ve geliştirme birlikte ilerler; ara onaylarla netleştiririz.",
  },
  {
    title: "Yayın ve ölçüm",
    description:
      "Performans, arama görünürlüğü ve dönüşüm izlenir; ilk aylarda ince ayar yapılır.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <DiagnosticSection />

      <Section>
        <SectionHeading
          eyebrow="Ana hizmetler"
          title="Web sitesi geliştirme, SEO + GEO ve sosyal medya yönetimi"
          description="İstanbul merkezli yazılım şirketi Groopy; kurumsal web sitesi geliştirme, SEO, GEO (yapay zekâ arama optimizasyonu) ve sosyal medya yönetimi hizmetleri sunar. Hepsi, markanızın Google'da ve sosyal medyada büyümesine yöneliktir."
        />
        <div className="mt-10">
          <ServiceCards services={primaryServices} />
        </div>
      </Section>

      <Section surface>
        <ProofBand />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Yaklaşım"
          title="Nasıl çalışıyoruz"
        />
        <div className="mt-10">
          <ProcessSteps steps={companyProcess} />
        </div>
      </Section>

      <Section surface>
        <JsonLd data={faqSchema(homeFaq)} />
        <div className="max-w-3xl">
          <FaqList items={homeFaq} title="Sık sorulan sorular" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
