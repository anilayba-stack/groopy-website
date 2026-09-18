import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "fizyoterapistler-google-ads-rehberi",
  title: "Fizyoterapistler için Google Ads Rehberi: Kampanya Kurulumundan Teklif Stratejisine",
  metaTitle: "Fizyoterapistler için Google Ads Rehberi",
  description:
    "Fizyoterapi kliniği için Google Ads kampanyası nasıl kurulur? Sertifikasyon, dönüşüm izleme ve teklif stratejisi — Google'ın kendi kaynaklarıyla.",
  publishedAt: "2026-10-22",
  tldr: "Fizyoterapi, Google Ads'te sertifikasyon gerektiren bir sağlık kategorisi değil — bu yüzden kurulum çoğu işletmeden farklı değil. Ama iki önemli ayrıntı var: Google'ın Yerel Hizmet Reklamları (LSA) programı fizyoterapistleri kapsıyor olsa da Türkiye'de henüz sunulmuyor, bu yüzden Search kampanyaları öncelikli olmalı; ve sağlık, Google'ın 'hassas ilgi alanı' kategorisinde olduğu için durum/tanı bazlı hedefleme yasak — genel ziyaretçi remarketing'i ise sorun değil. Teklif stratejisinde Google'ın kendi önerisi, Target CPA'nın güvenilir çalışması için 30 günde en az 30 dönüşüm gerektiği; yeni veya düşük hacimli hesaplar manuel teklif ile başlamalı.",
  author: "Anıl Ay",
  hubService: "google-reklam-yonetimi",
  readingMinutes: 12,
  coverImage: {
    src: "/images/blog/fizyoterapistler-google-ads-rehberi.jpg",
    alt: "Mavi tonlarda soyut performans grafikleri ve çubuk grafikler kolajı",
  },
  faq: [
    {
      question: "Fizyoterapi reklamı vermek için Google'dan onay/sertifika almam gerekiyor mu?",
      answer:
        "Hayır. Google Ads'in sağlık ve ilaçlar politikasında sertifikasyon gerektiren kategoriler arasında (online eczane, bağımlılık tedavisi, sağlık sigortası vb.) fizyoterapi yer almıyor. Yine de bireysel reklamlarınız, kanıtlanmamış tedavi iddiaları gibi genel sağlık reklamı kurallarına takılırsa reddedilebilir.",
    },
    {
      question: "Google'ın Yerel Hizmet Reklamlarını (LSA) kullanabilir miyim?",
      answer:
        "Şu an için hayır. LSA programı ABD, Kanada, İngiltere ve bazı AB ülkelerinde fizyoterapistler dahil birçok kategoriyi kapsıyor, ama Türkiye bu ülkeler arasında değil. Bu yüzden Türkiye'deki fizyoterapi klinikleri için Search kampanyaları asıl kanal.",
    },
    {
      question: "Sitemi ziyaret eden ama randevu almayan kullanıcıları hedefleyebilir miyim?",
      answer:
        "Genel ziyaretçi listesiyle yeniden pazarlama (remarketing) yapmak sorun değil. Ama Google'ın 'sağlık' hassas ilgi alanı politikasına göre, kullanıcıları belirli bir sağlık durumu veya tanıya göre segmentlere ayırıp hedeflemek yasak — bu ayrımı bilerek kurmak gerekiyor.",
    },
    {
      question: "Kampanyama ne zaman otomatik teklif stratejisine (Smart Bidding) geçmeliyim?",
      answer:
        "Google'ın kendi önerisine göre Target CPA'nın güvenilir şekilde değerlendirilebilmesi için son 30 günde en az 30 dönüşüm birikmiş olması gerekiyor. Yeni bir hesapta bu veri yokken manuel teklif veya Maximize Clicks ile başlamak daha gerçekçi.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        &quot;Fizyoterapistler için Dijital Pazarlama Rehberi&quot;
        yazımızda Google Ads&apos;in fizyoterapi için sağlık dikeyinin
        nispeten verimli bir kategorisi olduğunu göstermiştik. Bu yazı
        o genel bakışın devamı değil, tamamlayıcısı: kampanyayı gerçekte{" "}
        <em>nasıl kurduğunuz</em> — sertifikasyon gerekip gerekmediğinden
        teklif stratejisine kadar — ele alıyor. Burada aynı maliyet
        rakamlarını tekrarlamayacağız; bunun yerine Google&apos;ın kendi
        dokümantasyonuna dayanan somut kurulum adımlarına odaklanacağız.
      </p>
      <p>
        Türkçe aramalarda &quot;fizyoterapi google ads kampanyası nasıl
        kurulur&quot; gibi sorgularda çıkan içeriklerin çoğu genel
        pazarlama tavsiyeleriyle sınırlı — hangi kategori için
        sertifikasyon gerektiğini, Yerel Hizmet Reklamları&apos;nın
        Türkiye&apos;de sunulup sunulmadığını veya sağlık verisiyle
        remarketing yaparken nelere dikkat edilmesi gerektiğini hiçbiri
        ele almıyor. Bu yazı, bu üç somut kurulum sorusuna Google&apos;ın
        kendi kaynaklarıyla cevap veriyor.
      </p>

      <h2 id="sertifikasyon">Sertifikasyon gerekiyor mu?</h2>
      <p>
        Google Ads&apos;in{" "}
        <a
          href="https://support.google.com/adspolicy/answer/176031?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;Sağlık ve ilaçlar&quot; reklam politikasına göre
        </a>
        , belirli sağlık kategorileri (online eczaneler, telemedikal
        hizmetler, bağımlılık tedavisi merkezleri, ilaç üreticileri,
        sağlık sigortası sağlayıcıları, klinik araştırma katılımcı
        toplama) reklam vermeden önce sertifikasyon gerektiriyor.
        Fizyoterapi/fizik tedavi bu listede yer almıyor — yani bir
        fizyoterapi kliniği, çoğu yerel hizmet işletmesi gibi ek bir
        onay süreci olmadan reklam verebiliyor.
      </p>
      <p>
        Bunun bir istisnası var: sertifikasyon gerekmese de, tek tek
        reklamlarınız Google&apos;ın genel sağlık reklamı içerik
        kurallarına (kanıtlanmamış tedavi iddiaları, abartılı sonuç
        vaatleri gibi) takılıp reddedilebilir. Böyle bir durumda
        Google&apos;ın{" "}
        <a
          href="https://support.google.com/google-ads/troubleshooter/6099627"
          target="_blank"
          rel="noopener noreferrer"
        >
          sağlıkla ilgili reklamcılık başvuru sürecini
        </a>{" "}
        kullanarak itiraz edebilirsiniz.
      </p>
      <p>
        Kampanyaya başlamadan önce çözülmesi gereken bir başka konu da
        hesabın kimin adına açılacağı.{" "}
        <Link href="/blog/google-ads-hesabiniz-kimde">
          Google Ads hesap sahipliği hakkındaki yazımızda
        </Link>{" "}
        detaylandırdığımız gibi, hesabı kliniğinizin kendi adına
        açmak, ajans değişikliği gibi durumlarda geçmiş verinizi
        korumanızı sağlıyor.
      </p>

      <h2 id="kampanya-yapisi">
        Kampanya yapısı: neden Search kampanyaları öncelikli
      </h2>
      <p>
        Google&apos;ın kendi{" "}
        <a
          href="https://support.google.com/localservices/answer/6224841?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yerel Hizmet Reklamları (Local Services Ads) kategorisi
          listesinde
        </a>{" "}
        &quot;Physical therapist&quot; (fizyoterapist) yer alıyor — LSA,
        arama sonuçlarının en üstünde &quot;Google Garantili&quot;
        rozetiyle çıkan, tıklama başına değil müşteri talebi başına
        ödeme yapılan bir format. Ama bu program şu anda yalnızca ABD,
        Kanada, İngiltere ve birkaç AB ülkesinde (Almanya, Fransa,
        İspanya gibi) sunuluyor —{" "}
        <strong>Türkiye bu ülkeler arasında yok</strong>. Bu, Türkçe
        fizyoterapi pazarlaması içeriklerinde neredeyse hiç
        bahsedilmeyen ama pratik açıdan önemli bir kısıt: Türkiye&apos;deki
        bir fizyoterapi kliniği için LSA bir seçenek değil, bu yüzden
        bütçe ve dikkat doğrudan <strong>Search kampanyalarına</strong>{" "}
        yönlendirilmeli.
      </p>
      <p>
        Search kampanyası kurarken, her tedavi alanı (ortopedik
        rehabilitasyon, spor yaralanmaları, nörolojik rehabilitasyon
        vb.) için ayrı bir reklam grubu oluşturmak, hem anahtar kelime
        alaka düzeyini hem de reklam metni-açılış sayfası eşleşmesini
        güçlendiriyor. Performance Max gibi otomatik kampanya türleri
        yerine klasik Search kampanyasıyla başlamak, özellikle telefon
        araması gibi net bir dönüşüm hedefi olan yerel hizmetler için
        daha kontrol edilebilir bir seçim.
      </p>
      <p>
        Kampanya yapısını pratikte kurarken izlenecek adımlar:
      </p>
      <ul>
        <li>
          Her tedavi alanı için ayrı bir reklam grubu açın; her grup
          yalnızca o alana özgü anahtar kelimeler içersin (ör.
          &quot;diz fizyoterapisi,&quot; &quot;ameliyat sonrası
          rehabilitasyon&quot; ayrı gruplarda, tek bir &quot;fizyoterapi&quot;
          grubunda karıştırılmadan).
        </li>
        <li>
          Anahtar kelimelerde geniş eşleme yerine öbek eşleme veya tam
          eşleme ile başlayın — bu, bütçenin ilgisiz aramalara
          gitmesini sınırlar ve zamanla arama terimleri raporuna
          bakarak genişletebilirsiniz.
        </li>
        <li>
          &quot;fizyoterapi eğitimi,&quot; &quot;fizyoterapist
          maaşları,&quot; &quot;fizyoterapi bölümü taban puanları&quot;
          gibi tedaviyle ilgisi olmayan aramaları negatif anahtar
          kelime listesine düzenli olarak ekleyin — arama terimleri
          raporunu haftalık gözden geçirmek bu listeyi güncel tutar.
        </li>
        <li>
          Her reklam grubunun, o gruptaki anahtar kelimelerle doğrudan
          eşleşen kendi açılış sayfasına yönlendirdiğinden emin olun —
          genel anasayfaya yönlendirme dönüşüm oranını düşürür.
        </li>
      </ul>

      <h2 id="reklam-uclari">Reklam uçları: arama, konum, site bağlantısı</h2>
      <p>
        Google Ads&apos;in{" "}
        <a
          href="https://support.google.com/google-ads/answer/1704420"
          target="_blank"
          rel="noopener noreferrer"
        >
          kendi dokümantasyonuna göre
        </a>
        , bir yerel fizyoterapi kliniği için üç uç (asset) türü özellikle
        değerli:
      </p>
      <ul>
        <li>
          <strong>Arama uçları:</strong> Mobilde reklama dokunan
          kullanıcının doğrudan aramayı başlatmasını sağlar — randevu
          almak isteyen bir hasta için siteye gidip telefon numarası
          aramaktan çok daha az sürtünmeli bir yol.
        </li>
        <li>
          <strong>Konum uçları:</strong> Reklamın yanında adres, yol
          tarifi ve kliniğe uzaklık bilgisini gösterir — yerel niyetli
          bir aramada güven artırıcı bir sinyal.
        </li>
        <li>
          <strong>Site bağlantısı uçları:</strong> Reklamın altına
          &quot;Randevu Al,&quot; &quot;Tedavi Alanlarımız,&quot;
          &quot;Fiyatlandırma&quot; gibi ek bağlantılar ekler; hesap,
          kampanya, reklam grubu veya reklam seviyesinde eklenebilir.
        </li>
      </ul>
      <p>
        Bu üç ucu birlikte kullanan bir reklam, tek başına metin
        reklamdan daha fazla ekran alanı kaplıyor ve hastaya birden
        fazla harekete geçme yolu (ara, yol tarifi al, siteye git)
        sunuyor — bu da genellikle daha yüksek bir tıklama oranına
        katkıda bulunuyor. Google bazı uçları (özellikle arama ve site
        bağlantısı) sitenizdeki sinyallere göre otomatik olarak da
        oluşturabiliyor, ama manuel olarak eklemek içeriği kontrol
        etmenizi sağlar.
      </p>

      <h2 id="donusum-izleme">Dönüşüm izleme: telefon araması ve form doldurma</h2>
      <p>
        Bir fizyoterapi kliniği için asıl dönüşüm genellikle bir telefon
        araması veya bir randevu formu doldurma. Google Ads iki yolu
        destekliyor:
      </p>
      <ul>
        <li>
          <strong>Reklamlardan gelen aramalar:</strong>{" "}
          <a
            href="https://support.google.com/google-ads/answer/6095882"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;ın kendi rehberine göre
          </a>
          , bir aramanın dönüşüm sayılması için minimum arama süresi
          belirleyebilir veya yapay zekâ destekli çağrı kalitesi
          analizini kullanabilirsiniz.
        </li>
        <li>
          <strong>Sitedeki telefon numarasına gelen aramalar:</strong>{" "}
          Google&apos;ın çağrı takip numarası atayarak, sitenizdeki
          numaraya yapılan aramaları da{" "}
          <a
            href="https://support.google.com/google-ads/answer/6095883"
            target="_blank"
            rel="noopener noreferrer"
          >
            izlemenizi sağlıyor
          </a>
          .
        </li>
        <li>
          <strong>Form doldurma:</strong> Randevu formu gönderimleri
          standart dönüşüm izleme ile takip edilebilir;{" "}
          <a
            href="https://support.google.com/google-ads/answer/11021502"
            target="_blank"
            rel="noopener noreferrer"
          >
            gelişmiş dönüşümler (enhanced conversions)
          </a>{" "}
          özelliği, form verilerini (e-posta/telefon, şifrelenmiş
          olarak) kullanarak izleme doğruluğunu artırabiliyor.
        </li>
      </ul>
      <p>
        Dönüşüm izleme kurulu olmadan yürütülen bir kampanya, hangi
        anahtar kelimenin gerçek randevuya dönüştüğünü görmenizi
        engeller — bu, bütçe optimizasyonunun önündeki en yaygın
        engellerden biri. Pratikte bu, harcamanın yüksek dönüşüm
        getiren anahtar kelimelere değil, yalnızca tıklama sayısı
        yüksek olanlara kaymasına yol açabiliyor; iki kampanya aynı
        tıklama sayısına sahip olsa bile biri hiç randevuya
        dönüşmeyebilir. Dönüşüm izleme olmadan bu fark görünmez kalır.
      </p>

      <h2 id="remarketing">Remarketing: genel ziyaretçi evet, sağlık durumu hayır</h2>
      <p>
        Sitenizi ziyaret edip randevu almadan ayrılan kullanıcılara
        yeniden reklam göstermek (remarketing), yeni bir tıklama satın
        almaktan genellikle daha ucuz bir tamamlayıcı adım. Ama burada
        sağlık dikeyine özgü bir sınır var: Google&apos;ın{" "}
        <a
          href="https://support.google.com/adspolicy/answer/16701855"
          target="_blank"
          rel="noopener noreferrer"
        >
          kişiselleştirilmiş reklamcılıkta sağlık
        </a>{" "}
        politikasına göre, sağlık &quot;hassas ilgi alanı&quot; olarak
        sınıflandırılıyor ve kullanıcıları belirli bir sağlık
        durumuna, tanıya veya tedaviye göre segmentlere ayıran
        hedeflenmiş kitle listeleri (ör. &quot;bel fıtığı olan
        kullanıcılar&quot;) ve bu amaçla Customer Match kullanımı
        yasak.
      </p>
      <p>
        Bu, sitenizi ziyaret eden <strong>herkese</strong> genel bir
        remarketing listesiyle ulaşmanızı engellemiyor — politika,
        durum/tanı bazlı segmentasyonu hedefliyor, genel ziyaretçi
        remarketing&apos;ini değil. Yine de temkinli bir yaklaşım
        olarak, hedef kitle listelerinizi tedavi alanına göre değil
        (ör. &quot;diz sayfasını ziyaret edenler&quot;), genel site
        ziyaretçisi bazında kurmanızı öneririz — bu hem politikaya
        uyumu güçlendirir hem de kurulumu basitleştirir.
      </p>
      <p>
        Kurulum, Google Ads&apos;in etiketini (tag) sitenize genel
        olarak yerleştirip Kitle Yöneticisi&apos;nden bir yeniden
        pazarlama listesi oluşturmaktan ibaret; listeyi Search
        kampanyalarınıza bağladıktan sonra bu kullanıcılara teklif
        ayarlaması veya özel bir reklam mesajı gösterebilirsiniz. Yeni
        bir listenin arama reklamlarında kullanılabilmesi için belirli
        bir minimum kullanıcı sayısına ulaşması gerekiyor — bu eşiğe
        ulaşana kadar liste otomatik olarak pasif kalır, kendiniz
        kontrol etmenize gerek yok.
      </p>

      <h2 id="reklam-metni">Reklam metni: fizik tedavi kategorisinin gerçek CTR&apos;ı</h2>
      <p>
        LocaliQ&apos;nun aynı 2025 sağlık kıyaslama raporuna göre —
        önceki yazımızda kullanmadığımız bir veri noktası olarak —
        fizik tedavi kategorisinde ortalama tıklama oranı (CTR){" "}
        <strong>%6,61</strong>. Bu, reklam metninizin ne kadar alakalı
        ve ikna edici olduğunun bir göstergesi; sektör ortalamasının
        altında kalan bir CTR, genellikle anahtar kelime-reklam metni
        eşleşmesinin zayıf olduğuna işaret eder.
      </p>
      <p>
        Google&apos;ın kendi{" "}
        <a
          href="https://support.google.com/google-ads/answer/6167122"
          target="_blank"
          rel="noopener noreferrer"
        >
          etkili arama reklamları oluşturma rehberine göre
        </a>
        , güçlü bir reklam metni net bir harekete geçirme çağrısı
        (&quot;Bugün randevu alın&quot;), reklamın açılış sayfasıyla
        tutarlı olması ve alakalıysa somut bir bilgi (ör. bir hizmet
        veya kampanya) içermeli. Fiyat veya telefon numarası eklemenin
        CTR&apos;a etkisine dair sağlık dikeyine özgü, güvenilir bir
        istatistik bulamadık — bu yüzden burada uydurma bir rakam
        vermek yerine Google&apos;ın genel rehberliğine dayanıyoruz.
      </p>
      <p>
        Pratikte bu şu şekle dönüşüyor: başlıklardan biri tedavi
        alanını net şekilde adlandırsın (&quot;Diz Fizyoterapisi —
        [Klinik Adı]&quot;), bir diğeri harekete geçirme çağrısı taşısın
        (&quot;Bugün Online Randevu Alın&quot;), açıklama satırı ise
        kliniğin somut bir farkını (uzman kadro, belirli bir
        sertifikasyon, uygun konum) vurgulasın. Reklam metnindeki
        iddiaların tedavi sayfasında da aynen karşılanması —
        &quot;kanıtlanmamış tedavi vaadi&quot; gibi bir reddedilme
        riskini de azaltıyor.
      </p>

      <h2 id="yaygin-hatalar">Yaygın bir sorun: reklam reddedilmesi</h2>
      <p>
        Google Ads topluluk forumlarında, fizik tedaviyle ilgili
        reklam veremediğini bildiren fizyoterapist hesapları var. Bunun
        nedeni genellikle bir kategori yasağı değil — yukarıda
        gösterdiğimiz gibi fizyoterapi sertifikasyon gerektiren bir
        kategori değil — daha çok reklam metninde veya açılış
        sayfasında kanıtlanmamış tedavi iddiası, abartılı sonuç vaadi
        veya belirsiz &quot;garanti iyileşme&quot; gibi ifadelerin genel
        sağlık reklamı içerik kurallarına takılması. Bir reklam
        reddedildiğinde önce metni ve açılış sayfasını bu açıdan gözden
        geçirmek, doğrudan sertifikasyon başvurusuna gitmekten daha
        hızlı bir çözüm oluyor.
      </p>

      <h2 id="teklif-stratejisi">
        Teklif stratejisi: ne zaman otomatikleşmeli
      </h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://support.google.com/google-ads/answer/6268632"
          target="_blank"
          rel="noopener noreferrer"
        >
          Target CPA teklif stratejisi hakkındaki kendi dokümantasyonu
        </a>
        , performansı güvenilir şekilde değerlendirmek için &quot;son
        30 günde en az 30 dönüşüm&quot; içeren bir dönemi ölçmenizi
        öneriyor. Bu, yeni açılmış veya düşük hacimli bir fizyoterapi
        kliniği için önemli bir pratik sonuç doğuruyor: hesabınızda bu
        kadar dönüşüm verisi birikmeden Target CPA gibi otomatik
        stratejilere geçmek, algoritmanın öğrenecek yeterli veriye
        sahip olmaması nedeniyle güvenilir sonuç vermeyebilir.
      </p>
      <p>
        Pratik öneri: yeni bir hesapta manuel teklif verme veya
        &quot;Maximize Clicks&quot; ile başlayın, dönüşüm izlemenizi
        (yukarıda anlatıldığı gibi) kurun ve 30 günlük dönemde 30
        dönüşüme yaklaştıkça Target CPA&apos;ya geçmeyi değerlendirin.
        Bu eşiğe ulaşmadan otomatik teklif stratejisine geçmek, bütçenin
        öğrenme sürecinde verimsiz harcanmasına yol açabilir.
      </p>
      <p>
        Bu, özellikle sınırlı bir başlangıç bütçesiyle test yapan yeni
        bir klinik için önemli bir nokta: &quot;otomatik teklif daha
        akıllı, hemen ona geçelim&quot; düşüncesi, yeterli veri
        birikmeden uygulandığında ters etki yapabiliyor. Manuel
        dönemde toplanan veriler (hangi anahtar kelime dönüşüm
        getiriyor, hangi saat dilimlerinde arama geliyor) hem gelecekte
        otomatik stratejiye geçişi kolaylaştırıyor hem de o geçişin
        ne zaman mantıklı olduğunu netleştiriyor.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Fizyoterapi için Google Ads kampanyası kurmak, çoğu yerel
        hizmet işletmesinden temelde farklı değil — sertifikasyon
        gerekmiyor, standart Search kampanyası yapısı çalışıyor. Ama iki
        ayrıntı gerçek fark yaratıyor: LSA&apos;nın Türkiye&apos;de
        henüz sunulmaması bütçenin nereye gideceğini netleştiriyor, ve
        sağlığın hassas ilgi alanı statüsü remarketing kurulumunu
        dikkatli yapmayı gerektiriyor. Bu ayrıntıları bilmeden kurulan
        bir kampanya, ya yanlış platformda zaman kaybediyor ya da
        politika ihlali riski taşıyor.
      </p>
      <p>
        Kurulumun geri kalanı — reklam grubu yapısı, dönüşüm izleme,
        reklam uçları ve teklif stratejisi — disiplinli uygulandığında
        büyük bir sır barındırmıyor; asıl fark, bu adımların hangi
        sırayla ve ne kadar veriyle atıldığında ortaya çıkıyor. Dönüşüm
        izlemesi olmadan kurulan bir kampanya veya veri birikmeden
        otomatik teklife geçilen bir hesap, aynı bütçeyle çok daha az
        sonuç üretebiliyor.
      </p>
      <p>
        Fizyoterapi kliniğinizin genel dijital pazarlama stratejisini
        (web sitesi, SEO/GEO ve sosyal medya dahil) merak ediyorsanız{" "}
        <Link href="/blog/fizyoterapistler-dijital-pazarlama-rehberi">
          Fizyoterapistler için Dijital Pazarlama Rehberi
        </Link>{" "}
        yazımıza bakabilirsiniz. Kampanyanızı kurmak için destek
        isterseniz{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
        Groopy&apos;de{" "}
        <Link href="/hizmetler/google-reklam-yonetimi">
          Google Reklam Yönetimi
        </Link>{" "}
        hizmetimiz bu kurulumun tamamını üstlenir.
      </p>
    </>
  );
}
