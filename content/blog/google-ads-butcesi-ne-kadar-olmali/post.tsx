import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "google-ads-butcesi-ne-kadar-olmali",
  title: "Google Ads Bütçesi Ne Kadar Olmalı? 2026 Rehberi",
  metaTitle: "Google Ads Bütçesi Ne Kadar Olmalı?",
  description:
    "İnternette dolaşan '300 dolar yeter' ya da '10.000 dolar gerekir' tarzı rakamlar genelde doğrulanamıyor. Google'ın kendi resmi eşiğiyle, bütçenizi doğru belirlemenin gerçek yöntemi.",
  publishedAt: "2026-11-11",
  tldr: "İnternette Google Ads bütçesi için dolaşan rakamlar (ayda 300 dolardan 10.000 dolara kadar) birbirini tutmuyor ve çoğu doğrulanamayan ajans blog yazılarına dayanıyor; üstelik hepsi dolar bazlı, Türkiye pazarına doğrudan uymuyor. Google'ın kendi resmi dokümanına göre somut, doğrulanabilir tek eşik şu: Target ROAS gibi akıllı teklif stratejilerine geçmek için genelde 30 günde en az 15 dönüşüm gerekiyor, istikrarlı sonuç için reklam grubu başına ayda 30 dönüşüm öneriliyor. Yani doğru soru 'kaç dolar harcamalıyım' değil, 'bu eşiğe ulaşmak için kaç dönüşüme, hangi bütçeye ihtiyacım var' — ve bu, hedef CPA'nız ve dönüşüm oranınız bilinmeden hesaplanamaz.",
  author: "Anıl Ay",
  hubService: "google-reklam-yonetimi",
  readingMinutes: 7,
  coverImage: {
    src: "/images/blog/google-ads-butcesi-ne-kadar-olmali.jpg",
    alt: "Bir masada aylık bütçe tablosu, hesap makinesi ve renkli kalemlerin üstten çekilmiş görüntüsü",
  },
  faq: [
    {
      question: "Google Ads'e ayda en az ne kadar bütçe ayırmalıyım?",
      answer:
        "Tek, evrensel bir rakam yok — internette gördüğünüz sabit sayılar (300 dolar, 1.000 dolar, 10.000 dolar) genelde doğrulanamayan kaynaklardan geliyor ve dolar bazlı, Türkiye'deki tıklama maliyetlerini yansıtmıyor. Doğru yöntem, hedef dönüşüm sayınızdan ve tahmini tıklama başı maliyetten geriye doğru hesaplamak.",
    },
    {
      question: "Neden '15 dönüşüm' rakamı önemli?",
      answer:
        "Bu, Google'ın kendi resmi dokümanında belirttiği, akıllı teklif stratejilerinin (ör. Target ROAS) güvenilir çalışması için gereken asgari veri eşiği. Bütçeniz bu eşiğe ulaşacak kadar tıklama/dönüşüm üretmiyorsa, otomatik teklif verme sisteminin optimize edecek yeterli verisi olmaz.",
    },
    {
      question: "Tıklama başı maliyeti (CPC) nasıl öğrenirim?",
      answer:
        "Genel internet ortalamaları (çoğu dolar bazlı ve sektöre göre çok değişken) yerine, kendi hesabınızdaki Google Ads Anahtar Kelime Planlayıcısı'nın verdiği tahmini, hedef kitlenize ve bölgenize özel bir rakam verir.",
    },
    {
      question: "Bütçemi zamanla nasıl ayarlamalıyım?",
      answer:
        "İlk birkaç hafta veri toplama dönemi olarak görün; 30 güne yakın dönüşüm sayınız 15'in altındaysa ya bütçeyi artırmanız ya da hedef kitleyi daraltıp maliyeti düşürmeniz gerekebilir. Aylık raporlama bu kararı veri ile desteklemeli, tahminle değil.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        &quot;Google Ads&apos;e ayda ne kadar bütçe ayırmalıyım?&quot;
        diye arattığınızda karşınıza çok farklı rakamlar çıkıyor — kimi
        kaynak ayda 300 dolar yeterli diyor, kimi 10.000 dolar altında
        anlamlı sonuç alınamayacağını iddia ediyor. Bu yazıda bu rakamların
        neden bu kadar tutarsız olduğunu, Google&apos;ın kendi resmi
        belirttiği tek somut eşiği ve bütçenizi gerçekten nasıl
        belirleyeceğinizi ele alıyoruz.
      </p>

      <h2 id="rakamlar-neden-tutarsiz">İnternetteki bütçe rakamları neden tutarsız?</h2>
      <p>
        Araştırırken gördüğümüz tavsiyeler ayda 300 dolardan 10.000 doların
        üzerine kadar geniş bir aralığa yayılıyor; aynı kaynaklar birbirini
        tutmayan sektörel tıklama maliyeti (CPC) rakamları da veriyor —
        kimi kaynağa göre otomotiv sigortası gibi bazı sektörlerde tıklama
        başı maliyet 45-55 doları buluyor, kimi sektörde 1-2 dolara düşüyor.
        Bu kaynakların büyük kısmı metodolojisini açıklamayan ajans blog
        yazıları ve üstelik hepsi dolar bazlı — Türkiye&apos;deki gerçek
        tıklama maliyetlerini yansıtmıyor. Tek bir &quot;doğru&quot; rakam
        aramak, zaten yanlış bir soruya cevap aramak demek.
      </p>

      <h2 id="resmi-esik">Google&apos;ın kendi resmi eşiği: 15 dönüşüm / 30 gün</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://support.google.com/google-ads/answer/10285843?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi yardım dokümanına göre
        </a>
        , Target ROAS gibi akıllı teklif stratejilerine geçebilmek için
        genelde 30 günlük bir dönemde en az 15 dönüşüm gerekiyor (ilgili
        geçmiş verisi olan bazı hesaplar daha erken geçebiliyor); daha
        istikrarlı sonuç için reklam grubu başına ayda 30 dönüşüm
        öneriliyor. Bu, dolar cinsinden bir rakam değil ama somut ve
        doğrulanabilir bir hedef: bütçenizin yeterli olup olmadığını,
        &quot;ayda kaç dolar harcıyorum&quot; değil &quot;bu bütçeyle ayda
        kaç dönüşüm alıyorum&quot; sorusuyla değerlendirmelisiniz.
      </p>

      <h2 id="geriye-dogru-hesaplama">Bütçenizi geriye doğru nasıl hesaplarsınız</h2>
      <p>
        Doğru sıralama, bir dolar rakamından başlamak değil, hedef
        dönüşüm sayınızdan geriye doğru gitmek:
      </p>
      <ol>
        <li>
          <strong>Hedef dönüşüm sayınızı belirleyin.</strong> Yukarıdaki
          eşiğe göre, en azından ayda 15-30 dönüşüm almayı hedefleyin.
        </li>
        <li>
          <strong>Dönüşüm oranınızı tahmin edin.</strong> Yeni bir
          kampanyaysanız sektörünüzdeki benzer kampanyalardan kaba bir
          tahmin yapılabilir; mevcut bir kampanyanız varsa gerçek
          verinizi kullanın.
        </li>
        <li>
          <strong>Gereken tıklama sayısını hesaplayın.</strong> Hedef
          dönüşüm ÷ dönüşüm oranı = gereken tıklama sayısı.
        </li>
        <li>
          <strong>Tıklama başı maliyeti öğrenin.</strong> Genel internet
          ortalamalarına değil, hesabınızdaki Google Ads Anahtar Kelime
          Planlayıcısı&apos;nın size özel verdiği tahmine bakın — bölge,
          sektör ve anahtar kelimeye göre büyük farklılık gösterir.
        </li>
        <li>
          <strong>Bütçeyi çarpın.</strong> Gereken tıklama sayısı × tahmini
          CPC = aylık bütçeniz.
        </li>
      </ol>
      <p>
        Bu hesap size kesin bir rakam vermez ama internette dolaşan
        rastgele bir sayıdan çok daha gerçekçi bir başlangıç noktası verir.
      </p>

      <h2 id="kampanya-turu">Kampanya türü bütçeyi nasıl etkiler</h2>
      <p>
        Hangi kampanya türünü seçtiğiniz de bütçe ihtiyacını değiştirir.
        Arama kampanyaları genellikle en düşük giriş eşiğine sahip; alışveriş
        kampanyaları ürün kataloğu büyüklüğüne göre değişir; görüntülü
        reklam ve yeniden pazarlama genelde tamamlayıcı bütçe gerektirir,
        tek başına ana kampanya olarak düşünülmemeli.{" "}
        <Link href="/blog/google-ads-mi-seo-mu">
          Google Ads mı SEO mu?
        </Link>{" "}
        yazımızda ücretli ve organik görünürlük arasındaki dengeyi de ele
        aldık.
      </p>

      <h2 id="ajans-ucreti">Bütçe ile yönetim ücreti karıştırılmamalı</h2>
      <p>
        Son bir nokta: yukarıdaki hesap reklam bütçenizle ilgili, bir
        ajansın yönetim ücretiyle değil — ikisi ayrı kalemler.{" "}
        <Link href="/blog/google-ads-ajansi-secerken-nelere-dikkat-edilmeli">
          Google Ads ajansı seçerken nelere dikkat edilmeli?
        </Link>{" "}
        yazımızda bu ayrımı ve ajans seçim kriterlerini ele aldık.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        İnternette gördüğünüz sabit bütçe rakamlarına güvenmeyin —
        çoğu doğrulanamıyor ve dolar bazlı, Türkiye pazarına uymuyor.
        Google&apos;ın resmi belirttiği tek somut eşik (ayda 15-30
        dönüşüm) size gerçek bir hedef veriyor; bütçenizi buradan geriye
        doğru, kendi dönüşüm oranınız ve Anahtar Kelime
        Planlayıcısı&apos;nın verdiği gerçek CPC tahminiyle hesaplayın.
        Bunu sizin için yapmamızı isterseniz{" "}
        <Link href="/hizmetler/google-reklam-yonetimi">
          Google Reklam Yönetimi hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
