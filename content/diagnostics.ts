/**
 * "İhtiyaç analizi" bölümü — yaygın görünürlük sorunları, nedeni ve çözümü.
 * Dil: kurumsal / edilgen ("yapılır", "kurulur"). Her madde bir hizmete bağlanır.
 */
export type DiagnosticScreen =
  | "serp"
  | "ai"
  | "perf"
  | "local"
  | "site"
  | "social";

export interface Diagnostic {
  id: string;
  /** Müşteri ağzından sorun */
  problem: string;
  /** Neden oluyor */
  reason: string;
  /** Nasıl çözülür */
  solution: string;
  serviceSlug: string;
  serviceLabel: string;
  screen: DiagnosticScreen;
  /** serp / ai / local ekranı için arama sorgusu */
  query?: string;
}

export const diagnostics: Diagnostic[] = [
  {
    id: "brand-search",
    problem: "İşletme adımızı Google'a yazınca bile ilk sırada çıkmıyoruz.",
    reason:
      "Site ya dizine hiç eklenmemiştir ya da teknik engeller — robots yapılandırması, yönlendirme hataları, eksik başlık yapısı — taranmasını zorlaştırır.",
    solution:
      "Teknik SEO denetimiyle başlanır: indeksleme durumu, sitemap, robots, başlık ve meta yapısı, dahili bağlantılar incelenir. Marka aramasında ilk sonuç olmak ilk hedeftir.",
    serviceSlug: "seo-ve-geo",
    serviceLabel: "SEO ve GEO Stratejisi",
    screen: "serp",
    query: "işletme adınız",
  },
  {
    id: "service-search",
    problem:
      "“İstanbul diş hekimi”, “fizyoterapist” gibi aramalarda rakipler var, biz yokuz.",
    reason:
      "Hizmeti ve konumu hedefleyen sayfalar yoktur ya da içerik arama niyetiyle eşleşmez. Yerel arama sinyalleri (Google İşletme Profili, tutarlı iletişim bilgisi, yerel içerik) eksiktir.",
    solution:
      "Arama niyetine göre hizmet ve lokasyon sayfa mimarisi kurulur, yerel arama sinyalleri düzenlenir. Hedef, aranan hizmette ilk sayfada yer almaktır.",
    serviceSlug: "seo-ve-geo",
    serviceLabel: "SEO ve GEO Stratejisi",
    screen: "serp",
    query: "istanbul diş hekimi",
  },
  {
    id: "ai-answers",
    problem:
      "ChatGPT'ye ya da Google'ın yapay zekâ yanıtlarına sorulunca adımız hiç geçmiyor.",
    reason:
      "Site yapay zekâ tarayıcılarına kapalıdır, içerik cevap-önce formatında değildir ve yapılandırılmış veri yoktur. Bu nedenle yapay zekâ motorları içeriği alıntılamayı tercih etmez.",
    solution:
      "GEO altyapısı kurulur: yapay zekâ tarayıcılarına erişim açılır, içerik cevap-önce yapıya getirilir, Organization / Service / FAQ şeması eklenir. Amaç, yapay zekâ yanıtlarında kaynak olarak görünmektir.",
    serviceSlug: "seo-ve-geo",
    serviceLabel: "SEO ve GEO Stratejisi",
    screen: "ai",
    query: "İstanbul'da iyi bir fizyoterapist önerir misin?",
  },
  {
    id: "restaurant",
    problem:
      "Restoranımız var ama “yakındaki restoran” diye arayan insanlar bizi bulamıyor.",
    reason:
      "Google sizi tam tanımıyor. İşletme kaydınız eksik ya da bilgileri eski; siteniz nerede olduğunuzu, ne zaman açık olduğunuzu ve menünüzü Google'ın anlayacağı şekilde söylemiyor.",
    solution:
      "Google İşletme Profili baştan düzenlenir; adres, telefon, çalışma saatleri ve menü siteye net biçimde eklenir. Böylece yakında bir yer arayan kişi haritada ve aramada sizi görür.",
    serviceSlug: "seo-ve-geo",
    serviceLabel: "SEO ve GEO Stratejisi",
    screen: "local",
    query: "yakınımdaki restoran",
  },
  {
    id: "need-website",
    problem: "Kliniğim için web sitesine gerçekten ihtiyacım var mı?",
    reason:
      "İnsanlar bir yere gitmeden önce Google'da bakar. Siteniz yoksa ya da eski ve yavaşsa, sizi arayan kişi güvenmez ve başka yere gider. Asıl müşteri aramadan gelir.",
    solution:
      "İşletmenize göre sade ve hızlı bir site kurulur: ne yaptığınız, nerede olduğunuz ve nasıl ulaşılacağı net biçimde yazılır. Google ve yapay zekâ aramalarında görünür; gelen kişi ilk bakışta güvenir. Mevcut siteniz varsa taşınır, arama sıralaması korunur.",
    serviceSlug: "web-sitesi-gelistirme",
    serviceLabel: "Web Sitesi Geliştirme",
    screen: "site",
  },
  {
    id: "social",
    problem:
      "Instagram'da paylaşıyoruz ama hesap ölü — etkileşim yok, takipçi artmıyor.",
    reason:
      "Plansız paylaşım işe yaramaz. Ne zaman, ne paylaşılacağı belli değilse hesap durur; ne takipçi ne müşteri gelir. Sosyal medya bir sistem ister: içerik takvimi, tutarlı ton, düzenli üretim.",
    solution:
      "Hesap; içerik planı, üretim ve topluluk yönetimi olarak bütün halde yürütülür. Hangi platformda, hangi sıklıkta, hangi amaçla içerik üretileceği baştan planlanır. Her ay ne yayımlandığı ve neyin işe yaradığı raporlanır.",
    serviceSlug: "sosyal-medya-yonetimi",
    serviceLabel: "Sosyal Medya Yönetimi",
    screen: "social",
  },
];
