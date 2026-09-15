"use server";

import type { ContactLocale, FieldErrors } from "@/lib/contact";
import {
  validateContact,
  deliverContactMessage,
  buildContactWhatsapp,
} from "@/lib/contact";

export interface ContactState {
  status: "idle" | "error" | "delivered" | "manual";
  errors?: FieldErrors;
  /** status === "manual" iken kullanıcının tıklayacağı hazır WhatsApp bağlantısı */
  whatsapp?: string;
  /** formu geri doldurmak için */
  values?: {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
  };
}

async function submitContact(
  locale: ContactLocale,
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
    website: formData.get("website"), // honeypot
  };

  const values = {
    name: typeof raw.name === "string" ? raw.name : "",
    email: typeof raw.email === "string" ? raw.email : "",
    company: typeof raw.company === "string" ? raw.company : "",
    service: typeof raw.service === "string" ? raw.service : "",
    message: typeof raw.message === "string" ? raw.message : "",
  };

  const { data, errors } = validateContact(raw, locale);
  if (errors || !data) {
    return { status: "error", errors, values };
  }

  const { delivered } = await deliverContactMessage(data);

  if (delivered) {
    return { status: "delivered" };
  }

  // Otomatik iletim henüz bağlı değil — dürüst alternatif.
  return {
    status: "manual",
    whatsapp: buildContactWhatsapp(data, locale),
    values,
  };
}

/** TR iletişim formu için sunucu eylemi. */
export async function submitContactTr(
  prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  return submitContact("tr", prev, formData);
}

/** EN contact form server action. */
export async function submitContactEn(
  prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  return submitContact("en", prev, formData);
}
