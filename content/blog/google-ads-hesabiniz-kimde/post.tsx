import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "google-ads-hesabiniz-kimde",
  title: "Google Ads Hesabınız Kimde? Reklam Yönetiminde Şeffaflık Rehberi",
  metaTitle: "Google Ads Hesabınız Kimde?",
  description:
    "Google Ads hesabınızın sahibi siz mi, yoksa ajansınız mı? Google'ın kendi dokümantasyonuna göre yönetici hesabı (MCC) mekaniği ve doğru kurulum.",
  publishedAt: "2026-10-01",
  tldr: "Google Ads'te bir yönetici hesabı (MCC), bir müşteri hesabını KENDİSİ açtığında otomatik olarak sahibi olur; ama müşterinin ZATEN VAR OLAN hesabına sonradan bağlandığında varsayılan olarak sahip olmaz — sahiplik ayrıca ve açıkça verilmesi gereken bir yetki. Google'ın kendi yardım belgesi de sahipliğin 'sadece gerektiğinde' verilmesini öneriyor. Doğru kurulum: hesap müşteride açılır ve müşteride kalır, ajansa yönetici (Standard) erişimi verilir — sahiplik değil. Aksi bir kurulumda, ajans değiştiğinde geçmiş kampanya verisi, dönüşüm geçmişi ve hedef kitle listeleri kaybedilebilir.",
  author: "Anıl Ay",
  hubService: "google-reklam-yonetimi",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/google-ads-hesabiniz-kimde.jpg",
    alt: "Bir elin kalemle bir sözleşmeyi imzalaması, imza satırında 'SIGNATURE' yazısı görünüyor",
  },
  faq: [
    {
      question: "Google Ads hesabımın kime ait olduğunu nasıl anlarım?",
      answer:
        "Hesabınızda Araçlar ve Ayarlar > Kurulum > Erişim ve güvenlik > Yöneticiler bölümüne bakın. Burada hangi yönetici hesabının (varsa) 'sahip' (owner) rolüne sahip olduğu görünür. Sahip siz değilseniz, hesabın kontrolü teknik olarak başka bir tarafta demektir.",
    },
    {
      question: "Hesabımı açan ajansı değiştirirsem ne olur?",
      answer:
        "Hesap sizin adınıza açılmışsa ve ajansa yalnızca yönetici erişimi verilmişse, ajansı unlink etmeniz yeterli — kampanya geçmişi, dönüşüm verisi ve hedef kitle listeleri sizde kalır. Hesabı ajans kendi yönetici hesabı altında açtıysa, bu geçmişi teknik olarak 'devralamazsınız'; yeni bir hesapla sıfırdan başlamanız gerekebilir.",
    },
    {
      question: "Ajansa hangi erişim seviyesini vermeliyim?",
      answer:
        "Çoğu ajans ilişkisi için Standard erişim yeterli: kampanya oluşturma ve düzenleme yapabilir, ama kullanıcı erişimlerini veya hesap sahipliğini değiştiremez. Admin veya sahiplik yetkisini yalnızca gerçekten gerekiyorsa (ve güvendiğiniz bir tarafa) verin.",
    },
    {
      question: "Neden en az iki yönetici (admin) olmalı?",
      answer:
        "Google'ın kendi önerisine göre, hesapta tek bir admin varsa ve o kişiye ulaşılamaz hale gelirse hesaba erişimi kaybetme riski var. En az iki admin bulundurmak bu riski azaltır.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Bir işletme Google Ads&apos;e reklam vermeye başladığında,
        genellikle bu süreci bir ajansa veya freelancer&apos;a devrediyor
        — ve hesabın nasıl kurulduğuna çoğu zaman dikkat etmiyor. Kurulum
        aşamasında sorulmayan bu tek soru, aylar hatta yıllar sonra ajans
        değiştirmek istediğinizde ya doğrudan bir formalite ya da ciddi
        bir veri kaybı anlamına gelebiliyor.
      </p>
      <p>
        Mesele güven değil, mekanik: Google Ads&apos;in kendi sistemi,
        bir hesabın nasıl açıldığına göre kimin &quot;sahip&quot;
        (owner) olacağını otomatik olarak belirliyor. Çoğu işletme
        sahibi bu ayrımın var olduğunu bile bilmiyor, çünkü günlük
        işleyişte fark etmiyor — kampanyalar çalışıyor, raporlar
        geliyor. Fark, tam olarak ajans değiştirme kararı verildiği anda
        ortaya çıkıyor. Bu yazı, Google&apos;ın kendi dokümantasyonuna
        dayanarak bu mekanizmanın nasıl işlediğini ve doğru bir kurulumun
        neye benzediğini anlatıyor.
      </p>

      <h2 id="mcc-nasil-calisir">
        Yönetici hesabı (MCC) nasıl çalışır: açan mı, bağlanan mı sahip
        olur?
      </h2>
      <p>
        Google Ads&apos;in kendi{" "}
        <a
          href="https://support.google.com/google-ads/answer/7456532?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;Müşteri hesaplarının sahipliği hakkında&quot; yardım
          sayfasına göre
        </a>
        , bir yönetici hesabı (MCC) iki farklı şekilde bir müşteri
        hesabıyla ilişkili olabilir ve sonuç ikisinde de farklı.
        Sayfanın kendi ifadesiyle: &quot;Bir yönetici yeni bir hesap
        oluşturursa otomatik olarak söz konusu hesabın sahibi
        olur.&quot; Buna karşılık, &quot;bir yönetici mevcut bir hesabı
        bağlarsa varsayılan olarak söz konusu yeni bağlanan müşteri
        hesabının sahibi olmaz.&quot;
      </p>
      <p>
        Bu, aslında iki farklı senaryoyu tarif ediyor:
      </p>
      <ul>
        <li>
          <strong>Ajans hesabı kendi açar:</strong> Ajans sizin adınıza
          yeni bir Google Ads hesabı oluşturur ve kendi yönetici hesabı
          altına ekler. Bu durumda ajans otomatik olarak hesabın sahibi
          olur.
        </li>
        <li>
          <strong>Ajans var olan hesabınıza bağlanır:</strong> Siz kendi
          Google Ads hesabınızı açar, ajansı yönetici olarak
          davet edersiniz. Bu durumda ajans sahiplik almaz — yalnızca
          size verdiğiniz erişim seviyesiyle çalışır.
        </li>
      </ul>
      <p>
        Aynı sayfa, sahipliğin ne zaman verilmesi gerektiği konusunda da
        net bir ilke koyuyor: &quot;Yalnızca yönetici hesabı için bu
        ayrıcalıkların gerekmesi durumunda yöneticilerin sahip
        yapılması önerilir.&quot; Başka bir deyişle, Google&apos;ın
        kendisi sahipliği varsayılan değil, istisnai bir yetki olarak
        tanımlıyor. Sahiplik ayrıca{" "}
        <a
          href="https://support.google.com/google-ads/answer/7456532?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          zincirleme
        </a>{" "}
        işliyor: bir yönetici hesabı bir müşteri hesabının sahibiyse,
        hiyerarşideki üstündeki tüm yönetici hesapları da o sahipliği
        devralıyor — yani sahipliğin kimde olduğunu tek bir ilişkiye
        bakarak değil, tüm hiyerarşiye bakarak anlamak gerekebilir.
      </p>
      <p>
        Bir hesabın yalnızca bir sahibi olabilir ve müşteri, o sahibi
        istediği zaman bağımsız olarak kaldırabilir —{" "}
        <a
          href="https://support.google.com/google-ads/answer/6139186?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads yönetici hesapları hakkında
        </a>{" "}
        sayfasına göre, bir bağlantı (sahiplik olmadan) durumunda ajans
        hesabın oturum açma bilgileri gibi &quot;tescilli
        bilgilerini&quot; değiştiremez. Pratik kurulum şu şekilde
        işliyor: ajans bağlı bir MCC üzerinden çalışır; sizin kendi
        hesabınızın admin&apos;i, Erişim ve Güvenlik &gt; Yöneticiler
        menüsünden ajansa sahiplik verip vermeyeceğinize karar verir.
      </p>

      <h2 id="nasil-kontrol-edilir">
        Kendi hesabınızda sahipliği nasıl kontrol edersiniz?
      </h2>
      <p>
        Bu bilgiye ulaşmak için teknik bir ekibe ihtiyacınız yok —
        birkaç dakikada kendiniz kontrol edebilirsiniz:
      </p>
      <ol>
        <li>Google Ads hesabınıza giriş yapın.</li>
        <li>
          Sağ üstteki araç simgesinden Kurulum &gt; Erişim ve güvenlik
          bölümüne gidin.
        </li>
        <li>
          &quot;Yöneticiler&quot; sekmesine geçin — burada hesabınıza
          bağlı tüm yönetici hesapları ve her birinin rolü (sahip mi,
          standart erişim mi) listelenir.
        </li>
        <li>
          Ajansınızın adı &quot;Sahip&quot; (Owner) olarak görünüyorsa,
          hesabınız teknik olarak onun kontrolünde demektir.
        </li>
      </ol>
      <p>
        Sahip siz değilseniz ve bunu değiştirmek istiyorsanız, bu
        genellikle mevcut sahibin (ajansın) sahipliği size devretmesini
        veya sahiplikten çıkmasını gerektirir — tek taraflı olarak
        alamayacağınız bir işlem. Bu yüzden doğru kurulumu baştan
        yapmak, sonradan düzeltmekten çok daha kolay.
      </p>

      <h2 id="erisim-seviyeleri">Erişim seviyeleri: ajansa ne kadar yetki gerekir?</h2>
      <p>
        Google Ads,{" "}
        <a
          href="https://support.google.com/google-ads/answer/9978556?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          kendi dokümantasyonunda
        </a>{" "}
        beş farklı erişim seviyesi tanımlıyor. Bir ajansın günlük işini
        yapabilmesi için sahiplik değil, aşağıdaki tablodaki
        &quot;Standard&quot; seviye genellikle yeterli:
      </p>
      <table>
        <thead>
          <tr>
            <th>Seviye</th>
            <th>Ne yapabilir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admin</td>
            <td>
              Tam kontrol: kampanya düzenleme, kullanıcı erişimlerini
              yönetme, ürün bağlantılarını (Analytics vb.) ekleme/kaldırma,
              yönetici hesabı bağlantı taleplerini kabul/red etme.
            </td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>
              Kampanya oluşturma ve düzenleme, bağlı Analytics
              etkinliklerinden dönüşüm oluşturma — ama kullanıcı
              erişimlerini veya ürün bağlantılarını yönetemez.
            </td>
          </tr>
          <tr>
            <td>Read-only</td>
            <td>
              Kampanyaları görüntüleme, planlama araçlarını kullanma,
              rapor görüntüleme/çalıştırma — değişiklik yapamaz.
            </td>
          </tr>
          <tr>
            <td>E-posta yalnızca</td>
            <td>Yalnızca bildirim e-postaları/raporları alır.</td>
          </tr>
          <tr>
            <td>Faturalandırma</td>
            <td>
              Fatura bilgilerini görüntüleme/düzenleme, ödeme yöntemlerini
              yönetme — kampanyalara erişimi yok.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Aynı Google Ads yardım sayfası, bir güvenlik riskine de dikkat
        çekiyor: &quot;Hesabınızda yalnızca bir yönetici varsa ve bu
        kullanıcı kullanılamaz hale gelirse etiketlerinize erişimi
        kaybedebilirsiniz.&quot; Bu yüzden Google, hesapta{" "}
        <strong>en az iki admin</strong> bulundurulmasını öneriyor —
        pratikte bu, hem sizin hem de ajansınızdaki bir yetkilinin admin
        olabileceği, ama sahipliğin yine de sizde kalabileceği anlamına
        geliyor.
      </p>

      <h2 id="ajans-degisince-ne-olur">
        Ajans değiştiğinde gerçekte ne kaybedilir?
      </h2>
      <p>
        Hesap ajansın kendi yönetici hesabı altında açıldıysa ve
        sahiplik hiç size devredilmediyse, ajans ilişkisi bittiğinde bu
        geçmişi teknik olarak &quot;devralamazsınız&quot; — yeni bir
        hesapla sıfırdan başlamak zorunda kalabilirsiniz. Bunun somut
        maliyetini gösteren, isimlendirilmiş bir vaka örneği var:
        paid-search sektör yayını{" "}
        <a
          href="https://ppchero.com/who-owns-your-ppc-ads-account/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PPC Hero&apos;nun aktardığına göre
        </a>
        , hesap kontrolünü geri kazanan bir müşteri, negatif anahtar
        kelime geçmişini inceleyerek yalnızca 5 günlük bir gözden
        geçirmede 1.004 dolarlık boşa harcanan bütçe tespit etti. PPC
        Hero&apos;nun net tavsiyesi de bu deneyimden geliyor: müşteri
        Admin erişimini elinde tutmalı, ajansa yalnızca Standard erişim
        verilmeli — makalenin kendi ifadesiyle,{" "}
        <em>&quot;şeffaflık, hesap verebilirliktir.&quot;</em>
      </p>
      <p>
        Hesap sahibi değişmese bile kaybedilen şey yalnızca &quot;geçmiş
        raporlar&quot; değil: yeniden pazarlama (remarketing) hedef
        kitle listeleri, bağlı Google Analytics/Merchant Center
        entegrasyonları ve biriken dönüşüm verisi de hesaba bağlı.
        Sıfırdan açılan bir hesapta bu veri yeniden birikmek zorunda —
        bu da otomatik teklif verme stratejilerinin (Smart Bidding)
        yeniden istikrar kazanması için ek zaman gerektirdiği anlamına
        geliyor; tam olarak kaç dönüşümde stabilize olacağı hesaba göre
        değişir, bu yüzden burada net bir sayı vermiyoruz.
      </p>
      <p>
        Bunu netleştirmek gerekiyor: Google&apos;ın kendi
        dokümantasyonunda &quot;müşteriler kendi hesabına sahip olmalı&quot;
        şeklinde açık bir politika cümlesi yok. Ama yukarıdaki mekanik
        (kendi açılan hesap = otomatik sahiplik, bağlanan hesap =
        sahiplik yok) ve &quot;sadece gerektiğinde sahip yap&quot;
        ilkesi, sistemin varsayılan olarak müşteri-sahipli kurulumu
        desteklediğini gösteriyor.
      </p>

      <h2 id="somut-senaryo">Somut bir senaryo üzerinden</h2>
      <p>
        İki farklı işletmeyi düşünelim. Birincisi, kendi Google
        hesabıyla bir Google Ads hesabı açıyor ve ajansı yönetici
        olarak davet ediyor. İkincisi, &quot;siz hiçbir şeyle
        uğraşmayın, biz kuralım&quot; diyen bir ajansla çalışıyor ve
        hesap ajansın kendi yönetici hesabı altında açılıyor. İlk yıl
        ikisi için de görünüşte hiçbir fark yok — kampanyalar aynı
        şekilde çalışıyor, raporlar aynı şekilde geliyor.
      </p>
      <p>
        Fark, ikinci işletme ajansından memnun kalmayıp başka biriyle
        çalışmak istediğinde ortaya çıkıyor. Birinci işletme için bu,
        Erişim ve Güvenlik menüsünden eski ajansı kaldırıp yeni ajansı
        eklemekten ibaret — kampanya geçmişi, dönüşüm verisi ve hedef
        kitle listeleri yerinde duruyor. İkinci işletme içinse hesabı
        &quot;devralmak&quot; teknik olarak mümkün değil; eski ajans
        hesabı vermeyi reddederse (ya da basitçe iletişime geçilemez
        hale gelirse) geriye tek seçenek kalıyor: sıfırdan yeni bir
        hesap açmak.
      </p>

      <h2 id="sahiplik-vs-erisim">
        Sahiplik ile erişim yetkisi karıştırılmamalı
      </h2>
      <p>
        Burada sık yapılan bir karışıklık var: bir ajansa Admin erişimi
        vermek, ona sahiplik vermekle aynı şey değil. Admin erişimi
        kampanya yönetimi ve kullanıcı erişimlerini düzenleme yetkisi
        verir, ama hesabın kendisini kimin &quot;sahip&quot; olarak
        kayıtlı olduğunu değiştirmez — sahiplik ayrı, açıkça verilmesi
        (ve geri alınabilmesi) gereken bir yetki. Yani bir işletme,
        ajansına günlük işini yapması için Admin erişimi verip
        sahipliği hâlâ kendinde tutabilir; bu, önerdiğimiz kurulumdan
        farklı ama hâlâ güvenli bir orta yol. Asıl risk, sahipliğin
        hiç konuşulmadan, hesabın nasıl açıldığına bağlı olarak kendi
        kendine ajansa geçmiş olması.
      </p>

      <h2 id="dogru-kurulum">Doğru kurulum: kontrol listesi</h2>
      <p>
        Yeni bir Google Ads hesabı kurarken veya var olan bir kurulumu
        gözden geçirirken kontrol edilecekler:
      </p>
      <ul>
        <li>
          <strong>Hesap işletmenin kendi Google hesabıyla açılmalı</strong>{" "}
          — ajansın değil. Bu, yukarıdaki mekaniğin doğrudan sonucu:
          hesabı kim açarsa, aksi belirtilmedikçe sahiplik ona ait olur.
        </li>
        <li>
          <strong>Ajansa sahiplik değil, yeterli erişim verilmeli</strong>{" "}
          — çoğu ajans ilişkisi için Standard seviyesi günlük kampanya
          yönetimine yeter; sahiplik veya Admin&apos;i yalnızca gerçekten
          gerekiyorsa verin.
        </li>
        <li>
          <strong>En az bir (ideal olarak iki) Admin işletme
          tarafından kontrol edilmeli</strong> — Google&apos;ın kendi
          önerisi bu; tek admin kaybedilirse hesap kilitlenebilir.
        </li>
        <li>
          <strong>Erişim ve Güvenlik &gt; Yöneticiler menüsü düzenli
          gözden geçirilmeli</strong> — artık çalışılmayan ajans veya
          freelancer&apos;ların erişimi zamanında kaldırılmalı; bu
          sadece güvenlik değil, gereksiz veri paylaşımını da önler.
        </li>
        <li>
          <strong>Faturalandırma işletmenin kendi ödeme yöntemiyle
          bağlanmalı</strong> — ajansın kredi kartı veya faturalandırma
          hesabı üzerinden değil; aksi halde ödeme kesintisi hesabı
          doğrudan etkileyebilir.
        </li>
      </ul>
      <p>
        Groopy&apos;de{" "}
        <Link href="/hizmetler/google-reklam-yonetimi">
          Google Reklam Yönetimi
        </Link>{" "}
        hizmetimiz tam olarak bu ilkeyle çalışır: hesap her zaman
        müşteride kalır, biz yönetici olarak bağlanırız.{" "}
        <Link href="/blog/google-ads-ajansi-secerken-nelere-dikkat-edilmeli">
          Bir Google Ads ekibi seçerken nelere dikkat edilmesi gerektiğini
        </Link>{" "}
        ayrı bir yazıda daha geniş ele aldık; hesap sahipliği o
        listenin en başında gelen maddelerden biri.
      </p>

      <h2 id="ajanslar-neden-tercih-ediyor">
        Ajanslar neden kendi hesaplarını açmayı tercih ediyor?
      </h2>
      <p>
        Bu pratiğin her zaman kötü niyetli olduğunu söylemek adil olmaz.
        Bazı ajanslar için kendi yönetici hesabı altında çok sayıda
        müşteri hesabı yönetmek operasyonel olarak daha kolay — tek bir
        panelden onlarca hesabı takip edebiliyorlar, ödeme süreçlerini
        kendi anlaşmalarıyla basitleştirebiliyorlar ve yeni bir müşteri
        için hesap açma sürecini standart bir şablona indirgeyebiliyorlar.
        Bazı durumlarda da bu, işletmenin kendisinin hiç Google hesabı
        olmaması ya da teknik kurulumla hiç uğraşmak istememesinden
        kaynaklanıyor.
      </p>
      <p>
        Ama operasyonel kolaylık ile hesabın kime ait olduğu iki ayrı
        konu. Bir ajans, kendi yönetici hesabı altında MEVCUT bir
        müşteri hesabına bağlanarak da aynı operasyonel kolaylığı elde
        edebilir — MCC yapısı zaten çok sayıda bağlı hesabı tek panelden
        yönetmek için tasarlandı. Yani &quot;tek panelden yönetim&quot;
        ihtiyacı, hesabın ajans tarafından açılmasını teknik olarak
        gerektirmiyor; sahiplik konusu ayrı bir tercih.
      </p>

      <h2 id="rakip-durumu">
        Bu konu neden hâlâ çoğu yerde bir slogan olarak kalıyor?
      </h2>
      <p>
        Türkçe aramalarda &quot;Google Ads ajansı nasıl seçilir&quot;
        gibi sorgularda çıkan içeriklerin bir kısmı hesap sahipliğinin
        müşteride kalması gerektiğini zaten söylüyor — bu, Groopy&apos;nin
        tek başına iddia ettiği bir şey değil. Ama taradığımız
        içeriklerin hiçbiri bu iddiayı Google&apos;ın kendi MCC
        mekaniğiyle, erişim seviyesi tablosuyla veya isimlendirilmiş bir
        kaynakla desteklemiyor — çoğu zaman &quot;hesap size ait olmalı&quot;
        cümlesi tek başına, doğrulanabilir hiçbir dayanak gösterilmeden
        bırakılıyor.
      </p>
      <p>
        Bu fark önemli, çünkü bir işletme sahibinin bu tavsiyeyi neden
        dinlemesi gerektiğini anlaması için &quot;güvenin bana&quot;
        değil, &quot;işte tam olarak nasıl çalıştığı ve kontrol etmek
        istersen nereye bakacağın&quot; demek gerekiyor. Bu yazının
        farkı bir iddia eklemek değil, zaten var olan iddiayı
        Google&apos;ın kendi belgeleriyle doğrulanabilir hale
        getirmek.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Google Ads hesabınızın kimde olduğu, ajans değiştirme kararını
        verene kadar önemsiz görünen ama o an geldiğinde belirleyici
        olan bir detay. Google&apos;ın kendi sistem tasarımı, hesabı siz
        açıp ajansı yönetici olarak bağladığınızda sahipliğin sizde
        kalacağı, ajans hesabı kendi açtığında ise sahipliğin ona
        geçeceği net bir ayrım yapıyor. Bu ayrımı bilmek, kurulum
        aşamasında doğru soruyu sormanızı sağlıyor.
      </p>
      <p>
        Bu sorunun cevabını bugün öğrenmenin maliyeti sıfır — Erişim ve
        Güvenlik menüsüne bakmak birkaç dakika sürer. Ajans
        değiştirmek istediğiniz gün öğrenmenin maliyeti ise, PPC
        Hero&apos;nun vaka örneğinde olduğu gibi, doğrudan bütçe kaybı
        veya sıfırdan başlamak zorunda kalmak olabilir. Aradaki fark,
        bu tek soruyu ne zaman sorduğunuz.
      </p>
      <p>
        Mevcut kurulumunuzu kontrol etmek isterseniz Erişim ve Güvenlik
        &gt; Yöneticiler menüsünden başlayabilirsiniz. Şeffaf bir
        kurulum konusunda konuşmak isterseniz{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
        Google Ads&apos;in{" "}
        <Link href="/blog/google-ads-mi-seo-mu">
          SEO ile birlikte mi yoksa tek başına mı kullanılmasının daha
          verimli olduğunu
        </Link>{" "}
        merak ediyorsanız, bu konuyu da ayrı bir yazıda ele aldık.
      </p>
    </>
  );
}
