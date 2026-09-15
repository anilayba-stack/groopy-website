import { Search } from "lucide-react";
import type { Service } from "../types";

export const seoVeGeo: Service = {
  slug: "seo-ve-geo",
  tier: "primary",
  navLabel: "SEO ve GEO Stratejisi",
  title: "SEO ve GEO (Yapay Zeka Arama) Stratejisi",
  metaTitle: "SEO ve GEO Stratejisi",
  metaDescription:
    "Google aramasında ve yapay zeka yanıtlarında (ChatGPT, Perplexity, AI Overviews) bulunur olmak için tek bir strateji. Teknik SEO, içerik mimarisi ve GEO altyapısı.",
  summary:
    "Sitenizi Google sıralamasında yükselten teknik SEO, içerik ve GEO çalışması.",
  tldr: "SEO, sayfanızın Google'da sıralanmasını hedefler; GEO (Generative Engine Optimization) ise ChatGPT, Perplexity, Gemini ve Google AI Overviews gibi yapay zeka yanıtlarının içinde kaynak olarak gösterilmesini hedefler. İkisi birbirinin yerine geçmez — birlikte kurulur. Groopy teknik temeli, içerik mimarisini ve yapılandırılmış veriyi tek planda toplar.",
  icon: Search,
  sections: [
    {
      heading: "SEO ve GEO farkı",
      body: "Klasik arama hâlâ yapay zeka motorlarının toplamından kat kat fazla trafik gönderiyor; yani SEO'yu bırakmak için erken. Ama kullanıcıların bir kısmı artık cevabı doğrudan yapay zekadan alıyor ve siteye hiç girmiyor. GEO, o cevabın içinde markanızın adının ve bağlantısının geçmesini sağlar.",
    },
    {
      heading: "Teknik SEO",
      body: "Sıralamanın ön koşulu, sitenin taranabilir ve hızlı olması. Çoğu sitede kazanç buradadır.",
      bullets: [
        "Tarama ve indeksleme denetimi, yönlendirme temizliği",
        "Core Web Vitals ve sayfa hızı",
        "Başlık/meta yapısı, dahili bağlantı mimarisi",
        "hreflang, sitemap, robots yapılandırması",
      ],
    },
    {
      heading: "İçerik mimarisi",
      body: "Rastgele blog yazıları değil, hub-and-spoke yapısı: her ana hizmet bir merkez sayfa, onu destekleyen yazılar birbirine ve merkeze bağlı. Arama niyetine göre planlanır — bilgi, karşılaştırma, fiyat, satın alma.",
    },
    {
      heading: "GEO altyapısı",
      body: "Yapay zeka tarayıcılarının içeriğinizi okuyabilmesi ve alıntılamayı tercih etmesi için gerekenler.",
      bullets: [
        "GPTBot, ClaudeBot, PerplexityBot, Google-Extended erişiminin açılması",
        "Cevap-önce içerik formatı: net sonuç, sonra detay",
        "Yapılandırılmış veri (Organization, Service, FAQ, Article)",
        "Varlık netliği: tutarlı marka, konum ve hizmet adları",
        "Doğrulanabilir, spesifik ifadeler — belirsiz iddia değil",
      ],
    },
    {
      heading: "Ölçüm",
      body: "Search Console ve CrUX ile organik görünürlük; hedef sorgularda yapay zeka yanıtlarında alıntı kontrolü için aylık manuel panel. Yayından yapay zeka yanıtında görünmeye tipik olarak 4–8 hafta vardır.",
    },
  ],
  process: [
    {
      title: "Denetim",
      description:
        "Teknik durum, mevcut sıralamalar, rakip boşlukları ve yapay zeka görünürlüğü çıkarılır.",
    },
    {
      title: "Öncelik planı",
      description:
        "En yüksek etkili düzeltmeler ve içerik kümeleri önceliklendirilir.",
    },
    {
      title: "Uygulama",
      description:
        "Teknik düzeltmeler, içerik üretimi ve yapılandırılmış veri devreye alınır.",
    },
    {
      title: "İzleme",
      description:
        "Aylık raporlama: organik trafik, sıralama değişimi ve yapay zeka alıntı durumu.",
    },
  ],
  faq: [
    {
      question: "GEO nedir?",
      answer:
        "Generative Engine Optimization — içeriğin, yapay zeka arama motorlarının ürettiği cevapların içinde kaynak olarak gösterilmesi için yapılan optimizasyon. SEO'nun yerine geçmez, tamamlar.",
    },
    {
      question: "llms.txt eklemek gerekli mi?",
      answer:
        "Zorunlu değil ve Google onu yok sayıyor. Bazı yapay zeka araçları kullanıyor; maliyeti düşük olduğu için eklenir, ama sonucun belirleyicisi değil.",
    },
    {
      question: "Sonuç ne zaman görünür?",
      answer:
        "Teknik düzeltmelerin etkisi haftalar içinde; içerik kaynaklı sıralama artışı ve yapay zeka alıntıları tipik olarak 2–4 ay. Garanti verilmez — veren birinden uzak durun.",
    },
    {
      question: "Google Ads / reklam yönetiyor musunuz?",
      answer:
        "Bu hizmet organik görünürlüğe odaklıdır. Ücretli reklam ihtiyacınız varsa görüşmede değerlendirilebilir.",
    },
  ],
  relatedPosts: ["web-sitesi-maliyeti-2026"],
};
