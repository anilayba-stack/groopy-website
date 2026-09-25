import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "web-sitesi-ne-kadar-surede-tamamlanir",
  title: "Web Sitesi Ne Kadar Sürede Tamamlanır?",
  metaTitle: "Web Sitesi Ne Kadar Sürede Tamamlanır?",
  description:
    "Web sitesi projeleri neden uzuyor, süreç hangi fazlardan geçiyor ve süreyi gerçekten kısaltmak için ne yapabilirsiniz? Kaynaklı, somut bir rehber.",
  publishedAt: "2026-11-19",
  tldr: "GoodFirms'ın 100'den fazla web geliştirme şirketini incelediği 2024 verisine göre süre karmaşıklıkla doğru orantılı artıyor: kurumsal/küçük işletme sitesi 1-12 hafta, e-ticaret 4-16 hafta, özel web uygulaması 16-30 hafta. Ama bu aralıkların neden bu kadar geniş olduğunun asıl nedeni teknoloji değil, süreç: Ignition'ın 2025 ajans anketine göre ajansların %57'si kapsam kayması (scope creep) yüzünden ayda 1.000-5.000 dolar arası faturalandırılamayan iş kaybediyor; bu, projenin de aynı oranda uzaması demek. Süreyi belirleyen asıl faktör kod yazma hızı değil, içeriğin ne zaman hazır olduğu, onayların kaç turda tamamlandığı ve kapsamın baştan ne kadar net tanımlandığı.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/web-sitesi-ne-kadar-surede.jpg",
    alt: "Bir defterdeki el çizimi wireframe taslağının üzerinde duran yeşil bir kalem ve bulanık bir fare",
  },
  faq: [
    {
      question: "Web sitesi ortalama kaç haftada biter?",
      answer:
        "Tek bir doğru rakam yok; GoodFirms'ın 2024 verisine göre küçük işletme/kurumsal siteler 1-12 hafta, e-ticaret 4-16 hafta, özel web uygulamaları 16-30 hafta arasında değişiyor. Groopy'de tanıtım ve kurumsal siteler için tipik aralık 3-6 hafta; kesin takvim keşif görüşmesinden sonra netleşiyor.",
    },
    {
      question: "Süreyi en çok ne uzatıyor?",
      answer:
        "Kodlama hızı değil, kapsam kayması ve onay süreci. Ignition'ın 2025 ajans anketine göre ajansların %57'si kapsam kayması yüzünden ayda 1.000-5.000 dolar arası faturalandırılamayan iş kaybediyor; bu ek işin büyük kısmı proje takvimine de yansıyor.",
    },
    {
      question: "İçeriği (metin, görsel) biz mi hazırlamalıyız?",
      answer:
        "Genellikle evet, en azından ilk taslak müşteriden gelir. İçerik, projenin tasarım ve geliştirme fazlarına paralel ilerleyebilecek en önemli bağımsız iştir; hazır olmaması, kodun bitmiş olmasına rağmen yayının beklemesine yol açan en yaygın nedenlerden biridir.",
    },
    {
      question: "Kapsamı sonradan genişletirsek ne olur?",
      answer:
        "Süre de bütçe de büyür; bu doğal, sorun kapsamın büyümesi değil, büyümenin yazılı olarak takip edilmemesi. İyi bir süreçte her ek talep, yeni bir teslim tarihiyle birlikte yazılı olarak onaylanır; böylece kimse projenin neden uzadığını sorgulamaz.",
    },
    {
      question: "Tasarım revizyonlarının sayısı sınırlı olmalı mı?",
      answer:
        "Evet, önerilir. Örneğin ilk taslak ve bir revizyon turu standart kabul edilip sonraki turların ek süre gerektirdiği baştan yazılı olarak belirtilirse, hem müşteri geri bildirimini daha dikkatli hazırlar hem de proje sınırsız revizyon döngüsüne girmez.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        &quot;Ne kadar sürer?&quot; sorusuna dürüst cevap tek bir sayı
        değildir. Süreyi belirleyen asıl şey kodun ne kadar sürede yazıldığı
        değil, kapsamın ne kadar net tanımlandığı ve içeriğin ne zaman hazır
        olduğu. Bu yazı, genel bir &quot;4-8 hafta&quot; rakamı vermek yerine
        süreci fazlarına ayırıyor, projeyi gerçekten uzatan şeyi kaynaklı
        verilerle gösteriyor ve süreyi kısaltmak için ne yapabileceğinizi
        somutlaştırıyor.
      </p>
      <p>
        Fiyatı belirleyen faktörleri ayrıca{" "}
        <Link href="/blog/web-sitesi-maliyeti-2026">
          web sitesi maliyeti rehberimizde
        </Link>{" "}
        ele aldık; bu yazı süreye odaklanıyor.
      </p>

      <h2 id="kisa-cevap">Kısa cevap: karmaşıklığa göre süre aralığı</h2>
      <p>
        GoodFirms&apos;ın 100&apos;den fazla web geliştirme şirketinin
        verisini incelediği{" "}
        <a
          href="https://www.einpresswire.com/article/687456237/goodfirms-rolls-out-website-construction-costs-timelines-for-2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          2024 web sitesi inşa maliyetleri ve süreleri araştırmasına
        </a>{" "}
        göre tamamlanma süresi karmaşıklıkla doğrusal artıyor. Bu uluslararası
        bir veri seti; Türkiye pazarına özgü ayrı bir kaynak bulamadık, bu
        yüzden genel eğilim olarak okuyun.
      </p>
      <table>
        <thead>
          <tr>
            <th>Proje türü</th>
            <th>Tipik süre (GoodFirms, 2024)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kişisel/basit tanıtım sitesi</td>
            <td>1-4 hafta</td>
          </tr>
          <tr>
            <td>Küçük işletme / kurumsal site</td>
            <td>1-12 hafta</td>
          </tr>
          <tr>
            <td>E-ticaret</td>
            <td>4-16 hafta</td>
          </tr>
          <tr>
            <td>Özel web uygulaması</td>
            <td>16-30 hafta</td>
          </tr>
          <tr>
            <td>SaaS ürünü</td>
            <td>12-48 hafta</td>
          </tr>
        </tbody>
      </table>
      <p>
        Groopy&apos;de tanıtım ve kurumsal siteler için tipik aralık 3-6
        hafta;{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          web sitesi geliştirme hizmetimizde
        </Link>{" "}
        kesin takvim keşif görüşmesinden sonra netleşiyor. Aynı proje
        türünde bile aralığın bu kadar geniş olmasının nedeni aşağıda.
      </p>

      <h2 id="darbogazlar">Her proje türünde asıl darboğaz değişir</h2>
      <p>
        Aralıkların bu kadar geniş olmasının bir nedeni de, proje türüne
        göre zaman kaybının farklı bir yerde birikmesi. Kurumsal/tanıtım
        sitelerinde en çok zaman metin ve görsel onayında geçer; teknik
        taraf görece basittir. E-ticarette darboğaz genelde ürün veri
        girişi (yüzlerce ürünün fotoğraf, açıklama ve stok bilgisiyle
        sisteme aktarılması) ile ödeme/kargo entegrasyonlarının test
        edilmesidir; bunlar geliştirmeden bağımsız, paralel yürütülmesi
        gereken ayrı bir iş yüküdür. Özel web uygulamalarında ise en büyük
        risk üçüncü taraf API&apos;lerin (ödeme sağlayıcı, CRM, muhasebe
        yazılımı) beklenenden farklı davranması ve bunun ancak entegrasyon
        aşamasında ortaya çıkmasıdır. Yani &quot;bizim proje neden daha
        uzun sürüyor&quot; sorusunun cevabı çoğu zaman geliştirme hızında
        değil, bu türe özgü darboğazda.
      </p>

      <h2 id="teklif-modeli">Teklif modeli süreyi nasıl etkiler?</h2>
      <p>
        Sabit kapsamlı bir teklifte (belirli sayfa/özellik listesi, sabit
        fiyat), kapsam dışına çıkan her talep ayrı bir onay ve ek süre
        gerektirir; bu netlik sağlar ama esneklik kaybettirir. Zaman ve
        malzeme (saatlik/aylık) bazlı bir modelde değişiklik yapmak daha
        kolaydır, ama toplam sürenin baştan tahmin edilmesi daha zordur.
        Hangi modelde çalıştığınızı ve kapsam dışı bir talebin süreci nasıl
        etkileyeceğini işin başında netleştirmek, ilerleyen haftalarda
        &quot;bu neden bu kadar sürdü&quot; tartışmasının önüne geçer.
      </p>

      <h2 id="kesif-gorusmesi">Keşif görüşmesinde neler netleşir?</h2>
      <p>
        Kesin bir takvim, genellikle ilk görüşmeden sonra verilebilir;
        çünkü süreyi belirleyen değişkenlerin çoğu bu görüşmede ortaya
        çıkar. Somut olarak şunlar konuşulur:
      </p>
      <ul>
        <li>
          <strong>Sayfa ve özellik listesi:</strong> Kaç sayfa, hangi
          formlar, hangi entegrasyonlar (ödeme, randevu, CRM) gerekiyor.
        </li>
        <li>
          <strong>İçeriğin hazırlık durumu:</strong> Metin ve görseller
          hazır mı, sıfırdan mı yazılacak, yoksa mevcut siteden mi
          taşınacak.
        </li>
        <li>
          <strong>Onay zinciri:</strong> Tasarımı ve içeriği kim
          onaylayacak, kaç kişinin görüşü alınacak.
        </li>
        <li>
          <strong>Teklif modeli:</strong> Sabit kapsam mı, aşamalı/esnek
          bir yaklaşım mı tercih edildiği.
        </li>
      </ul>
      <p>
        Bu dört başlık netleşmeden verilen bir tarih tahminden öteye
        geçmez; bu yüzden &quot;kesin süreyi görüşmeden sonra
        paylaşıyoruz&quot; diyen bir teklif, belirsizlik değil, gerçekçilik
        işaretidir.
      </p>

      <h2 id="surec-fazlari">Süreç hangi fazlardan geçiyor?</h2>
      <p>
        Yazılım/web projelerinin standart yaşam döngüsü beş fazdan oluşur:
        planlama ve gereksinim toplama, sistem/iş analizi, tasarım ve
        geliştirme, test, yayın ve bakım. Bu sıralama açık ders
        materyallerinde{" "}
        <a
          href="https://cuny.manifoldapp.org/read/project-planning/section/83a5dd44-c0bd-435f-bfe4-9ed716fbcdc2"
          target="_blank"
          rel="noopener noreferrer"
        >
          standart proje yönetimi çerçevesi
        </a>{" "}
        olarak tanımlanıyor. Her fazda kimin ne teslim etmesi gerektiği,
        projenin ne kadar sürdüğünü doğrudan belirliyor:
      </p>
      <table>
        <thead>
          <tr>
            <th>Faz</th>
            <th>Ajansın işi</th>
            <th>Müşterinin işi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Planlama ve gereksinim toplama</td>
            <td>Kapsamı, sayfa listesini ve hedefleri netleştirir</td>
            <td>İş hedeflerini ve önceliklerini net anlatır</td>
          </tr>
          <tr>
            <td>Analiz ve tasarım</td>
            <td>Bilgi mimarisi ve görsel tasarımı hazırlar</td>
            <td>Tasarımı zamanında ve tek turda değerlendirip onaylar</td>
          </tr>
          <tr>
            <td>Geliştirme</td>
            <td>Kodu yazar, entegrasyonları kurar</td>
            <td>Metin, görsel ve ürün/hizmet bilgisini teslim eder</td>
          </tr>
          <tr>
            <td>Test</td>
            <td>Fonksiyonel ve mobil testleri yapar</td>
            <td>Kendi içeriğinin doğruluğunu kontrol eder</td>
          </tr>
          <tr>
            <td>Yayın ve bakım</td>
            <td>Yayına alır, ölçüm araçlarını kurar</td>
            <td>Domain/hesap erişimlerini zamanında sağlar</td>
          </tr>
        </tbody>
      </table>
      <p>
        Tabloda dikkat çeken şey şu: geliştirme fazı dışındaki her adımda
        müşterinin de aktif bir görevi var. Süre, yalnızca ajansın hızına
        değil, bu görevlerin ne kadar hızlı tamamlandığına bağlı. Fazlar da
        birbirini tam olarak beklemek zorunda değil: içerik hazırlığı
        tasarım aşamasıyla, test bazı entegrasyonların geliştirmesiyle
        paralel yürütülebilir. Paralel çalışmanın gerçekleşip
        gerçekleşmemesi de büyük ölçüde müşterinin içeriği ne zaman teslim
        ettiğine bağlı.
      </p>

      <h2 id="kapsam-kaymasi">Süreyi asıl uzatan şey: kapsam kayması</h2>
      <p>
        Ignition&apos;ın{" "}
        <a
          href="https://www.ignitionapp.com/2025-agency-pricing-cashflow-report"
          target="_blank"
          rel="noopener noreferrer"
        >
          2025 Ajans Fiyatlandırma ve Nakit Akışı Raporu&apos;na
        </a>{" "}
        göre ajansların %57&apos;si kapsam kayması (scope creep) yüzünden
        ayda 1.000-5.000 dolar arası faturalandırılamayan iş kaybediyor. Bu
        yalnızca bir maliyet sorunu değil: o faturalandırılamayan iş,
        birinin bir yerde fazladan zaman harcadığı, dolayısıyla projenin
        de o kadar uzadığı anlamına geliyor.
      </p>
      <p>
        Bir web projesinde kapsam kayması genelde şöyle görünür: &quot;bu
        arada bir de blog ekleyelim&quot;, &quot;ana sayfayı üç kere farklı
        yönde revize ettik&quot;, &quot;çok dilli yapalım demiştik ama
        detayını konuşmamıştık&quot;. Bunların hiçbiri kötü niyetli değil;
        sorun, bu değişikliklerin ne zaman, ne kadar ek süre gerektirdiğinin
        yazılı olarak kayıt altına alınmaması.
      </p>

      <h2 id="teshis">Projeniz beklenenden uzun sürüyorsa</h2>
      <p>
        Aşağıdaki üç neden, gecikmenin arkasındaki en yaygın yapısal
        sebepler; bir istatistik değil, süreç fazlarının doğal sonucu:
      </p>
      <ol>
        <li>
          <strong>İçerik geç geliyor.</strong> Tasarım ve geliştirme metin
          ve görsel olmadan da ilerleyebilir, ama site ancak gerçek
          içerikle yayına hazır olur. İçerik en son düşünülen iş
          kalemlerinden biri ama en erken başlaması gereken iş.
        </li>
        <li>
          <strong>Onay tek turda bitmiyor.</strong> Her ek revizyon turu,
          takvime yeni bir bekleme süresi ekliyor; özellikle onayı veren
          kişi değişkense veya geri bildirim parça parça geliyorsa.
        </li>
        <li>
          <strong>Kapsam yol boyunca büyüyor.</strong> Yukarıdaki Ignition
          verisinin gösterdiği gibi, eklenen her yeni özellik ya da sayfa,
          yazılı olarak takvime yansıtılmadığı sürece projeyi sessizce
          uzatıyor.
        </li>
      </ol>

      <h2 id="hizlandirmak">Süreci hızlandırmak için ne yapabilirsiniz</h2>
      <ul>
        <li>
          <strong>İçeriği geliştirme başlamadan önce hazırlayın:</strong>{" "}
          En azından ana sayfa ve hizmet/ürün metinlerinin ilk taslağı
          kickoff&apos;tan önce elinizde olsun.
        </li>
        <li>
          <strong>Tek bir onay makamı belirleyin:</strong> Tasarım ve
          içerik onayını veren kişi sabit olsun; birden fazla kişiden
          çelişen geri bildirim almak turları çoğaltır.
        </li>
        <li>
          <strong>Kapsamı yazılı tanımlayın:</strong> Sayfa listesi,
          özellikler ve entegrasyonlar baştan net olsun; ek bir talep
          geldiğinde bunun takvime etkisini de birlikte konuşun.
        </li>
        <li>
          <strong>Domain ve hesap erişimlerini erken sağlayın:</strong>{" "}
          Yayın aşamasında beklenen en sık gecikme nedenlerinden biri,
          geliştirme bitmişken domain veya hosting erişiminin gelmemesi.
        </li>
        <li>
          <strong>Teklif modelini ve kapsam dışı süreci netleştirin:</strong>{" "}
          Sabit fiyat mı, saatlik/aylık mı çalıştığınızı ve ek bir talebin
          takvimi nasıl etkileyeceğini işin başında konuşun; bu, ilerleyen
          haftalarda beklenti farkını önler.
        </li>
      </ul>

      <h2 id="iyi-teklif">İyi bir süre teklifi nasıl görünür?</h2>
      <p>
        Yalnızca tek bir bitiş tarihi veren bir teklif, süreç boyunca
        neyin kimi beklettiğini gösteremez. Faydalı bir takvim, yukarıdaki
        beş fazı ayrı ayrı tarihlendirir ve her fazın hangi teslimata bağlı
        başladığını belirtir: örneğin &quot;tasarım onayından sonra
        geliştirme başlar, geliştirme içerik teslimiyle paralel ilerler,
        test entegrasyonların tamamlanmasını bekler&quot; gibi. Bu şekilde
        bir gecikme olduğunda hangi tarafın hangi teslimatı geciktirdiği
        de görünür hale gelir; &quot;proje neden uzadı&quot; sorusu
        tartışmaya değil, takvimdeki bir satıra bakmaya dönüşür.
      </p>
      <p>
        Onay turlarını da baştan sınırlamak faydalı: örneğin tasarım için
        iki tur (ilk taslak ve bir revizyon) standart kabul edilip, üçüncü
        turun ek süre/ücret gerektirdiği yazılı olarak belirtilebilir. Bu,
        revizyonu yasaklamaz; sadece sınırsız revizyonun projeyi süresiz
        uzatmasını önler.
      </p>

      <h2 id="veri-siniri">Veri sınırı notu</h2>
      <p>
        Türkiye pazarına özgü, bağımsız bir web sitesi geliştirme süresi
        anketi bulamadık; yukarıdaki GoodFirms verisi uluslararası bir
        örneklemden geliyor. Domain/SSL kurulumu ya da KVKK uyum
        incelemesi gibi yerel adımların projeye kaç gün eklediğine dair
        resmi bir kaynak da yok; bu adımlar genellikle takvime dahil
        edilmesi gereken ama sıklıkla atlanan küçük kalemler olarak
        düşünülmeli, kesin bir süre olarak değil.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Web sitesi projesinin süresi, büyük ölçüde iki tarafın da
        sorumluluğu: ajans kodu yazar, ama içerik, onay hızı ve kapsamın
        netliği müşteride. Süreyi kısaltmanın en güvenilir yolu daha hızlı
        bir ekip bulmak değil, bu üç noktayı baştan netleştirmek. Teknoloji
        seçimi de süreci etkiler;{" "}
        <Link href="/blog/wordpress-mi-nextjs-mi">
          WordPress mi Next.js mi?
        </Link>{" "}
        yazımızda bu karşılaştırmayı ayrıca ele aldık.
      </p>
      <p>
        Projenizin kapsamını ve gerçekçi bir takvimini birlikte
        çıkarmak isterseniz{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
