import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "kampanya-turu-secim-rehberi",
  title: "Arama mı, Alışveriş mi, Görüntülü mü? Kampanya Türü Seçim Rehberi",
  metaTitle: "Google Ads Kampanya Türü Nasıl Seçilir?",
  description:
    "Google Ads'te Search, Shopping, Display ve Performance Max arasında seçim 'sektörünüze' değil hedefinize ve elinizdeki varlığa göre yapılır. Google'ın kendi kriteriyle karar rehberi.",
  publishedAt: "2026-11-11",
  tldr: "Google Ads kampanya türü seçimi sektöre göre değil, Google'ın kendi resmi dokümanının belirttiği gibi hedefe (satış, potansiyel müşteri, trafik), marka stratejisine ve ayrılabilecek zamana göre yapılır. Pratikte: ürün feed'iniz (Merchant Center) yoksa Shopping/Performance Max seçeneği zaten kapalı demektir; hizmet/randevu bazlı bir işletmeyseniz varsayılan başlangıç Search'tür; Display tek başına bir kampanya değil, mevcut ziyaretçileri hedefleyen bir tamamlayıcıdır; Performance Max ise yeterli dönüşüm verisi ve ürün feed'i olduğunda devreye girer.",
  author: "Anıl Ay",
  hubService: "google-reklam-yonetimi",
  readingMinutes: 8,
  coverImage: {
    src: "/images/blog/kampanya-turu-secim-rehberi.jpg",
    alt: "Masada pazarlama strateji ve veri grafikleri kağıtlarını inceleyen iki kişinin elleri",
  },
  faq: [
    {
      question: "Hangi Google Ads kampanya türüyle başlamalıyım?",
      answer:
        "Hizmet veya randevu bazlı bir işletmeyseniz (klinik, danışmanlık, servis vb.) varsayılan başlangıç Search'tür — kullanıcı zaten aktif olarak arıyor. Fiziksel ürün satan bir e-ticaret sitesiyseniz ve Merchant Center'da ürün feed'iniz varsa Shopping değerlendirilir.",
    },
    {
      question: "Google Alışveriş (Shopping) kampanyası için ne gerekiyor?",
      answer:
        "Google Merchant Center hesabı ve onaylanmış bir ürün feed'i (fiyat, görsel, stok durumu içeren) şart. Bu altyapı yoksa Shopping veya Performance Max'in ürün tarafı çalışmaz.",
    },
    {
      question: "Görüntülü reklam (Display) tek başına yeterli mi?",
      answer:
        "Hayır. Google'ın kendi tanımına göre Display, Google Arama'nın ötesine erişimi genişletmek ve markayı hatırlatmak için bir araç — ilk temas/lead üretim kampanyası olarak değil, siteyi ziyaret etmiş kullanıcıları yeniden hedefleyen (remarketing) bir tamamlayıcı olarak kullanılır.",
    },
    {
      question: "Performance Max'e ne zaman geçmeliyim?",
      answer:
        "Google, Performance Max'i yalnızca hedefiniz 'Satış', 'Potansiyel Müşteri' veya 'Yerel mağaza ziyaretleri' olarak seçildiğinde bir seçenek olarak gösteriyor. Pratikte de, akıllı teklif stratejilerinin genel mantığında olduğu gibi, sistemin optimize edebilmesi için hesapta belirli bir dönüşüm hacmi birikmiş olması gerekir.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Google Ads&apos;e yeni başlayan işletmeler genelde &quot;benim
        sektörüm için hangi kampanya türü doğru?&quot; sorusunu sorar. Oysa
        Google&apos;ın kendi resmi dokümantasyonu kampanya türünü sektöre göre
        değil, hedefinize, marka stratejinize ve elinizdeki varlığa (özellikle
        bir ürün feed&apos;iniz olup olmadığına) göre seçmenizi söylüyor. Bu
        yazıda o resmi kriteri, dört ana kampanya türünün gerçekte ne işe
        yaradığını ve kendi durumunuza göre nasıl karar vereceğinizi ele
        alıyoruz.
      </p>

      <h2 id="neden-sektore-gore-degil">Neden &quot;sektörüme göre&quot; yanlış bir soru?</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://support.google.com/google-ads/answer/2567043?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi &quot;Choose the right campaign type&quot; sayfasına göre
        </a>
        , kampanya türü seçimi &quot;marketing goals, brand strategy, and how
        much time you can invest&quot; (pazarlama hedefleriniz, marka
        stratejiniz ve ayırabileceğiniz zaman) üzerine kuruludur — sektör adı
        hiç geçmiyor. Bunun pratik sonucu şu: aynı sektördeki iki işletme
        (örneğin iki klinik), biri randevu/lead topluyorsa Search ile, diğeri
        ürün satıyorsa (ör. bir medikal ürün mağazası) Shopping ile
        başlayabilir. Doğru soru &quot;sektörüm ne?&quot; değil, &quot;hedefim
        ne ve elimde ürün feed&apos;i gibi bir varlık var mı?&quot;dır.
      </p>

      <h2 id="search-varsayilan-baslangic">Search: hizmet işletmeleri için varsayılan başlangıç</h2>
      <p>
        Google, Search kampanyalarını &quot;driving sales, leads, or traffic
        to your website, as you can show your ads to people actively
        searching for your products and services&quot; şeklinde tanımlıyor —
        yani kullanıcı zaten aktif olarak arama yaparken karşısına çıkıyor.
        Randevu, danışmanlık, servis gibi hizmet temelli işletmeler için
        bu, genelde en düşük giriş eşiğine sahip ve en kolay ölçülebilir
        kampanya türüdür; anahtar kelime, teklif ve reklam metni üzerinde
        doğrudan kontrol sağlar.{" "}
        <Link href="/blog/fizyoterapistler-google-ads-rehberi">
          Fizyoterapistler için Google Ads Rehberi
        </Link>{" "}
        yazımızda bir hizmet işletmesi için Search kurulumunu adım adım ele
        aldık.
      </p>

      <h2 id="shopping-urun-feedi">Shopping: ürün feed&apos;i olmadan bu kampanya çalışmaz</h2>
      <p>
        Google, Shopping kampanyalarını açıkça &quot;ideal if you&apos;re a
        retailer looking to sell your product inventory&quot; olarak
        tanımlıyor ve bunun için bir Google Merchant Center hesabı ile
        onaylanmış ürün feed&apos;i (fiyat, görsel, stok bilgisi) şart
        koşuyor. Bu altyapı kurulu değilse Shopping zaten bir seçenek bile
        değildir — hizmet satan bir işletme için bu kampanya türü baştan
        devre dışıdır, tartışmaya gerek yok.
      </p>

      <h2 id="display-tamamlayici">Display: tek başına değil, tamamlayıcı</h2>
      <p>
        Google&apos;ın kendi ifadesiyle Display kampanyaları &quot;a great
        way to expand your reach and stay top of mind with an audience
        beyond just Google Search&quot; — yani birincil amacı ilk temas/lead
        üretmek değil, erişimi genişletmek ve markayı hatırlatmaktır. En
        yaygın ve en verimli kullanım şekli, siteyi daha önce ziyaret etmiş
        ama henüz dönüşmemiş kullanıcıları yeniden hedefleyen (remarketing)
        kampanyalardır. Bir işletmenin tek kampanyası Display olması nadiren
        doğru bir karardır; genelde Search&apos;ü tamamlayan ikinci bir
        bütçe kalemi olarak düşünülmelidir.
      </p>

      <h2 id="performance-max">Performance Max: ne zaman devreye girer</h2>
      <p>
        Google&apos;ın aynı sayfasındaki notuna göre Performance Max,
        hedefiniz &quot;Sales&quot;, &quot;Leads&quot; veya &quot;Local store
        visits and promotions&quot; olarak seçildiğinde bir seçenek olarak
        görünür — yani önce bir dönüşüm hedefi tanımlamanız gerekir. Pratikte
        bu, Performance Max&apos;in de diğer akıllı teklif stratejileri gibi
        optimize edebilmesi için hesapta belirli bir dönüşüm hacmine
        ihtiyaç duyduğu anlamına gelir — aynı mantığı{" "}
        <Link href="/blog/google-ads-butcesi-ne-kadar-olmali">
          Google Ads Bütçesi Ne Kadar Olmalı?
        </Link>{" "}
        yazımızda akıllı teklif stratejileri için ele almıştık. Yeni açılan,
        henüz dönüşüm geçmişi olmayan bir hesapta Performance Max&apos;e
        erken geçmek yerine önce Search ile veri biriktirmek daha
        gerçekçidir.
      </p>

      <h2 id="karar-agaci">Karar ağacı: kendi durumunuza göre</h2>
      <p>
        Kendi durumunuzu dört soruyla hızlıca eleyebilirsiniz:
      </p>
      <ol>
        <li>
          <strong>Google Merchant Center&apos;da onaylı bir ürün feed&apos;iniz var mı?</strong>{" "}
          Yoksa Shopping ve Performance Max&apos;in ürün tarafı zaten
          kapalıdır; Search ile devam edin.
        </li>
        <li>
          <strong>Kullanıcı sizi aktif olarak arıyor mu, yoksa markayı
          henüz tanımıyor mu?</strong> Aktif arama varsa Search; marka
          bilinirliği/hatırlatma hedefi varsa Display bir seçenek.
        </li>
        <li>
          <strong>Hesabınızda yeterli dönüşüm geçmişi var mı?</strong>{" "}
          Yoksa Performance Max gibi otomatik optimize eden türler yerine
          manuel kontrolün daha yüksek olduğu Search ile başlayın.
        </li>
        <li>
          <strong>Sitenizi ziyaret edip dönüşmeyen bir kullanıcı kitleniz
          birikti mi?</strong> Birikti ise Display&apos;i remarketing
          amacıyla Search&apos;e ek bir kampanya olarak devreye alın.
        </li>
      </ol>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Kampanya türü seçimi sektörünüze göre değil, Google&apos;ın kendi
        kriterine göre hedefinize ve elinizdeki varlığa (ürün feed&apos;i,
        dönüşüm geçmişi) göre yapılır. Ürün feed&apos;i yoksa Shopping/
        Performance Max zaten gündemde değildir; hizmet işletmeleri için
        varsayılan başlangıç Search&apos;tür; Display tek başına değil
        tamamlayıcı bir kampanyadır. Doğru kampanya türünü ve bütçeyi birlikte
        kurmamızı isterseniz{" "}
        <Link href="/hizmetler/google-reklam-yonetimi">
          Google Reklam Yönetimi hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
