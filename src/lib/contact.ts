import { SITE } from "./site-config";

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

/** Sunucu tarafı doğrulama — veri minimizasyonu: yalnızca ad, e-posta, mesaj zorunlu. */
export function validateContact(raw: {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  /** honeypot */
  website?: unknown;
}): { data?: ContactInput; errors?: FieldErrors } {
  // Bot tuzağı — doldurulmuşsa sessizce reddet.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return { errors: { form: "Gönderim reddedildi." } };
  }

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const company =
    typeof raw.company === "string" ? raw.company.trim() : undefined;
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  const errors: FieldErrors = {};
  if (name.length < 2) errors.name = "Adınızı yazın.";
  if (name.length > 120) errors.name = "Ad çok uzun.";
  if (!EMAIL_RE.test(email)) errors.email = "Geçerli bir e-posta yazın.";
  if (message.length < 10)
    errors.message = "Mesajınız en az 10 karakter olmalı.";
  if (message.length > 4000) errors.message = "Mesaj çok uzun.";

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
export function buildContactMailto(data: ContactInput): string {
  const subject = `İletişim formu — ${data.name}`;
  const body = [
    `Ad: ${data.name}`,
    `E-posta: ${data.email}`,
    data.company ? `Şirket: ${data.company}` : null,
    "",
    data.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
