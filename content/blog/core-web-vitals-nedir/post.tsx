import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "core-web-vitals-nedir",
  title: "Core Web Vitals Nedir? İşletmeler İçin Neden Önemli?",
  metaTitle: "Core Web Vitals Nedir?",
  description:
    "Core Web Vitals (LCP, INP, CLS) nedir, Google sıralamasını nasıl etkiler ve gerçek vaka çalışmalarına göre işletmenizin gelirini neden ilgilendirir.",
  publishedAt: "2026-11-26",
  tldr: "Core Web Vitals; sayfa yükleme hızını (LCP, 2,5 saniye ve altı iyi kabul ediliyor), etkileşim tepki hızını (INP, 200 milisaniye ve altı) ve görsel kararlılığı (CLS, 0,1 ve altı) ölçen üç metrikten oluşuyor (web.dev, kaynak). Google bu metrikleri sıralama sistemlerinde kullandığını söylüyor, ama alakalı içeriği her zaman önceliklendirdiğini de açıkça belirtiyor; yani mükemmel bir puan kötü içeriği kurtarmaz. Google'ın kendi vaka çalışmalarına göre Vodafone'da LCP'de %31 iyileşme toplam satışları %8 artırmış, Renault'da 1 saniyelik LCP iyileştirmesi dönüşümü %13 yükseltmiş. Kendi sitemizi ölçtük: mobilde 96/100, LCP 2,8 saniye; ama site yeni olduğu için henüz gerçek kullanıcı (alan) verisi yok, bu da laboratuvar ve alan verisi arasındaki farkı göstermenin iyi bir örneği.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/core-web-vitals-nedir.jpg",
    alt: "Ahşap bir masada dizüstü bilgisayarda çalışan bir kişi, yanında not defteri ve kahve fincanı",
  },
  faq: [
    {
      question: "Core Web Vitals kaç metrikten oluşuyor?",
      answer:
        "Üç: LCP (Largest Contentful Paint, yükleme hızı), INP (Interaction to Next Paint, etkileşim tepki hızı) ve CLS (Cumulative Layout Shift, görsel kararlılık). INP, 2024'te FID'in (First Input Delay) yerini alan güncel metrik.",
    },
    {
      question: "Kötü bir Core Web Vitals puanı Google sıralamasını doğrudan düşürür mü?",
      answer:
        "Google, bu metrikleri sıralama sistemlerinde kullandığını söylüyor ama aynı zamanda 'arama her zaman en alakalı içeriği göstermeye çalışır, sayfa deneyimi vasat olsa bile' diyor. Yani zayıf bir puan tek başına belirleyici değil; içerik kalitesiyle birlikte değerlendiriliyor.",
    },
    {
      question: "PageSpeed Insights'taki puan ile Search Console'daki rapor neden farklı?",
      answer:
        "PageSpeed Insights hem laboratuvar verisi (kontrollü, tek seferlik bir ölçüm) hem de mümkünse alan verisi (Chrome kullanıcılarından toplanan gerçek deneyim) gösterir. Search Console'daki Core Web Vitals raporu yalnızca alan verisini kullanır. Yeterli trafiği olmayan siteler için alan verisi hiç görünmeyebilir; bu bir hata değil, veri yetersizliği.",
    },
    {
      question: "Sitemi nasıl test edebilirim?",
      answer:
        "pagespeed.web.dev adresine site adresinizi girin; 30 saniye içinde LCP, INP ve CLS için yeşil/sarı/kırmızı bir sonuç görürsünüz. Aynı kontrolü SEO temelleriyle birlikte görmek isterseniz ücretsiz SEO analiz aracımızı da kullanabilirsiniz.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Kendi sitemizi PageSpeed Insights ile ölçtük: mobilde 96/100, LCP 2,8
        saniye, CLS 0. Bu sayıların ne anlama geldiğini ve işletmeniz için
        neden önemli olduğunu bu yazıda açıklıyoruz; sondaki kısımda kendi
        sitenizi nasıl test edeceğinizi de anlatıyoruz.
      </p>

      <h2 id="tanim">Core Web Vitals tam olarak nedir?</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://web.dev/articles/vitals"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi web.dev dokümantasyonuna
        </a>{" "}
        göre Core Web Vitals üç metrikten oluşuyor ve her biri için &quot;iyi&quot;
        kabul edilen eşik, kullanıcıların %75&apos;inin deneyimlediği (75.
        yüzdebirlik dilim) alan verisine göre belirleniyor:
      </p>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Ne ölçer</th>
            <th>&quot;İyi&quot; eşik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LCP (Largest Contentful Paint)</td>
            <td>Sayfadaki en büyük içeriğin görünür hale gelme süresi</td>
            <td>2,5 saniye ve altı</td>
          </tr>
          <tr>
            <td>INP (Interaction to Next Paint)</td>
            <td>Bir tıklama/dokunmaya ekranın tepki verme hızı</td>
            <td>200 milisaniye ve altı</td>
          </tr>
          <tr>
            <td>CLS (Cumulative Layout Shift)</td>
            <td>Sayfa yüklenirken elemanların ne kadar kaydığı</td>
            <td>0,1 ve altı</td>
          </tr>
        </tbody>
      </table>
      <p>
        INP göreceli olarak yeni bir metrik: web.dev&apos;e göre 2023&apos;te
        deneysel durumdan &quot;pending&quot; statüsüne yükseltildi, amacı
        FID&apos;i (First Input Delay) emekliye ayırmaktı; 2024&apos;te
        istikrarlı (stable) bir Core Web Vital haline geldi. Yani güncel bir
        rehberde artık FID değil INP geçmeli.
      </p>
      <p>
        Bu üç metriğin pratikte karşılığı şu: LCP, ziyaretçinin &quot;sayfa
        yüklendi mi?&quot; sorusuna verdiği cevaba karşılık gelir; yavaşsa
        ziyaretçi sayfayı hiç görmeden kapatabilir. INP, bir düğmeye
        tıkladığınızda ekranın gecikmeli tepki vermesi durumudur; yüksekse
        site &quot;takılıyor&quot; hissi verir. CLS ise sayfa yüklenirken
        bir butonun ya da metnin yerinin oynaması, hatta yanlış bir yere
        tıklamanıza neden olmasıdır; bir form veya ödeme sayfasında bu
        özellikle can sıkıcıdır.
      </p>

      <h2 id="siralama">Google sıralamasındaki rolü ne kadar?</h2>
      <p>
        Google Search Central&apos;ın{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/page-experience"
          target="_blank"
          rel="noopener noreferrer"
        >
          Page Experience sayfasında
        </a>{" "}
        (son güncelleme 22 Eylül 2026) açıkça şöyle deniyor: &quot;Core Web
        Vitals sıralama sistemlerimiz tarafından kullanılıyor.&quot; Ama hemen
        ardından bir denge de kuruluyor: &quot;Google Arama, sayfa deneyimi
        vasat olsa bile her zaman en alakalı içeriği göstermeye
        çalışır.&quot; Pratik sonuç: mükemmel bir Core Web Vitals puanı,
        zayıf veya alakasız içeriği kurtarmaz; ama aynı kalitede iki içerik
        arasında hız avantajı fark yaratabilir.
      </p>

      <h2 id="is-etkisi">İşletmeler için neden önemli: üç doğrulanmış vaka</h2>
      <p>
        Sıralamadan bağımsız olarak, hızın kullanıcı davranışına doğrudan
        etkisi var. Google&apos;ın kendi yayımladığı vaka çalışmalarından
        üçü, farklı sektörlerde benzer bir yönü gösteriyor. Bu veriler
        2020-2022 dönemine ait; güncel bir araştırma değil, ama yöntemleri
        (A/B test) ve sonuçları hâlâ Google&apos;ın resmi vaka arşivinde
        yayında.
      </p>
      <table>
        <thead>
          <tr>
            <th>Şirket</th>
            <th>Ne yapıldı</th>
            <th>Sonuç</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://web.dev/case-studies/vodafone"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vodafone
              </a>{" "}
              (2021)
            </td>
            <td>
              LCP&apos;de %31 iyileştirme, ~100.000 tıklama/gün ile A/B test
            </td>
            <td>Toplam satışlarda %8, lead oranında %15 artış</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://web.dev/case-studies/renault"
                target="_blank"
                rel="noopener noreferrer"
              >
                Renault
              </a>{" "}
              (2020-2021, 10M ziyaret)
            </td>
            <td>1 saniyelik LCP iyileştirmesinin etkisi ölçüldü</td>
            <td>Dönüşümde %13 artış, sıçrama oranında 14 puan düşüş</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://web.dev/case-studies/rakuten"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rakuten 24
              </a>{" "}
              (2022)
            </td>
            <td>
              Bir açılış sayfası Core Web Vitals için optimize edilip 1 ay
              A/B test edildi
            </td>
            <td>Dönüşümde %33, ziyaretçi başı gelirde %53 artış</td>
          </tr>
        </tbody>
      </table>
      <p>
        Somutlaştırmak gerekirse: Renault&apos;nun verisine göre sitenizin
        yalnızca 1 saniye hızlanması, her 100 ziyaretçiden yaklaşık 13
        tanesinin daha fazla dönüşüme (satın alma, form doldurma, randevu)
        gitmesi anlamına gelebilir. Bu, üç farklı şirkette üç farklı A/B
        testinin sonucu; sizin siteniz için garanti değil, ama yönü net.
      </p>

      <h2 id="olcum">Nasıl ölçülür: laboratuvar verisi mi, alan verisi mi?</h2>
      <p>
        Web.dev&apos;in{" "}
        <a
          href="https://web.dev/articles/lab-and-field-data-differences"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi açıklamasına
        </a>{" "}
        göre PageSpeed Insights iki farklı veri kaynağını birleştirir:
        laboratuvar verisi (Lighthouse&apos;un kontrollü bir ortamda yaptığı
        tek seferlik ölçüm) ve alan verisi (Chrome Kullanıcı Deneyimi
        Raporu&apos;ndan, gerçek kullanıcıların son 28 günlük deneyiminden
        gelen veri). Google Search Console&apos;daki Core Web Vitals
        raporu yalnızca alan verisini kullanır.
      </p>
      <p>
        Kendi sitemiz bunun somut bir örneği: groopyagency.com&apos;u
        PageSpeed Insights ile ölçtüğümüzde mobilde 96/100, masaüstünde
        99/100 laboratuvar puanı alıyoruz (LCP 2,8 saniye, CLS 0). Ama site
        henüz yeterli ziyaretçi trafiğine sahip olmadığı için alan verisi
        hiç görünmüyor. Bu bir hata değil; Chrome&apos;un alan verisi
        raporlaması için minimum bir trafik eşiği gerekiyor. Kendi siteniz
        yeniyse ya da düşük trafikliyse, PageSpeed Insights&apos;ta yalnızca
        laboratuvar verisi görüp alan verisi bölümünün boş çıkması normal.
      </p>
      <p>
        Bu ayrım pratikte şunu değiştiriyor: laboratuvar verisi, kontrollü
        bir ortamda tek bir cihaz/bağlantı hızıyla yapılan bir ölçüm
        olduğu için tekrarlanabilir ama sizin gerçek ziyaretçilerinizin
        deneyimini birebir yansıtmaz. Alan verisi ise gerçek kullanıcıların
        farklı cihaz, bağlantı hızı ve konumlarından toplandığı için daha
        gerçekçidir ama yeterli trafik birikene kadar görünmez. Google
        Search Console&apos;un Core Web Vitals raporu ve arama
        sıralamasında kullanılan veri alan verisidir; bu yüzden trafiği az
        yeni bir site için laboratuvar puanının iyi olması gerekli ama tek
        başına yeterli bir garanti değildir.
      </p>

      <h2 id="yanlis-anlamalar">Sık karşılaşılan iki yanlış anlama</h2>
      <p>
        <strong>&quot;Puanım 100 olsun, o zaman ilk sırada çıkarım.&quot;</strong>{" "}
        Yukarıdaki Google alıntısı bunun tersini söylüyor: içerik alakalı
        değilse mükemmel bir hız puanı sıralamayı kurtarmaz. Core Web
        Vitals, aynı kalitede iki sayfa arasında bir fark yaratma
        ihtimalidir; tek başına bir sıralama stratejisi değildir.
      </p>
      <p>
        <strong>&quot;Bir kere ölçtüm, iyi çıktı, iş bitti.&quot;</strong>{" "}
        Laboratuvar puanı yeni bir görsel, üçüncü taraf bir betik (ör.
        canlı sohbet widget&apos;ı, reklam kodu) veya bir tasarım değişikliği
        eklendiğinde değişebilir. Alan verisi de zamanla değişen bir 28
        günlük pencere. Bu yüzden Core Web Vitals bir defalık kontrol değil,
        siteye her önemli değişiklik eklendiğinde tekrar bakılması gereken
        sürekli bir gösterge.
      </p>

      <h2 id="test-edin">Kendi sitenizi 30 saniyede test edin</h2>
      <p>Somut adımlar:</p>
      <ol>
        <li>
          <a
            href="https://pagespeed.web.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            pagespeed.web.dev
          </a>{" "}
          adresine gidin, site adresinizi girin.
        </li>
        <li>
          Mobil sonucuna bakın (Google&apos;ın mobil öncelikli indekslemesi
          nedeniyle masaüstünden daha belirleyici).
        </li>
        <li>
          LCP, INP ve CLS için yeşil/sarı/kırmızı renk kodunu kontrol edin;
          kırmızı olan varsa, o metrik önceliğiniz olsun.
        </li>
        <li>
          Alan verisi bölümü boşsa, bu düşük trafik anlamına gelir; puanı
          değerlendirmek için yalnızca laboratuvar verisine güvenin.
        </li>
      </ol>
      <p>
        SEO temellerini de aynı anda görmek isterseniz{" "}
        <Link href="/seo-analiz-araci">ücretsiz SEO analiz aracımızı</Link>{" "}
        kullanabilirsiniz; bu araç PageSpeed verisini SEO ve GEO
        kriterleriyle birlikte tek raporda gösteriyor.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Core Web Vitals tek başına bir sıralama garantisi değil, ama Google
        bunu sıralama sistemlerinde kullandığını açıkça söylüyor ve
        Google&apos;ın kendi vaka çalışmaları hızın satışa, dönüşüme ve
        sıçrama oranına doğrudan etkisini gösteriyor. Yeni bir site
        kuruyorsanız bu metrikleri baştan hedefleyen bir teknoloji seçimi
        (bkz.{" "}
        <Link href="/blog/wordpress-mi-nextjs-mi">
          WordPress mi Next.js mi?
        </Link>
        ) sonradan optimize etmekten daha az maliyetli;{" "}
        <Link href="/blog/web-sitesi-ne-kadar-surede-tamamlanir">
          web sitesi ne kadar sürede tamamlanır
        </Link>{" "}
        yazımızda bu sürecin fazlarını ayrıca ele aldık.
      </p>
      <p>
        Sitenizin Core Web Vitals durumunu, hızlı bir teknoloji üzerinde
        sıfırdan kurulacak{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          web sitesi geliştirme hizmetimiz
        </Link>{" "}
        kapsamında birlikte değerlendirmek isterseniz{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
