import type { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { SITE, whatsappUrl } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Groopy ile iletişime geçin. Kısa bir keşif görüşmesiyle başlıyoruz; kapsam ve takvim netleşmeden fiyat vermiyoruz.",
  path: routes.contact,
});

export default function ContactPage() {
  const crumbs = [
    { name: "Ana sayfa", path: "/" },
    { name: "İletişim", path: routes.contact },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Container className="py-10">
        <Breadcrumbs items={crumbs} />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Teklif alın
            </h1>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
              Projenizi ve hedefinizi kısaca yazın. 1–2 iş günü içinde dönüş
              yapılır, gerekirse kısa bir görüşme planlanır.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-[var(--color-accent)]" aria-hidden />
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  {SITE.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-[var(--color-accent)]" aria-hidden />
                <a
                  href={`tel:${SITE.contact.phone}`}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  {SITE.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle
                  className="size-4 text-[var(--color-accent)]"
                  aria-hidden
                />
                <a
                  href={whatsappUrl("Merhaba, bir proje için teklif almak istiyorum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  WhatsApp
                </a>
              </div>
            </dl>

            <p className="mt-8 text-xs leading-relaxed text-[var(--color-text-faint)]">
              Groopy şu an tamamen online hizmet vermektedir; fiziksel ofis
              ziyareti yerine görüntülü görüşme yapıyoruz.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
