import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "eski-web-sitesini-yenileme-zamani-7-belirti",
  title: "Eski Web Sitenizi Yenileme Zamanının 7 Ölçülebilir Belirtisi",
  metaTitle: "Web Sitesini Yenileme Zamanının 7 Belirtisi",
  description:
    "Sitenizin yenilenmesi gerekip gerekmediğini 'eski görünüyor' hissine değil, 7 somut, kendi kendinize test edebileceğiniz kritere göre anlayın.",
  publishedAt: "2026-12-17",
  tldr: "\"Sitem eski mi?\" sorusunun cevabı bir his değil, yedi somut testten geçiyor: Core Web Vitals puanınız kırmızı mı, Google'ın mobil öncelikli indeksleme kriterlerini geçiyor mu, HTTPS var mı, CMS/eklentileriniz güncel mi, yapılandırılmış verileriniz Google'ın Rich Results Test aracından geçiyor mu, kendi marka adınızla arattığınızda çıkıyor musunuz ve trafiğinizi ölçebiliyor musunuz. Bu yedisinin çoğu ücretsiz araçlarla dakikalar içinde test edilebilir; sorun görsel tasarımda değil, bu temellerden birkaçında çıkıyorsa, yüzeysel bir güncelleme yerine gerçek bir yenileme gerekiyor demektir.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 10,
  coverImage: {
    src: "/images/blog/eski-web-sitesini-yenileme.jpg",
    alt: "Eski bir daktilonun tuşlarının ve mekanizmasının yakın çekimi",
  },
  faq: [
    {
      question: "Sitem eski görünüyor ama bu yenileme gerektirir mi?",
      answer:
        "Görsel tasarım tek başına yeterli bir kriter değil. Bu yazıdaki 7 belirtinin (Core Web Vitals, mobil uyum, HTTPS, güncel CMS, yapılandırılmış veri, marka aramasında çıkma, ölçüm) kaçını karşılamadığınıza bakın; birden fazlasını karşılamıyorsanız, sorun tasarımdan çok temel yapıdadır.",
    },
    {
      question: "Bu testleri nereden yapabilirim?",
      answer:
        "Çoğu ücretsiz: Core Web Vitals için PageSpeed Insights, yapılandırılmış veri için Google'ın Rich Results Test aracı, genel bir özet için ücretsiz SEO analiz aracımız. HTTPS ve mobil uyumu tarayıcınızdan/telefonunuzdan görsel olarak da kontrol edebilirsiniz.",
    },
    {
      question: "Yenileme mi, düzeltme mi yeterli?",
      answer:
        "7 belirtiden 1-2 tanesi çıkıyorsa (ör. sadece HTTPS eksik veya birkaç eklenti güncel değil) genellikle hedefli bir düzeltme yeterli. Çoğu belirti çıkıyorsa ya da site eski bir teknolojiyle (bakımı bırakılmış bir CMS gibi) kurulmuşsa, temelden yeniden yapmak orta vadede daha az maliyetli olur.",
    },
    {
      question: "Yenileme ne kadar sürer ve ne kadar tutar?",
      answer:
        "Kapsam ve mevcut sitenin durumuna göre değişir; genel aralıkları web sitesi maliyeti ve tamamlanma süresi yazılarımızda ayrıntılı ele aldık.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        &quot;Sitem eski mi?&quot; sorusunun cevabı bir his değil, bir
        test listesi. Çoğu işletme sahibi bu kararı görsel beğeniye göre
        veriyor; oysa bir sitenin gerçekten yenilenmesi gerekip
        gerekmediğini gösteren yedi somut kriter var, ve bunların hiçbiri
        &quot;güzel mi çirkin mi&quot; sorusuyla ilgili değil. Aşağıdaki
        7 belirtinin her biri kendi kendinize, çoğu ücretsiz araçla,
        dakikalar içinde kontrol edilebilir.
      </p>

      <h2 id="1-core-web-vitals">1. Core Web Vitals puanınız kırmızı</h2>
      <p>
        Sitenizin yükleme hızını, etkileşim tepkisini ve görsel
        kararlılığını ölçen bu üç metriği{" "}
        <Link href="/blog/core-web-vitals-nedir">
          Core Web Vitals yazımızda
        </Link>{" "}
        ayrıntılı ele aldık. Test etmek için pagespeed.web.dev&apos;e site
        adresinizi girin; LCP, INP ya da CLS kırmızı çıkıyorsa, bu genellikle
        eski bir teknoloji seçimi ya da yıllar içinde birikmiş, hiç
        temizlenmemiş kod/eklenti yığınının işareti. Sonuç yalnızca bir
        sıralama meselesi değil: yavaş açılan bir sayfa, ziyaretçinin
        içeriği hiç görmeden sekmeyi kapatması anlamına gelebilir.
      </p>

      <h2 id="2-mobil-uyum">2. Google&apos;ın mobil öncelikli indeksleme kriterlerini geçmiyor</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resmi dokümantasyonuna
        </a>{" "}
        göre indeksleme ve sıralama artık sitenizin masaüstü değil, mobil
        versiyonuna bakılarak yapılıyor; mobil versiyonda içerik, başlıklar
        ve yapılandırılmış veri masaüstüyle aynı olmalı. Sitenizi telefonunuzdan
        açın: metin taşıyor mu, düğmelere basmak zorlaşıyor mu, mobilde
        bazı içerikler hiç görünmüyor mu? Bu, eski bir &quot;önce
        masaüstü&quot; tasarım mantığıyla kurulmuş bir sitenin klasik
        belirtisi; Google&apos;ın mobil versiyonu esas aldığı bir dünyada,
        masaüstünde kusursuz görünen ama mobilde bozulan bir site
        sıralamada gerçek bir dezavantaja dönüşür.
      </p>

      <h2 id="3-https">3. HTTPS yok ya da tarayıcı uyarı veriyor</h2>
      <p>
        Google, HTTPS kullanımını 2014&apos;ten beri bir{" "}
        <a
          href="https://developers.google.com/search/blog/2014/08/https-as-ranking-signal"
          target="_blank"
          rel="noopener noreferrer"
        >
          sıralama sinyali
        </a>{" "}
        olarak kullandığını resmi olarak duyurdu. Test etmek çok basit:
        adres çubuğunda kilit simgesi yerine &quot;Güvenli değil&quot;
        uyarısı görüyorsanız, bu hem güven hem sıralama açısından acil bir
        sorun. Modern hiçbir hosting altyapısında HTTPS kurmak pahalı ya
        da zor değil; bu belirtinin çıkması genellikle sitenin uzun süre
        hiç dokunulmadığının işareti; ziyaretçi için de kart bilgisi ya da
        iletişim formu doldurmadan önce gördüğü ilk güven sinyali.
      </p>

      <h2 id="4-cms-guncel">4. CMS ve eklentileriniz güncellenmiyor</h2>
      <p>
        WordPress gibi bir CMS kullanıyorsanız, güvenlik açıklarının
        büyük çoğunluğu çekirdekten değil, güncellenmeyen eklentilerden
        geliyor;{" "}
        <Link href="/blog/wordpress-mi-nextjs-mi">
          WordPress mi Next.js mi?
        </Link>{" "}
        yazımızda bunu Patchstack ve Wordfence&apos;in verileriyle
        ayrıntılı ele aldık. Yönetici panelinize girip eklenti/tema
        listesine bakın: aylardır güncelleme almayan, artık geliştiricisi
        tarafından desteklenmeyen bir eklenti varsa, bu yalnızca bir
        güvenlik riski değil, sitenin genel bakım durumunun da bir
        göstergesi.
      </p>

      <h2 id="5-yapilandirilmis-veri">5. Yapılandırılmış veri yok ya da hatalı</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://search.google.com/test/rich-results"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rich Results Test aracına
        </a>{" "}
        sitenizin bir sayfasının adresini girin. Araç, sayfanızda hangi
        yapılandırılmış verinin (Organization, Article, Service gibi)
        bulunduğunu ve geçerli olup olmadığını gösterir. Sonuç boşsa ya da
        hata veriyorsa, bu genellikle sitenin yıllar önce, yapılandırılmış
        veri ve GEO (yapay zeka arama) kavramları henüz standart olmadan
        önce kurulduğunun işareti; bu da ChatGPT veya Perplexity gibi
        araçların sitenizi kaynak olarak göstermesini zorlaştırır.
      </p>

      <h2 id="6-marka-aramasi">6. Kendi marka adınızla arattığınızda çıkmıyorsunuz</h2>
      <p>
        Google&apos;a işletmenizin adını yazın. Kendi siteniz ilk sonuçlar
        arasında çıkmıyorsa (ya da hiç çıkmıyorsa), bu ciddi bir teknik
        sorun işaretidir; nedenlerini{" "}
        <Link href="/blog/googlede-neden-cikmiyorum">
          Google&apos;da neden çıkmıyorum?
        </Link>{" "}
        yazımızda 8 madde halinde ele aldık. Marka aramasında bile
        çıkamayan bir site için görsel yenileme değil, temelden bir kurulum
        gerekiyor demektir; potansiyel müşteri sizi ararken rakibinizi
        buluyor olabilir.
      </p>

      <h2 id="7-olcum-yok">7. Trafiğinizi ve ziyaretçi davranışını ölçemiyorsunuz</h2>
      <p>
        Sitenize Google Analytics ve Search Console kurulu değilse, yedinci
        belirti bu: sitenizin gerçekten kaç kişiye ulaştığını, hangi
        sayfalardan ayrıldıklarını ya da hangi aramalarla geldiklerini
        bilmiyorsunuz demektir. Bu bir tasarım sorunu değil ama yenileme
        kararını doğru vermenizi engelleyen bir kör nokta; hangi
        sayfaların gerçekten işe yaradığını bilmeden neyi değiştireceğinize
        karar veremezsiniz; yenileme kararını veri yerine tahminle
        vermek, yanlış şeyi değiştirme riskini artırır.
      </p>

      <h2 id="birlikte-gorulme">Bu belirtiler genellikle tek başına gelmez</h2>
      <p>
        Yedi belirti birbirinden bağımsız görünse de pratikte genellikle
        birlikte çıkar, çünkü aynı kökten geliyorlar: yıllardır
        güncellenmemiş bir kurulum. Güncellenmeyen bir eklenti yığını (4.
        madde) genellikle yavaş bir sayfa (1. madde) ve eksik
        yapılandırılmış veri (5. madde) ile birlikte gelir; HTTPS&apos;i
        hiç kurmamış bir site (3. madde) çoğunlukla analitik araçları da
        hiç kurmamıştır (7. madde). Bu yüzden bir belirti bulduğunuzda
        diğerlerini de kontrol etmek mantıklı; tek bir sorunu düzeltmek,
        altta yatan asıl nedeni çözmeyebilir.
      </p>

      <h2 id="hizli-test">Hepsini birlikte kontrol edin</h2>
      <p>
        Bu yedi maddenin çoğunu tek bir yerden görmek isterseniz{" "}
        <Link href="/seo-analiz-araci">ücretsiz SEO analiz aracımızı</Link>{" "}
        kullanabilirsiniz; adresinizi girdiğinizde title, HTTPS,
        yapılandırılmış veri ve mobil uyum gibi kriterleri saniyeler
        içinde kontrol eder.
      </p>

      <h2 id="yenileme-mi-duzeltme-mi">Yenileme mi, düzeltme mi yeterli?</h2>
      <p>
        Yedi maddeden yalnızca bir-iki tanesi çıkıyorsa (ör. sadece HTTPS
        eksik ya da birkaç eklenti güncel değil), genellikle hedefli bir
        düzeltme yeterli olur. Ama çoğu madde çıkıyorsa, ya da site
        bakımı bırakılmış eski bir CMS üzerine kurulmuşsa, parça parça
        düzeltmek genellikle temelden yeniden yapmaktan daha pahalıya
        gelir; her düzeltme eski mimarinin sınırlarına takılır. Bu
        durumda gerçekçi bir maliyet ve süre için{" "}
        <Link href="/blog/web-sitesi-maliyeti-2026">
          web sitesi maliyeti
        </Link>{" "}
        ve{" "}
        <Link href="/blog/web-sitesi-ne-kadar-surede-tamamlanir">
          tamamlanma süresi
        </Link>{" "}
        yazılarımıza bakabilirsiniz.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        &quot;Eski görünüyor&quot; hissi bazen doğru bir sinyal, bazen
        yanıltıcı; asıl güvenilir gösterge, yukarıdaki yedi testin kaçını
        geçtiğiniz. Bu testler sübjektif değil, birkaç dakikada
        tekrarlanabilir ve sonucu net.
      </p>
      <p>
        Sitenizi bu yedi kritere göre birlikte değerlendirmek isterseniz{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          web sitesi geliştirme hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
