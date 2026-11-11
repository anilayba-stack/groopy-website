import type { WorkEntry } from "./types";

/**
 * Gerçek müşteri çalışmaları — vaka çalışması DEĞİLDİR, ağır bir metrik
 * sunumu yapılmaz. Yalnızca verilen hizmeti ve (varsa) gerçek görsel kanıtı
 * gösterir. `results` alanı yalnızca doğrulanmış, kaynağı belirtilmiş ve
 * doğrudan bizim işimize (ör. yeni web sitesi) atfedilebilir sonuçlar için
 * kullanılır — müşterinin bizden önce var olan varlıklarının (ör. GBP)
 * genel performansı buraya yazılmaz.
 */
export const workGallery: WorkEntry[] = [
  {
    slug: "tike-zekeriyakoy",
    client: "Tike",
    location: "Zekeriyaköy, İstanbul",
    services: ["Web sitesi geliştirme", "SEO ve GEO stratejisi", "Google reklam yönetimi", "Sosyal medya yönetimi"],
    summary: "Tike Zekeriyaköy için web sitesi geliştirme, SEO+GEO stratejisi ve Google reklam yönetimini biz yürütüyoruz; sosyal medya yönetimi kapsamında çekim gününden bir kare.",
    website: { url: "https://tikezekeriyakoy.com/", label: "tikezekeriyakoy.com" },
    logo: { src: "/logos/tike-zekeriyakoy.png", w: 2000, h: 988 },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/tike-zekeriyakoy-urun-cekimi.jpg",
        alt: "Tike için Zekeriyaköy'de yapılan ürün fotoğraf çekiminde stüdyo ışığı ve kamera düzeneği",
      },
    ],
    date: "2026-10-25",
    results: [
      "Yayından 2 hafta sonra: \"Tike Zekeriyaköy\" marka aramasında Google'da ortalama 1. sırada, 2.325 gösterim / 82 tıklama (Search Console)",
      "Yapay zekâ asistanlarından (ChatGPT, Gemini vb.) organik ziyaret almaya başladı (Google Analytics)",
    ],
  },
  {
    slug: "busra-kayan-kemerburgaz",
    client: "Dt. Büşra Kayan",
    location: "Kemerburgaz, İstanbul",
    services: ["Web sitesi geliştirme", "SEO ve GEO stratejisi", "Google reklam yönetimi", "Sosyal medya yönetimi"],
    summary: "Dt. Büşra Kayan için web sitesi geliştirme, SEO+GEO stratejisi ve Google reklam yönetimini biz yürütüyoruz; sosyal medya yönetimi kapsamında klinikten bir kare.",
    website: { url: "https://dtbusrakayan.com/", label: "dtbusrakayan.com" },
    logo: { src: "/logos/dt-busra-kayan.png", w: 1400, h: 780 },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/busra-kayan-klinik.jpg",
        alt: "Dt. Büşra Kayan'ın kliniğinde, büyüteçli loop gözlüğü ve cerrahi maske takarken çekilen bir portre",
      },
    ],
    date: "2026-10-28",
  },
  {
    slug: "kozmoz724",
    client: "Kozmoz724",
    location: "İstanbul",
    services: ["Web sitesi geliştirme", "SEO ve GEO stratejisi"],
    summary: "Kozmoz724 için web sitesi geliştirme ve SEO+GEO stratejisini biz yürütüyoruz; canlı siteden bir ekran görüntüsü.",
    website: { url: "https://kozmoz724.com/", label: "kozmoz724.com" },
    logo: { src: "/logos/kozmoz.png", w: 2000, h: 430 },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/kozmoz724-site-ekrani.jpg",
        alt: "Kozmoz724'ün canlı web sitesinden, alışveriş ve sağlık kategorilerini tanıtan ana sayfa görseli",
      },
    ],
    date: "2026-11-09",
  },
  {
    slug: "mevlut-bilgin",
    client: "Fzt. Mevlüt Bilgin",
    location: "İstanbul",
    services: ["Web sitesi geliştirme", "SEO ve GEO stratejisi"],
    summary: "Fzt. Mevlüt Bilgin için web sitesi geliştirme ve SEO+GEO stratejisini biz yürütüyoruz; canlı siteden bir ekran görüntüsü.",
    website: { url: "https://fztmevlutbilgin.com/", label: "fztmevlutbilgin.com" },
    logo: { src: "/logos/mevlut-bilgin.png", w: 600, h: 144 },
    rawPhoto: true,
    photos: [
      {
        src: "/images/work/mevlut-bilgin-site-ekrani.jpg",
        alt: "Fzt. Mevlüt Bilgin'in canlı web sitesinden, bir manuel terapi seansını gösteren ana sayfa görseli",
      },
    ],
    date: "2026-11-09",
  },
];
