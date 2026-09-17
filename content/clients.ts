/**
 * Birlikte çalışılan markalar — hero altındaki akan şerit.
 *
 * KURAL (CLAUDE.md): Yalnızca gerçek müşteri + paylaşım izni olanlar eklenir.
 * Uydurma / "örnek" marka adı KONULMAZ. Liste boşken şerit hiç render edilmez.
 *
 * Logo yoksa isim düz "wordmark" olarak gösterilir. Logolar tek tip beyaza
 * çevrilir (CSS: brightness(0) invert(1)); public/logos/ altında, PNG şeffaf.
 * `scale`: görsel dengeyi ayarlamak için (1 = ~36px yükseklik).
 * `withName`: logonun yanına marka adını da yazar.
 */
export interface Client {
  name: string;
  url?: string;
  logo?: { src: string; w: number; h: number; scale?: number; withName?: boolean };
}

export const clients: Client[] = [
  {
    name: "Tike Zekeriyaköy",
    url: "https://tikezekeriyakoy.com",
    logo: { src: "/logos/tike-zekeriyakoy.png", w: 2000, h: 988, scale: 1.5 },
  },
  {
    name: "Fzt. Mevlüt Bilgin",
    url: "https://fztmevlutbilgin.com",
    logo: { src: "/logos/mevlut-bilgin.png", w: 600, h: 144, scale: 0.85 },
  },
  { name: "Fzt. Senem Elmalı", url: "https://senemelmali.com" },
  {
    name: "Dt. Büşra Kayan",
    url: "https://dtbusrakayan.com",
    logo: { src: "/logos/dt-busra-kayan.png", w: 1400, h: 780, scale: 1.8 },
  },
  {
    name: "Kozmoz724",
    url: "https://kozmoz724.com",
    logo: { src: "/logos/kozmoz.png", w: 2000, h: 430, scale: 0.82 },
  },
];

/** Görünmez semantik etiket (aria-label + crawler ipucu). Şeritte metin gösterilmez. */
export const clientsAriaLabel = "Seçili müşteriler";
