import type { WorkEntry } from "./types";

/**
 * Gerçek müşteri çalışmaları — sonuç/rakam iddiası taşımaz, vaka çalışması
 * DEĞİLDİR. Yalnızca verilen hizmeti ve (varsa) gerçek görsel kanıtı gösterir.
 */
export const workGallery: WorkEntry[] = [
  {
    slug: "tike-zekeriyakoy",
    client: "Tike",
    location: "Zekeriyaköy, İstanbul",
    services: ["Web sitesi geliştirme", "SEO ve GEO stratejisi", "Google reklam yönetimi", "Sosyal medya yönetimi"],
    summary: "Tike Zekeriyaköy için web sitesi geliştirme, SEO+GEO stratejisi ve Google reklam yönetimini biz yürütüyoruz; sosyal medya yönetimi kapsamında çekim gününden bir kare.",
    website: { url: "https://tikezekeriyakoy.com/", label: "tikezekeriyakoy.com" },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/tike-zekeriyakoy-urun-cekimi.jpg",
        alt: "Tike için Zekeriyaköy'de yapılan ürün fotoğraf çekiminde stüdyo ışığı ve kamera düzeneği",
      },
    ],
    date: "2026-10-25",
  },
  {
    slug: "busra-kayan-kemerburgaz",
    client: "Dt. Büşra Kayan",
    location: "Kemerburgaz, İstanbul",
    services: ["Web sitesi geliştirme", "SEO ve GEO stratejisi", "Google reklam yönetimi", "Sosyal medya yönetimi"],
    summary: "Dt. Büşra Kayan için web sitesi geliştirme, SEO+GEO stratejisi ve Google reklam yönetimini biz yürütüyoruz; sosyal medya yönetimi kapsamında klinikten bir kare.",
    website: { url: "https://dtbusrakayan.com/", label: "dtbusrakayan.com" },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/busra-kayan-klinik.jpg",
        alt: "Dt. Büşra Kayan'ın kliniğinde, büyüteçli loop gözlüğü ve cerrahi maske takarken çekilen bir portre",
      },
    ],
    date: "2026-10-28",
  },
];
