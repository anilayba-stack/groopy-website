import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Groopy, İstanbul merkezli bir yazılım şirketi. Kurucu Anıl Ay. Web geliştirme, SEO + GEO ve sosyal medya yönetimi hizmetleri verir.",
  path: routes.about,
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.founder.name,
  jobTitle: SITE.founder.role,
  worksFor: { "@id": `${SITE.url}/#organization` },
};

export default function AboutPage() {
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "Hakkımızda", path: routes.about },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), personSchema]} />
      <Container className="pt-10">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Section className="!border-t-0 !pt-2">
        <SectionHeading
          eyebrow="Hakkımızda"
          title="Groopy bir yazılım şirketi"
          description="İstanbul merkezliyiz; Türkiye ve yurt dışındaki işletmelere hizmet veriyoruz. Ajans değil, mühendislik odaklı bir yazılım şirketiyiz."
        />
        <div className="prose-groopy mt-8 max-w-3xl">
          <p>
            Groopy; web sitesi ve yazılım geliştirme, SEO&nbsp;+&nbsp;GEO
            stratejisi ve sosyal medya yönetimi hizmetleri verir. İşimizin
            merkezinde yazılım var: hazır tema kullanmadan, ölçülebilir bir iş
            hedefine bağlı ürünler geliştiriyoruz.
          </p>
          <h2>Nasıl çalışırız</h2>
          <ul>
            <li>
              <strong>Kanıt önce.</strong> Slogan yerine ölçülebilir sonuç. Bu
              sitenin kendisi de bizim ölçütlerimizle yapıldı.
            </li>
            <li>
              <strong>Şeffaflık.</strong> Kapsam, takvim ve fiyat yazılı hale
              gelmeden başlamıyoruz. Kod müşterinindir.
            </li>
            <li>
              <strong>Odak.</strong> Her şeyi yapan bir yapı değiliz. Üç ana
              hizmete odaklanırız — web sitesi ve yazılım geliştirme, SEO&nbsp;+&nbsp;GEO,
              sosyal medya yönetimi — ve her biri bağımsız olarak sunulur.
            </li>
          </ul>
          <h2>Ekip</h2>
          <p>
            {SITE.founder.name} tarafından kuruldu. Proje bazında tasarım, içerik
            ve prodüksiyon için birlikte çalıştığımız uzmanlarla ilerliyoruz.
          </p>
          <h2>Konum</h2>
          <p>
            Şu an tamamen online çalışıyoruz; fiziksel ofis yok. Görüşmeleri
            görüntülü yapıyor, projeleri uzaktan yürütüyoruz.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
