import { Code2 } from "lucide-react";
import type { Service } from "../types";

export const webSitesiGelistirme: Service = {
  slug: "web-sitesi-gelistirme",
  tier: "primary",
  featured: true,
  navLabel: "Web Sitesi ve Yazılım Geliştirme",
  title: "Web Sitesi ve Yazılım Geliştirme",
  metaTitle: "Web Sitesi ve Yazılım Geliştirme",
  metaDescription:
    "İşletmeniz için hızlı, bulunabilir ve bakımı kolay web siteleri ve özel yazılım geliştiriyoruz. Next.js tabanlı, Core Web Vitals'a uygun, ölçülebilir sonuç odaklı.",
  summary:
    "Müşterinizin sizi Google ve yapay zekâ aramalarında bulduğu, hızlı açılan bir web sitesi.",
  tldr: "Groopy, işletmelerin web sitelerini ve iç yazılımlarını Next.js ile sıfırdan geliştirir. Öncelik: hızlı yüklenme (Core Web Vitals), arama motorları ve yapay zekâ için okunabilir yapı, ve devralması kolay temiz kod. Hazır tema kullanılmaz; her proje ölçülebilir bir iş hedefine bağlanır.",
  icon: Code2,
  sections: [
    {
      heading: "Ne yapıyoruz",
      body: "Tanıtım sitesinden çok sayfalı kurumsal siteye, e-ticarete ve işletme içi panellere kadar web tabanlı ürünler geliştiriyoruz. Tasarım ve geliştirme tek süreçte yürür; arada çeviri kaybı olmadan ilerler.",
      bullets: [
        "Kurumsal web siteleri ve açılış sayfaları",
        "E-ticaret ve ürün katalogları",
        "İşletme içi paneller, rezervasyon ve başvuru sistemleri",
        "Mevcut sitenin yeniden yazımı ve performans onarımı",
        "Google Arama Konsolu, Analytics ve İşletme Profili kurulumu",
      ],
    },
    {
      heading: "Neden hazır tema değil",
      body: "Hazır temalar hızlı başlar ama kullanılmayan kod, yavaş yüklenme ve sınırlı özelleştirme olarak geri döner. Sıfırdan geliştirilen bir site yalnızca ihtiyacınız olan kodu taşır: daha hızlı açılır, aramada daha iyi konumlanır, büyütmesi daha ucuzdur.",
    },
    {
      heading: "Teknoloji",
      body: "Next.js (App Router) ve React ile sunucu tarafında oluşturulan sayfalar üretiyoruz — içerik ilk yanıtta hazır gelir, bu hem kullanıcı hem arama motoru hem de yapay zekâ tarayıcıları için önemlidir. Fontlar kendi sunucumuzda, görseller optimize, gereksiz JavaScript yok.",
      bullets: [
        "Sunucu bileşenleri varsayılan — minimum tarayıcı yükü",
        "Core Web Vitals hedefi: tüm sayfalarda \"iyi\"",
        "Erişilebilirlik: anlamlı HTML, klavye ile gezinme, kontrast",
        "Sürüm kontrolü ve otomatik dağıtım (Vercel)",
      ],
    },
    {
      heading: "Devir ve bağımsızlık",
      body: "Kod sizindir. Depoya erişiminiz olur, mimari kararlar belgelenir, dilerseniz başka bir ekiple devam edebilirsiniz. Bağımlılık yaratan değil, çözen bir çalışma biçimi.",
    },
  ],
  process: [
    {
      title: "Keşif",
      description:
        "İş hedefi, hedef kitle ve ölçüt belirlenir. Sitenin hangi somut sonucu üreteceği yazılı hale gelir.",
    },
    {
      title: "Tasarım",
      description:
        "Bilgi mimarisi ve arayüz. Gösterişten çok netlik; her sayfada tek bir birincil eylem.",
    },
    {
      title: "Geliştirme",
      description:
        "Sunucu tarafında oluşturulan sayfalar, performans ve erişilebilirlik bütçesiyle kodlanır.",
    },
    {
      title: "Yayın ve ölçüm",
      description:
        "Google Arama Konsolu, Analytics ve İşletme Profili kurulur; Core Web Vitals, arama görünürlüğü ve dönüşüm ölçülür. Kurulumun ardından sürekli yönetim, SEO + GEO hizmeti kapsamındadır.",
    },
  ],
  faq: [
    {
      question: "Web sitesi yaptırmak ne kadar sürer?",
      answer:
        "Tanıtım ve kurumsal siteler tipik olarak 3–6 hafta; e-ticaret ve özel yazılım kapsam büyüklüğüne göre daha uzun. Keşif görüşmesinden sonra net bir takvim paylaşılır.",
    },
    {
      question: "Groopy bir ajans mı, yazılım şirketi mi?",
      answer:
        "Groopy bir yazılım şirketi. Tasarım ve pazarlama hizmetleri de sunulur, ancak çekirdek iş yazılım geliştirmedir; çalışma biçimi — kod sahipliği, teknik dokümantasyon, ölçülebilir hedef — mühendislik odaklıdır.",
    },
    {
      question: "Mevcut sitemi WordPress'ten taşıyabilir misiniz?",
      answer:
        "Evet. İçerik ve bağlantı yapısı korunarak, yönlendirmeler kurularak taşınır; taşıma sırasında arama sıralamasının korunması planın parçasıdır.",
    },
    {
      question: "Yayından sonra siteyi kendimiz güncelleyebilir miyiz?",
      answer:
        "İçerik alanları sizin yönetebileceğiniz şekilde kurgulanır. Yapısal değişiklikler için bakım anlaşması ya da kendi ekibinizle devam — seçim sizin.",
    },
  ],
  relatedPosts: [
    "dis-hekimleri-dijital-pazarlama-rehberi",
    "web-sitesi-maliyeti-2026",
  ],
};
