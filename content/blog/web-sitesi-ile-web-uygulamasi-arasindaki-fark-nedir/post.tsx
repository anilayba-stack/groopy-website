import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "web-sitesi-ile-web-uygulamasi-arasindaki-fark-nedir",
  title: "Web Sitesi ile Web Uygulaması Arasındaki Fark Nedir?",
  metaTitle: "Web Sitesi ile Web Uygulaması Farkı Nedir?",
  description:
    "Bir web sitesi içerik sunar, bir web uygulaması veriyi işler. Google'ın web.dev kaynağındaki modern web uygulaması tanımına dayanarak bu farkı ve işletmeniz için hangisinin gerekli olduğunu açıklıyoruz.",
  publishedAt: "2026-11-11",
  tldr: "Temel fark amaçta: bir web sitesi ziyaretçiye içerik sunmak için var, bir web uygulaması ise kullanıcının veri girip bir işlem tamamlamasını sağlamak için. Google'ın web.dev kaynağına göre modern bir web uygulamasını 'capable' (platform-özel yazılımlara yakın yetenekler), 'reliable' (ağ durumundan bağımsız hızlı ve güvenilir) ve 'installable' (tarayıcı dışında kendi penceresinde çalışabilen) üç özellik tanımlıyor. Pratikte sınır bulanık: bir forma sahip bir site bile basit bir uygulama sayılabilir. İşletmeniz için doğru soru 'hangi isim doğru' değil, 'ne kadar özel işlev gerekiyor'.",
  author: "Anıl Ay",
  hubService: "web-sitesi-gelistirme",
  readingMinutes: 8,
  coverImage: {
    src: "/images/blog/web-sitesi-ile-web-uygulamasi-arasindaki-fark-nedir.jpg",
    alt: "Bir dizüstü bilgisayar ekranında web analitik panosu (dashboard) görüntüsü, aydınlık bir oturma odasında",
  },
  faq: [
    {
      question: "Bir web sitesine iletişim formu eklemek onu web uygulaması yapar mı?",
      answer:
        "Tek başına hayır. Basit bir iletişim formu, sitenin ağırlıklı karakterini değiştirmez — site hâlâ esas olarak içerik sunuyor. Sınır, kullanıcının girdiği verinin saklanıp işlenmesi, hesap/oturum yönetimi gerektirmesi veya gerçek zamanlı bir sonuç üretmesiyle bulanıklaşmaya başlıyor.",
    },
    {
      question: "WordPress ile web uygulaması yapılabilir mi?",
      answer:
        "Sınırlı ölçüde eklentilerle mümkün, ama WordPress temelde bir içerik yönetim sistemi olarak tasarlandı. Karmaşık, özel iş mantığı gerektiren bir uygulama için amaca özel yazılmış bir yapı (örneğin Next.js) genellikle daha sürdürülebilir; bu kararı Wordpress mi Next.js mi yazımızda ayrıntılı ele aldık.",
    },
    {
      question: "Web uygulaması geliştirmek neden daha karmaşık ve maliyetli?",
      answer:
        "Bir web sitesi büyük ölçüde sabit sayfalardan oluşurken, bir web uygulaması veri saklama, kullanıcı doğrulama, iş mantığı ve genellikle bir veritabanı gerektirir — yani arka uç (backend) geliştirme devreye girer. Bu, test edilmesi ve bakımı gereken fazladan bir katman demektir.",
    },
    {
      question: "Randevu/rezervasyon sistemi bir web uygulaması örneği mi?",
      answer:
        "Evet — kullanıcının müsaitlik verisiyle etkileşime girip bir işlem (randevu oluşturma) tamamladığı, arka planda veri işleyen klasik bir web uygulaması örneği. Bu tür bir sistemin nasıl kurulduğunu Randevu/Rezervasyon Sistemi Nasıl Yapılır? yazımızda ayrıntılı anlattık.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        &quot;Bize bir web sitesi mi lazım, yoksa web uygulaması mı?&quot;
        sorusu, aslında çoğu işletme sahibinin net bir cevabı olmadan
        sorduğu bir soru. İkisi de tarayıcıda açılıyor, ikisi de bir
        sunucudan geliyor — ama aralarındaki fark, projenin hem maliyetini
        hem karmaşıklığını doğrudan belirliyor.
      </p>

      <h2 id="temel-fark">Temel fark: içerik sunmak mı, veri işlemek mi?</h2>
      <p>
        Bir web sitesi, ağırlıklı olarak içerik sunmak için vardır:
        ziyaretçi sayfaya gelir, okur, ayrılır. Bir web uygulaması ise
        kullanıcının veriyle etkileşime girip bir görevi tamamlamasına
        odaklanır — veri saklar, işler ve kullanıcının ihtiyacına göre
        bir sonuç üretir. Bir haber sitesi ya da kurumsal tanıtım sayfası
        bu ayrımın &quot;site&quot; tarafında; bir bankacılık paneli, bir
        randevu sistemi ya da bir proje yönetim aracı &quot;uygulama&quot;
        tarafında yer alır.
      </p>

      <h2 id="uc-ozellik">Modern bir web uygulamasının üç özelliği</h2>
      <p>
        Google&apos;ın{" "}
        <a
          href="https://web.dev/articles/what-are-pwas"
          target="_blank"
          rel="noopener noreferrer"
        >
          web.dev kaynağına göre
        </a>{" "}
        modern bir web uygulamasını üç özellik tanımlıyor: &quot;capable&quot;
        — video görüşme, konum servisleri ya da bildirim gibi daha önce
        yalnızca platforma özel yazılımların sunabildiği yetenekleri modern
        API&apos;lerle sağlayabilmesi; &quot;reliable&quot; — ağ durumundan
        bağımsız olarak hızlı ve güvenilir hissettirmesi, yavaş ya da
        çevrimdışı bağlantılarda da hızlı yüklenmesi; ve &quot;installable&quot;
        — tarayıcıdan ayrılıp kendi penceresinde, ana ekrandan ya da
        görev çubuğundan başlatılabilmesi.{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Modern_web_apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN&apos;nin tanımı
        </a>{" "}
        da benzer bir çerçeve çiziyor: kurulabilir, çevrimdışı çalışabilir
        ve sunucudan kullanıcıyı yeniden etkileşime çağırabilir olmayı öne
        çıkarıyor. Bir web sitesi bu üç özelliğin hiçbirine ihtiyaç
        duymaz; bir web uygulaması genellikle en az birini gerektirir.
      </p>

      <h2 id="sinir-bulaniklasiyor">Sınır nerede bulanıklaşıyor?</h2>
      <p>
        Pratikte bu iki uç arasında geniş bir gri alan var. Kullanıcının
        kayıt olup yorum yazabildiği bir haber sitesi, teknik olarak
        web uygulaması tanımına girmeye başlar. Bu yüzden doğru soru
        &quot;bu bir site mi uygulama mı&quot; değil, &quot;ne kadar özel
        iş mantığı ve veri işleme gerekiyor&quot;. Bir e-ticaret sitesi
        bile ürün kataloğu tarafında bir site gibi, sepet/ödeme tarafında
        bir uygulama gibi davranıyor —{" "}
        <Link href="/blog/wordpress-mi-nextjs-mi">
          platform seçimi
        </Link>{" "}
        bu yüzden sitenin hangi kısmının ne kadar &quot;uygulama&quot;
        karakterine sahip olduğuna göre şekilleniyor.
      </p>

      <h2 id="hangisi-gerekli">İşletmeniz için hangisi gerekli?</h2>
      <p>
        Bir tanıtım sayfası, hizmet listesi ya da blog için klasik bir web
        sitesi yeterli ve çok daha hızlı/ucuz bir seçenek. Ama işletmeniz
        randevu almak, üyelik yönetmek, stok takibi yapmak ya da
        müşteriye özel bir panel sunmak istiyorsa, ihtiyacınız olan şey
        aslında bir web uygulaması —{" "}
        <Link href="/blog/randevu-rezervasyon-sistemi-nasil-yapilir">
          randevu/rezervasyon sistemi
        </Link>{" "}
        bunun somut bir örneği. Bu kararı vermeden önce{" "}
        <Link href="/blog/web-sitesi-kurmak-icin-neler-gerekli">
          domain, hosting ve platform temellerini
        </Link>{" "}
        anlamak da faydalı, çünkü bir web uygulamasının hosting ve altyapı
        gereksinimleri basit bir sitenin ötesine geçebiliyor.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Web sitesi içerik sunar, web uygulaması veri işler ve bir görevi
        tamamlatır — ama gerçek projelerin çoğu bu iki ucun arasında bir
        yerde duruyor. Doğru soru, hangi etiketi kullandığınız değil,
        işletmenizin hangi işlevlere gerçekten ihtiyaç duyduğu. Projenizin
        hangi tarafta durduğunu birlikte netleştirmemizi isterseniz{" "}
        <Link href="/hizmetler/web-sitesi-gelistirme">
          Web Sitesi / Yazılım Geliştirme hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
