import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "google-ai-overviews-turkiyede-ne-degistirdi",
  title: "Google AI Overviews Türkiye'de İşletmeler İçin Ne Değiştirdi?",
  metaTitle: "Google AI Overviews Türkiye'de Ne Değiştirdi?",
  description:
    "AI Overviews 18 Şubat 2026'da Türkiye'de yayına girdi. Tıklama davranışı nasıl değişti, kendi görünürlüğünüzü nasıl kontrol edersiniz.",
  publishedAt: "2026-12-31",
  tldr: "Google, AI Modu ve AI Bakışı'nı (AI Overviews) 18 Şubat 2026'da Türkiye'de kademeli olarak yayına aldı; Gemini 3 model ailesiyle çalışıyor. Türkiye'ye özgü bağımsız bir tıklama verisi yok, ama Pew Research Center'ın Mart 2025'te ABD'de 900 kişi ve 68.879 aramayı incelediği çalışmasına göre AI özeti gösterilen aramalarda kullanıcılar geleneksel sonuç linkine %8 oranında tıklıyor (AI özeti olmayan aramalarda %15); oturumu tamamen bitirme oranı ise %26'ya karşı %16. Google, AI Overviews'ta görünmek için ekstra bir optimizasyon gerekmediğini resmi olarak açıklıyor. Search Console'da 'Generative AI performans raporu' adıyla ayrı bir rapor var; yalnızca gösterim verisi sunuyor, tıklama veya sorgu kırılımı yok. Kendi hesabımızdan API üzerinden bu veriye erişmeyi denedik, boş sonuç döndü.",
  author: "Anıl Ay",
  hubService: "seo-ve-geo",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/google-ai-overviews-turkiyede-ne-degistirdi.jpg",
    alt: "Bir dizüstü bilgisayar ekranında trafik grafiği ve pasta grafiği gösteren bir analitik panosunun yakın çekimi",
  },
  faq: [
    {
      question: "AI Overviews Türkiye'de ne zaman başladı?",
      answer:
        "Google'ın resmi duyurusuna göre AI Modu ve AI Bakışı 18 Şubat 2026'da Türkiye'de kademeli olarak kullanıma sunuldu; Android, iOS ve arama sonuçları sayfasında Gemini 3 model ailesiyle çalışıyor.",
    },
    {
      question: "AI Overviews sitemin trafiğini azaltır mı?",
      answer:
        "Türkiye'ye özgü doğrulanmış bir veri yok, ama Pew Research'ün ABD verisine göre AI özeti gösterilen aramalarda geleneksel linke tıklama oranı yarı yarıya düşüyor (%15'ten %8'e). Bu, ABD verisi; Türkiye'de aynı oranın geçerli olduğunu iddia etmiyoruz, ama mekanizma aynı üründe çalıştığı için yönü benzer olabilir.",
    },
    {
      question: "Sitemin AI Overviews'ta ne kadar göründüğünü nasıl görürüm?",
      answer:
        "Google Search Console'da 'Generative AI performans raporu' adıyla ayrı bir rapor var (search.google.com/search-console/performance/search-analytics/ai). Yalnızca gösterim (impression) verisi sunuyor; tıklama, CTR veya sorgu kırılımı yok. Bu veriye standart Search Analytics API'siyle erişmeyi denedik, boş sonuç döndü.",
    },
    {
      question: "AI Overviews'ta görünmek için özel bir şey yapmalı mıyım?",
      answer:
        "Google'ın kendi resmi açıklamasına göre hayır: 'AI Overviews veya AI Mode'da görünmek için ek bir gereklilik ya da özel bir optimizasyon yok.' Standart SEO temelleri (içerik kalitesi, teknik altyapı) yeterli kabul ediliyor.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Google AI Overviews, Türkiye&apos;de zaten yayında; soru artık
        &quot;gelecek mi&quot; değil, &quot;ne değişti ve ne yapmalıyım.&quot;
        Bu yazıda Türkiye&apos;ye özgü resmi başlangıç tarihini, küresel
        verilerin tıklama davranışında ne gösterdiğini ve kendi
        görünürlüğünüzü nasıl kontrol edeceğinizi ele alıyoruz.
      </p>

      <h2 id="turkiyede-baslangic">Türkiye&apos;de ne zaman başladı?</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://blog.google/intl/tr-tr/urun-duyurulari/turkiyede-ai-modu-ve-ai-bakisi-donemi-basliyor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi Türkçe duyurusuna
        </a>{" "}
        göre AI Modu ve AI Bakışı (AI Overviews) 18 Şubat 2026&apos;dan
        itibaren Türkiye&apos;deki Google Arama deneyimine, Gemini 3 model
        ailesinin gücüyle eklendi. Duyuruda özellikle belirtildiği gibi bu
        özellikler &quot;Android ve iOS için Google uygulamasında ve arama
        sonuçları sayfasında kademeli olarak&quot; kullanıma açıldı; yani
        yayılım tüm kullanıcılara aynı anda değil, zamana yayılarak oldu.
      </p>

      <h2 id="kuresel-veri">Küresel veride tıklama davranışı ne gösteriyor?</h2>
      <p>
        Türkiye&apos;ye özgü, bağımsız bir tıklama davranışı çalışması
        bulamadık; ama Pew Research Center&apos;ın{" "}
        <a
          href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mart 2025&apos;te 900 ABD&apos;li yetişkinin 68.879 Google
          aramasını incelediği çalışması
        </a>{" "}
        genel mekanizmayı gösteriyor. Bulgular: AI özeti gösterilen
        aramalarda kullanıcılar geleneksel bir sonuç linkine ziyaretlerin
        yalnızca %8&apos;inde tıklıyor; AI özeti olmayan aramalarda bu oran
        %15. AI özetinin kendi içindeki linklere tıklama ise yalnızca
        %1&apos;lik bir dilimde kalıyor. Belki daha çarpıcısı: AI özeti
        olan sayfalarda kullanıcıların %26&apos;sı aramayı tamamen
        bitiriyor (başka bir siteye gitmeden), bu oran AI özeti olmayan
        sayfalarda %16.
      </p>
      <p>
        Bu ABD verisi; Türkiye&apos;deki kullanıcı davranışının birebir
        aynı olduğunu iddia etmiyoruz. Ama AI Overviews aynı üründen,
        benzer bir mekanizmayla çalıştığı için yön muhtemelen benzer:
        arama sonucunda üst sırada çıkmek, eskisi kadar otomatik bir
        tıklama garantisi değil.
      </p>

      <h2 id="rakamin-anlami">Bu rakamların işletmeniz için somut anlamı</h2>
      <p>
        Pew&apos;in verisini kendi işletmeniz için çevirelim: sitenizin bir
        sorguda üst sıraya çıktığını varsayalım. AI özeti olmadan önceki
        dünyada bu, ziyaretçilerin yaklaşık %15&apos;inin sitenize
        tıklaması demekti. AI özeti gösterilen bir aramada bu oran
        %8&apos;e düşüyor; yani aynı gösterim sayısından gelen ziyaretçi
        neredeyse yarı yarıya azalabilir. Üstelik ziyaretçilerin
        %26&apos;sı aramayı hiç sürdürmeden bitiriyor; bu, daha önce belki
        üçüncü ya da dördüncü sonuca kadar inen bir kullanıcının artık
        hiçbir siteye gitmeden ayrıldığı anlamına geliyor. Bu, tek başına
        &quot;SEO artık işe yaramıyor&quot; anlamına gelmiyor; sıralamada
        üst sırada olmak hâlâ önemli, ama aynı sıralamanın getirdiği
        trafik miktarı değişiyor olabilir.
      </p>

      <h2 id="google-pozisyonu">Google&apos;ın kendi pozisyonu</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/ai-features"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi dokümanına göre
        </a>{" "}
        &quot;AI Overviews veya AI Mode&apos;da görünmek için ek bir
        gereklilik ya da özel bir optimizasyon yok&quot;; yeterli olan,
        genel SEO en iyi uygulamaları. Bu, rahatlatıcı bir cümle ama
        yukarıdaki tıklama verisiyle çelişmiyor: sıralamada üst sırada
        çıkmenin koşulları değişmedi, ama üst sırada çıkmenin trafiğe
        çevrilme oranı değişti. Site-içi teknik hazırlığı (yapılandırılmış
        veri, AI botlarına erişim){" "}
        <Link href="/blog/geo-nedir">GEO Nedir?</Link> yazımızda ayrıntılı
        ele aldık.
      </p>

      <h2 id="gsc-kontrol">Kendi görünürlüğünüzü nasıl kontrol edersiniz</h2>
      <p>
        Google Search Console&apos;da{" "}
        <a
          href="https://support.google.com/webmasters/answer/16984139?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;Generative AI performans raporu&quot;
        </a>{" "}
        adıyla, standart Performans raporundan ayrı bir rapor var.
        Google&apos;ın kendi açıklamasına göre bu rapor yalnızca gösterim
        (impression) verisi sunuyor; tıklama, CTR ya da sorgu kırılımı
        yok. Ülke, cihaz ve sayfa bazında kırılım mevcut. Rapora{" "}
        <a
          href="https://search.google.com/search-console/performance/search-analytics/ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          search.google.com/search-console/performance/search-analytics/ai
        </a>{" "}
        adresinden ya da Search Console&apos;da &quot;Tüm raporlar ve
        araçlar &gt; Performans raporları&quot; altından ulaşabilirsiniz.
      </p>
      <p>
        Kendi hesabımızda bunu test ettik: standart Search Analytics
        API&apos;siyle (siteniz zaten kullanıyorsanız) bu veriye erişmeyi
        denedik, boş sonuç döndü. Bu, sitemizin küçük trafiği nedeniyle
        olabilir ya da bu verinin yalnızca Search Console arayüzünden
        erişilebilir olmasından kaynaklanabilir; ikisini kesin olarak
        ayıramadık. Kendi sitenizde net bir sonuç almak için arayüzü
        doğrudan kontrol etmenizi öneririz.
      </p>

      <h2 id="hangi-isletmeler">Bu değişim hangi işletmeleri daha çok etkiler?</h2>
      <p>
        Etki, işletmenizin arama niyetiyle ilişkisine göre değişir. Genel
        bilgi sorgularına (&quot;X nedir&quot;, &quot;Y nasıl yapılır&quot;)
        cevap veren bir içerik sayfası için AI özeti, cevabı doğrudan
        sonuç sayfasında verip ziyaretçiyi hiç sitenize göndermeyebilir.
        Buna karşılık &quot;İstanbul&apos;da [hizmet]&quot; gibi yerel ve
        işlemsel niyetli aramalarda, kullanıcı genellikle bir işletmeyle
        iletişime geçmek ya da randevu almak istediği için sonunda bir
        siteye tıklaması daha olası; bu tür sorgularda etki muhtemelen
        daha sınırlı. Kendi hizmetinizin hangi gruba yakın olduğunu
        düşünmek, bu değişikliğe ne kadar öncelik vermeniz gerektiğini
        netleştirir.
      </p>

      <h2 id="pratik-anlam">İşletmeniz için pratik anlamı</h2>
      <p>
        İki şey aynı anda doğru olabilir: tıklama oranınız düşebilir ve
        aynı zamanda markanızın bir AI özetinin içinde adıyla anılması
        yeni bir görünürlük biçimi olabilir. Bunun ikincisi{" "}
        <Link href="/blog/chatgptde-markaniz-nasil-gorunur-olur">
          ChatGPT&apos;de markanız nasıl görünür olur?
        </Link>{" "}
        yazımızda ele aldığımız mantıkla aynı: markanızın adı, hizmet
        tanımınız ve konumunuz sitenizin her yerinde tutarlı olmalı, çünkü
        AI özetleri bu tutarlılığa güveniyor.
      </p>

      <h2 id="veri-siniri">Veri sınırı notu</h2>
      <p>
        Türkiye pazarına özgü, bağımsız bir AI Overviews tıklama davranışı
        çalışması bulamadık; yukarıdaki Pew verisi ABD&apos;ye ait. Google
        Search Console&apos;un Generative AI raporunun API erişimine dair
        de resmi bir dokümantasyon bulamadık; kendi testimizin sonucu
        (boş yanıt) kesin bir kanıt değil, yalnızca bir gözlem.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        AI Overviews Türkiye&apos;de 18 Şubat 2026&apos;dan beri yayında ve
        Google, bunun için ekstra bir optimizasyon gerekmediğini söylüyor.
        Ama küresel veri, üst sırada çıkmenin artık eskisi kadar otomatik
        bir tıklama garantisi olmadığını gösteriyor. En somut adım, kendi
        Search Console&apos;unuzdaki Generative AI raporuna bakıp sitenizin
        bu özetlerde ne kadar göründüğünü görmek.
      </p>
      <p>
        SEO ve GEO stratejinizi bu değişime göre birlikte gözden geçirmek
        isterseniz{" "}
        <Link href="/seo-analiz-araci">ücretsiz SEO analiz aracımızı</Link>{" "}
        deneyebilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
