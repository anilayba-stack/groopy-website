import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "dis-hekimleri-dijital-pazarlama-rehberi",
  title:
    "Diş Hekimleri için Dijital Pazarlama Rehberi: Web Sitesi, SEO/GEO, Google Ads ve Sosyal Medya",
  metaTitle: "Diş Hekimleri için Dijital Pazarlama Rehberi",
  description:
    "Diş kliniklerinin web sitesi, SEO/GEO, Google Ads ve sosyal medyada hasta kazanma yolları; yeni sağlık reklamı yönetmeliğinin izin verdikleri.",
  publishedAt: "2026-09-24",
  tldr: "Hastaların büyük çoğunluğu bir diş hekimine karar vermeden önce Google'da arama yapıp yorumları okuyor; bu yüzden web sitesi hızı, yerel SEO/GEO görünürlüğü, Google Ads verimliliği ve sosyal medya aynı stratejinin parçası olmalı. 12 Kasım 2025'te yürürlüğe giren yeni sağlık reklamı yönetmeliği, öncesi/sonrası fotoğraf paylaşımına onam formu, rötuş yasağı ve yorum kapatma zorunluluğu getirdi — bu kurallara uymayan klinikler idari yaptırımla karşılaşabilir.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 14,
  coverImage: {
    src: "/images/blog/dis-hekimleri-dijital-pazarlama.jpg",
    alt: "Bir diş hekimi, tedavi koltuğunda yatan hastasının ağzını muayene ediyor",
  },
  faq: [
    {
      question: "Diş kliniğim için önce hangi hizmete yatırım yapmalıyım?",
      answer:
        "Sitesi olmayan veya yavaş bir sitesi olan klinikler için ilk adım web sitesi olmalı — Google Ads veya sosyal medyadan gelen ziyaretçiyi karşılayacak bir yer olmadan diğer kanallara harcama yapmak verimsizdir. Sitesi sağlam olan klinikler için sıradaki adım genellikle yerel SEO/GEO'dur.",
    },
    {
      question: "Öncesi/sonrası fotoğraflarını hâlâ paylaşabilir miyim?",
      answer:
        "Evet, ama 12 Kasım 2025 yönetmeliği belirli şartlar getirdi: hastadan yazılı/elektronik onam formu (Ek-1) alınmalı, görüntüler rötuşlanmamalı ve işlem/çekim tarihleri belirtilmeli, paylaşımlarda yorum ve beğeni kapatılmalı. Bu şartlar sağlanmadan paylaşılan öncesi/sonrası içerik mevzuata aykırı sayılabilir.",
    },
    {
      question: "Diş hekimliğinde Google Ads pahalı mı?",
      answer:
        "Evet, sağlık dikeyinde tıklama başına maliyet ortalamanın üzerinde seyrediyor ve yıldan yıla artıyor. Bu yüzden kampanyayı doğru anahtar kelimede ve dönüşüm odaklı bir sayfaya yönlendirerek çalıştırmak, harcamanın verimini belirleyen en önemli faktör.",
    },
    {
      question: "Sosyal medyada ücretli tanıtım (reklam) yapabilir miyim?",
      answer:
        "Yeni yönetmeliğe göre yurt içine yönelik ücretli/sponsorlu tanıtım kural olarak yasak; istisnalar yeni açılan bir tesisin ilk bir ayı ve yurt dışına yönelik sağlık turizmi tanıtımı. Organik (ücretsiz) paylaşım bu yasağın kapsamı dışında.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Bir diş kliniğinin büyümesi artık neredeyse hiç &quot;ağızdan
        ağıza&quot; ile sınırlı değil. Hastaların büyük bir kısmı bir
        kliniğe karar vermeden önce Google&apos;da arama yapıyor, yorumları
        okuyor ve kliniğin sosyal medya hesabına bakıyor. Bu süreç
        genellikle klinik ziyaret edilmeden çok önce, bazen bir hafta
        öncesinden başlıyor — ve o süreçte kliniğin dijital varlığı
        (site, Google profili, sosyal medya) tek başına karar verici bir
        rol oynuyor.
      </p>
      <p>
        Bu yazı, dört farklı dijital kanalın — web sitesi, yerel
        SEO/GEO, Google Ads ve sosyal medya — bir diş kliniği için
        pratikte ne anlama geldiğini, gerçek verilerle anlatıyor. Ayrıca
        Türkiye&apos;deki diş hekimliği pazarlaması içeriklerinin
        neredeyse hiçbirinde henüz yer almayan ama doğrudan uygulanabilir
        bir konuyu ele alıyor: 12 Kasım 2025&apos;te yürürlüğe giren yeni
        sağlık reklamı yönetmeliğinin sosyal medya paylaşımlarına
        getirdiği somut sınırlar. Amaç, dört kanalı ayrı ayrı taktikler
        olarak değil, aynı hasta yolculuğunun parçaları olarak
        görmenizi sağlamak.
      </p>

      <h2 id="hasta-nasil-karar-verir">
        Hasta bir diş hekimine nasıl karar veriyor?
      </h2>
      <p>
        rater8&apos;in 2025 hasta davranışı araştırmasına göre, hastaların{" "}
        <strong>%84&apos;ü</strong> yeni bir sağlık hizmeti sağlayıcısı
        seçmeden önce online yorumlara bakıyor;{" "}
        <strong>%51&apos;i</strong> karar vermeden önce en az 6 yorum
        okuyor ve <strong>%61&apos;i</strong> artık yorumları tanıdık
        tavsiyesinden daha önde tutuyor (
        <a
          href="https://rater8.com/how-patients-choose-their-doctors-2025-report/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rater8, &quot;How Patients Choose Their Doctors&quot;, 2025
        </a>
        ). BrightLocal&apos;in 2025 tüketici araştırması da benzer bir
        tablo çiziyor:{" "}
        <a
          href="https://www.brightlocal.com/research/local-consumer-review-survey-2025/"
          target="_blank"
          rel="noopener noreferrer"
        >
          tüketicilerin %84&apos;ü Google&apos;ı yerel işletme yorumlarını
          bulmak için kullanıyor
        </a>
        , bir yıl önceki %81&apos;den yükseliş göstererek.
      </p>
      <p>
        Bu tablo pratikte şu anlama geliyor: bir diş kliniğinin web
        sitesi, Google profili ve sosyal medya varlığı — reklam bütçesi
        harcanmadan çok önce — hastanın karar sürecinin bir parçası
        oluyor. Bu yüzden sık yapılan bir hata, pazarlama bütçesinin
        tamamını yeni hasta &quot;çekmeye&quot; (reklam, kampanya) ayırıp
        var olan yorumları yönetmeyi ihmal etmek: birkaç eski veya olumsuz
        yorumla dolu bir profil, aynı bütçeyle getirilen hastanın önemli
        bir kısmını rakip kliniğe kaptırabilir.
      </p>
      <p>
        Bir diğer önemli nokta zamanlama: rater8&apos;in verisine göre
        hastaların yarıdan fazlası karar vermeden önce altıdan fazla yorum
        okuyor, yani bir hasta genellikle tek bir kliniği değil, aynı anda
        birkaç kliniği karşılaştırıyor. Bu karşılaştırma sırasında ilk
        sonuçlarda çıkmayan, yorumları eksik veya sitesi yavaş açılan bir
        klinik, hasta listesine hiç girmeden elenebiliyor.
      </p>
      <p>
        Diş hekimliğinde bu karşılaştırma süreci diğer birçok hizmetten
        daha yoğun bir duygusal boyut taşıyor — çoğu hasta için diş
        tedavisi kaygı verici bir deneyim, bu yüzden karar öncesi
        araştırma yalnızca fiyat veya konum kıyaslaması değil, güven
        arayışı. Bir klinik profilinde gerçek hasta yorumlarının, açık
        ve anlaşılır tedavi açıklamalarının bulunması, sadece SEO değeri
        değil, bu kaygıyı azaltan bir güven sinyali de taşıyor. Aşağıdaki
        bölümler, bu sürecin her aşamasında neyin işe yaradığını ele
        alıyor.
      </p>

      <h2 id="web-sitesi">Web sitesi: dijital vitrin ve ilk izlenim</h2>
      <p>
        Bir hasta kliniğin Google profilinden veya bir arama sonucundan
        siteye tıkladığında, sitenin hızı ve mobil deneyimi o ilk izlenimi
        belirler. Google&apos;ın kendi{" "}
        <a
          href="https://web.dev/articles/vitals"
          target="_blank"
          rel="noopener noreferrer"
        >
          Core Web Vitals rehberine göre
        </a>
        , yükleme hızı, etkileşim gecikmesi ve görsel kararlılık hem
        kullanıcı deneyimini hem de Google&apos;ın sıralama sinyallerini
        doğrudan etkiliyor — özellikle sağlık gibi rekabetin yoğun olduğu
        yerel bir dikeyde, yavaş bir site rakiplere kaptırılan bir
        randevu anlamına gelebilir.
      </p>
      <p>
        Bir diş kliniği sitesinde asgari olması gerekenler:
      </p>
      <ul>
        <li>
          Sayfanın her ekranında görünen, tek ve net bir randevu/iletişim
          CTA&apos;sı — telefon numarası ve WhatsApp gibi düşük
          sürtünmeli bir kanal dahil.
        </li>
        <li>
          Her tedavi başlığının (implant, ortodonti, diş beyazlatma vb.)
          kendi sayfası — bu hem hastaya net bilgi verir hem de yerel SEO
          için her tedavi kendi anahtar kelimesinde rekabet edebilir hale
          gelir.
        </li>
        <li>
          Klinik konumunu ve çalışma saatlerini gösteren gömülü bir
          harita, ayrıca adres bilgisinin sayfa metninde (sadece görselde
          değil) yazılı olması.
        </li>
        <li>
          Mobilde bozulmayan, hızlı yüklenen bir tasarım — çünkü
          &quot;diş hekimi&quot; gibi yerel niyetli aramaların büyük
          kısmı telefonda yapılıyor ve bir hasta acil bir diş ağrısıyla
          ararken saniyeler önemli.
        </li>
        <li>
          Hasta yorumlarının veya Google değerlendirme puanının siteye
          de yansıtılması — hasta zaten yorumlara bakıyor, bunu sitede de
          göstermek ek bir güven adımı.
        </li>
      </ul>
      <p>
        Sık yapılan hatalardan biri, kliniğin tüm hizmetlerini tek bir
        sayfada listelemek: bu hem hastanın aradığı bilgiyi bulmasını
        zorlaştırıyor hem de arama motorlarının sayfayı hangi tedaviyle
        eşleştireceğini belirsizleştiriyor. Bir diğer sık hata, sitenin
        yalnızca masaüstünde test edilmesi — mobil deneyim gerçek trafiğin
        çoğunu karşıladığı için, tasarımın önce mobilde test edilmesi
        gerekir.{" "}
        <Link href="/blog/web-sitesi-maliyeti-2026">
          Bir web sitesinin gerçekçi maliyetini
        </Link>{" "}
        merak ediyorsanız bu konuyu ayrıca ele aldık.
      </p>

      <h2 id="yerel-seo-geo">
        Yerel SEO ve GEO: &quot;Yakınımda diş hekimi&quot; aramalarında
        görünürlük
      </h2>
      <p>
        Diş hekimliği tamamen yerel niyetli bir arama kategorisi —
        hastalar neredeyse hiçbir zaman şehir dışından bir klinik
        aramıyor. Bu yüzden Google İşletme Profili&apos;nin (GBP) eksiksiz
        ve güncel olması, klasik SEO çalışmasından önce gelen bir öncelik.
        Yorumların karar sürecindeki ağırlığı (yukarıdaki
        rater8/BrightLocal verileri) burada da geçerli: bir klinik
        profilinde az sayıda veya eski yorum varsa, rakip klinikler o
        hastayı kazanıyor demektir.
      </p>
      <p>Bir diş kliniği için GBP&apos;de öncelikli kontrol listesi:</p>
      <ul>
        <li>
          Doğru ana kategori (&quot;Diş Hekimi&quot; / &quot;Dental
          Clinic&quot;) ve varsa ilgili alt kategorilerin eklenmesi.
        </li>
        <li>
          Çalışma saatlerinin, adresin ve telefon numarasının sitedekiyle
          birebir aynı olması — tutarsızlık Google&apos;ın işletmeye olan
          güvenini azaltır.
        </li>
        <li>
          Klinik ve tedavi odalarını gösteren, düzenli aralıklarla
          eklenen gerçek fotoğraflar (hasta görüntüsü olmadan).
        </li>
        <li>
          Her yoruma — özellikle olumsuz olanlara — makul bir sürede,
          profesyonel bir dille yanıt verilmesi.
        </li>
        <li>
          Sunulan tedavilerin GBP &quot;hizmetler&quot; bölümünde tek tek
          listelenmesi.
        </li>
      </ul>
      <p>
        Sık yapılan bir hata, profili bir kez kurup bir daha
        güncellememek — güncel olmayan çalışma saatleri veya yanıtsız
        kalan yorumlar, sitenin geri kalanı ne kadar iyi olursa olsun
        hasta güvenini zedeler.
      </p>
      <p>
        GEO (yapay zeka arama motorlarında görünürlük) tarafında ise diş
        hekimliği hâlâ çoğu rakibin hiç değinmediği bir alan.{" "}
        <Link href="/blog/geo-nedir">GEO&apos;nun ne olduğunu</Link> ve{" "}
        <Link href="/blog/googlede-neden-cikmiyorum">
          bir sitenin Google&apos;da neden çıkmayabileceğini
        </Link>{" "}
        ayrı yazılarımızda detaylandırdık; bir diş kliniği için pratik
        sonucu, ChatGPT veya Perplexity&apos;de &quot;İstanbul&apos;da iyi
        bir diş hekimi&quot; gibi bir soru sorulduğunda kaynak olarak
        gösterilebilmek için sitenin yapılandırılmış, güncel ve
        doğrulanabilir bilgi içermesi gerektiği.
      </p>
      <p>Bunun somut karşılığı üç şey:</p>
      <ul>
        <li>
          Kliniğin adı, adresi ve telefon numarasının (NAP) sitedeki her
          sayfada, GBP&apos;de ve diğer dizin sitelerinde birebir aynı
          yazılması.
        </li>
        <li>
          Her tedavi sayfasında o tedavinin ne olduğunu, kimlere uygun
          olduğunu ve süreç adımlarını net cümlelerle anlatan bir yapı.
          Yapay zekâ modelleri, belirsiz pazarlama diliyle yazılmış
          sayfalardan çok, doğrudan soruya cevap veren içerikleri kaynak
          göstermeyi tercih ediyor.
        </li>
        <li>
          Organization/LocalBusiness gibi yapılandırılmış veri (JSON-LD)
          ile kliniğin kimliğinin makine tarafından da okunabilir
          olması.
        </li>
      </ul>
      <p>
        Bu üç unsur zaten güçlü bir SEO temeli oluşturduğu için, GEO için
        ayrı bir bütçe değil, aynı çalışmanın bir uzantısı olarak
        düşünülmeli.
      </p>

      <h2 id="google-ads">Google Ads: diş hekimliğinde gerçek maliyet verileri</h2>
      <p>
        Diş hekimliği, Google Ads&apos;te ortalamanın üzerinde tıklama
        maliyetine sahip bir dikey. LocaliQ&apos;nun Ekim 2024 - Eylül
        2025 döneminde 3.542 ABD sağlık kampanyasını incelediği{" "}
        <a
          href="https://localiq.com/blog/healthcare-search-advertising-benchmarks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sağlık sektörü arama reklamı kıyaslama raporuna göre
        </a>
        , genel diş hekimliği kampanyalarında ortalama tıklama maliyeti
        (CPC) 7,03 dolar, acil diş hekimliği kampanyalarında ise 7,85
        dolar. Daha çarpıcı olan ise yıllık artış: genel diş hekimliğinde
        CPC bir önceki yıla göre yaklaşık %14, acil diş hekimliğinde ise
        yaklaşık %32 arttı.
      </p>

      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Ortalama CPC</th>
            <th>Dönüşüm oranı</th>
            <th>Ortalama CPL</th>
            <th>Yıllık CPC artışı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Genel Diş Hekimliği</td>
            <td>$7,03</td>
            <td>%7,74</td>
            <td>$84,77</td>
            <td>~%14</td>
          </tr>
          <tr>
            <td>Acil Diş Hekimliği</td>
            <td>$7,85</td>
            <td>%8,89</td>
            <td>$75,19</td>
            <td>~%32</td>
          </tr>
        </tbody>
      </table>
      <p>
        Kaynak:{" "}
        <a
          href="https://localiq.com/blog/healthcare-search-advertising-benchmarks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LocaliQ Healthcare Search Advertising Benchmarks
        </a>
        , Ekim 2024 - Eylül 2025 verileri, medyan değerler. CPL
        (cost-per-lead / potansiyel hasta başına maliyet) rakamının
        CPC&apos;den yüksek çıkması normal — her tıklama bir randevu
        talebine dönüşmüyor, bu yüzden CPL bütçe planlamasında CPC&apos;den
        daha güvenilir bir gösterge.
      </p>
      <p>
        Bu rakamlar şunu gösteriyor: diş hekimliğinde bir tıklamayı boşa
        harcamanın maliyeti yüksek, bu yüzden kampanyanın doğru anahtar
        kelimede ve yüksek dönüşümlü bir sayfaya yönlendirilmesi kritik.
        Pratikte bu şu anlama geliyor: bir &quot;implant fiyatı&quot;
        reklamı kliniğin anasayfasına değil, doğrudan implant tedavisini
        anlatan, net bir randevu formu içeren bir sayfaya yönlendirilmeli.
        Anasayfaya yönlendirilen bir tıklamanın dönüşüm oranı, ilgili
        tedavi sayfasına göre belirgin şekilde düşük kalır. Bütçe
        planlarken de acil diş hekimliği gibi yüksek niyetli ama pahalı
        kategorilerde daha dar, spesifik anahtar kelimelerle başlamak
        daha verimli sonuç verir — geniş eşlemeli genel kelimeler bütçeyi
        hızlıca tüketir.{" "}
        <Link href="/blog/google-ads-mi-seo-mu">
          Google Ads mi SEO mu, yoksa ikisi birden mi gerekli
        </Link>{" "}
        sorusunu ayrı bir yazıda ele aldık; diş hekimliği gibi hem yüksek
        rekabetli hem yerel niyetli bir dikeyde ikisinin birlikte
        çalışması genellikle daha verimli.{" "}
        <Link href="/blog/google-ads-ajansi-secerken-nelere-dikkat-edilmeli">
          Bir Google Ads ekibi seçerken nelere dikkat edilmesi gerektiğini
        </Link>{" "}
        de ayrıca yazdık.
      </p>
      <p>
        Bütçeyi korumanın bir diğer yolu, negatif anahtar kelime
        listesini düzenli güncellemek: örneğin &quot;diş hekimliği
        fakültesi&quot; veya &quot;iş ilanı&quot; gibi tedaviyle ilgisi
        olmayan aramalar kampanyaya dahil olmasın diye engellenmeli.
        Siteyi ziyaret edip randevu almadan ayrılan kullanıcılara
        yeniden pazarlama (remarketing) ile ulaşmak da, sıfırdan yeni bir
        tıklama satın almaktan genellikle daha düşük maliyetli bir
        tamamlayıcı adım.
      </p>

      <h2 id="sosyal-medya-yonetmelik">
        Sosyal medya ve Kasım 2025 sağlık reklamı yönetmeliği
      </h2>
      <p>
        Diş hekimliğinde sosyal medyanın hasta güveni üzerindeki etkisi
        gerçek: 335 katılımcıyla yapılan ve Ağustos 2025&apos;te{" "}
        <em>Bioinformation</em> dergisinde yayınlanan bir çalışmaya göre,
        katılımcıların <strong>%72,8&apos;i</strong> sosyal medyayı bir
        klinik hakkında birincil bilgi kaynağı olarak tercih ediyor ve
        aynı oranda katılımcı bir kliniğin sosyal medya sayfasını
        gördükten sonra o kliniği ziyaret edebileceğini belirtiyor (
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12697506/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;A cross-sectional study to determine impact of social
          media influencing patient choices in aesthetic dentistry&quot;,
          Bioinformation, 2025
        </a>
        ). Aynı çalışma, aile/yakın çevre tavsiyesinin (%47,8) ve akran
        yorumlarının (%34,3) hâlâ ünlü/influencer onayından (%37,3) daha
        güvenilir bulunduğunu da gösteriyor.
      </p>
      <p>
        Ama Türkiye&apos;de bu alanda içerik üreten kliniklerin bilmesi
        gereken çok daha önemli bir gelişme var: 12 Kasım 2025&apos;te
        Resmî Gazete&apos;de (Sayı: 33075) yayımlanan{" "}
        <strong>
          Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri
          Hakkında Yönetmelik
        </strong>
        , diş hekimliği ve estetik alanda sosyal medya paylaşımlarına
        somut sınırlar getirdi. Bu, şu anda İstanbul&apos;da faaliyet
        gösteren diş hekimliği pazarlaması içeriklerinin neredeyse
        hiçbirinde yer almayan, ama doğrudan uygulanabilir bir konu.
      </p>
      <p>
        Yönetmelik öncesinde birçok klinik, öncesi/sonrası fotoğrafları
        rötuşlayarak, tarih belirtmeden ve yorumlara açık şekilde
        paylaşıyordu — bu, 12 Kasım 2025&apos;ten itibaren değişti:
      </p>
      <table>
        <thead>
          <tr>
            <th>Uygulama</th>
            <th>Yönetmelik öncesi (yaygın pratik)</th>
            <th>12 Kasım 2025 sonrası (zorunlu)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hasta onayı</td>
            <td>Sözlü onay yeterli sayılıyordu</td>
            <td>Standart form (Ek-1) ile yazılı/elektronik onam şart</td>
          </tr>
          <tr>
            <td>Görüntü düzenleme</td>
            <td>Filtre/rötuş yaygın</td>
            <td>Filtre, rötuş, yapay zekâ düzenlemesi yasak</td>
          </tr>
          <tr>
            <td>Yorum/beğeni</td>
            <td>Açık bırakılıyordu</td>
            <td>Hasta görüntülü paylaşımlarda kapatılması zorunlu</td>
          </tr>
          <tr>
            <td>Ücretli tanıtım</td>
            <td>Yaygın olarak boost edilebiliyordu</td>
            <td>Yurt içi için kural olarak yasak (istisnalar hariç)</td>
          </tr>
        </tbody>
      </table>
      <p>Yönetmeliğin diş hekimleri için en kritik maddeleri:</p>
      <ul>
        <li>
          <strong>Onam zorunluluğu (m.7/1-b):</strong> Hastaya ait
          görüntülerin kaydedilmesi ve kullanılması, yönetmelik ekindeki
          standart form (Ek-1) ile yazılı veya elektronik onaya bağlı.
        </li>
        <li>
          <strong>Rötuş yasağı (m.7/1-e):</strong> Öncesi/sonrası
          fotoğraflarda filtre, rötuş veya yapay zekâ ile yapılan
          değişiklik yasak; görüntüler gerçeği yanıltıcı şekilde
          değiştirilemez.
        </li>
        <li>
          <strong>Tarih şeffaflığı (m.7/1-f):</strong> İşlem tarihi ve
          çekim tarihleri paylaşımda açıkça belirtilmeli.
        </li>
        <li>
          <strong>Yorum/beğeni kapatma (m.7/1-h):</strong> Hasta
          görüntüsü içeren paylaşımlarda yorum, beğeni ve yeniden
          paylaşım özellikleri kapatılmalı.
        </li>
        <li>
          <strong>Ameliyathane görüntüsü yasağı (m.7/1-ı):</strong> İşlem
          sırasında hastanın görüntüsü paylaşılamaz.
        </li>
        <li>
          <strong>Zorunlu uyarı metni (m.7/1-l):</strong> &quot;Her
          cerrahi veya girişimsel işlemde sonuçlar kişiden kişiye
          değişiklik gösterebilir. İşlem öncesinde hekiminizden detaylı
          görüş almanız önerilir.&quot; ibaresinin paylaşımda yer alması
          gerekiyor.
        </li>
        <li>
          <strong>Ücretli tanıtım yasağı (m.5/1-j):</strong> Yurt içine
          yönelik sponsorlu/ücretli tanıtım kural olarak yasak; istisnalar
          yeni açılan bir tesisin ilk bir ayı ve yurt dışına yönelik
          sağlık turizmi tanıtımı.
        </li>
      </ul>
      <p>
        (Kaynak:{" "}
        <a
          href="https://kazdal.av.tr/blog/saglikta-tanitim-ve-bilgilendirme-yonetmeligi-2025/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kazdal Hukuk Bürosu, yönetmelik madde analizi
        </a>
        ; yönetmeliğin yayımlandığı Resmî Gazete sayısı{" "}
        <a
          href="https://ohsad.org/saglik-hizmetlerinde-tanitim-ve-bilgilendirme-faaliyetleri-hakkinda-yonetmelik-yayinlandi-12-11-2025/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Özel Hastaneler ve Sağlık Kuruluşları Derneği&apos;nin (OHSAD)
          duyurusunda
        </a>{" "}
        teyit edilmiştir.)
      </p>
      <p>
        Pratik sonucu şu: &quot;önce/sonra&quot; formatı hâlâ
        kullanılabilir, ama onam formu, tarih bilgisi ve kapalı
        yorum/beğeni olmadan paylaşılan bir öncesi/sonrası gönderisi artık
        mevzuata aykırı. Aynı şekilde bir kliniğin Instagram
        gönderisini &quot;boost&quot; etmesi (istisnalar dışında) kural
        olarak yasak kapsamına giriyor.
      </p>
      <p>
        Bir diş kliniğinin sosyal medya yönetiminde uyumlu kalmak için
        pratikte izleyebileceği adımlar:
      </p>
      <ul>
        <li>
          Öncesi/sonrası veya tedavi süreci paylaşılacak her hasta için
          Ek-1 onam formunun paylaşımdan önce imzalatılması ve
          arşivlenmesi.
        </li>
        <li>
          Paylaşılan görüntülerin filtre/rötuş/yapay zekâ düzenlemesi
          içermediğinden ve işlem/çekim tarihlerinin gönderide
          belirtildiğinden emin olunması.
        </li>
        <li>
          Hasta görüntüsü içeren her gönderide yorum, beğeni ve yeniden
          paylaşım özelliklerinin kapatılması.
        </li>
        <li>
          Zorunlu &quot;sonuçlar kişiden kişiye değişebilir&quot; uyarı
          metninin gönderiye eklenmesi.
        </li>
        <li>
          Ücretli/sponsorlu tanıtım yerine organik içerik üretimine ve
          (istisna kapsamına giren) yeni tesis açılışı veya sağlık
          turizmi tanıtımı dışında reklam bütçesi ayırmaktan
          kaçınılması.
        </li>
      </ul>
      <p>
        Sosyal medya yönetimini bu kurallara göre kuran bir klinik, hem
        hasta güvenini hem de mevzuat uyumunu aynı anda sağlamış oluyor —
        ve rakiplerinin çoğu bu değişiklikten henüz haberdar olmadığı
        için, uyumlu bir hesap yönetmek başlı başına bir güven sinyaline
        dönüşüyor.
      </p>

      <h2 id="rakip-analizi">
        Türkiye&apos;de diş hekimliği pazarlamasında neler eksik?
      </h2>
      <p>
        Türkçe aramalarda &quot;diş hekimi dijital pazarlama&quot; veya
        &quot;diş kliniği web sitesi SEO&quot; gibi sorgularda üst
        sıralarda çıkan içeriklerin neredeyse tamamı genel bir dijital
        pazarlama ajansına ait ve ortak bir örüntü izliyor: anahtar
        kelime araştırması, GBP optimizasyonu, düzenli paylaşım gibi
        genel taktikleri sıralayan listeler, ama gerçek kaynak gösterilen
        bir veri, Google Ads maliyet kıyaslaması veya GEO/yapay zekâ
        arama görünürlüğü değinisi neredeyse hiç yok. Daha da önemlisi,
        taradığımız içeriklerin hiçbirinde Kasım 2025 sağlık reklamı
        yönetmeliğinden bahsedilmiyor — üstelik bu içeriklerin bir kısmı,
        yönetmeliğin artık kısıtladığı taktikleri (ör. &quot;öncesi/sonrası
        fotoğrafları paylaşın, yorumları teşvik edin&quot;) hâlâ olduğu
        gibi öneriyor.
      </p>
      <p>
        Bu boşluk, bir diş kliniğinin dijital pazarlama ortağını
        seçerken sorması gereken soruyu da değiştiriyor: mesele yalnızca
        &quot;kaç takipçi kazandırırsınız&quot; değil, &quot;güncel
        mevzuata uygun, gerçek verilerle çalışan bir ekiple mi
        çalışıyorum&quot; sorusu. Bir yazılım şirketi olarak Groopy&apos;nin
        farkı da tam burada: sosyal medya içeriği üretirken hukuki
        sınırları, Google Ads kampanyası kurarken gerçek maliyet
        verilerini ve site geliştirirken teknik SEO/Core Web Vitals
        temelini aynı ekip içinde bir arada tutmak.
      </p>

      <h2 id="dort-hizmet-bir-arada">
        Dört hizmet bir arada: hangi sırayla yatırım yapılmalı?
      </h2>
      <p>
        Sınırlı bir bütçeyle başlayan bir klinik için genel öncelik
        sırası şöyle işliyor: önce hastayı karşılayacak, hızlı ve mobil
        uyumlu bir <strong>web sitesi</strong>; ardından o siteyi yerel
        aramalarda görünür kılacak <strong>SEO/GEO</strong> çalışması;
        organik görünürlük yeterli hasta akışı sağlamıyorsa hızlı sonuç
        için <strong>Google Ads</strong>; ve tüm bu kanallara güven
        katmanı ekleyen, mevzuata uygun bir{" "}
        <strong>sosyal medya</strong> varlığı. Zaten kurulu bir kliniğin
        yalnızca bir veya iki kanalda eksiği olabilir — bu durumda
        eksik olan kanala odaklanmak, dördünü birden yeniden kurmaktan
        daha verimli.
      </p>
      <p>
        Örneğin yeni açılmış bir klinik için tipik sıralama şöyle
        işliyor: ilk ay site ve GBP kurulumu tamamlanır; ikinci ayda
        yerel SEO içerikleri (tedavi sayfaları, ilk yorumlar) devreye
        girer; site ve profil belirli bir olgunluğa ulaştıktan sonra
        Google Ads ile hızlı hasta akışı desteklenir; sosyal medya ise
        bu süreç boyunca paralel yürür, çünkü mevzuata uygun bir hesap
        kurmak zaman aldığı için erken başlamak avantaj sağlar. Yıllardır
        faaliyette olan ama örneğin hiç Google Ads kullanmamış bir klinik
        içinse, diğer üç kanal zaten olgunlaşmış olduğundan doğrudan
        Google Ads&apos;e odaklanmak daha hızlı sonuç verir.
      </p>

      <h2 id="ilk-adimlar">İlk adımlar: bugün yapılabilecekler</h2>
      <p>
        Dört kanalı aynı anda kurmaya çalışmak yerine, düşük maliyetli
        ve hemen uygulanabilir birkaç adımla başlamak mümkün:
      </p>
      <ul>
        <li>
          <strong>Google İşletme Profilinizi açın:</strong> Google
          Haritalar&apos;da kliniğinizi arayın; profil yoksa 10 dakikada
          oluşturabilir, varsa çalışma saatleri ve iletişim bilgilerinin
          güncel olduğunu doğrulayabilirsiniz.
        </li>
        <li>
          <strong>Sitenizi telefonunuzda test edin:</strong> Randevu
          butonuna üç saniye içinde ulaşabiliyor musunuz? Ulaşamıyorsanız
          bu, kaybedilen hastaların en sık nedenlerinden biri.
        </li>
        <li>
          <strong>Sosyal medya paylaşımlarınızı yönetmelik açısından
          gözden geçirin:</strong> Yayında olan öncesi/sonrası
          gönderilerinizde onam, tarih bilgisi ve kapalı yorum/beğeni var
          mı diye kontrol edin; eksikse düzeltin veya kaldırın.
        </li>
      </ul>
      <p>
        Bu üç adım herhangi bir bütçe gerektirmiyor ve kliniğinizin
        şu anki durumunu net biçimde ortaya koyuyor — bir sonraki
        yatırımın nereye gideceğine buradan karar verebilirsiniz.
      </p>

      <h2 id="maliyet-beklentisi">Maliyet ve ROI beklentisi</h2>
      <p>
        Her klinik için tek bir doğru bütçe rakamı yok — konum, rekabet
        yoğunluğu ve hedeflenen tedavi türü (ör. genel muayene vs. estetik
        diş hekimliği) fiyatı doğrudan etkiliyor.{" "}
        <Link href="/blog/web-sitesi-maliyeti-2026">
          Web sitesi maliyetlerini gerçekçi aralıklarla ele aldığımız
          yazımızda
        </Link>{" "}
        bu konuyu detaylandırdık. Google Ads tarafında ise yukarıdaki
        CPC verileri, bir kampanyanın aylık bütçesinin ne kadar hızlı
        tükenebileceğini gösteriyor: düşük bir bütçeyle geniş bir alanı
        hedeflemek yerine, dar bir bölgede ve az sayıda yüksek niyetli
        anahtar kelimede başlamak, bütçeyi daha verimli kullanır. Garanti
        veren bir teklif gördüğünüzde temkinli olmakta fayda var —
        özellikle Google Ads gibi değişken maliyetli kanallarda net bir
        &quot;X hastada garanti sonuç&quot; vaadi gerçekçi değil.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Bir diş kliniği için dijital pazarlama artık tek bir kanaldan
        ibaret değil — hastanın karar sürecinin her aşamasında (arama,
        inceleme, ziyaret, güven) farklı bir kanal devreye giriyor. Bu
        dört kanalı ayrı ayrı değil, tek bir stratejinin parçaları olarak
        kurmak, hem bütçeyi hem de mevzuat uyumunu daha sağlam bir zemine
        oturtuyor.
      </p>
      <p>
        Kasım 2025 yönetmeliği de bu resmi değiştiren bir gelişme.
        Sosyal medyada &quot;ne kadar çarpıcı görünürse o kadar iyi&quot;
        anlayışıyla hareket eden klinikler artık hem hukuki risk alıyor
        hem de rakiplerinin önüne geçme fırsatını kaçırıyor. Çünkü henüz
        çoğu klinik bu değişiklikten haberdar değil; mevzuata uygun,
        şeffaf bir hesap yönetmek başlı başına bir farklılaşma noktasına
        dönüşüyor. Web sitesi, yerel SEO/GEO, Google Ads ve sosyal
        medyayı tek bir ekiple ve tek bir stratejiyle yürütmek, bu dört
        kanal arasında tutarlılık sağlamanın da en pratik yolu.
      </p>
      <p>
        Kliniğinizin şu anki durumunu değerlendirmek isterseniz{" "}
        <Link href="/seo-analiz-araci">ücretsiz SEO analiz aracımızı</Link>{" "}
        deneyebilir, dört hizmeti bir arada nasıl kurabileceğinizi
        konuşmak için{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
        Groopy&apos;de{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          web sitesi geliştirme
        </Link>
        , bu dört hizmetin temelini oluşturan ilk adım.
      </p>
    </>
  );
}
