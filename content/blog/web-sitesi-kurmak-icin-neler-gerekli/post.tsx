import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "web-sitesi-kurmak-icin-neler-gerekli",
  title: "Web Sitesi Kurmak İçin Neler Gerekli? Domain, Hosting ve Yazılım Temelleri",
  metaTitle: "Web Sitesi Kurmak İçin Neler Gerekli?",
  description:
    "Domain nedir, hosting nasıl seçilir, SSL sertifikası neden zorunlu? MDN ve Let's Encrypt'in kendi teknik tanımlarına dayanarak bir web sitesinin arkasındaki üç temel bileşeni açıklıyoruz.",
  publishedAt: "2026-11-11",
  tldr: "Bir web sitesinin arkasında üç bağımsız bileşen var: alan adını IP adresine çeviren domain + DNS kaydı, dosyaları barındıran sunucu (hosting) ve tarayıcı-sunucu bağlantısını şifreleyen SSL/TLS sertifikası. MDN'nin tanımına göre DNS, 'web adresleri için bir adres defteri' gibi çalışıyor; Let's Encrypt'in kendi verilerine göre SSL sertifikaları artık ücretsiz ve otomatik olarak alınabiliyor. Bu üç bileşenin seçimi ve platformu (hazır CMS mi, özel yazılım mı) birbirinden bağımsız kararlar — ve her biri yanlış seçildiğinde sonradan değiştirmesi zahmetli oluyor.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/web-sitesi-kurmak-icin-neler-gerekli.jpg",
    alt: "Beyaz zeminli bir veri merkezinde kırmızı ve mavi kablolarla bağlı sunucu kabinleri",
  },
  faq: [
    {
      question: "Domain, hosting ve SSL'in toplam maliyeti ne kadar?",
      answer:
        "Bu üç kalem, bir web sitesi projesinin tasarım/geliştirme maliyetinden ayrı, görece küçük bir kalemdir. Tasarım ve geliştirme tarafının detaylı maliyet kırılımı için Web Sitesi Yaptırma Maliyeti 2026 yazımıza bakabilirsiniz.",
    },
    {
      question: "Web sitemi kendim mi kurmalıyım?",
      answer:
        "Basit bir tanıtım sayfası için hazır site oluşturucularla kendiniz başlayabilirsiniz. Ama domain/DNS yanlış yapılandırıldığında e-posta teslimatı bozulabilir, SSL kurulumu atlanırsa tarayıcı 'Güvenli Değil' uyarısı verir, ve yanlış hosting seçimi sitenin yavaş yüklenmesine yol açar. İş kritik bir site için bu adımların profesyonelce yönetilmesi, sonradan ortaya çıkacak sorunları önler.",
    },
    {
      question: "Domain adı kimin adına kayıtlı olmalı?",
      answer:
        "Sizin — işletmenizin veya sizin adınıza. Domain, bir işletmenin dijital kimliğinin en temel parçası; bu konuyu Google Ads hesap sahipliği yazımızda ele aldığımız 'hesap sahipliği size ait olmalı' ilkesiyle aynı mantıkla ele almak gerekir.",
    },
    {
      question: "SSL sertifikası gerçekten ücretsiz mi?",
      answer:
        "Evet. Let's Encrypt, kâr amacı gütmeyen ISRG tarafından işletilen, herkese açık ve ücretsiz bir sertifika otoritesidir (Certificate Authority); sertifika alma süreci otomatik olarak işliyor. Artık hemen her hosting sağlayıcısı bunu panelden tek tıkla etkinleştirebiliyor.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Bir web sitesi kurmak istediğinizde karşınıza üç farklı, birbirinden
        bağımsız karar çıkar: alan adı (domain), barındırma (hosting) ve
        güvenlik sertifikası (SSL). Bunlara ek olarak bir de platform/yazılım
        seçimi var. Bu dördü genelde tek bir paket gibi satılıyor, ama
        aslında dördü de ayrı ayrı anlaşılması gereken, farklı sağlayıcılardan
        alınabilen bağımsız bileşenler.
      </p>

      <h2 id="domain-nedir">Domain nedir, nasıl seçilir?</h2>
      <p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Developer Network&apos;ün (MDN) teknik tanımına göre
        </a>{" "}
        bir web
        adresindeki domain, bağlandığınız sunucunun üst düzey konumunu temsil
        eder. Tarayıcılar gerçekte IP adresleriyle (örneğin{" "}
        <code>192.0.2.172</code> gibi) çalışır; domain adları bu sayıları
        insanların hatırlayabileceği bir isme çevirir. Bu çeviriyi yapan
        sistemin adı DNS (Domain Name System) — MDN&apos;nin tabiriyle, &quot;web
        siteleri için bir adres defteri gibi&quot; çalışır: tarayıcınıza bir web
        adresi yazdığınızda, tarayıcı önce DNS&apos;e bakıp o adresin gerçek IP
        adresini bulur, sonra siteyi getirir. Domain seçerken dikkat edilmesi
        gereken üç şey: markanızla birebir örtüşmesi, akılda kalıcılığı ve
        hangi üst düzey uzantının (.com, .com.tr vb.) hedef kitlenize uygun
        olduğu.
      </p>

      <h2 id="hosting-nedir">Hosting nedir, hangi türleri var?</h2>
      <p>
        MDN&apos;nin sunucu tanımına göre sunucular, web sayfalarını,
        siteleri ya da uygulamaları depolayan bilgisayarlardır; bir kullanıcı
        bir sayfaya erişmek istediğinde, sayfanın kodu sunucudan istemci
        makineye indirilir ve tarayıcı tarafından işlenir. Hosting, bu
        sunucu kapasitesini kiralama hizmetidir ve birkaç türü var: paylaşımlı
        hosting (birden fazla site aynı sunucu kaynağını paylaşır, en uygun
        maliyetli ama en az izole seçenek), VPS (sanal özel sunucu —
        kaynaklar bölünmüş ama ayrılmış), özel sunucu (tüm donanım tek bir
        siteye ayrılmış) ve bulut hosting (talebe göre ölçeklenen, birden
        fazla fiziksel sunucuya dağılmış kapasite). Küçük bir işletme sitesi
        için doğru seçim genellikle trafik hacmine ve sitenin
        karmaşıklığına (statik sayfa mı, veritabanı gerektiren bir uygulama
        mı) bağlı.
      </p>

      <h2 id="ssl-neden-zorunlu">SSL sertifikası neden zorunlu?</h2>
      <p>
        SSL/TLS sertifikası, tarayıcı ile sunucu arasındaki bağlantıyı
        şifreleyerek iletilen verinin (form girdileri, giriş bilgileri)
        araya girilerek okunmasını engeller.{" "}
        <a
          href="https://letsencrypt.org/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let&apos;s Encrypt
        </a>
        , kâr amacı gütmeyen ISRG tarafından işletilen, herkesin yararına
        çalışan, ücretsiz ve otomatik bir sertifika otoritesi (Certificate
        Authority) olarak tanımlıyor kendini; amacının &quot;daha güvenli ve
        gizliliğe saygılı bir web&quot; yaratmak olduğunu belirtiyor.{" "}
        <a
          href="https://developers.google.com/search/blog/2014/08/https-as-ranking-signal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;ın kendi resmi açıklamasına göre
        </a>{" "}
        HTTPS, arama sıralamasında &quot;hafif bir sinyal&quot;
        olarak kullanılıyor — bu konuyu{" "}
        <Link href="/blog/eski-web-sitesini-yenileme-zamani-7-belirti">
          eski web sitesini yenileme zamanının belirtileri
        </Link>{" "}
        yazımızda da ele almıştık. Bugün hemen her hosting sağlayıcısı
        Let&apos;s Encrypt sertifikasını panelden tek tıkla, ücretsiz olarak
        etkinleştirebiliyor; yani bu artık bir maliyet sorunu değil, bir
        kurulum adımı.
      </p>

      <h2 id="platform-secimi">Platform seçimi: hazır CMS mi, özel yazılım mı?</h2>
      <p>
        Domain, hosting ve SSL belirlendikten sonra sırada sitenin üzerine
        kurulacağı platform var: WordPress gibi hazır bir içerik yönetim
        sistemi mi, yoksa Next.js gibi özel bir yazılım mı? Bu seçim,
        sitenin ne kadar özelleşmiş işlevler (randevu sistemi, özel hesap
        paneli, entegrasyon) gerektirdiğine göre değişiyor.{" "}
        <Link href="/blog/wordpress-mi-nextjs-mi">
          WordPress mi Next.js mi?
        </Link>{" "}
        yazımızda bu kararı performans, güvenlik ve uzun vadeli esneklik
        açısından ayrıntılı karşılaştırdık.
      </p>

      <h2 id="kim-yonetmeli">Bu süreci kim yönetmeli?</h2>
      <p>
        Dört bağımsız bileşen (domain, hosting, SSL, platform) demek, dört
        ayrı yerde yanlış gidebilecek dört ayrı nokta demek. Yanlış
        yapılandırılmış bir DNS kaydı e-posta teslimatını bozabilir; atlanan
        bir SSL kurulumu tarayıcıda güven uyarısı gösterir; yanlış hosting
        seçimi trafik arttığında siteyi çökertebilir. Bu yüzden bu süreç,
        tek seferlik bir kurulumdan çok, sitenin ömrü boyunca izlenmesi
        gereken bir sorumluluk. Kendi başınıza halledebilecek kadar basit bir
        site ile{" "}
        <Link href="/blog/kendi-web-sitesi-mi-pazaryeri-mi">
          profesyonel yönetim gerektiren bir iş sitesi
        </Link>{" "}
        arasındaki fark, genellikle bu detayların ne kadar kritik olduğunda
        ortaya çıkıyor.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Domain markanızın adresi, hosting o adresin arkasındaki depo, SSL
        ise bu ikisi arasındaki güvenlik katmanı — ve platform seçimi bu
        üçünün üzerine neyin inşa edileceğini belirliyor. Bu dört kararı
        doğru vermek, sitenin yayına alınmasından çok daha uzun süre
        etkisini sürdürüyor. Bu süreci uçtan uca yönetmemizi isterseniz{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          Web Sitesi / Yazılım Geliştirme hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
