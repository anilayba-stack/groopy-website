import type { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { enRoutes, routes } from "@/lib/routes";
import { SITE, whatsappUrl } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Groopy. We start with a short discovery call; we don't quote a price before scope and timeline are clear.",
  path: enRoutes.contact,
  locale: "en",
  alternatePath: routes.contact,
});

export default function EnContactPage() {
  const crumbs = [
    { name: "Home", path: enRoutes.home },
    { name: "Contact", path: enRoutes.contact },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Container className="py-10">
        <Breadcrumbs ariaLabel="Breadcrumb" items={crumbs} />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Get a quote
            </h1>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)]">
              Briefly describe your project and goal. We respond within 1–2
              business days, and set up a short call if needed.
            </p>

            <div className="mt-8 space-y-4 text-sm">
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
                  href={whatsappUrl("Hi, I'd like to get a quote for a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
