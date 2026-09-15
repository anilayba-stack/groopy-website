import { SITE } from "./site-config";

export type ContactLocale = "tr" | "en";

export interface ContactInput {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MESSAGES: Record<
  ContactLocale,
  {
    botRejected: string;
    nameRequired: string;
    nameTooLong: string;
    emailInvalid: string;
    messageTooShort: string;
    messageTooLong: string;
  }
> = {
  tr: {
    botRejected: "Gönderim reddedildi.",
    nameRequired: "Adınızı yazın.",
    nameTooLong: "Ad çok uzun.",
    emailInvalid: "Geçerli bir e-posta yazın.",
    messageTooShort: "Mesajınız en az 10 karakter olmalı.",
    messageTooLong: "Mesaj çok uzun.",
  },
  en: {
    botRejected: "Submission rejected.",
    nameRequired: "Please enter your name.",
    nameTooLong: "Name is too long.",
    emailInvalid: "Please enter a valid email address.",
    messageTooShort: "Your message must be at least 10 characters.",
    messageTooLong: "Message is too long.",
  },
};

/** Sunucu tarafı doğrulama — veri minimizasyonu: yalnızca ad, e-posta, mesaj zorunlu. */
export function validateContact(
  raw: {
    name?: unknown;
    email?: unknown;
    company?: unknown;
    message?: unknown;
    /** honeypot */
    website?: unknown;
  },
  locale: ContactLocale = "tr",
): { data?: ContactInput; errors?: FieldErrors } {
  const t = MESSAGES[locale];

  // Bot tuzağı — doldurulmuşsa sessizce reddet.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return { errors: { form: t.botRejected } };
  }

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const company =
    typeof raw.company === "string" ? raw.company.trim() : undefined;
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  const errors: FieldErrors = {};
  if (name.length < 2) errors.name = t.nameRequired;
  if (name.length > 120) errors.name = t.nameTooLong;
  if (!EMAIL_RE.test(email)) errors.email = t.emailInvalid;
  if (message.length < 10) errors.message = t.messageTooShort;
  if (message.length > 4000) errors.message = t.messageTooLong;

  if (Object.keys(errors).length > 0) return { errors };
  return { data: { name, email, company, message } };
}

/**
 * Talebi iletir.
 *
 * TODO(entegrasyon): Gerçek e-posta/CRM bağlanacak (ör. Resend, SMTP veya
 * form servisi) — hedef adres: {@link SITE.contact.email}. Bağlanana kadar
 * `delivered: false` döner ve arayüz kullanıcıya doğrudan e-posta (mailto)
 * alternatifi sunar. CLAUDE.md: sahte entegrasyon gibi davranma.
 */
export async function deliverContactMessage(
  data: ContactInput,
): Promise<{ delivered: boolean }> {
  // Sunucu kaydı — geliştirme sırasında görünürlük için.
  console.info("[contact] yeni talep (henüz otomatik iletilmiyor):", {
    name: data.name,
    email: data.email,
    company: data.company ?? "-",
    length: data.message.length,
    to: SITE.contact.email,
  });
  return { delivered: false };
}

/** Kullanıcının kendi e-posta uygulamasında açacağı hazır mailto bağlantısı. */
export function buildContactMailto(
  data: ContactInput,
  locale: ContactLocale = "tr",
): string {
  const subject =
    locale === "en"
      ? `Contact form — ${data.name}`
      : `İletişim formu — ${data.name}`;
  const body = (
    locale === "en"
      ? [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.company ? `Company: ${data.company}` : null,
          "",
          data.message,
        ]
      : [
          `Ad: ${data.name}`,
          `E-posta: ${data.email}`,
          data.company ? `Şirket: ${data.company}` : null,
          "",
          data.message,
        ]
  )
    .filter((l) => l !== null)
    .join("\n");
  return `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
