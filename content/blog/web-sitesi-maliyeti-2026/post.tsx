import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "web-sitesi-maliyeti-2026",
  title: "Web Sitesi Yaptırma Maliyeti 2026: Gerçekçi Fiyat Rehberi",
  metaTitle: "Web Sitesi Yaptırma Maliyeti 2026",
  description:
    "2026'da web sitesi yaptırmak ne kadar tutar? Proje türüne göre gerçekçi fiyat aralıkları, maliyeti belirleyen faktörler ve bütçe planlama rehberi.",
  publishedAt: "2026-09-02",
  tldr: "2026'da Türkiye'de web sitesi maliyeti proje türüne göre değişir: küçük işletme sitesi 18.000–35.000 TL, orta ölçekli kurumsal site 75.000–140.000 TL, özel yazılım gerektiren kurumsal projeler 90.000–250.000 TL, e-ticaret 80.000 TL ve üzeri. Fiyatı belirleyen asıl faktör sayfa sayısı değil; tasarımın sıfırdan mı yapıldığı, entegrasyon ihtiyacı ve performans/SEO kapsamıdır.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 7,
  faq: [
    {
      question: "En ucuz web sitesi kaça yapılır?",
      answer:
        "Hazır şablonla tek sayfalık bir tanıtım sitesi 10.000 TL civarında başlayabilir. Ancak bu fiyat bandında sitenin performansı, SEO temeli ve özelleştirme sınırı düşüktür; çoğu işletme 12–18 ay içinde yeniden yaptırır.",
    },
    {
      question: "Kurumsal web sitesi neden daha pahalı?",
      answer:
        "Sıfırdan tasarım, çok dillilik, içerik yönetimi, form ve CRM entegrasyonları, erişilebilirlik ve Core Web Vitals uyumu maliyeti artırır. Bunlar sonradan eklendiğinde toplam maliyet daha yüksek olur.",
    },
    {
      question: "Aylık ödeme ile web sitesi mantıklı mı?",
      answer:
        "Bakım, hosting ve güncelleme için aylık model olağandır. Ancak sitenin kendisini 'kiralamak' — yani kodun size ait olmaması — uzun vadede bağımlılık yaratır. Kod sahipliğini sözleşmede netleştirin.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Web sitesi yaptırma maliyeti 2026&apos;da tek bir rakamla ifade edilemez,
        çünkü
        &quot;web sitesi&quot; dediğimiz şey bir kartvizit sayfasından çok dilli bir
        kurumsal platforma kadar uzanır. Aşağıda proje türüne göre gerçekçi
        aralıklar ve bu aralıkların neden bu kadar geniş olduğu var.
      </p>

      <h2 id="fiyat-araliklari">Proje türüne göre fiyat aralıkları (Türkiye, 2026)</h2>
      <table>
        <thead>
          <tr>
            <th>Proje türü</th>
            <th>Tipik aralık</th>
            <th>Ne içerir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Küçük işletme / tanıtım sitesi</td>
            <td>18.000 – 35.000 TL</td>
            <td>5–8 sayfa, iletişim formu, temel SEO, mobil uyum</td>
          </tr>
          <tr>
            <td>Orta ölçekli kurumsal site</td>
            <td>75.000 – 140.000 TL</td>
            <td>Sıfırdan tasarım, içerik yönetimi, çok dil, blog, entegrasyonlar</td>
          </tr>
          <tr>
            <td>Stratejik kurumsal / özel yazılım</td>
            <td>90.000 – 250.000 TL</td>
            <td>Özel işlevler, panel, API entegrasyonları, performans bütçesi</td>
          </tr>
          <tr>
            <td>E-ticaret</td>
            <td>80.000 – 500.000 TL+</td>
            <td>Katalog, ödeme, kargo/ERP entegrasyonu, kapsam belirleyici</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bu rakamlar tasarım ve geliştirme içindir; alan adı, hosting ve yıllık bakım
        ayrı kalemlerdir (tipik olarak yılda 5.000–30.000 TL).
      </p>

      <h2 id="maliyeti-belirleyen-faktorler">Maliyeti belirleyen asıl faktörler</h2>
      <p>
        Çok yaygın bir yanılgı, fiyatın sayfa sayısına bağlı olduğudur. Sayfa
        sayısı küçük bir etkendir. Asıl belirleyiciler:
      </p>
      <ul>
        <li>
          <strong>Hazır tema mi, sıfırdan tasarım mı.</strong> Hazır tema hızlı ve
          ucuz başlar; kullanılmayan kod, yavaş yüklenme ve sınırlı özelleştirme
          olarak geri döner.
        </li>
        <li>
          <strong>Entegrasyonlar.</strong> CRM, ödeme, ERP, rezervasyon, üyelik —
          her biri ayrı geliştirme ve test demektir.
        </li>
        <li>
          <strong>Performans ve SEO kapsamı.</strong> Core Web Vitals uyumu,
          yapılandırılmış veri ve içerik mimarisi baştan planlanırsa ucuz; sonradan
          eklenirse pahalıdır.
        </li>
        <li>
          <strong>İçerik.</strong> Metin ve görselleri siz mi sağlıyorsunuz, yoksa
          üretim de kapsamda mı?
        </li>
        <li>
          <strong>Çok dillilik ve erişilebilirlik.</strong> İki dil, tek dilin iki
          katı değildir ama azımsanacak bir ek de değildir.
        </li>
      </ul>

      <h2 id="ucuz-sitenin-gercek-maliyeti">Ucuz sitenin gerçek maliyeti</h2>
      <p>
        10.000 TL&apos;lik bir site kâğıt üzerinde cazip görünür. Pratikte şu
        sonuçlar
        sık görülür: aramada görünmeme, mobilde yavaş açılma, marka diline
        uymayan hazır görünüm ve 12–18 ay içinde &quot;baştan yaptırma&quot;
        ihtiyacı. İki kez ödemek, bir kez doğru ödemekten pahalıdır.
      </p>

      <h2 id="butce-planlama">Bütçe planlarken</h2>
      <p>
        Teklif isterken kapsamı netleştirin: kod size mi ait olacak, kaç revizyon
        dahil, bakım ayrı mı, hangi performans hedefi taahhüt ediliyor. Fiyatı
        yalnızca toplam rakamla değil, bu maddelerle karşılaştırın.
      </p>
      <p>
        Groopy&apos;de her web projesi bir keşif görüşmesiyle başlar; kapsam ve
        takvim yazılı hale gelmeden fiyat vermeyiz.{" "}
        <a href="/iletisim">Projenizi konuşalım.</a>
      </p>
    </>
  );
}
