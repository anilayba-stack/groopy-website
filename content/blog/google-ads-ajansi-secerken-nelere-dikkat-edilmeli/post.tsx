import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "google-ads-ajansi-secerken-nelere-dikkat-edilmeli",
  title: "Google Ads Ajansı Seçerken Nelere Dikkat Edilmeli?",
  metaTitle: "Google Ads Ajansı Seçerken Nelere Dikkat Edilmeli?",
  description:
    "Google Ads ajansı seçerken nelere dikkat etmeniz gerektiğini anlatıyoruz: hesap sahipliği, ücret modeli, garanti vaatleri ve raporlama şeffaflığı dahil somut kriterler.",
  publishedAt: "2026-10-10",
  tldr: "İyi bir Google Ads ajansı; reklam hesabınızı kendi adına açmaz, yüzde-komisyon modelinde bütçeyi şişirme riskini şeffaf şekilde ele alır, kesin sonuç garantisi vermez ve dönüşüm izlemeyi kampanya başlamadan önce kurar. Bu yazıda karar vermeden önce kontrol edebileceğiniz somut kriterler var.",
  author: "Anıl Ay",
  hubService: "google-reklam-yonetimi",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/google-ads-ajansi-secerken.jpg",
    alt: "Bir masada çeşitli grafik türlerini inceleyen büyüteç",
  },
  faq: [
    {
      question: "Google Ads ajansı ücreti nasıl hesaplanır?",
      answer:
        "Genellikle sabit aylık yönetim ücreti veya reklam harcamasının yüzdesi olarak. Yüzde modelinde ajansın geliri bütçenizle orantılı arttığı için, bütçeyi gereğinden fazla büyütme riski vardır — bu ihtimali görüşmede açıkça sorun.",
    },
    {
      question: "Reklam hesabım kimde kalmalı?",
      answer:
        "Sizde. Hesap sizin adınıza açılmalı veya mevcut hesabınız kullanılmalı; ajans yalnızca yönetici erişimiyle çalışmalı. İlişki sona erse bile hesap ve geçmiş performans verisi sizde kalır.",
    },
    {
      question: "Google Ads sertifikası önemli mi?",
      answer:
        "Bir güven sinyali ama tek başına yeterli değil — sertifika Google'ın temel bilgi sınavını geçtiğinizi gösterir, gerçek kampanya deneyimini garanti etmez. Geçmiş kampanya örnekleri ve referanslarla birlikte değerlendirin.",
    },
    {
      question: "Kesin bir ROI (yatırım getirisi) garantisi isteyebilir miyim?",
      answer:
        "Hayır, gerçekçi bir ajans bunu vermez. Reklam performansı sektöre, rekabete ve teklif stratejisine göre değişir; kesin bir getiri oranı vaat eden bir ajanstan uzak durun.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Google Ads yönetimi, reklam bütçenizin doğrudan bir üçüncü tarafın
        eline geçmesi anlamına gelir — yanlış ajans seçimi yalnızca kötü
        sonuç değil, gereksiz yere harcanmış bir bütçe demektir. Çoğu ajans
        web sitesi benzer vaatler sunar: &quot;dönüşümlerinizi
        artırırız&quot;, &quot;reklam maliyetinizi düşürürüz&quot;. Gerçek
        farkı görmek için pazarlama diline değil, somut çalışma
        biçimlerine bakmak gerekir.
      </p>
      <p>
        Bu yazıda bir Google Ads ajansını değerlendirirken kontrol
        edebileceğiniz kriterleri ele alıyoruz — özellikle çoğu
        karşılaştırma yazısının yüzeysel geçtiği hesap sahipliği ve ücret
        modeli konularına. Kriterlerin çoğu,{" "}
        <Link href="/blog/seo-ajansi-secerken-nelere-dikkat-edilmeli">
          SEO ajansı seçerken anlattığımız
        </Link>{" "}
        ilkelerle aynı mantığı taşıyor — çünkü ikisinde de asıl soru
        şeffaflık ve veri sahipliği.
      </p>

      <h2 id="deneyim-mi-sablon-mu">Deneyim ve sertifikasyon mu, yoksa şablon teklif mi?</h2>
      <p>
        İlk görüşmede sektörünüzü, rekabet ortamınızı ve geçmiş reklam
        performansınızı (varsa) incelemeden bütçe ve teklif veren bir
        ajans, muhtemelen standart bir kampanya şablonu uygulayacaktır. Bir
        e-ticaret markasıyla yerel hizmet veren bir işletmenin kampanya
        yapısı (Alışveriş vs. Arama, hedefleme mantığı) tamamen farklıdır.
      </p>
      <p>
        Google Ads sertifikası (Google Ads yeterlilik belgesi) bir güven
        sinyali ama tek başına yeterli değil — bu sertifika Google&apos;ın
        temel bilgi sınavını geçtiğinizi gösterir, gerçek kampanya
        deneyimini garanti etmez. Geçmiş bir kampanyada hangi kararı neden
        aldıklarını somut olarak anlatabilen bir ajans, yalnızca sertifika
        gösteren bir ajanstan daha güvenilirdir.
      </p>
      <p>
        Sormanız gereken soru basit: &quot;Benzer bir sektörde hangi kampanya
        türlerini denediniz, hangisi işe yaramadı?&quot; Yalnızca başarı
        hikayesi anlatan bir ajans, muhtemelen başarısız kampanyalardan ne
        öğrendiğini de paylaşmaktan kaçınıyordur — oysa bu, gerçek
        deneyimin en net göstergesidir.
      </p>

      <h2 id="hesap-sahipligi">Reklam hesabı kimde kalıyor? (En kritik kriter)</h2>
      <p>
        Profesyonel bir Google Ads yönetiminde hesap sahipliği her zaman
        müşteride kalmalıdır. Ajans, kendi ajans hesabı (MCC) üzerinden
        yönetici erişimiyle kampanyaları yürütmeli — hesabın kendisini
        kendi adına açmamalı. Bunu kontrol etmenin basit yolu: Google Ads
        hesabınızda &quot;yönetici erişimi&quot; olarak sizin göründüğünüzü,
        ajansın ise davet edilen bir hesap olarak listelendiğini doğrulamak.
      </p>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://support.google.com/google-ads/answer/7456532?hl=en-GB"
          target="_blank"
          rel="noopener noreferrer"
        >
          kendi resmi belgeleri
        </a>{" "}
        bu ayrımı açıkça belirtiyor: bir ajans hesabınıza yalnızca
        &quot;bağlandığında&quot;, varsayılan olarak idari sahiplik elde
        etmez — sahiplik, hesap sahibi tarafından ayrıca açılması gereken
        ayrı bir yetkidir. Yani &quot;hesabınız bize bağlı&quot; ifadesi,
        &quot;hesap bizde&quot; anlamına gelmeyebilir; hangisi olduğunu
        açıkça sormanız gerekir.
      </p>
      <p>
        Bunu atlarsanız, ilişki sona erdiğinde hesabınızı, aylarca biriken
        kampanya geçmişinizi ve hangi anahtar kelimenin işe yaradığına dair
        veriyi kaybetme riskiyle karşı karşıya kalırsınız — sıfırdan
        başlamak, yanlış bir kampanyayı düzeltmekten çok daha pahalıdır.
      </p>
      <p>
        Aynı mantık, kampanyalarda kullanılan Google Analytics ve dönüşüm
        izleme etiketleri için de geçerli. Bu araçlar da sizin hesabınıza
        bağlı olmalı; ajans yalnızca yönetici erişimiyle çalışmalı. Kurulum
        (hesapların açılması) ile yönetim (verinin sürekli izlenmesi) iki
        farklı iştir — bir ajans bu ikisini karıştırıp &quot;hesap bizde,
        dilerseniz erişim veririz&quot; diyorsa, sahipliğinizi tam olarak
        netleştirmemiş demektir.
      </p>

      <h2 id="ucret-modeli">Ücret modeli: yüzde komisyon riski</h2>
      <p>
        Hangi modeli seçerseniz seçin, reklam harcaması ve ajans ücreti
        ayrı kalemler olarak görünmeli; bütçe doğrudan sizin Google
        hesabınızdan Google&apos;a ödenmeli. En kritik nokta harcamanın
        yüzdesi modeli: ajansın geliri sizin harcamanıza bağlıysa, bütçeyi
        artırmak ajansın çıkarına olabilir — bu her zaman kötü niyet
        anlamına gelmez, ama teşvik yapısı sizin lehinize değildir.
      </p>
      <p>
        Sabit aylık yönetim ücreti bu çıkar çatışmasını ortadan kaldırır:
        ajansın geliri, ne kadar harcadığınızdan değil, ne kadar iyi
        yönettiğinden bağımsızlaşır. Yüzde modeli kullanan bir ajansla
        çalışacaksanız, bütçe artış önerilerinin somut bir performans
        verisiyle desteklendiğinden emin olun.
      </p>
      <p>
        Görüşmede doğrudan sorun: &quot;Ücretiniz harcadığım bütçeden mi
        bağımsız, yoksa ona bağlı mı?&quot; Cevap net ve tereddütsüz
        gelmiyorsa, teklif karşılaştırmasında bu belirsizliği fiyatın
        kendisi kadar ciddiye alın.
      </p>

      <h2 id="garanti">Kesin sonuç veya ROI garantisi veriyor mu?</h2>
      <p>
        Reklam performansı; sektöre, rekabete, mevsimselliğe ve teklif
        stratejisine göre değişir. &quot;Tıklama başına şu kadar maliyet
        garantisi&quot; veya &quot;yatırımınızın X katını geri
        alacaksınız&quot; gibi kesin vaatler veren bir ajans, ya
        gerçekçi olmayan bir beklenti yaratıyor ya da bu rakamı tutturmak
        için düşük kaliteli, alakasız trafiğe yönelecek demektir.
      </p>
      <p>
        Gerçekçi bir ajans bunun yerine test-öğren sürecini anlatır: ilk
        haftalarda veri toplanır, hangi anahtar kelime ve reklam metninin
        işe yaradığı görülür, bütçe buna göre yeniden dağıtılır. Kesin bir
        sayı yerine net bir süreç ve zaman çizelgesi sunar.
      </p>
      <p>
        Bu, tıpkı SEO&apos;da olduğu gibi — hiçbir ajans Google&apos;ın
        reklam açık artırma algoritmasını tek başına kontrol edemez. Teklif
        stratejinizi, hedef kitlenizi ve rakiplerinizin davranışını
        optimize edebilirler, ama nihai maliyet-başına-tıklama rakamı
        piyasa dinamiklerine bağlıdır — bu yüzden kesin bir rakam vaadi
        her zaman şüpheyle karşılanmalı.
      </p>

      <h2 id="raporlama">Raporlama trafiği mi, dönüşümü mü gösteriyor?</h2>
      <p>
        Tıklama sayısı ve gösterim artışı tek başına iş sonucu değildir.
        İyi bir rapor; harcama, tıklama, dönüşüm ve maliyet-başına-sonuç
        gibi metrikleri bir arada gösterir — yalnızca &quot;bu ay X
        tıklama aldık&quot; değil. Aylık raporda hangi metrikleri
        göreceğinizi görüşmede netleştirin.
      </p>

      <h2 id="donusum-izleme">Dönüşüm izleme kampanyadan önce kuruluyor mu?</h2>
      <p>
        Dönüşüm izleme (form doldurma, arama, satış) kampanya başlamadan
        önce kurulmalıdır — sonradan eklenirse, ilk haftaların verisi
        kaybolur ve hangi anahtar kelimenin gerçekten işe yaradığı asla
        netleşmez. Bir ajansa &quot;dönüşüm izlemeyi ne zaman
        kuracaksınız&quot; diye sorduğunuzda net bir cevap alamıyorsanız,
        bu temel adımı atlıyor olabilirler.
      </p>
      <p>
        Yalnızca &quot;dönüşüm sayısı&quot; da yeterli bir metrik değil —
        hangi dönüşümün gerçek bir müşteri adayı, hangisinin nitelik
        taşımayan bir form gönderimi olduğu ayrıştırılmalı. Bu ayrım
        yapılmadan raporlanan bir &quot;dönüşüm artışı&quot;, gerçek iş
        sonucundan çok iyi görünen bir rakam olabilir.
      </p>
      <p>
        Bu ayrımı yapabilmenin ön koşulu, sitenizde{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          doğru kurulmuş bir dönüşüm/hedef izleme altyapısı
        </Link>{" "}
        olması — bu genellikle web sitesi geliştirme sürecinin bir parçası
        olarak kurulur, reklam yönetimi ise bu altyapıyı kullanır.
      </p>

      <h2 id="sozlesme">Sözleşme şartları ve kilitlenme</h2>
      <p>
        Uzun vadeli, zorunlu ve erken çıkışta cezalı bir sözleşme dayatan
        bir ajans, sizi sonuçla değil sözleşme maddesiyle elde tutuyor
        demektir. İyi bir ajans performansıyla sizi elde tutar, sözleşme
        bağıyla değil — makul bir bildirim süresiyle çıkış hakkı bırakan
        bir çalışma modeli tercih edin.
      </p>
      <p>
        Bir uyarı işareti daha: tüm yıl bedelini peşin isteyen bir teklif.
        Bu, ajansın sizi uzun vadede memnun ederek değil, baştan bağlayarak
        tutmayı planladığının işareti olabilir. Kapsam, bütçe aralığı ve
        ücretin yazılı olduğu, aylık olarak gözden geçirilen bir sözleşme
        hem sizi hem ajansı daha net bir zemine oturtur.
      </p>

      <h2 id="seo-ile-iliski">SEO ile aynı ekipten almanın avantajı</h2>
      <p>
        Google Ads&apos;i bir ajanstan, SEO&apos;yu başka bir ekipten
        almak yaygın ama bir maliyeti var:{" "}
        <Link href="/blog/google-ads-mi-seo-mu">
          organik ve ücretli tarafın birbirinden habersiz çalışması
        </Link>
        , aynı anahtar kelimede gereksiz bütçe harcanması ve ölçümün iki
        ayrı raporda dağılması. Tek bir ekipten alındığında hangi anahtar
        kelimede organik olarak zaten güçlü olduğunuz, hangisinde reklam
        desteğine ihtiyaç duyduğunuz tek bir stratejiyle planlanabilir.
      </p>

      <h2 id="sonuc">Karar vermeden önce</h2>
      <p>Özetle, bir Google Ads ajansını değerlendirirken kontrol listeniz:</p>
      <ul>
        <li>Sitenize/sektörünüze özel bir strateji sunuyor mu, yoksa şablon mu?</li>
        <li>Reklam hesabı sizin adınıza mı açılıyor?</li>
        <li>Ücret modeli net mi, yüzde komisyon riski varsa açıkça konuşuluyor mu?</li>
        <li>Kesin sonuç/ROI garantisi vermiyor mu?</li>
        <li>Raporlama dönüşümü de kapsıyor mu?</li>
        <li>Dönüşüm izleme kampanyadan önce mi kuruluyor?</li>
        <li>Sözleşme sizi sonuçla mı, madde ile mi bağlıyor?</li>
      </ul>
      <p>
        Groopy&apos;de <Link href="/hizmetler/google-reklam-yonetimi">Google Reklam Yönetimi</Link>{" "}
        hizmetimizde bu ilkelerin hepsini uyguluyoruz: reklam hesabı size
        ait kalır, bütçe doğrudan Google&apos;a ödenir, yönetim bedeli ayrı
        ve açık şekilde belirtilir. Nereden başlayacağınızdan emin
        değilseniz{" "}
        <Link href="/iletisim">bir keşif görüşmesi planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
