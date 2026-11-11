import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "sosyal-medya-yapay-zeka-aramalarinda-gorunur-mu",
  title: "Sosyal Medya İçeriği Yapay Zeka Aramalarında Görünür mü?",
  metaTitle: "Sosyal Medya İçeriği ChatGPT'de Görünür mü?",
  description:
    "Instagram, TikTok ve LinkedIn'in kendi robots.txt dosyalarını kontrol ettik: üçü de ChatGPT, Claude ve Perplexity'nin tarayıcılarını neredeyse tamamen engelliyor. Gerçek istisna ve pratik sonuçlar.",
  publishedAt: "2026-11-11",
  tldr: "Hayır, büyük ölçüde değil. Instagram ve TikTok'un kendi resmi robots.txt dosyaları, GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot ve Google-Extended dahil neredeyse tüm yapay zekâ tarayıcılarını tamamen engelliyor — bu botlar ne eğitim verisi için ne de canlı arama için bu platformlardaki içeriği okuyabiliyor. Tek dar istisna LinkedIn: OAI-SearchBot (ChatGPT) ve Claude-SearchBot'a özellikle herkese açık profil sayfalarına (/public-profile/) erişim izni veriyor. Pratik sonuç: sosyal medya içeriği doğrudan AI arama kaynağı olarak gösterilmiyor; GEO katkısı dolaylı — marka tutarlılığı ve trafik üzerinden.",
  author: "Anıl Ay",
  hubService: "sosyal-medya-yonetimi",
  readingMinutes: 8,
  coverImage: {
    src: "/images/blog/sosyal-medya-yapay-zeka-aramalarinda-gorunur-mu.jpg",
    alt: "Bir akıllı telefon ekranında Instagram, Pinterest, Twitter ve Snapchat uygulama simgeleri",
  },
  faq: [
    {
      question: "Instagram gönderilerim ChatGPT'de çıkar mı?",
      answer:
        "Hayır. Instagram'ın kendi robots.txt dosyası GPTBot'u (ChatGPT'nin eğitim tarayıcısı) ve OAI-SearchBot'u (ChatGPT'nin canlı arama tarayıcısı) ayrı ayrı ve tamamen engelliyor. ChatGPT, Instagram gönderilerinizi ne eğitim verisinde ne de canlı aramada okuyamıyor.",
    },
    {
      question: "TikTok videoları yapay zekâ aramalarında görünür mü?",
      answer:
        "Hayır. TikTok'un robots.txt dosyası GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Claude-SearchBot, Perplexity-User ve Google-Extended dahil neredeyse tüm bilinen yapay zekâ tarayıcılarını açıkça engelliyor.",
    },
    {
      question: "LinkedIn neden farklı?",
      answer:
        "LinkedIn'in robots.txt'i de genel olarak AI tarayıcılarını engelliyor, ama dar bir istisna var: OAI-SearchBot ve Claude-SearchBot'a özellikle herkese açık profil sayfalarında (/public-profile/) erişim izni veriyor. Bu, ChatGPT ve Claude'un canlı arama özelliklerinin LinkedIn profil sayfalarını gösterebildiği, ama gönderi/feed içeriğini gösteremediği anlamına geliyor.",
    },
    {
      question: "Sosyal medya GEO için hiç işe yaramıyor mu?",
      answer:
        "Doğrudan bir kaynak gösterme kanalı değil, ama dolaylı katkısı var: tutarlı marka varlığı, web sitenize yönlendirilen trafik ve (LinkedIn için) eksiksiz bir şirket sayfası, markanızın genel dijital tutarlılığına katkı sağlar — bu da web sitesi ve GBP üzerinden yapılan GEO çalışmasını destekler.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Sosyal medyaya düzenli, kaliteli içerik üretmek markanız için iyi bir
        yatırım — ama bu içerik ChatGPT, Claude veya Perplexity&apos;nin
        verdiği cevaplarda kaynak olarak gösteriliyor mu? Bunu varsaymak
        yerine Instagram, TikTok ve LinkedIn&apos;in kendi resmi robots.txt
        dosyalarını kontrol ettik. Kısa yanıt: hayır, büyük ölçüde değil —
        ve bunun tek bir dar istisnası var.
      </p>

      <h2 id="instagram-tiktok">Instagram ve TikTok&apos;un kendi robots.txt&apos;i ne diyor</h2>
      <p>
        <a
          href="https://www.instagram.com/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram&apos;ın yayımladığı robots.txt dosyasında
        </a>{" "}
        GPTBot, ClaudeBot, PerplexityBot ve Google-Extended için ayrı ayrı
        satırlar var ve hepsinin karşılığı aynı: <code>Disallow: /</code> —
        yani bütün site bu tarayıcılara kapalı.{" "}
        <a
          href="https://www.tiktok.com/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok&apos;un robots.txt&apos;i
        </a>{" "}
        ise daha da kapsamlı bir liste engelliyor: GPTBot, OAI-SearchBot,
        ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot,
        Perplexity-User, Google-Extended, Applebot-Extended ve
        CCBot dahil neredeyse bilinen her yapay zekâ tarayıcısı için{" "}
        <code>Disallow: /</code> tanımlı. Pratik sonucu şu: bu botlar ne
        eğitim verisi toplamak için ne de ChatGPT/Claude/Perplexity&apos;nin
        canlı arama özelliği için Instagram veya TikTok içeriğine
        erişebiliyor.
      </p>

      <h2 id="linkedin-istisnasi">LinkedIn&apos;in dar istisnası</h2>
      <p>
        <a
          href="https://www.linkedin.com/robots.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn&apos;in robots.txt&apos;i
        </a>{" "}
        de GPTBot, ClaudeBot, PerplexityBot ve Google-Extended&apos;i genel
        olarak <code>Disallow: /</code> ile engelliyor — ama iki tarayıcı için
        farklı bir kural var: OAI-SearchBot (ChatGPT&apos;nin canlı arama
        tarayıcısı) ve Claude-SearchBot (Claude&apos;un canlı arama
        tarayıcısı) yalnızca <code>/public-profile/</code> yolunu
        engelliyor — yani herkese açık profil sayfaları için bir erişim
        izni var. Bunun anlamı: ChatGPT ve Claude&apos;un canlı arama
        özellikleri bir LinkedIn profilini (kişisel ya da şirket sayfası)
        gösterebilir, ama gönderi/feed akışındaki içeriği gösteremez.
      </p>

      <h2 id="dolayli-katki">Öyleyse sosyal medyanın GEO&apos;ya hiç katkısı yok mu?</h2>
      <p>
        Doğrudan bir kaynak gösterme kanalı değil, ama tamamen etkisiz de
        değil. Yapay zekâ araçlarının markanız hakkındaki bilgisi iki yerden
        geliyor:{" "}
        <Link href="/blog/geo-nedir">dondurulmuş eğitim verisi ve canlı web araması</Link>
        . Sosyal medya gönderilerinin kendisi bu iki kanala doğrudan
        girmiyor, ama sosyal medyadan gelen trafik ve marka tutarlılığı, web
        sitenizin ve Google Business Profile&apos;ınızın güçlenmesine
        dolaylı katkı sağlıyor — asıl GEO çalışması orada yürütülüyor.{" "}
        <Link href="/blog/chatgptde-markaniz-nasil-gorunur-olur">
          ChatGPT ve Yapay Zeka Aramalarında Markanız Nasıl Görünür Olur?
        </Link>{" "}
        yazımızda bu web-sitesi-merkezli yaklaşımı ayrıntılı ele aldık.
      </p>

      <h2 id="pratikte-ne-yapmali">Pratikte ne yapmalı</h2>
      <p>
        Bu bulgunun pratik sonucu, sosyal medyayı bırakmak değil, ondan
        doğru şeyi beklemek: Instagram ve TikTok&apos;u marka bilinirliği ve
        web sitesine trafik aracı olarak kullanın, AI arama kaynağı olarak
        değil. LinkedIn&apos;de ise şirket sayfanızı ve profillerinizi
        eksiksiz ve güncel tutmak, dar da olsa gerçek bir erişim
        kanalından faydalanmak anlamına geliyor. Asıl GEO yatırımınızı —
        yapılandırılmış veri, yapay zekâ tarayıcılarına açık robots.txt,
        cevap-önce içerik — kendi web sitenize yapmaya devam edin.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Instagram ve TikTok, kendi robots.txt dosyalarında neredeyse tüm
        yapay zekâ tarayıcılarını engelliyor; LinkedIn yalnızca herkese
        açık profil sayfalarında ChatGPT ve Claude&apos;un canlı arama
        botlarına dar bir izin veriyor. Sosyal medya içeriğiniz bu yüzden
        AI arama sonuçlarında doğrudan kaynak gösterilmiyor — katkısı
        dolaylı. Sosyal medya stratejinizi bu gerçeğe göre kurmamızı
        isterseniz{" "}
        <Link href="/hizmetler/sosyal-medya-yonetimi">
          Sosyal Medya Yönetimi hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
