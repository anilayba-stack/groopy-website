import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "googlede-neden-cikmiyorum",
  title: "Google'da Neden Çıkmıyorum? 8 Neden ve Kontrol Listesi",
  metaTitle: "Google'da Neden Çıkmıyorum?",
  description:
    "Web siteniz Google'da çıkmıyorsa nedeni büyük ihtimalle bu 8 sorundan biri. Kendi kendinize kontrol edebileceğiniz adımlarla, teknik sorunu bulmanıza yardımcı oluyoruz.",
  publishedAt: "2026-10-17",
  tldr: "Bir sitenin Google'da çıkmamasının en yaygın nedenleri: site çok yeni, robots.txt engeli, yanlışlıkla eklenmiş noindex etiketi, şifre koruması, Search Console'a hiç eklenmemiş olması, zayıf iç link yapısı ve manuel işlem cezası. İlk adım her zaman aynı: site:alanadiniz.com araması yaparak sitenin gerçekten dizin dışı mı, yoksa sadece aradığınız kelimede mi görünmüyor olduğunu ayırt edin.",
  author: "Anıl Ay",
  hubService: "seo-ve-geo",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/google-neden-cikmiyorum.jpg",
    alt: "Dizüstü bilgisayarın başında elleri havada, şaşkın bir şekilde bakan bir kadın",
  },
  faq: [
    {
      question: "Sitem Google'da hiç çıkmıyor mu, yoksa sadece aradığım kelimede mi çıkmıyor?",
      answer:
        "Google'da 'site:alanadiniz.com' yazıp arayın. Sonuç çıkıyorsa siteniz dizinde var demektir — sorun indeksleme değil, o kelimede sıralama sorunudur. Hiç sonuç çıkmıyorsa site gerçekten dizin dışıdır.",
    },
    {
      question: "Yeni bir site Google'da çıkması ne kadar sürer?",
      answer:
        "Değişken, ama teknik bir engel yoksa tipik olarak birkaç gün ile birkaç hafta arasında ilk sayfalar taranıp dizine eklenir. Sitemap göndermek ve Search Console'da 'Dizine eklenmesini iste' demek bu süreci hızlandırabilir.",
    },
    {
      question: "robots.txt dosyamı nasıl kontrol ederim?",
      answer:
        "Tarayıcıda alanadiniz.com/robots.txt adresine gidin. 'Disallow: /' gibi bir satır tüm siteyi, belirli bir yolu engelleyen bir satır ise yalnızca o bölümü kapatır. Yanlışlıkla eklenmiş bir engel varsa geliştiricinizden kaldırmasını isteyin.",
    },
    {
      question: "Manuel işlem (penalty) aldığımı nasıl anlarım?",
      answer:
        "Search Console'da sol menüdeki 'Güvenlik ve Manuel İşlemler' bölümüne bakın. Burada bir uyarı varsa Google, sitenizde kurallara aykırı bir durum tespit etmiş ve sıralamanızı manuel olarak etkilemiş demektir.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        &quot;Google&apos;da neden çıkmıyorum?&quot; sorusunun cevabı
        genellikle tek bir teknik ayrıntıda gizlidir — ama önce şunu netleştirmek
        gerekir: sitenizin <strong>hiç dizinde olmaması</strong> ile{" "}
        <strong>belirli bir aramada üst sıralarda çıkmaması</strong> tamamen
        farklı iki sorundur. Bu yazı, ikisini de kapsayan 8 yaygın nedeni ve
        kendi kendinize kontrol edebileceğiniz adımları anlatıyor.
      </p>

      <h2 id="ilk-kontrol">İlk kontrol: Site gerçekten dizin dışı mı?</h2>
      <p>
        Google&apos;a gidip şunu yazın: <code>site:alanadiniz.com</code>.
        Sonuç çıkıyorsa siteniz Google&apos;ın dizininde var demektir —
        sorununuz &quot;hiç görünmüyorum&quot; değil, &quot;aradığım
        kelimede yeterince üst sırada değilim&quot;dir; bu durumda aşağıdaki
        8 nedenden çoğu değil, SEO çalışmasının kendisi (içerik, otorite,
        rakip analizi) devreye girer. Hiç sonuç çıkmıyorsa, aşağıdaki
        nedenlere bakmaya devam edin.
      </p>

      <h2 id="site-cok-yeni">1. Site çok yeni — henüz taranmadı</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://support.google.com/webmasters/answer/7474347?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          kendi resmi yardım belgesine göre
        </a>{" "}
        yeni yayınlanan bir sitenin taranıp dizine eklenmesi zaman
        alabilir. Bu, listedeki en zararsız ama en sık karşılaşılan neden —
        özellikle sitenizi Search Console&apos;a hiç eklemediyseniz Google
        onu bulup taramak için kendi keşif sürecine güveniyor demektir, bu
        da haftalar sürebilir.
      </p>
      <p>
        Bunu hızlandırmanın en etkili yolu, Search Console&apos;a sitemap
        göndermek ve anasayfa için &quot;Dizine eklenmesini iste&quot;
        demek — bu, sitenin doğal keşfedilme sürecini beklemek yerine
        Google&apos;a doğrudan bir işaret verir. Yine de kesin bir tarih
        vaat edilemez; Google kendi tarama önceliğine göre karar verir.
      </p>

      <h2 id="robots-txt">2. robots.txt sayfayı engelliyor</h2>
      <p>
        Tarayıcıda <code>alanadiniz.com/robots.txt</code> adresine gidin.
        İçinde <code>Disallow: /</code> gibi bir satır varsa, bu tüm siteyi
        Google&apos;ın{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          tarayıcısına kapatıyor
        </a>{" "}
        demektir — genellikle bir geliştirme/test ortamından canlıya
        geçerken unutulan bir ayardır. Tek bir yanlış satır, aylarca
        çalışılmış bir SEO emeğini anlamsızlaştırabilir.
      </p>
      <p>
        Bu hata özellikle site yenileme projelerinde sık görülür: geliştirme
        ortamında (staging) arama motorlarını engellemek doğru bir
        uygulamadır. Ama site canlıya alınırken <code>Disallow: /</code>{" "}
        satırının kaldırılması unutulabilir. Bizim de sahada en sık
        rastladığımız senaryo tam olarak bu: yenileme projesi biter, site
        canlıya alınır, staging&apos;den kalan tek satır fark edilmeden
        haftalarca durur. Yayına geçtikten hemen sonra robots.txt&apos;i
        kontrol etmek, bu tür bir hatayı haftalar sonra değil dakikalar
        içinde yakalamanızı sağlar.
      </p>

      <h2 id="noindex">3. Yanlışlıkla eklenmiş noindex etiketi</h2>
      <p>
        Sayfanın kaynak kodunda <code>&lt;meta name=&quot;robots&quot;
        content=&quot;noindex&quot;&gt;</code> etiketi varsa,{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google sayfayı tarasa bile dizine eklemez
        </a>
        . Bu genellikle bir CMS ayarından (ör. &quot;arama motorlarından
        gizle&quot; kutucuğunun yanlışlıkla işaretli kalması) kaynaklanır.
        Search Console&apos;daki URL Denetleme aracı bu etiketi anında
        gösterir.
      </p>

      <h2 id="sifre-koruma">4. Şifre koruması veya erişim engeli</h2>
      <p>
        Site hâlâ bir geliştirme şifresinin arkasındaysa (ör. hosting
        sağlayıcının varsayılan &quot;Coming Soon&quot; koruması),{" "}
        <a
          href="https://sitechecker.pro/google-search-console/blocked-due-to-unauthorized-request/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google tarayıcısı kimlik doğrulama gerektiren bir sayfaya hiç
          erişemez
        </a>
        . Canlıya geçiş sürecinde bu adımın kaldırıldığını doğrulamak
        basit ama sık atlanan bir kontrol.
      </p>

      <h2 id="search-console-eksik">5. Search Console&apos;a hiç eklenmemiş</h2>
      <p>
        Search Console&apos;a eklememiş olmak sitenizin Google&apos;da
        çıkmasını tek başına engellemez, ama süreci ciddi şekilde
        yavaşlatır —{" "}
        <a
          href="https://support.google.com/webmasters/answer/9128668?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;ın kendi tanımına göre
        </a>{" "}
        hem sitemap gönderme hem de tarama hatalarını erken görme imkânınız
        olmaz.{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          Web sitesi geliştirme sürecinde
        </Link>{" "}
        bu kurulumun standart olarak yapılması, tam da bu gecikmeyi
        önlemek için.
      </p>

      <h2 id="ic-link-yapisi">6. Zayıf dahili bağlantı yapısı</h2>
      <p>
        Bir sayfaya sitenin hiçbir yerinden link verilmiyorsa (&quot;orphan
        sayfa&quot;),{" "}
        <a
          href="https://ahrefs.com/blog/orphan-pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google onu bulmakta zorlanır
        </a>{" "}
        — sitemap&apos;te olsa bile. Menüden, ilgili içerik bloklarından
        veya en azından bir başka sayfadan her önemli sayfaya en az bir iç
        link gitmesi gerekir.
      </p>
      <p>
        Bu özellikle blog yazıları için sık görülen bir sorun: bir yazı
        yayınlanır ama ne blog arşiv listesine ne de ilgili bir hizmet
        sayfasına bağlanır — sitemap&apos;te göründüğü için tamamen
        görünmez olmaz, ama Google&apos;ın o sayfaya verdiği önem (ve
        dolayısıyla ne kadar sık yeniden tarandığı) ciddi şekilde düşer.
      </p>

      <h2 id="manuel-islem">7. Manuel işlem veya güvenlik sorunu</h2>
      <p>
        Search Console&apos;un sol menüsündeki &quot;Güvenlik ve Manuel
        İşlemler&quot; bölümünde bir uyarı varsa,{" "}
        <a
          href="https://support.google.com/webmasters/answer/9044175?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google sitenizde kurallara aykırı bir durum tespit etmiş
        </a>{" "}
        (spam bağlantılar, kötü amaçlı yazılım, kalitesiz otomatik içerik
        gibi) ve görünürlüğünüzü manuel olarak kısıtlamış demektir. Bu
        durumda önce sorunu düzeltip Google&apos;a &quot;yeniden
        değerlendirme talebi&quot; göndermeniz gerekir.
      </p>
      <p>
        Manuel işlemler genelde bir anda gelmez — genellikle satın alınmış
        spam bağlantılar, otomatik/kopya içerik üretimi veya gizlenmiş
        (cloaking) yönlendirmeler gibi kural ihlallerinin birikmesi
        sonucudur. Bu yüzden en iyi savunma, baştan itibaren{" "}
        <Link href="/blog/seo-ajansi-secerken-nelere-dikkat-edilmeli">
          bu tür riskli kısayolları önermeyen bir ekiple çalışmaktır
        </Link>
        .
      </p>

      <h2 id="site-tasima-hatasi">8. Site taşıma veya yeniden tasarım hatası</h2>
      <p>
        Alan adı değiştirme, HTTP&apos;den HTTPS&apos;e geçiş veya site
        yeniden tasarımı sırasında eski URL&apos;lerden yenilerine{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          301 yönlendirme
        </a>{" "}
        kurulmazsa, Google eski sayfaları dizinden düşürür ama yenilerini
        henüz tam olarak değiştirmemiş olabilir — bu geçiş döneminde
        görünürlük geçici olarak düşer. Doğru kurulmuş bir yönlendirme
        planı bu kaybı önler.
      </p>

      <h2 id="ozet-tablo">Özet: hangi sorun kimde çözülür?</h2>
      <table>
        <thead>
          <tr>
            <th>Neden</th>
            <th>Nasıl kontrol edilir</th>
            <th>Kim çözer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Site çok yeni</td>
            <td>Search Console&apos;da tarama geçmişi</td>
            <td>Search Console kurulumu + sitemap</td>
          </tr>
          <tr>
            <td>robots.txt engeli</td>
            <td>alanadiniz.com/robots.txt</td>
            <td>Geliştirici</td>
          </tr>
          <tr>
            <td>noindex etiketi</td>
            <td>Sayfa kaynağı / URL Denetleme aracı</td>
            <td>Geliştirici veya CMS yöneticisi</td>
          </tr>
          <tr>
            <td>Şifre koruması</td>
            <td>Siteyi çıkış yapmış tarayıcıda ziyaret et</td>
            <td>Hosting sağlayıcısı / geliştirici</td>
          </tr>
          <tr>
            <td>Search Console eksik</td>
            <td>search.google.com/search-console</td>
            <td>Site sahibi veya SEO ekibi</td>
          </tr>
          <tr>
            <td>Zayıf iç link yapısı</td>
            <td>Sayfa iç link raporu (Search Console)</td>
            <td>İçerik/SEO ekibi</td>
          </tr>
          <tr>
            <td>Manuel işlem</td>
            <td>Search Console &gt; Güvenlik ve Manuel İşlemler</td>
            <td>SEO ekibi + yeniden değerlendirme talebi</td>
          </tr>
          <tr>
            <td>Site taşıma hatası</td>
            <td>Eski URL&apos;lerde 301 kontrolü</td>
            <td>Geliştirici</td>
          </tr>
        </tbody>
      </table>

      <h2 id="kontrol-listesi">Kontrol listesi</h2>
      <ul>
        <li>
          <code>site:alanadiniz.com</code> araması — dizinde var mı, yok mu?
        </li>
        <li>robots.txt&apos;te tüm siteyi engelleyen bir satır var mı?</li>
        <li>Sayfa kaynağında yanlışlıkla noindex etiketi var mı?</li>
        <li>Site hâlâ bir şifre/geliştirme koruması arkasında mı?</li>
        <li>Search Console&apos;a eklendi mi, sitemap gönderildi mi?</li>
        <li>Önemli sayfalara en az bir iç linkten ulaşılabiliyor mu?</li>
        <li>&quot;Güvenlik ve Manuel İşlemler&quot; bölümünde uyarı var mı?</li>
        <li>Yakın zamanda bir alan adı/URL değişikliği oldu mu, 301 yönlendirmeler doğru mu?</li>
      </ul>

      <h2 id="sonuc">Hâlâ çözemiyorsanız</h2>
      <p>
        Bu 8 madde çoğu durumu kapsar, ama bazı teknik sorunlar (JavaScript
        render sorunları, sunucu tarafı hatalar, uluslararası hedefleme
        karışıklığı) daha derin bir teknik denetim gerektirir. Sitenizin şu
        anki durumunu hızlıca görmek isterseniz{" "}
        <Link href="/seo-analiz-araci">ücretsiz SEO analiz aracımızı</Link>{" "}
        deneyebilir, daha kapsamlı bir inceleme için{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>. Groopy&apos;de{" "}
        <Link href="/hizmetler/seo-ve-geo">SEO + GEO Stratejisi</Link>{" "}
        hizmetimizin ilk adımı da tam olarak bu tür teknik denetimdir.
      </p>
    </>
  );
}
