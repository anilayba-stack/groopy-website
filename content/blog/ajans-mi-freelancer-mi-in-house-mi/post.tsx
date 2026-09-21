import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "ajans-mi-freelancer-mi-in-house-mi",
  title:
    "Ajans mı, Freelancer mı, In-house mı? Sosyal Medya Yönetiminde Doğru Model",
  metaTitle: "Ajans mı, Freelancer mı, In-house mı? Sosyal Medya",
  description:
    "Sosyal medyayı ajansa, freelancer'a ya da şirket içi ekibe mi vermeli? Üç modelin maliyet yapısı, riskleri ve durumunuza göre karar rehberi.",
  publishedAt: "2026-11-05",
  tldr: "Doğru model, içerik hacminize, ihtiyaç duyduğunuz uzmanlık genişliğine ve yönetime ayırabileceğiniz zamana bağlı. Şirket içi ekip en yüksek kontrolü verir; ancak asgari ücretli tek bir çalışanın bile işverene maliyeti 2026'da ayda 40.214 TL (ÇSGB) ve strateji, tasarım, video gibi farklı uzmanlıkları tek kişiden beklemek gerçekçi değil. Freelancer esnek ve ekonomik olabilir, ama süreklilik tek kişiye bağlıdır. Ajans ya da ekip modeli kapsam ve yedeklilik sunar, karşılığında kontrolün bir bölümünü devreder. Hangisini seçerseniz seçin, hesapların sahibi işletmeniz olmalı; reklam etiketi sorumluluğu da (Ticaret Bakanlığı) modelden bağımsız olarak reklam verende kalır.",
  author: "Anıl Ay",
  hubService: "sosyal-medya-yonetimi",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/ajans-freelancer-in-house.jpg",
    alt: "Ahşap bir masanın etrafında dizüstü bilgisayar ve defterlerle çalışan üç kişilik bir ekip",
  },
  faq: [
    {
      question: "Sosyal medya için ajans mı freelancer mı daha uygun?",
      answer:
        "İhtiyacınızın kapsamına ve sürekliliğe verdiğiniz öneme bağlı. Tek platform ve net tanımlı, küçük bir iş için freelancer yeterli olabilir; birden fazla platform, fotoğraf-video prodüksiyon ve düzenli raporlama gerekiyorsa ekip modeli daha güvenli. Her iki durumda da hesapların sahibi işletmeniz olmalı.",
    },
    {
      question: "Şirket içi sosyal medya sorumlusu istihdam etmenin en düşük maliyeti nedir?",
      answer:
        "ÇSGB'nin 2026 hesabına göre asgari ücretli bir çalışanın işverene toplam maliyeti ayda 40.214,03 TL (2 puan prim indirimiyle) veya 40.874,63 TL (indirimsiz). Bu bir taban maliyet; deneyimli bir sosyal medya uzmanının ücreti için doğrulanabilir bir piyasa aralığı bulamadığımız için rakam vermiyoruz. Ekipman ve yazılım gibi kalemler de bunun dışında.",
    },
    {
      question: "Hesabı bir ajansa veya freelancer'a verirsem sahipliği kaybeder miyim?",
      answer:
        "Doğru kurulursa hayır. Meta'nın geliştirici dokümanına göre Facebook sayfasının sahibi işletme kalır; ajans ayrı bir erişim rolüyle çalışır ve sahip bu erişimi istediği zaman kaldırabilir. Bunun için sayfa ve reklam hesaplarının kişisel bir hesap yerine işletmenizin Business Manager hesabı altında kurulu olması gerekir.",
    },
    {
      question: "Freelancer ile çalışırken fatura mı, serbest meslek makbuzu mu istenir?",
      answer:
        "Bu, freelancer'ın vergi statüsüne bağlı. Serbest meslek erbabı için e-Serbest Meslek Makbuzu düzenlemek zorunlu (GİB); ticari kazanç kapsamında çalışanlar ise fatura keser. Hangisinin geçerli olduğunu mali müşavirinizle netleştirin ve ödemeyi belgesiz yapmayın.",
    },
    {
      question: "Modelleri birleştirmek mümkün mü?",
      answer:
        "Evet, yaygın bir çözüm. Örneğin şirket içinde bir kişi marka sesi ve onay sürecini yönetir, prodüksiyon ve raporlama dış bir ekiple yürütülür. Bu yapıda sorumlulukların ve hesap erişiminin yazılı olarak ayrılması önemli.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Bu soru çoğunlukla &quot;hangisi daha ucuz?&quot; diye sorulur; oysa
        daha yararlı olan soru, işi kimin yapacağı ve o kişi bir hafta yokken
        ne olacağıdır. Sosyal medya yönetimini şirket içinde yürütmek,
        bağımsız bir uzmana vermek ya da bir ekiple çalışmak: üçü de doğru
        olabilir; hangisinin doğru olduğunu içerik hacminiz, ihtiyaç duyduğunuz
        uzmanlık genişliği ve yönetime ayırabileceğiniz zaman belirler.
      </p>
      <p>
        Fiyat tarafını ayrıca{" "}
        <Link href="/blog/sosyal-medya-yonetimi-fiyatlari-2026">
          sosyal medya yönetimi fiyatları
        </Link>{" "}
        yazımızda ele aldık. Bu yazı fiyata değil, modele odaklanıyor: her
        modelin neyi çözdüğünü, neyi çözmediğini ve hangisini seçerseniz seçin
        değişmeyen kuralları anlatıyor.
      </p>

      <h2 id="kisa-cevap">Kısa cevap: durumunuza göre hangi model?</h2>
      <p>
        Aşağıdaki tablo bir karar çerçevesidir, kesin kural değil. Tek bir
        işletme için birden fazla satır geçerli olabilir.
      </p>
      <table>
        <thead>
          <tr>
            <th>Durumunuz</th>
            <th>Öne çıkan model</th>
            <th>Neden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Tek platform, düşük içerik hacmi; içeride markayı bilen ve zamanı
              olan biri var
            </td>
            <td>Şirket içi</td>
            <td>Kontrol ve marka bilgisi zaten içeride</td>
          </tr>
          <tr>
            <td>
              Sınırlı bütçe, net tanımlı küçük bir iş (ör. haftalık gönderi
              planı ve yayın)
            </td>
            <td>Freelancer</td>
            <td>Esneklik ve doğrudan iletişim; süreklilik planı şart</td>
          </tr>
          <tr>
            <td>
              Birden fazla platform, fotoğraf-video prodüksiyon ve düzenli
              raporlama gerekiyor
            </td>
            <td>Ajans / ekip</td>
            <td>Kapsam ve yedeklilik tek çatı altında</td>
          </tr>
          <tr>
            <td>
              Marka sesi merkezden yönetiliyor ama üretim yükü yüksek
            </td>
            <td>Hibrit (içeride çekirdek, dışarıda üretim)</td>
            <td>Karar yetkisi içeride, işgücü esnek</td>
          </tr>
          <tr>
            <td>Kampanya ya da mevsim bazlı yoğunluk</td>
            <td>Freelancer veya ekip, proje bazlı</td>
            <td>Sabit maliyet yaratmadan kapasite artırılır</td>
          </tr>
        </tbody>
      </table>

      <h2 id="karsilastirma">Üç modelin karşılaştırması</h2>
      <p>
        Aşağıdaki karşılaştırma genel eğilimleri yansıtır. Tek bir kişi ya da
        şirket için bu eğilimlerin tersi de geçerli olabilir; bu yüzden
        aşağıdaki her ölçütü aday veya teklif bazında ayrıca sorgulayın.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ölçüt</th>
            <th>Şirket içi</th>
            <th>Freelancer</th>
            <th>Ajans / ekip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maliyet yapısı</td>
            <td>Sabit maaş, SGK, ekipman ve yazılım</td>
            <td>Proje veya aylık hizmet bedeli</td>
            <td>Aylık hizmet bedeli; kapsamla değişir</td>
          </tr>
          <tr>
            <td>Uzmanlık genişliği</td>
            <td>Kişinin uzmanlığıyla sınırlı</td>
            <td>Genellikle bir-iki alanda güçlü</td>
            <td>Strateji, tasarım, video, raporlama ayrı kişilerde</td>
          </tr>
          <tr>
            <td>Süreklilik</td>
            <td>Kişi ayrılırsa bilgi gider, ancak arşiv şirkette kalır</td>
            <td>Tek kişiye bağımlı</td>
            <td>Ekip yedeği var; hesap yöneticisi değişebilir</td>
          </tr>
          <tr>
            <td>Kontrol</td>
            <td>En yüksek</td>
            <td>Yüksek, doğrudan iletişim</td>
            <td>Sözleşme ve süreçle sağlanır</td>
          </tr>
          <tr>
            <td>Yönetim yükü</td>
            <td>Yönetici sizsiniz</td>
            <td>Brif ve onay sizde</td>
            <td>Takvim ve rapor süreci ekipte, onay sizde</td>
          </tr>
          <tr>
            <td>Ölçeklenme</td>
            <td>Yeni işe alım gerekir</td>
            <td>Kapasite sınırlı</td>
            <td>Kapsam artırılabilir</td>
          </tr>
        </tbody>
      </table>

      <h2 id="in-house">Şirket içi ekip: asıl maliyet maaş değil, kapsam</h2>
      <p>
        Şirket içi modelin taban maliyeti kamuya açık. Çalışma ve Sosyal
        Güvenlik Bakanlığı&apos;nın{" "}
        <a
          href="https://www.csgb.gov.tr/Media/gm2fekds/asgari-%C3%BCcret-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          2026 asgari ücret hesabına
        </a>{" "}
        göre brüt 33.030 TL, net 28.075,50 TL olan asgari ücretli bir
        çalışanın işverene toplam maliyeti, 2 puanlık prim indirimi
        uygulandığında ayda 40.214,03 TL; indirim uygulanmadığında 40.874,63
        TL. Bu rakamı bir sosyal medya uzmanının maaşı olarak değil, bir
        kişiyi kadroya almanın taban maliyeti olarak okumak gerekir. Deneyimli
        bir uzmanın ücreti için doğrulanabilir bir piyasa aralığı bulamadığımız
        için ayrıca bir rakam vermiyoruz.
      </p>
      <p>
        Maaşın yanında kamera ve ışık gibi ekipman, tasarım ve kurgu yazılımı
        ile izin ve hastalık dönemlerinde işin durması da hesaba girmeli. Ama
        şirket içi modelin asıl sınırı maliyet değil, kapsam: tek bir kişiden
        strateji, tasarım, çekim, kurgu ve topluluk yönetimini birlikte
        beklemek gerçekçi bir iş tanımı olmayabilir.
      </p>
      <p>
        Sprout Social&apos;ın{" "}
        <a
          href="https://sproutsocial.com/insights/social-media-team-hiring/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sosyal medya ekiplerinde işe alım
        </a>{" "}
        yazısı bu ayrışmayı gösteriyor: pazarlama liderlerinin yaklaşık %86&apos;sı
        bu yıl en az iki yeni sosyal medya rolü için işe alım planlıyor ve
        aranan roller sosyal istihbarat, kreatif direktörlük ve etkileyici
        pazarlaması gibi ayrı uzmanlıklar. Aynı sayfada, sosyal pazarlamacıların
        %66&apos;sı birden fazla iş yaptığını hissettiğini söylüyor. Bu bir
        satıcı araştırması; anketler ABD, Birleşik Krallık ve Avustralya&apos;daki
        pazarlamacıları kapsıyor ve Türkiye&apos;deki KOBİ&apos;lere doğrudan
        uyarlanamaz. Yine de yönü açık: sosyal medya tek kişilik bir iş
        tanımından çok, birbirini tamamlayan uzmanlıklar bütünü olarak
        büyüyor.
      </p>
      <p>
        <strong>Ne zaman mantıklı?</strong> İçerik akışı sürekli ve yüksekse,
        marka bilgisi ürün ve operasyonla iç içeyse (örneğin şubede günlük
        çekim gerekiyorsa) ve içeride ekibi yönetecek biri varsa.{" "}
        <strong>Ana risk:</strong> tüm bilginin tek kişide toplanması.
      </p>

      <h2 id="freelancer">Freelancer: esneklik kazandırır, süreklilik borç bırakır</h2>
      <p>
        Freelancer modelinin güçlü yanları belli: sabit işveren maliyeti
        yaratmaz, iletişim doğrudan kurulur, kapsam küçük ve net tanımlıysa
        hızlı ilerlenebilir. Riskler ise yapısal ve sözleşmeden önce
        konuşulmalı:
      </p>
      <ul>
        <li>
          <strong>Tek kişiye bağımlılık:</strong> İzin, hastalık ya da başka bir
          iş yükü yayın akışını durdurabilir. &quot;Bir hafta ulaşılamazsa
          yayın nasıl devam eder?&quot; sorusunun yazılı bir cevabı olmalı.
        </li>
        <li>
          <strong>Uzmanlık genişliği:</strong> Bir kişi genellikle stratejide
          ya da tasarımda ya da videoda güçlüdür; hepsini aynı kalitede
          beklemek gerçekçi değil.
        </li>
        <li>
          <strong>Hesap erişimi:</strong> Hesaplar freelancer&apos;ın kişisel
          hesabı üzerinden yönetiliyorsa, erişim de o kişiyle birlikte gider.
          Bu konuyu aşağıda ayrıca ele alıyoruz.
        </li>
        <li>
          <strong>Belge ve vergi:</strong> Gelir İdaresi Başkanlığı&apos;na göre
          serbest meslek erbabının{" "}
          <a
            href="https://ebelge.gib.gov.tr/esmmhakkinda.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            e-Serbest Meslek Makbuzu düzenlemesi zorunlu
          </a>
          . Hangi belgenin düzenleneceği kişinin vergi statüsüne bağlı;
          bunu mali müşavirinizle netleştirin ve ödemeyi belgesiz yapmayın.
        </li>
        <li>
          <strong>Sözleşme:</strong> Kapsam, teslim takvimi, üretilen
          içeriklerin ve ham dosyaların kime ait olduğu ve çıkış koşulları
          yazılı olmalı.
        </li>
      </ul>

      <h2 id="ajans">Ajans veya ekip modeli: kapsam ve yedeklilik, karşılığında devredilen kontrol</h2>
      <p>
        Burada &quot;ajans&quot; ile kastedilen, birden fazla kişiden oluşan
        dış bir ekip: strateji, tasarım, çekim, kurgu, yayın ve raporlamanın
        farklı kişilerde olduğu yapı. Güçlü yanı, bir kişi yokken işin
        durmaması ve süreç (içerik takvimi, onay adımları, aylık rapor)
        düzeninin ekibe ait olması. Karşılığında dikkat edilmesi gereken
        riskler:
      </p>
      <ul>
        <li>
          <strong>Şablon iş:</strong> Markaya özgü olmayan, aynı görsel
          kalıbın birçok müşteride tekrarlandığı içerik. Örnek iş ve içerik
          üretim süreci sorulmalı.
        </li>
        <li>
          <strong>Kapsam dışı kalemler:</strong> Çekim, video kurgu ve reklam
          yönetiminin fiyata dahil olup olmadığı tekliften teklife değişiyor;
          ayrıntısı için{" "}
          <Link href="/blog/sosyal-medya-yonetimi-fiyatlari-2026">
            fiyat yazımıza
          </Link>{" "}
          bakabilirsiniz.
        </li>
        <li>
          <strong>Hesap yöneticisi ile üretim ekibi ayrımı:</strong> Satış
          görüşmesinde tanıştığınız kişi ile işi yapan kişilerin aynı olup
          olmadığını öğrenin.
        </li>
        <li>
          <strong>Bağlanma süresi:</strong> Uzun süreli taahhüt ve çıkış
          koşulları sözleşmede açık olmalı.
        </li>
      </ul>
      <p>
        Bir ekibin büyük olması iyi olduğu anlamına gelmez; küçük bir
        işletme için önemli olan, size ayrılan kapsamın net ve raporlanabilir
        olması. Değerlendirme kriterlerinin büyük bölümü hizmet alanından
        bağımsız. Aynı mantığı{" "}
        <Link href="/blog/seo-ajansi-secerken-nelere-dikkat-edilmeli">
          SEO ajansı seçerken
        </Link>{" "}
        yazdığımız kriterlerde de görebilirsiniz.
      </p>

      <h2 id="hangi-durumda">Hangi durumda hangisi? Hibrit model</h2>
      <p>
        Çoğu işletme için gerçek karar &quot;ya biri ya diğeri&quot; değil.
        Gartner&apos;ın{" "}
        <a
          href="https://www.chiefmarketer.com/gartner-39-of-cmos-plan-to-reduce-labor-costs-and-cut-agency-allocations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          2025 CMO harcama anketinde
        </a>{" "}
        (402 pazarlama lideri) ajans harcaması pazarlama bütçesinin %20,7&apos;sini,
        şirket içi işgücü ise %21,9&apos;unu oluşturuyor. İki kalemin benzer
        büyüklükte olması, iki modelin birlikte kullanılmasının yaygın
        olduğuna işaret ediyor; ancak anket Türkiye&apos;deki KOBİ&apos;leri
        ayrıca ölçmüyor, bu yüzden bir oran hedefi olarak okunmamalı.
      </p>
      <p>Pratikte dört senaryo öne çıkıyor:</p>
      <ul>
        <li>
          <strong>Tek şubeli yerel işletme:</strong> Freelancer ya da küçük bir
          ekip yeterli olabilir; en kritik konu yayının kesintisiz sürmesi ve
          hesabın işletmede kalması.
        </li>
        <li>
          <strong>Büyüyen, çok platformlu işletme:</strong> Prodüksiyon ve
          raporlama yükü arttığında tek kişilik model yetersiz kalır; ekip
          modeli mantıklı hale gelir.
        </li>
        <li>
          <strong>Çok şubeli veya marka sesinin merkezden yönetildiği yapı:</strong>{" "}
          İçeride bir çekirdek (marka sesi, onay) ve dışarıda üretim ekibi.
        </li>
        <li>
          <strong>Kampanya ya da mevsim bazlı yoğunluk:</strong> Sabit kadro
          yerine proje bazlı freelancer ya da ekip.
        </li>
      </ul>

      <h2 id="degismeyenler">Hangi modeli seçerseniz seçin değişmeyen dört kural</h2>

      <h3 id="hesap-sahipligi">1. Hesabın sahibi işletme olmalı</h3>
      <p>
        Meta&apos;nın geliştirici dokümanında bir Facebook sayfasının sahibi
        olan işletme,{" "}
        <a
          href="https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/pages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sayfanın tüm yönetimini elinde tutan taraf
        </a>{" "}
        olarak tanımlanıyor; ajans ise ayrı bir erişim rolüyle çalışıyor. Sahip,
        erişim verdiği ajansları ya da işletmeleri kaldırabiliyor, ajans ise
        sayfayı başka bir işletmeyle paylaşamıyor. Pratik sonuç: sayfalar ve
        reklam hesapları kişisel bir hesap yerine işletmenizin Business
        Manager hesabı altında kurulmalı. Aynı ilke reklam hesapları için de
        geçerli; bunu{" "}
        <Link href="/blog/google-ads-hesabiniz-kimde">
          Google Ads hesabınız kimde?
        </Link>{" "}
        yazımızda ayrıca anlattık.
      </p>

      <h3 id="reklam-etiketi">2. Reklam etiketi sorumluluğu devredilmez</h3>
      <p>
        Ticaret Bakanlığı&apos;nın{" "}
        <a
          href="https://ticaret.gov.tr/haberler/ticaret-bakanligi-sosyal-medya-etkileyicileri-icin-kilavuz-yayimladi"
          target="_blank"
          rel="noopener noreferrer"
        >
          sosyal medya etkileyicileri için 2021 kılavuzunda
        </a>{" "}
        reklam verenler, reklam ajansları, mecra kuruluşları ve etkileyicilerin
        her biri kılavuz maddelerine uyumdan ayrı ayrı sorumlu tutuluyor.
        Bakanlığın{" "}
        <a
          href="https://ticaret.gov.tr/haberler/aldaticici-reklam-ve-haksiz-ticari-uygulamalarla-mucadelede-yeni-donem-basliyor"
          target="_blank"
          rel="noopener noreferrer"
        >
          duyurusuna göre
        </a>{" "}
        1 Temmuz 2026 tarihli ve 33297 sayılı Resmî Gazete&apos;de
        yayımlanan değişiklik 1 Ağustos 2026&apos;dan itibaren yürürlükte:
        etkileyici paylaşımlarında bir kazanç, indirimli ürün ya da menfaat
        söz konusuysa &quot;reklam&quot; veya &quot;tanıtım&quot; ibaresi
        zorunlu. Sonuç şu: sosyal medyayı dış bir ekibe vermek işletmenin
        sorumluluğunu ortadan kaldırmaz. Etkileyici işbirliklerinde etiket
        kontrolünün kimde olduğu brifte yazılı olmalı. Bu bir hukuki
        danışmanlık değildir; kampanya öncesi güncel metni kontrol edin.
      </p>

      <h3 id="arsiv-erisim">3. Arşiv ve erişim listesi işletmede kalmalı</h3>
      <p>
        Ham fotoğraf ve videolar, tasarım dosyaları, marka kılavuzu ve hangi
        kişinin hangi hesaba erişimi olduğunu gösteren liste işletmede
        tutulmalı. Model değiştirdiğinizde (örneğin freelancer&apos;dan ekibe
        geçerken) bunlar devri hızlandırır.
      </p>

      <h3 id="sozlesme">4. Çıkış koşulları baştan yazılı olmalı</h3>
      <p>
        Fesih bildirim süresi, devir sırasında verilecek destek, içeriklerin
        fikri hakları ve gizlilik maddeleri her modelde sözleşmede yer
        almalı. Şirket içi çalışanda bunlar iş sözleşmesiyle, dışarıdaki
        modellerde hizmet sözleşmesiyle düzenlenir.
      </p>

      <h2 id="sorulacak-sorular">Teklif veya adayı değerlendirirken sorulacak 8 soru</h2>
      <ol>
        <li>Hesaplar kimin adına kurulu, erişimi kaldırma yetkisi kimde?</li>
        <li>
          Kapsamda tam olarak neler var (platform sayısı, aylık içerik
          sayısı, çekim, kurgu, topluluk yönetimi)? Neler dahil değil?
        </li>
        <li>
          Bir kişi bir hafta yoksa yayın nasıl devam eder?
        </li>
        <li>
          İçerikleri kim üretiyor; markaya özel mi, şablon mu? Örnek iş
          gösterilebilir mi?
        </li>
        <li>
          Aylık raporda hangi metrikler var ve bunlar hangi hedefle ilişkili?
        </li>
        <li>
          Üretilen içeriklerin ve ham dosyaların hakları kime ait?
        </li>
        <li>
          Fesih koşulları, bildirim süresi ve devir desteği nedir?
        </li>
        <li>
          Etkileyici veya işbirliği içeriklerinde &quot;reklam&quot; etiketini
          kim kontrol ediyor?
        </li>
      </ol>

      <h2 id="pilot">Karar vermeden önce: küçük bir pilotla test edin</h2>
      <p>
        Hangi modelin size uyduğunu önceden bilmek zor; bu yüzden ilk iki
        üç ayı bir deneme dönemi olarak tanımlamak mantıklı. Pilotun işe
        yaraması için başlamadan önce üç şey netleşmeli: dönem sonunda neye
        bakacağınız (yayın düzeni, onay süresi, raporun okunabilirliği gibi
        gözlemlenebilir ölçütler), pilotun hangi koşullarla sona erdirilebileceği
        ve hesap erişiminin nasıl verildiği. Dönem sonunda karar; içeriğin
        kalitesi kadar, sürecin sizi ne kadar yorduğuna da bakılarak verilmeli:
        yönetim yükü beklediğinizden fazlaysa, bu modelin gerçek maliyetinin
        bir parçasıdır.
      </p>

      <h2 id="model-degistirme">Model değiştirirken devir listesi</h2>
      <p>
        Freelancer&apos;dan ekibe ya da dış ekipten şirket içine geçmek
        kaçınılmaz olabilir. Geçişin yayın akışını kesmemesi için şu
        adımları sırayla yürütün:
      </p>
      <ol>
        <li>
          Hangi kişinin hangi hesaba erişimi olduğunu listeleyin; yeni
          taraf erişim aldıktan sonra eskisinin erişimini kaldırın.
        </li>
        <li>
          Ham fotoğraf ve videolar, tasarım dosyaları ve marka kılavuzunu
          teslim alın.
        </li>
        <li>
          Onaylı içerik takvimini ve planlanmış gönderileri devralın; geçiş
          haftasında yayın boşluğu bırakmayın.
        </li>
        <li>
          Devreden tarafla kısa bir bilgi aktarım oturumu yapın: neyin işe
          yaradığı, hangi konuların denenip bırakıldığı.
        </li>
        <li>
          Sözleşmedeki bildirim süresi bitmeden yeni tarafın çalışmaya
          başlamasını planlayın; iki dönem arasında kısa bir çakışma genellikle
          boşluktan daha ucuza gelir.
        </li>
      </ol>

      <h2 id="seffaflik">Şeffaflık notu ve veri sınırı</h2>
      <p>
        Groopy bir yazılım şirketi; sosyal medya yönetimini ekip modeliyle
        sunuyoruz. Bu karşılaştırmanın tarafsız kalması için yalnızca üçüncü
        taraf kaynaklara ve kamuya açık verilere dayandık, kendi müşterilerimizden
        elde edilmiş bir sonuç iddia etmedik. Türkiye&apos;de bu üç modelin
        piyasa genelindeki tercih oranlarına ya da freelancer ve ajans ücret
        aralıklarına dair doğrulanabilir bir kaynak bulamadık; bu nedenle bu tür
        rakamları yazıya koymadık. Kaynağı belirtilmeyen &quot;işletmelerin
        %X&apos;i dışarıya veriyor&quot; türü iddialara temkinli yaklaşmanızı
        öneririz.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Doğru model tek başına bir fiyat karşılaştırmasıyla belirlenmez.
        Şirket içi ekip kontrol verir ama kapsamı sınırlar; freelancer esnektir
        ama süreklilik tek kişiye bağlıdır; ekip modeli kapsam ve yedeklilik
        sağlar ama net bir sözleşme ve raporlama düzeni gerektirir. Hangisini
        seçerseniz seçin hesap sahipliğini, arşivi ve çıkış koşullarını baştan
        işletmenizde tutun.
      </p>
      <p>
        Sosyal medya yönetimi ihtiyacınızı hangi modelin karşılayacağını
        birlikte değerlendirmek isterseniz{" "}
        <Link href="/hizmetler/sosyal-medya-yonetimi">
          sosyal medya yönetimi hizmetimizin kapsamına
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
