import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes, enRoutes } from "@/lib/routes";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Groopy, İstanbul merkezli bir yazılım şirketi. Kurucu Anıl Ay. Web geliştirme, SEO + GEO ve sosyal medya yönetimi hizmetleri verir.",
  path: routes.about,
  alternatePath: enRoutes.about,
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
          description="Groopy, İstanbul merkezli bir yazılım şirketidir; Türkiye ve yurt dışındaki işletmelere hizmet verir. Ajans değil, mühendislik odaklı bir yapı benimsenir."
        />
        <div className="prose-groopy mt-8 max-w-3xl">
          <p>
            Groopy; web sitesi ve yazılım geliştirme, SEO&nbsp;+&nbsp;GEO
            stratejisi ve sosyal medya yönetimi hizmetleri sunar. İşin
            merkezinde yazılım vardır: hazır tema kullanılmadan, ölçülebilir
            bir iş hedefine bağlı ürünler geliştirilir.
          </p>
          <h2>Çalışma ilkeleri</h2>
          <ul>
            <li>
              <strong>Mühendislik disiplini.</strong> Pazarlama dili yerine
              ölçülebilir sonuç esas alınır; her proje kod sahipliği ve
              teknik dokümantasyonla yürütülür.
            </li>
            <li>
              <strong>Şeffaflık.</strong> Kapsam, takvim ve fiyat yazılı hale
              gelmeden işe başlanmaz. Kod müşteriye aittir.
            </li>
            <li>
              <strong>Odak.</strong> Her işi yapan bir yapı hedeflenmez. Üç
              ana hizmete odaklanılır — web sitesi ve yazılım geliştirme,
              SEO&nbsp;+&nbsp;GEO, sosyal medya yönetimi — ve her biri
              bağımsız olarak sunulur.
            </li>
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
