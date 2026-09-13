"use server";

import type { FieldErrors } from "@/lib/contact";
import {
  validateContact,
  deliverContactMessage,
  buildContactMailto,
} from "@/lib/contact";

export interface ContactState {
  status: "idle" | "error" | "delivered" | "manual";
  errors?: FieldErrors;
  /** status === "manual" iken kullanıcının tıklayacağı hazır e-posta bağlantısı */
  mailto?: string;
  /** formu geri doldurmak için */
  values?: { name: string; email: string; company: string; message: string };
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
    website: formData.get("website"), // honeypot
  };

  const values = {
    name: typeof raw.name === "string" ? raw.name : "",
    email: typeof raw.email === "string" ? raw.email : "",
    company: typeof raw.company === "string" ? raw.company : "",
    message: typeof raw.message === "string" ? raw.message : "",
  };

  const { data, errors } = validateContact(raw);
  if (errors || !data) {
    return { status: "error", errors, values };
  }

  const { delivered } = await deliverContactMessage(data);

  if (delivered) {
    return { status: "delivered" };
  }

  // Otomatik iletim henüz bağlı değil — dürüst alternatif.
  return { status: "manual", mailto: buildContactMailto(data), values };
}
