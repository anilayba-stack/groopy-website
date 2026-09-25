import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "randevu-rezervasyon-sistemi-nasil-yapilir",
  title: "Randevu/Rezervasyon Sistemi Olan Web Sitesi Nasıl Yapılır?",
  metaTitle: "Randevu Sistemi Olan Web Sitesi Nasıl Yapılır?",
  description:
    "Hazır bir randevu aracı mı, siteye entegre özel bir sistem mi? Maliyet, KVKK ve çift rezervasyonu önleme açısından karar rehberi.",
  publishedAt: "2026-12-10",
  tldr: "Diş hekimi, fizyoterapist, kuaför ya da spor salonu gibi randevu bazlı işletmeler için asıl karar 'hazır bir araç mı, özel entegre bir sistem mi' sorusu. Hazır araçlar (ör. Calendly, resmi fiyatlandırmasına göre 10-16 dolar/kullanıcı/ay) hızlı başlangıç sağlar ama uzun vadede kullanıcı başına ücretlenir ve veri genellikle yurt dışı sunucuda kalır. KVKK'ya göre sağlık verisi 'özel nitelikli kişisel veri'dir ve açık rıza gerektirir; Kurul, özel nitelikli veri paylaşım ihlalinde 75.000 TL idari para cezası verdiği bir kararı yayımladı (2022/594). Çift rezervasyonu önlemenin teknik temeli IETF'nin RFC 5545 (iCalendar) standardındaki VFREEBUSY bileşenidir. Hatırlatma mesajlarının içeriği de önemli: hakemli bir çalışmaya göre randevu maliyetini belirten bir SMS, genel bir hatırlatmaya kıyasla kaçırma oranını düşürdü.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/randevu-rezervasyon-sistemi.jpg",
    alt: "Beyaz bir masada duran bir saat, kalem, not defteri ve akıllı telefon",
  },
  faq: [
    {
      question: "Randevu için Calendly gibi hazır bir araç kullanmalı mıyım?",
      answer:
        "Düşük randevu hacminiz varsa ve hızlı başlamak istiyorsanız uygun bir başlangıç noktası. Ama hacim arttıkça kullanıcı başına ücret (Calendly'de resmi fiyatlandırmaya göre 10-16 dolar/kullanıcı/ay) birikir ve marka deneyiminiz üçüncü taraf arayüzüne bağlı kalır.",
    },
    {
      question: "Randevu verisi KVKK kapsamında mı?",
      answer:
        "Sağlık hizmeti veren işletmeler için evet: KVKK'ya göre sağlık verisi 'özel nitelikli kişisel veri'dir ve açık rıza olmadan işlenemez. Kurul'un 2022/594 sayılı kararında, özel nitelikli veriyi yanlış kişiyle paylaşan bir veri sorumlusuna 75.000 TL idari para cezası verildi.",
    },
    {
      question: "Yurt dışı sunuculu bir randevu aracı kullanmak sorun olur mu?",
      answer:
        "6698 sayılı Kanun'un 9. maddesi yurt dışına veri aktarımını düzenliyor; 2024'te yapılan değişiklikle bu aktarım yeterlilik kararı veya uygun güvence gibi ek şartlara bağlandı. Sağlık verisi işleyen bir işletme için bu, ek bir uyum yükü demek; kesin uygulamayı KVKK'nın güncel rehberinden ve hukuki danışmanınızdan teyit edin.",
    },
    {
      question: "Çift rezervasyonu nasıl önlerim?",
      answer:
        "Teknik temel, takvimler arası müsaitlik bilgisinin gerçek zamanlı paylaşılmasıdır. IETF'nin RFC 5545 standardındaki VFREEBUSY bileşeni tam olarak bunu tanımlar; sisteminiz (hazır araç ya da özel geliştirme) bu senkronizasyonu doğru kurmuyorsa çift rezervasyon riski kalır.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Diş hekimi, fizyoterapist, kuaför, spor salonu: randevu bazlı
        çalışan her işletme aynı soruyla karşılaşır: hazır bir randevu
        aracı mı kullanmalı, yoksa web sitesine entegre özel bir sistem mi
        yaptırmalı? Bu yazı ikisini de dürüstçe karşılaştırıyor; hazır
        araçların gerçek avantajları var, bu bir sahte ikilem değil.
      </p>

      <h2 id="kisa-cevap">Kısa cevap: hacme ve veri hassasiyetine göre</h2>
      <table>
        <thead>
          <tr>
            <th>Durumunuz</th>
            <th>Öne çıkan seçenek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Düşük randevu hacmi, hızlı başlangıç öncelikli</td>
            <td>Hazır araç</td>
          </tr>
          <tr>
            <td>Yüksek hacim, birden fazla kullanıcı/şube</td>
            <td>Özel entegre sistem (uzun vadede daha ucuz)</td>
          </tr>
          <tr>
            <td>Sağlık verisi işleniyor (diş hekimi, fizyoterapist)</td>
            <td>Özel sistem ya da veri konumu netleştirilmiş bir araç</td>
          </tr>
          <tr>
            <td>Marka deneyimi ve site bütünlüğü öncelikli</td>
            <td>Özel entegre sistem</td>
          </tr>
        </tbody>
      </table>

      <h2 id="hazir-arac-avantaj">Hazır aracın avantajı: hız ve düşük başlangıç maliyeti</h2>
      <p>
        Calendly&apos;nin{" "}
        <a
          href="https://calendly.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi fiyatlandırma sayfasına
        </a>{" "}
        göre ücretsiz bir plan bile var (tek etkinlik türü, tek takvim);
        ücretli planlar Standard&apos;da kullanıcı başına ayda 10 dolardan,
        Teams&apos;te 16 dolardan başlıyor (yıllık faturalandırmada).
        Kurulum dakikalar sürer, takvim entegrasyonu ve ödeme
        bağlantıları (Stripe, PayPal) hazır gelir. Tek bir kişi ya da
        küçük bir ekip için bu, geliştirme süreci beklemeden hemen
        randevu almaya başlamak demek.
      </p>

      <h2 id="hazir-arac-maliyet">Hazır aracın uzun vadeli maliyeti ve kısıtları</h2>
      <p>
        Somutlaştıralım: 3 kişilik bir ekip Teams planında (kullanıcı
        başına 16 dolar/ay) yılda yaklaşık 576 dolar öder; 5 yılda bu
        2.880 dolara çıkar, üstelik ekip büyüdükçe maliyet de büyür. Buna
        ek olarak, randevu sayfası üçüncü taraf arayüzünde açılır; marka
        deneyiminiz sitenizden kopar. Kullanıcı verisi de genellikle
        aracın kendi (çoğunlukla yurt dışı) altyapısında tutulur;
        aşağıdaki KVKK bölümü bunun neden önemli olabileceğini açıklıyor.
      </p>

      <h2 id="kvkk">KVKK açısından neden önemli</h2>
      <p>
        Sağlık hizmeti veren işletmeler için bu, teorik bir risk değil.
        KVKK&apos;nın{" "}
        <a
          href="https://www.kvkk.gov.tr/Icerik/2051/Ozel-Nitelikli-Kisisel-Veriler"
          target="_blank"
          rel="noopener noreferrer"
        >
          özel nitelikli kişisel veriler sayfasına
        </a>{" "}
        göre sağlık verisi özel nitelikli kişisel veri kategorisinde ve
        işlenmesi için ilgili kişinin açık rızası gerekiyor. Kurul&apos;un{" "}
        <a
          href="https://www.kvkk.gov.tr/Icerik/7566/2022-594"
          target="_blank"
          rel="noopener noreferrer"
        >
          2022/594 sayılı kararında
        </a>
        , özel nitelikli bir sağlık verisinin (bağımlılık testi sonucu)
        yanlış bir e-posta adresine gönderilmesi üzerine veri sorumlusuna
        75.000 TL idari para cezası uygulandı. Bir randevu kaydı da
        (hangi hastanın hangi tarihte, hangi tedavi için geldiği) benzer
        bir hassasiyet taşıyabilir.
      </p>
      <p>
        Ayrıca 6698 sayılı Kanun&apos;un 9. maddesi yurt dışına veri
        aktarımını düzenliyor; 2024&apos;teki değişiklikle bu aktarım artık
        yeterlilik kararı ya da uygun güvence gibi ek şartlara bağlı. Yurt
        dışı sunuculu bir randevu aracı kullanıyorsanız ve sağlık verisi
        işliyorsanız, bu maddenin sizin için ne anlama geldiğini hukuki
        danışmanınızla netleştirmeniz gerekir; bu yazı hukuki tavsiye
        değildir.
      </p>

      <h2 id="ozel-sistem-avantaj">Özel entegre sistemin avantajı</h2>
      <p>
        Web sitenize entegre, özel geliştirilmiş bir randevu sistemi bu
        kısıtları ortadan kaldırır: veri nerede barındırılacağına siz
        karar verirsiniz, randevu akışı marka deneyiminizden hiç kopmaz
        ve kullanıcı sayısı arttıkça ek bir koltuk ücreti ödemezsiniz.
        Uzun vadede toplam maliyet genellikle sabit bir geliştirme
        yatırımına iner; bu yatırımın büyüklüğü için{" "}
        <Link href="/blog/web-sitesi-maliyeti-2026">
          web sitesi maliyeti rehberimize
        </Link>{" "}
        bakabilirsiniz.
      </p>

      <h2 id="ozellik-karsilastirma">Hangi özellik hangi tarafta güçlü?</h2>
      <table>
        <thead>
          <tr>
            <th>Özellik</th>
            <th>Hazır araç</th>
            <th>Özel entegre sistem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kurulum süresi</td>
            <td>Dakikalar</td>
            <td>Geliştirme takvimine bağlı</td>
          </tr>
          <tr>
            <td>Başlangıç maliyeti</td>
            <td>Düşük/ücretsiz</td>
            <td>Sabit bir geliştirme yatırımı</td>
          </tr>
          <tr>
            <td>Kullanıcı/koltuk arttıkça maliyet</td>
            <td>Doğrusal artar</td>
            <td>Genellikle sabit kalır</td>
          </tr>
          <tr>
            <td>Marka deneyimi bütünlüğü</td>
            <td>Sınırlı (üçüncü taraf arayüz)</td>
            <td>Tam kontrol</td>
          </tr>
          <tr>
            <td>Veri barındırma konumu</td>
            <td>Genellikle aracın kendi altyapısı</td>
            <td>Sizin seçtiğiniz konum</td>
          </tr>
          <tr>
            <td>Özel iş akışı (ör. çoklu şube, özel onay adımı)</td>
            <td>Aracın sunduğu kadar</td>
            <td>İhtiyaca göre tasarlanabilir</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bu tablo mutlak bir kural değil; bazı hazır araçlar kurumsal
        planlarında (Calendly&apos;nin Enterprise planı gibi) daha gelişmiş
        kontrol ve güvenlik özellikleri sunuyor, ama bu planlar da
        genellikle yıllık binlerce dolara mal oluyor ve minimum kullanıcı
        sayısı şartı taşıyor.
      </p>

      <h2 id="gecis">Hazır araçtan özel sisteme geçiş bir seçenek mi?</h2>
      <p>
        Evet, ve pratikte yaygın bir yol. Birçok işletme talebi test etmek
        için hazır bir araçla başlar; randevu hacmi ve ekip büyüdükçe,
        hazır aracın kullanıcı başına ücreti ile özel geliştirme
        maliyetini karşılaştırıp geçiş yapar. Bu geçişte dikkat edilmesi
        gereken tek şey, mevcut müşteri/randevu verisinin yeni sisteme
        düzgün aktarılması ve geçiş haftasında bir randevu boşluğu
        oluşmamasıdır.
      </p>

      <h2 id="cift-rezervasyon">Çift rezervasyonu önlemenin teknik temeli</h2>
      <p>
        Hangi yolu seçerseniz seçin, sistemin doğru çalışması tek bir
        şeye bağlı: takvimler arasında gerçek zamanlı müsaitlik bilgisi
        paylaşımı. IETF&apos;nin{" "}
        <a
          href="https://datatracker.ietf.org/doc/html/rfc5545"
          target="_blank"
          rel="noopener noreferrer"
        >
          RFC 5545 (iCalendar) standardı
        </a>
        , farklı takvim ve planlama uygulamaları arasında bu bilgiyi
        değiş tokuş etmek için tasarlandı; standardın VFREEBUSY bileşeni,
        özellikle müsait/meşgul zaman bilgisinin talep edilip
        paylaşılmasını tanımlıyor. Google Calendar API gibi araçlar da bu
        senkronizasyonu destekliyor. Pratik sonuç: bir randevu sistemi bu
        senkronizasyonu doğru kurmuyorsa (ör. yalnızca tek yönlü, manuel
        güncellenen bir takvim kullanıyorsa) çift rezervasyon riski
        yüksek kalır; senkronizasyon gerçek zamanlı ve iki yönlüyse risk
        büyük ölçüde ortadan kalkar.
      </p>

      <h2 id="hatirlatma">Hatırlatma mesajının içeriği de önemli</h2>
      <p>
        Randevu kaçırma sorununu daha önce{" "}
        <Link href="/blog/fizyoterapistler-dijital-pazarlama-rehberi">
          fizyoterapistler için dijital pazarlama rehberimizde
        </Link>{" "}
        ele almıştık; burada farklı bir açıdan bakalım: hatırlatma
        mesajının içeriği sonucu değiştiriyor.{" "}
        <a
          href="https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0137306"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hallsworth ve meslektaşlarının PLOS ONE&apos;da yayımlanan
          çalışmasına
        </a>{" "}
        göre, kaçırılan bir randevunun somut maliyetini belirten bir SMS,
        genel bir hatırlatma mesajına kıyasla kaçırma oranını düşürdü
        (birinci denemede %11,1&apos;den %8,4&apos;e, 10.111 katılımcı
        üzerinde; ikinci denemede benzer sonuç, 9.848 katılımcı
        üzerinde). Sonuç şu: bir hatırlatma sisteminiz olması yetmez,
        mesajın nasıl yazıldığı da fark yaratıyor.
      </p>

      <h2 id="kontrol-listesi">Karar kontrol listesi</h2>
      <ol>
        <li>Aylık randevu hacminiz ne kadar? Düşükse hazır araçla başlayın.</li>
        <li>Sağlık verisi ya da benzer hassas bilgi işliyor musunuz? İşliyorsanız veri konumunu ve KVKK uyumunu netleştirin.</li>
        <li>Kaç kullanıcı/şube randevu sistemine erişecek? Sayı arttıkça özel sistemin maliyet avantajı büyür.</li>
        <li>Marka deneyimi (randevu akışının sitenizle bütünlüğü) sizin için ne kadar önemli?</li>
        <li>Mevcut hatırlatma mesajlarınız randevunun somut maliyetini/önemini belirtiyor mu?</li>
      </ol>

      <h2 id="veri-siniri">Veri sınırı notu</h2>
      <p>
        KVKK&apos;nın randevu sistemlerine özgü ayrı, isim vererek yazılmış
        bir kararını bulamadık; yukarıdaki değerlendirme genel sağlık
        verisi ilkesine (özel nitelikli veri, açık rıza) dayanıyor.
        Yurt dışı SaaS araçlarının KVKK m.9 kapsamında tam olarak nasıl
        değerlendirileceği somut örnek üzerinden doğrulanamadı; bu net
        cevap gerektiren bir durumsa hukuk danışmanınıza başvurun.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Hazır bir araç hızlı başlamak için iyi bir yol, ama hacim ve
        hassas veri arttıkça maliyeti ve kısıtları da büyüyor. Özel
        entegre bir sistem daha fazla başlangıç yatırımı gerektirir ama
        veri kontrolü, marka bütünlüğü ve uzun vadeli maliyet açısından
        kazandırır. Aynı karar çerçevesi{" "}
        <Link href="/blog/dis-hekimleri-dijital-pazarlama-rehberi">
          diş hekimleri
        </Link>{" "}
        ve{" "}
        <Link href="/blog/spor-kulupleri-uye-kazanma-rehberi">
          spor kulüpleri
        </Link>{" "}
        için de geçerli.
      </p>
      <p>
        İşletmeniz için doğru randevu sistemini birlikte değerlendirmek
        isterseniz{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          web sitesi geliştirme hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
