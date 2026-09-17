import { Target } from "lucide-react";
import type { Service } from "../types";

export const googleReklamYonetimi: Service = {
  slug: "google-reklam-yonetimi",
  tier: "primary",
  navLabel: "Google Reklam Yönetimi",
  title: "Google Reklam Yönetimi",
  metaTitle: "Google Reklam Yönetimi",
  metaDescription:
    "Google Ads arama, alışveriş ve görüntülü reklam kampanyalarınızı kurar ve yönetiriz. Reklam hesabı size aittir; şeffaf bütçe ve aylık raporlama.",
  summary:
    "Google Ads kampanyalarını kurar, yönetir ve raporlarız — reklam hesabı size ait kalır.",
  tldr: "Google Reklam Yönetimi, işletmenizin Google Ads hesabında arama, alışveriş ve görüntülü reklam kampanyalarını kurmayı, optimize etmeyi ve raporlamayı kapsar. Reklam hesabı ve bütçe size aittir; kampanyaları yönetici erişimiyle yürütürüz. SEO + GEO'dan farkı: SEO organik ve uzun vadeli görünürlük içindir, bu hizmet ücretli ve anlık görünürlük sağlar — birbirinin yerine geçmez.",
  icon: Target,
  sections: [
    {
      heading: "Ne yapıyoruz",
      body: "Google Ads üzerinde kampanya kurulumundan hedef kitle ve dönüşüm izlemeye kadar reklam yönetiminin tamamını üstleniriz.",
      bullets: [
        "Arama (Search) kampanyaları",
        "Alışveriş (Shopping) kampanyaları",
        "Görüntülü reklam (Display) ve yeniden pazarlama",
        "Anahtar kelime, hedef kitle ve dönüşüm izleme kurulumu",
      ],
    },
    {
      heading: "Reklam hesabı size aittir",
      body: "Google Ads hesabı sizin adınıza açılır veya mevcut hesabınız kullanılır; kampanyaları yönetici erişimiyle yürütürüz. Reklam bütçesi doğrudan Google'a ödenir, harcamanın üzerine gizli bir komisyon eklenmez — yönetim bedeli ayrıca ve açıkça belirtilir.",
    },
    {
      heading: "SEO + GEO ile ilişkisi",
      body: "Bu hizmet organik değil, ücretli görünürlük sağlar. SEO + GEO stratejisiyle birlikte planlandığında arama sonuçlarının hem ücretli hem organik alanında yer kaplanır; ayrı bir hizmet olarak da alınabilir.",
    },
  ],
  process: [
    {
      title: "Keşif",
      description:
        "İş hedefi, bütçe aralığı ve hedef kitle belirlenir; hangi kampanya türlerinin uygun olduğu netleşir.",
    },
    {
      title: "Kurulum",
      description:
        "Hesap, kampanya yapısı, anahtar kelimeler ve dönüşüm izleme kurulur.",
    },
    {
      title: "Yayın ve optimizasyon",
      description:
        "Kampanyalar canlıya alınır; teklif, hedefleme ve reklam metinleri sürekli optimize edilir.",
    },
    {
      title: "Raporlama",
      description:
        "Aylık raporlama: harcama, tıklama, dönüşüm ve maliyet başına sonuç.",
    },
  ],
  faq: [
    {
      question: "Reklam bütçesi ne kadar olmalı?",
      answer:
        "Bütçe sektöre ve hedefe göre değişir; keşif görüşmesinde net bir aralık paylaşılır. Garanti edilen bir sonuç veya sıralama yoktur.",
    },
    {
      question: "Reklam hesabı kimde kalır?",
      answer:
        "Hesap size aittir. Çalışma sona erse dahi hesap ve geçmiş performans verileri sizde kalır.",
    },
    {
      question: "SEO yerine bu hizmeti mi almalıyım?",
      answer:
        "Hayır, ikisi farklı amaca hizmet eder — SEO organik ve uzun vadelidir, Google Ads anlık ve ücretlidir. Birlikte ya da ayrı ayrı alınabilir.",
    },
  ],
  relatedPosts: [
    "google-ads-ajansi-secerken-nelere-dikkat-edilmeli",
    "google-ads-mi-seo-mu",
  ],
};
