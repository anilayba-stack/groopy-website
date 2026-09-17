import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "seo-ajansi-secerken-nelere-dikkat-edilmeli",
  title: "SEO Ajansı Seçerken Nelere Dikkat Edilmeli? 7 Somut Kriter",
  metaTitle: "SEO Ajansı Seçerken Nelere Dikkat Edilmeli?",
  description:
    "SEO ajansı seçerken nelere dikkat etmeniz gerektiğini anlatıyoruz: sözleşme süresi, veri sahipliği, garanti vaatleri ve raporlama şeffaflığı dahil 7 kriter.",
  publishedAt: "2026-09-17",
  tldr: "İyi bir SEO ajansı; kesin sıralama garantisi vermez, Google Search Console ve Analytics erişimini size bırakır, kısa vadeli zorunlu sözleşme dayatmaz ve trafiği değil dönüşümü raporlar. Bu yazıda 7 somut kriter ve kaçınılması gereken vaatler listeleniyor.",
  author: "Anıl Ay",
  hubService: "seo-ve-geo",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/seo-ajansi-secerken.jpg",
    alt: "Bir toplantı masasında sözleşme belgeleri üzerinde el sıkışan iki kişi",
  },
  faq: [
    {
      question: "SEO ajansı garanti verebilir mi?",
      answer:
        "Hayır. Google'ın kendisi de hiçbir SEO firmasının belirli bir sıralamayı garanti edemeyeceğini açıkça belirtir. Kesin sıralama, kesin süre veya 'Google ile özel ilişki' vaadi veren bir ajanstan uzak durun.",
    },
    {
      question: "SEO sonuçları ne kadar sürede görülür?",
      answer:
        "Teknik düzeltmelerin etkisi genellikle haftalar içinde ölçülebilir; içerik ve sıralama kaynaklı trafik artışı tipik olarak 2–4 ay sürer. Bunun altında bir süre vaat eden bir ajansa şüpheyle yaklaşın.",
    },
    {
      question: "SEO ajansıyla sözleşme ne kadar sürmeli?",
      answer:
        "Zorunlu, uzun vadeli bir kilitlenme yerine; kapsam, takvim ve fiyatın yazılı olduğu, performansla devam eden bir çalışma modeli tercih edin. İyi bir ajans sizi sözleşme maddesiyle değil sonuçla elde tutar.",
    },
    {
      question: "SEO ajansı mı, GEO ajansı mı seçmeliyim?",
      answer:
        "İkisi birbirinin yerine geçmez. SEO klasik Google sıralamasını, GEO ise ChatGPT ve Google AI Overviews gibi yapay zekâ yanıtlarında görünürlüğü hedefler. 2026 itibarıyla ikisini birlikte planlayan bir ekiple çalışmak avantajlıdır.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        SEO ajansı seçimi genellikle 6-12 aylık bir taahhüt anlamına gelir —
        yanlış seçim hem bütçe hem de zaman kaybı demektir. Bir ajansla
        yola çıkıp altı ay sonra hiçbir somut sonuç göremeden ayrılmak,
        sadece harcanan parayı değil, o süre boyunca kaybedilen sıralama
        fırsatını da geri getirmez. Çoğu ajansın web sitesi birbirine çok
        benzer vaatler sunar: &quot;organik trafiği artırırız&quot;,
        &quot;Google&apos;da üst sıralara çıkarırız&quot;, &quot;kanıtlanmış
        yöntemlerimiz var&quot;. Bu cümlelerin hiçbiri sizi yanlış bir
        seçimden korumaz, çünkü hemen hemen her ajans aynısını söyler.
      </p>
      <p>
        Gerçek farkı anlamak için doğru sorulara ve somut kriterlere ihtiyaç
        var — pazarlama diline değil, ajansın nasıl çalıştığına, veriyi kimin
        kontrol ettiğine ve sizi ne kadar süre bağladığına bakan kriterlere.
        Bu kriterler özellikle ilk kez bir SEO ajansıyla çalışacak, daha
        önce kötü bir deneyim yaşamış ya da mevcut ajansından memnun
        olmayıp alternatif değerlendiren işletme sahipleri için faydalı.
        Aşağıda, bir ajansla görüşmeden önce veya görüşme sırasında kontrol
        edebileceğiniz 7 somut kriter var.
      </p>

      <h2 id="strateji-mi-paket-mi">Strateji mi sunuyor, yoksa standart paket mi?</h2>
      <p>
        İlk görüşmede ajans, sitenizi ve rakiplerinizi incelemeden fiyat
        veriyorsa bu bir uyarı işaretidir. Ciddi bir SEO çalışması; mevcut
        teknik durumun, hedef kitlenin ve rakip boşluklarının analiziyle
        başlar. Bu analiz genellikle şunları içerir: sitenin taranabilirlik
        ve indeksleme durumu, mevcut sıralamaların hangi sayfalarda
        toplandığı, rakiplerin hangi konularda sizden önde olduğu ve içerik
        tarafında hangi boşlukların doldurulabileceği.
      </p>
      <p>
        &quot;Herkese aynı paket&quot; yaklaşımı, sektörünüze veya
        hedeflerinize özel olmayan, kopyala-yapıştır bir çalışma anlamına
        gelir. Bir diş kliniği ile bir e-ticaret sitesinin SEO önceliği aynı
        olamaz; biri yerel arama ve Google İşletme Profili&apos;ne
        odaklanırken diğeri ürün sayfası mimarisine ve teknik ölçeğe
        odaklanır. Standart paket satan bir ajans bu farkı genellikle göz
        ardı eder.
      </p>
      <p>
        Sormanız gereken soru basit: &quot;Bana özel ne inceleyeceksiniz, ne
        zaman bir bulgu paylaşacaksınız?&quot; Net bir keşif/denetim süreci
        tarif edemeyen bir ajans, muhtemelen standart bir şablon uygulayacak
        — ve bu şablon sizin gerçek sorunlarınızı çözmeyebilir.
      </p>

      <h2 id="kesin-siralama-garantisi">
        Kesin sıralama garantisi veriyor mu? (Kırmızı bayrak)
      </h2>
      <p>
        Google&apos;ın kendisi bu konuda açık:{" "}
        <a
          href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo"
          target="_blank"
          rel="noopener noreferrer"
        >
          &quot;No one can guarantee a #1 ranking on Google&quot;
        </a>{" "}
        (hiç kimse Google&apos;da 1. sıra garantisi veremez) ve kesin
        sıralama, kesin süre veya &quot;Google ile özel ilişki&quot; vaat eden
        SEO firmalarına karşı açıkça uyarıyor. Bunun nedeni basit: sıralama
        algoritması yüzlerce sinyali aynı anda değerlendirir ve bu sinyaller
        sürekli güncellenir. Hiçbir ajans — ne kadar deneyimli olursa olsun —
        bu sistemin çıktısını tek başına kontrol edemez.
      </p>
      <p>
        Bir ajans size belirli bir anahtar kelimede belirli bir tarihte 1.
        sırayı vaat ediyorsa, ya algoritmayı yanlış anlatıyor ya da riskli,
        kısa ömürlü teknikler (yapay bağlantı satın alma, gizli metin,
        otomatik içerik üretimi gibi) kullanmayı planlıyor demektir. Bu tür
        yöntemler kısa vadede sıralamayı yükseltebilir, ama Google&apos;ın
        spam güncellemeleri bu siteleri düzenli olarak tespit edip
        cezalandırıyor — kaybedilen sıralamayı geri kazanmak, baştan
        başlamaktan daha zor olabilir.
      </p>
      <p>
        Gerçekçi bir ajans bunun yerine süreç ve zaman çizelgesi konuşur:
        teknik düzeltmelerin etkisi haftalar içinde görülür; sıralama ve
        organik trafik artışı ise tipik olarak 2-4 ay sürer. Bu, garanti
        vermemekle belirsiz konuşmak arasındaki farktır — iyi bir ajans net
        bir zaman aralığı verir, kesin bir tarih vermez ve bu aralığı neden
        verdiğini açıklayabilir.
      </p>
      <p>
        Ayrıca sıralamanın kendisi de sizin gördüğünüzle bir başkasının
        gördüğü arasında farklı olabilir. Google sonuçları konuma, cihaza
        ve kullanıcının arama geçmişine göre kişiselleştirilir; siz kendi
        telefonunuzdan arama yapıp sitenizi 1. sırada görmeyebilirsiniz ama
        başka bir kullanıcı görebilir (ya da tam tersi). Bu yüzden
        &quot;ben aradım, çıkmadı&quot; tek başına bir ajansı
        değerlendirmek için güvenilir bir yöntem değildir — Search
        Console&apos;daki toplu veri, tek bir aramadan çok daha
        güvenilirdir.
      </p>

      <h2 id="veri-erisim-sahipligi">
        Google Search Console ve Analytics erişimi kimde kalıyor?
      </h2>
      <p>
        Bu, çoğu karşılaştırma yazısında es geçilen ama en somut kriterlerden
        biri: ajans, Google Search Console, Analytics ve Google İşletme
        Profili hesaplarını kendi adına mı kuruyor, yoksa sizin hesabınıza mı
        ekleniyor? Doğrusu ikincisi. Arama performansı verisi ve geçmiş
        kayıtlar size ait olmalı — ajansı değiştirseniz bile bu veriyi
        kaybetmemelisiniz.
      </p>
      <p>
        Pratikte bunu nasıl kontrol edersiniz? Basit: hesapların sahibi
        (owner) olarak sizin Google hesabınızın görünüp görünmediğine bakın.
        Eğer ajans size yalnızca &quot;görüntüleyici&quot; erişimi veriyor ve
        asıl sahiplik kendi ajans hesabında kalıyorsa, ilişki bittiğinde
        yıllar süren arama performansı geçmişinizi kaybetme riskiyle karşı
        karşıyasınızdır.
      </p>
      <p>
        Bu ayrım aslında iki farklı işi birbirinden ayırır:{" "}
        <strong>kurulum</strong> (hesapların açılması, doğrulanması — tek
        seferlik bir iş) ve <strong>yönetim</strong> (verinin sürekli
        izlenmesi, raporlanması ve optimizasyonu). Bir ajans bu ikisini
        karıştırıp &quot;hesap bizde, dilerseniz erişim veririz&quot;
        diyorsa, veri sahipliğinizi tam olarak netleştirmemiş demektir. İyi
        bir ajans bu ayrımı kendiliğinden açıklar, siz sormadan önce.
      </p>
      <p>
        Aynı mantık Google İşletme Profili için de geçerli: profilin
        &quot;birincil sahibi&quot; (primary owner) rolü size ait olmalı,
        ajansa yalnızca &quot;yönetici&quot; rolü verilmeli. Bu ayrım küçük
        görünse de önemli bir farkı belirliyor — birincil sahip, gerektiğinde
        diğer tüm erişimleri tek taraflı olarak iptal edebilir; yönetici
        rolündeki taraf ise bunu yapamaz.
      </p>

      <h2 id="ajansin-kendi-sitesi">
        Ajansın kendi sitesi ve geçmiş işleri neyi gösteriyor?
      </h2>
      <p>
        Bir SEO ajansının kendi web sitesi, iddialarının en kolay test
        edilebilir kanıtıdır. Ajans kendi sitesinde temel teknik SEO&apos;yu —
        hızlı yüklenme, mobil uyum, temiz başlık/meta yapısı, çalışan
        yapılandırılmış veri — uygulamıyorsa, sizin siteniz için bunu
        uygulama ihtimali de düşüktür. Bunu kontrol etmek için özel bir
        araca ihtiyacınız yok; sitenin mobilde ne kadar hızlı açıldığına ve
        Google&apos;da arama yaparak kendi hizmet sayfalarının ne kadar
        görünür olduğuna bakmanız yeterli.
      </p>
      <p>
        Geçmiş işler bölümüne de dikkatli bakın. &quot;Yaptığımız
        işler&quot; sayfasında stok fotoğraflarla süslenmiş, isimsiz
        &quot;müşteri X&quot; örnekleri veya yalnızca yükselen bir grafik
        ekran görüntüsü varsa, bu hiçbir şeyi kanıtlamaz — bir grafiğin
        yükselmesinin nedeni SEO çalışması da olabilir, mevsimsellik veya
        başka bir kampanya da. Güvenilir bir ajans, en azından bir örnekte
        hangi değişikliği yaptığını ve bunun hangi ölçülebilir sonuca
        bağlandığını (yöntemiyle birlikte) açıklayabilir.
      </p>
      <p>
        Bağımsız doğrulama için ajansın kendi Google İşletme Profili
        yorumlarına, LinkedIn üzerindeki gerçek müşteri tavsiyelerine veya
        varsa sektörel referans platformlarına bakabilirsiniz. Tek bir
        olumsuz yorum kırmızı bayrak değildir, ama hiç bağımsız referansı
        olmayan, yalnızca kendi web sitesinde iddia bulunan bir ajans için
        daha dikkatli olunmalı.
      </p>

      <h2 id="sozlesme-suresi">Sözleşme ne kadar sürmeli? Kilitlenmeye dikkat</h2>
      <p>
        SEO ajansı seçimiyle ilgili çoğu rehber teknik yeterlilik ve
        raporlamadan bahseder, ama sözleşme süresine neredeyse hiç
        değinmez. Oysa bu, çalışmanın gerçekte ne kadar &quot;performansa
        dayalı&quot; olduğunu gösteren en net işaretlerden biri.
      </p>
      <p>
        Zorunlu, uzun vadeli (örneğin 12-24 aylık, erken çıkışta cezalı) bir
        sözleşme dayatan bir ajans, sizi sonuçla değil sözleşme maddesiyle
        elde tutuyor demektir. Aynı şekilde tüm yıl bedelini peşin isteyen
        bir teklif de dikkatle değerlendirilmeli — bu, ajansın sizi uzun
        vadede memnun ederek değil, baştan bağlayarak tutmayı planladığının
        işareti olabilir.
      </p>
      <p>
        Kapsam, takvim ve fiyatın yazılı olduğu ama performans yetersiz
        kaldığında makul bir çıkış yolu (örneğin belirli bir bildirim
        süresiyle fesih hakkı) bırakan bir çalışma modeli tercih edin. Bu,
        ajansın işini kötü yapacağı anlamına gelmez — tam tersine, kendi
        işine güvenen bir ajans genellikle bu tür esnekliği sunmaktan
        çekinmez.
      </p>

      <h2 id="trafik-mi-donusum-mu">Raporlama trafiği mi, dönüşümü mü gösteriyor?</h2>
      <p>
        Artan ziyaretçi sayısı olumlu bir işaret olabilir, ama tek başına
        yeterli değildir. Gelen kullanıcı doğru sayfada doğru içerikle
        karşılaşmıyorsa, trafik ticari bir sonuca dönüşmez. Örneğin bir
        hizmet sayfasına gelen ziyaretçi sayısı ikiye katlanmış olabilir,
        ama sayfa net bir iletişim formu veya çağrıya davet içermiyorsa bu
        artışın işletmenize hiçbir katkısı olmaz.
      </p>
      <p>
        İyi bir raporlama; form doldurma, teklif talebi veya satış gibi iş
        hedeflerini de içermelidir — yalnızca &quot;sıralama yükseldi&quot;
        veya &quot;ziyaretçi arttı&quot; değil. Bunun için ajansın Analytics
        üzerinde dönüşüm/hedef izleme kurmuş olması gerekir; bu da bir
        önceki maddedeki veri sahipliği konusuyla doğrudan bağlantılıdır.
      </p>
      <p>
        Görüşmede doğrudan sorun: &quot;Aylık raporda hangi metrikleri
        göreceğim?&quot; Cevap yalnızca trafik ve sıralamaysa, dönüşüm
        tarafını nasıl ölçeceğinizi ayrıca netleştirin. Bir ajans bu soruya
        rahatça ve somut örneklerle cevap veremiyorsa, muhtemelen bugüne
        kadar hiçbir müşterisi için dönüşüm bazlı raporlama yapmamıştır.
      </p>
      <p>
        Sayfa görüntüleme, sosyal paylaşım sayısı veya &quot;etkileşim
        oranı&quot; gibi metrikler de rapora eklenebilir, ama bunlar tek
        başlarına iş sonucu değildir — sektörde bazen &quot;vanity
        metrics&quot; (gösterişe dönük metrikler) olarak adlandırılır.
        Sorulması gereken soru şu: bu rakamların işletmenize kaç yeni
        müşteri adayı kazandırdığı ölçülebiliyor mu, yoksa yalnızca iyi
        görünen bir grafik mi sunuluyor?
      </p>

      <h2 id="seo-mu-geo-mu">SEO ajansı mı, GEO ajansı mı? (2026&apos;da fark var mı)</h2>
      <p>
        2026 itibarıyla bu ayrım artık göz ardı edilemez. Klasik SEO,
        sayfanızın Google arama sonuçlarında sıralanmasını hedefler; GEO
        (yapay zekâ arama optimizasyonu) ise ChatGPT, Perplexity ve Google
        AI Overviews gibi yapay zekâ yanıtlarının içinde kaynak olarak
        gösterilmenizi hedefler. Klasik arama hâlâ çok daha fazla trafik
        gönderiyor, ama kullanıcıların bir kısmı artık cevabı doğrudan
        yapay zekadan alıp siteye hiç girmiyor.
      </p>
      <p>
        Pratikte GEO&apos;ya hazırlık şu anlama gelir: sitenin yapay zekâ
        tarayıcılarına (GPTBot, ClaudeBot, PerplexityBot gibi) açık olması,
        içeriğin cevap-önce formatta yazılması (önce net sonuç, sonra
        detay) ve yapılandırılmış verinin (Organization, Service, Article
        şeması gibi) doğru kurulmuş olması. Bunların hiçbiri karmaşık veya
        pahalı değil, ama çoğu ajansın gündeminde henüz yok.
      </p>
      <p>
        Bir ajansa &quot;GEO için ne yapıyorsunuz?&quot; diye sorduğunuzda
        net bir cevap alamıyorsanız, o ajans hâlâ 2020&apos;lerin başındaki
        SEO anlayışıyla çalışıyor demektir. İkisini tek bir planda birleştiren
        bir yaklaşım, ileride ayrı ayrı iki hizmet almaktan daha tutarlı
        sonuç verir — çünkü teknik temel (hız, tarama, yapılandırılmış veri)
        zaten her ikisinin de ortak zeminidir.
      </p>
      <p>
        GEO&apos;nun ölçümü de klasik SEO&apos;dan farklıdır. Search Console
        size hangi sorguların sizi Google&apos;a getirdiğini gösterir, ama
        ChatGPT veya Perplexity&apos;nin bir yanıtta markanızı kaynak
        gösterip göstermediğini gösteren resmi bir panel henüz yok. Bunu
        takip etmenin tek yolu, hedef sorguları düzenli aralıklarla bu
        araçlarda manuel olarak sorup sonucu kaydetmek. Bir ajans bu takibi
        nasıl yaptığını anlatamıyorsa, GEO&apos;yu yalnızca pazarlama
        kelimesi olarak kullanıyor olabilir.
      </p>

      <h2 id="sonuc">Karar vermeden önce</h2>
      <p>
        Bu 7 kriterin ortak noktası şu: hiçbiri pazarlama dili değil,
        doğrulayabileceğiniz somut davranışlar. Bir ajansla görüşürken
        vaatlerini değil, aşağıdaki sorulara verdiği cevapları not edin:
      </p>
      <ul>
        <li>Sitenize özel bir strateji sunuyor mu, yoksa standart paket mi?</li>
        <li>Kesin sıralama garantisi vermiyor mu?</li>
        <li>Search Console ve Analytics erişimi size mi kalıyor?</li>
        <li>Kendi sitesi ve geçmiş işleri iddialarını doğruluyor mu?</li>
        <li>Sözleşme sizi sonuçla mı, madde ile mi bağlıyor?</li>
        <li>Raporlama dönüşümü de kapsıyor mu?</li>
        <li>GEO&apos;yu (yapay zekâ arama optimizasyonu) planına dahil ediyor mu?</li>
      </ul>
      <p>
        Bu kriterlerin hiçbiri tek başına belirleyici değil — ama bir ajans
        bunların çoğunda net, doğrudan cevap veremiyorsa, bu tek bir zayıf
        noktadan çok, genel bir şeffaflık sorununa işaret eder. Tersine, bir
        ajans bu sorulara rahatça ve somut örneklerle cevap verebiliyorsa,
        muhtemelen benzer sorularla daha önce de karşılaşmış ve çalışma
        biçimini buna göre kurmuştur.
      </p>
      <p>
        Groopy&apos;de bu yaklaşımı kendi{" "}
        <Link href="/hizmetler/seo-ve-geo">SEO + GEO Stratejisi</Link>{" "}
        hizmetimizde uyguluyoruz: erişim ve veri size ait kalır, zorunlu uzun
        vadeli sözleşme yok, raporlama trafik kadar dönüşümü de kapsar.
        Sitenizin şu anki durumunu görmek isterseniz{" "}
        <Link href="/seo-analiz-araci">ücretsiz SEO analiz aracımızı</Link>{" "}
        deneyebilir, ya da doğrudan{" "}
        <Link href="/iletisim">bir keşif görüşmesi planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
