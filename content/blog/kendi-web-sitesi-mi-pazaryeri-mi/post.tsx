import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "kendi-web-sitesi-mi-pazaryeri-mi",
  title: "Kendi Web Sitesi mi, Pazaryeri mi? Ürün Satan İşletmeler İçin Karar Rehberi",
  metaTitle: "Kendi Web Sitesi mi, Pazaryeri mi?",
  description:
    "Trendyol, Hepsiburada gibi pazaryerleri ile kendi web siteniz arasında seçim yaparken maliyet, kontrol ve müşteri verisi açısından bilmeniz gerekenler.",
  publishedAt: "2026-12-03",
  tldr: "İkisi de gerçek bir seçenek, sahte bir ikilem değil. Pazaryeri hazır trafik ve kurulmuş güven sağlar; karşılığında komisyon öder, marka deneyiminizi platformun kurallarına göre şekillendirirsiniz. Amazon.com.tr'nin resmi ücretlendirme sayfasına göre komisyon kategoriye göre %6-%20 arasında değişiyor; Trendyol ve Hepsiburada'nın oranları da benzer şekilde kategoriye göre değişiyor ama kesin yüzdeler satıcı paneline giriş gerektiriyor, bu yüzden kendi hesabınızdan kontrol etmenizi öneririz. 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun'un 10. maddesine göre hizmet sağlayıcı, elde ettiği kişisel verileri ilgili kişinin onayı olmadan üçüncü kişilere iletemez; pratik sonucu, pazaryerinde satış yaptığınızda müşterinin iletişim bilgisi doğrudan sizde olmayabilir. Türkiye'de 2024'te 600.800 işletme e-ticaret yaptı (Ticaret Bakanlığı). Çoğu büyüyen işletme için gerçekçi yol, ikisini bir arada kullanmak.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/kendi-web-sitesi-mi-pazaryeri-mi.jpg",
    alt: "Üzerinde 'PO#, Item#, Description' yazan bir kargo kutusunun yakın çekimi",
  },
  faq: [
    {
      question: "Pazaryeri komisyonu ne kadar?",
      answer:
        "Kategoriye göre değişir. Amazon.com.tr'nin resmi ücretlendirme sayfasına göre örnekler: bilgisayar %6, giyim %15,5, ayakkabı/çanta %17. Trendyol ve Hepsiburada da kategoriye göre komisyon uyguluyor; kesin oranı görmek için kendi satıcı panelinizi kontrol edin, çünkü bu bilgi genellikle girişe kapalı sayfalarda tutuluyor.",
    },
    {
      question: "Pazaryerinde sattığım müşterinin bilgilerine erişebilir miyim?",
      answer:
        "6563 sayılı Kanun'un 10. maddesine göre hizmet sağlayıcı, elde ettiği kişisel verileri ilgili kişinin onayı olmadan üçüncü kişilere iletemez. Pratikte bu, pazaryerinde satış yaptığınızda müşterinin doğrudan iletişim bilgisine her zaman sahip olamayabileceğiniz anlamına gelir; tekrar pazarlama (remarketing) yapmak istiyorsanız bu önemli bir kısıt.",
    },
    {
      question: "Hem pazaryerinde hem kendi sitemde satış yapabilir miyim?",
      answer:
        "Evet, ve çoğu büyüyen işletme için önerilen yol bu. Pazaryeri yeni müşteri kazanımı için, kendi siteniz marka bağımsızlığı ve müşteri verisi için kullanılabilir; fiyat ve stok senkronizasyonunu doğru kurmak gerekir.",
    },
    {
      question: "Yeni başlıyorsam hangisiyle başlamalıyım?",
      answer:
        "Bütçeniz ve zamanınız kısıtlıysa, hazır trafiği olan bir pazaryerinde başlayıp talebi test etmek daha düşük riskli olabilir. Talep doğrulandıktan ve düzenli satış hacmi oluştuktan sonra kendi sitenize yatırım yapmak, komisyon maliyetini ve marka bağımlılığını azaltır.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Bu, sahte bir ikilem değil; pazaryerinin gerçek avantajları var.
        Sorun &quot;hangisi daha iyi&quot; değil, &quot;hangisi sizin
        durumunuz için doğru&quot;. Bu yazıda ikisini de dürüstçe
        karşılaştırıyor, sonunda çoğu işletme için gerçekçi olan hibrit
        yaklaşımı somutlaştırıyoruz.
      </p>

      <h2 id="kisa-cevap">Kısa cevap: durumunuza göre</h2>
      <table>
        <thead>
          <tr>
            <th>Durumunuz</th>
            <th>Öne çıkan seçenek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yeni başlıyorsunuz, talebi henüz test ediyorsunuz</td>
            <td>Pazaryeri (düşük risk, hızlı başlangıç)</td>
          </tr>
          <tr>
            <td>Düzenli satış hacmi var, marka kimliği önemli</td>
            <td>Kendi site (kontrol ve marka bağımsızlığı)</td>
          </tr>
          <tr>
            <td>Müşteriyle tekrar iletişim kurmak (remarketing) öncelikli</td>
            <td>Kendi site (müşteri verisi doğrudan sizde)</td>
          </tr>
          <tr>
            <td>Büyümek istiyor ama tek kanala bağımlı kalmak istemiyorsunuz</td>
            <td>İkisi bir arada</td>
          </tr>
        </tbody>
      </table>

      <h2 id="pazaryeri-avantaj">Pazaryerinin gerçek avantajları</h2>
      <p>
        Bir pazaryerinde mağaza açmanın en büyük avantajı, sıfırdan trafik
        yaratmanıza gerek olmaması. Milyonlarca aylık ziyaretçisi olan bir
        platforma katılırsınız; arama, kategori sayfaları ve platformun
        kendi reklam/öneri sistemleri üzerinden potansiyel müşteriye
        ulaşırsınız. Ayrıca platformun kurulmuş güveni (ödeme güvencesi,
        iade politikası, marka bilinirliği) sizin için de geçerli olur;
        yeni bir müşteri, hiç duymadığı bir markanın kendi sitesinden çok,
        tanıdığı bir pazaryerinden alışveriş yapmaya daha yatkın olabilir.
      </p>
      <p>
        Kurulum tarafı da hızlı: ürün yükleme, ödeme altyapısı ve kargo
        entegrasyonu genellikle hazır geliyor; kendi bir web sitesi
        kurmanın gerektirdiği{" "}
        <Link href="/blog/web-sitesi-ne-kadar-surede-tamamlanir">
          geliştirme süresine
        </Link>{" "}
        katlanmadan satışa başlayabilirsiniz.
      </p>

      <h2 id="pazaryeri-maliyet">Pazaryerinin maliyeti ve kısıtları</h2>
      <p>
        Bu avantajların bir karşılığı var: komisyon ve kontrol kaybı.
        Amazon.com.tr&apos;nin{" "}
        <a
          href="https://satis.amazon.com.tr/ucretlendirme"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi ücretlendirme sayfasına
        </a>{" "}
        göre satış komisyonu kategoriye bağlı olarak %6 ile %20 arasında
        değişiyor (örnek: bilgisayarda %6, giyimde %15,5, ayakkabı ve
        çantada %17); bunun üzerine aylık 99 TL+KDV sabit üyelik bedeli
        var (şu an promosyon kapsamında muaf). Trendyol ve Hepsiburada da
        benzer şekilde kategoriye göre değişen komisyon uyguluyor, ama
        kesin oranlar satıcı paneline giriş gerektiren sayfalarda tutuluyor
        ve herkese açık, doğrulanabilir bir kaynaktan teyit edemedik; bu
        yüzden kendi hesabınızdan kontrol etmenizi öneririz.
      </p>
      <p>
        Kontrol tarafında da sınır var: mağaza sayfanızın tasarımı, ürün
        sunumu ve müşteri deneyiminin büyük kısmı platformun şablonuna
        bağlı kalır. Fiyat karşılaştırması da platform içinde doğrudan
        yapıldığı için, farklılaşmanız büyük ölçüde fiyat ve yorum
        puanına indirgenebilir.
      </p>

      <h2 id="komisyon-ornegi">Komisyonun kâr marjına somut etkisi</h2>
      <p>
        Rakamı somutlaştıralım: Amazon.com.tr&apos;nin giyim kategorisi
        için ilan ettiği %15,5 komisyon oranını alalım. 500 TL&apos;ye
        sattığınız bir ürün için platforma yaklaşık 77,50 TL komisyon
        öderseniz, geri kalan 422,50 TL&apos;den ürün maliyeti, kargo ve
        varsa reklam payını çıkarırsınız. Aynı ürünü kendi sitenizden
        satarsanız bu 77,50 TL&apos;lik pay ödeme altyapısı komisyonuna
        (genellikle %2-3 aralığında, sağlayıcıya göre değişir) düşer;
        aradaki fark doğrudan kâr marjınıza eklenir. Elbette bu fark,
        kendi sitenize o satışı getirecek trafiği yaratmanın maliyetiyle
        (reklam, SEO çalışması) karşılaştırılmalı; her durumda kâr
        çıkaracağı garanti değil, ama komisyonun büyüklüğünü somut bir
        rakamla görmek karar vermeyi kolaylaştırıyor.
      </p>

      <h2 id="bagimlilik-riski">Tek platforma bağımlılık riski</h2>
      <p>
        Satışlarınızın tamamı tek bir pazaryerinden geliyorsa, platformun
        komisyon oranını artırması, algoritmasını değiştirmesi ya da
        hesabınızla ilgili bir anlaşmazlık yaşamanız durumunda elinizde
        yedek bir kanal olmaz. Bu bir istatistik değil, yapısal bir risk:
        gelirinizin tek bir üçüncü tarafın kurallarına bağlı olması,
        kendi kontrolünüzde olmayan bir değişkeni işinizin merkezine
        koyar. Kendi bir web siteniz olması, bu riski tamamen ortadan
        kaldırmasa da, satışlarınızın bir kısmını sizin kontrolünüzdeki
        bir kanala taşır.
      </p>

      <h2 id="musteri-verisi">Müşteri verisi kime ait?</h2>
      <p>
        Bu, çoğu satıcının gözden kaçırdığı bir nokta. 6563 sayılı{" "}
        <a
          href="https://mevzuat.gov.tr/MevzuatMetin/1.5.6563.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elektronik Ticaretin Düzenlenmesi Hakkında Kanun&apos;un
        </a>{" "}
        10. maddesine göre, hizmet sağlayıcı ve aracı hizmet sağlayıcı bu
        Kanun çerçevesinde elde ettiği kişisel verilerin saklanmasından
        sorumludur ve bu verileri ilgili kişinin onayı olmaksızın üçüncü
        kişilere iletemez. Pratik sonucu şu: pazaryerinde sattığınız bir
        müşterinin e-posta veya telefon bilgisine her zaman doğrudan
        erişiminiz olmayabilir; bu veri yasal olarak platformda kalır.
        Kampanya duyurusu, sadakat programı ya da tekrar pazarlama
        yapmak istiyorsanız, bu kısıt doğrudan gelirinizi etkiler.
      </p>

      <h2 id="kendi-site-avantaj">Kendi web sitesinin avantajları</h2>
      <p>
        Kendi sitenizde bu kısıt yok: ziyaretçi verisi, müşteri iletişim
        bilgisi ve satış geçmişi doğrudan sizin. Marka deneyimini
        (tasarım, ton, ürün hikayesi) tamamen kendiniz kurarsınız ve
        yaptığınız SEO/GEO yatırımı zamanla platformdan bağımsız, kalıcı
        bir varlığa dönüşür; bir pazaryerinde harcadığınız çaba platformun
        trafiğini büyütür, kendi sitenizde harcadığınız çaba sizin
        varlığınızı büyütür.
      </p>
      <p>
        Uzun vadede komisyon maliyeti de ortadan kalkar; yalnızca ödeme
        altyapısı ve barındırma maliyeti kalır, bu genellikle pazaryeri
        komisyonundan düşüktür.
      </p>

      <h2 id="kendi-site-maliyet">Kendi web sitesinin maliyeti</h2>
      <p>
        Karşılığında trafiği kendiniz yaratmanız gerekir; bir pazaryeri
        gibi hazır ziyaretçi akışı yoktur, SEO, reklam ya da sosyal
        medyaya yatırım gerekir. Kurulum da bir zaman ve bütçe kalemi:{" "}
        <Link href="/blog/web-sitesi-maliyeti-2026">
          web sitesi maliyeti
        </Link>{" "}
        ve{" "}
        <Link href="/blog/web-sitesi-ne-kadar-surede-tamamlanir">
          tamamlanma süresi
        </Link>{" "}
        yazılarımızda bu kalemleri ayrıntılı ele aldık. Ödeme altyapısı,
        kargo entegrasyonu ve stok yönetimi gibi işleri de kendiniz
        kurmanız (ya da kurdurmanız) gerekir.
      </p>

      <h2 id="turkiye-baglami">Türkiye&apos;de tablo</h2>
      <p>
        Ticaret Bakanlığı&apos;nın{" "}
        <a
          href="https://ticaret.gov.tr/duyurular/turkiyede-e-ticaretin-gorunumu-raporu-yayinlandi-06-05-2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          6 Mayıs 2025&apos;te yayımladığı rapora
        </a>{" "}
        göre 2024 yılında Türkiye genelinde 600.800 işletme e-ticaret
        faaliyetinde bulundu; bunların %78,6&apos;sı şahıs işletmesi,
        %17,8&apos;i limited şirket, %3,6&apos;sı anonim şirket. Rapor,
        bu işletmelerin ne kadarının pazaryeri üzerinden, ne kadarının
        kendi sitesi üzerinden sattığına dair bir kırılım vermiyor; bu
        yüzden &quot;Türkiye&apos;de işletmelerin şu kadarı pazaryerini
        tercih ediyor&quot; gibi bir orana dair doğrulanabilir bir kaynak
        bulamadık.
      </p>

      <h2 id="urun-tipi">Ürün tipine göre eğilim</h2>
      <p>
        Genel geçer, yaygın talep gören ürünler (elektronik aksesuar,
        günlük giyim, ev eşyası) pazaryeri aramasında kolayca bulunur;
        alıcı zaten platformda bu ürünü arıyordur. Özel üretim, niş bir
        markaya bağlı ya da hizmetle iç içe geçmiş ürünlerde (örneğin
        randevu gerektiren, kişiye özel üretilen ya da güçlü bir marka
        hikayesine dayanan ürünler) durum tersine döner: alıcı genellikle
        markayı arayarak gelir, bu da kendi sitenizin görünürlüğünü daha
        değerli kılar. Ürününüz hangi gruba giriyorsa, o kanala öncelik
        vermek mantıklı bir başlangıç noktası.
      </p>

      <h2 id="hibrit">Hibrit model: ikisi bir arada</h2>
      <p>
        Çoğu büyüyen işletme için gerçekçi yol, ikisini birbirinin yerine
        değil, tamamlayıcısı olarak kullanmak: pazaryeri yeni müşteri
        kazanımı ve talep testi için, kendi site marka bağımsızlığı,
        müşteri verisi ve uzun vadeli SEO/GEO yatırımı için. Bunun için
        gereken tek şey, fiyat ve stok bilgisini iki kanalda da tutarlı
        tutacak bir düzen kurmak; tutarsız fiyat, her iki kanalda da
        güven kaybına yol açar.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Pazaryeri hazır trafik ve güven sağlar, karşılığında komisyon
        alır ve müşteri verisini elinizden çıkarır. Kendi siteniz tam
        kontrol ve kalıcı bir dijital varlık sağlar, karşılığında trafiği
        kendiniz yaratmanızı gerektirir. Doğru cevap genellikle ikisi
        arasında seçim değil, ikisini doğru sırayla ve doğru oranda
        kullanmak.
      </p>
      <p>
        Kendi web sitenizi kurmayı ya da pazaryeri satışlarınızı
        destekleyecek bir siteyi planlamayı değerlendirmek isterseniz{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          web sitesi geliştirme hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
