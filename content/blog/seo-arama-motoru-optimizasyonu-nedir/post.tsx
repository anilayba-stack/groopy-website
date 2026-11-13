import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "seo-arama-motoru-optimizasyonu-nedir",
  title: "SEO (Arama Motoru Optimizasyonu) Nedir?",
  metaTitle: "SEO Nedir? Google'ın Kendi Tanımı",
  description:
    "Google'ın kendi resmi SEO Başlangıç Kılavuzuna göre SEO nedir, ne değildir ve gerçekte neyi kapsar? Meta keywords, keyword stuffing ve E-E-A-T hakkındaki yaygın efsaneleri Google'ın kendi reddiyle netleştiriyoruz.",
  publishedAt: "2026-11-11",
  tldr: "Google'ın kendi SEO Başlangıç Kılavuzuna göre SEO, arama motorlarının içeriğinizi anlamasına ve kullanıcıların sizi bulmasına yardımcı olma çalışmasıdır — sitenizi otomatik olarak birinci sıraya çıkaracak gizli bir yöntem değildir, ne de dizine eklenmeyi garanti eder. Google aynı kılavuzda birkaç yaygın efsaneyi açıkça reddediyor: meta keywords etiketinin artık bir önemi yok, 'keyword stuffing' işe yaramıyor, ve E-E-A-T doğrudan bir sıralama faktörü değil ('No, it's not' diyor Google kendi sözleriyle). SEO çalışması gerçekte beş alanı kapsıyor: bulunabilirlik, site yapısı, içerik kalitesi, arama sonuçlarındaki görünüm ve tanıtım.",
  author: "Anıl Ay",
  hubService: "seo-ve-geo",
  readingMinutes: 9,
  coverImage: {
    src: "/images/blog/seo-arama-motoru-optimizasyonu-nedir.jpg",
    alt: "Koyu renk ahşap bir zemin üzerinde 'SEO' yazan üç adet ahşap Scrabble harf karesi",
  },
  faq: [
    {
      question: "SEO ile GEO arasındaki fark ne?",
      answer:
        "SEO, klasik Google arama sonuçlarında görünürlüğü hedefler; GEO (Generative Engine Optimization) ise ChatGPT, Perplexity gibi yapay zekâ araçlarının cevaplarında atıf almayı hedefler. İkisi farklı yüzeyler ama çakışan teknikler kullanır. Bu ayrımı SEO Ajansı mı GEO Ajansı mı? yazımızda ayrıntılı ele aldık.",
    },
    {
      question: "Meta keywords etiketi hâlâ önemli mi?",
      answer:
        "Hayır. Google'ın kendi SEO Başlangıç Kılavuzu, meta keywords etiketini artık odaklanılmaması gereken bir yanılgı olarak listeliyor. Bu etiket yıllardır Google'ın sıralama algoritmasında kullanılmıyor.",
    },
    {
      question: "E-E-A-T doğrudan bir sıralama faktörü mü?",
      answer:
        "Hayır — Google'ın kendi kılavuzu bu soruya açıkça 'No, it's not' (Hayır, değil) diyor. E-E-A-T bir kalite çerçevesi; içerik kalitesini değerlendirmeye yardımcı oluyor ama doğrudan ölçülüp puanlanan bir sıralama sinyali değil.",
    },
    {
      question: "Bir SEO çalışması sonuç garantisi verebilir mi?",
      answer:
        "Hayır. Google'ın kendi kılavuzu, hiçbir sitenin dizine ekleneceğinin ya da belirli bir sırada görüneceğinin garanti edilemeyeceğini açıkça belirtiyor. Sonuç garantisi veren herhangi bir teklife bu yüzden temkinli yaklaşmak gerekir.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        SEO hakkında Türkçe içeriklerin çoğu, birbirinden kopyalanmış
        genel tanımlarla dolu. Biz bunun yerine Google&apos;ın kendi resmi{" "}
        <a
          href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          SEO Başlangıç Kılavuzuna
        </a>{" "}
        gittik — ve orada hem net bir tanım hem de yıllardır tekrarlanan
        birkaç efsaneyi Google&apos;ın kendi ağzından reddeden bir liste
        bulduk.
      </p>

      <h2 id="googlenin-tanimi">SEO&apos;nun Google&apos;ın kendi tanımı</h2>
      <p>
        Google&apos;ın kılavuzuna göre SEO, arama motorlarının içeriğinizi
        anlamasına ve kullanıcıların arama yoluyla sitenizi bulup
        bulamayacağına karar vermesine yardımcı olan çalışmadır. Yani SEO
        tek bir teknik hile değil, sitenizin hem makineler hem insanlar
        tarafından anlaşılır olmasını sağlayan bir dizi pratik.
      </p>

      <h2 id="garanti-degil">SEO bir sıralama garantisi değil</h2>
      <p>
        Aynı kılavuz bunu açıkça söylüyor: sitenizi otomatik olarak
        Google&apos;da birinci sıraya çıkaracak gizli bir yöntem yok, ve
        herhangi bir sitenin Google&apos;ın dizinine ekleneceğine dair de
        bir garanti yok. Bu, piyasada sıkça rastlanan &quot;3 ayda 1.
        sırada garantili&quot; türü vaatlerin neden gerçekçi olmadığını da
        açıklıyor — Google&apos;ın kendisi bu tür bir garantinin mümkün
        olmadığını söylüyor.
      </p>

      <h2 id="yaygin-efsaneler">Google&apos;ın &quot;bunlara odaklanmayın&quot; dediği yaygın efsaneler</h2>
      <p>
        Kılavuzun en değerli kısmı, hâlâ birçok Türkçe SEO içeriğinde
        tekrarlanan birkaç efsaneyi doğrudan reddetmesi:
      </p>
      <ul>
        <li>
          <strong>Meta keywords etiketi:</strong> Google, bu etiketin
          artık bir önemi olmadığını açıkça belirtiyor — yıllardır
          sıralamada kullanılmıyor.
        </li>
        <li>
          <strong>Keyword stuffing:</strong> Bir anahtar kelimeyi metne
          sıkıştırmak, kılavuza göre işe yaramıyor; aksine okunabilirliği
          bozduğu için zararlı olabilir.
        </li>
        <li>
          <strong>E-E-A-T bir sıralama faktörü mü?</strong> Google&apos;ın
          kendi cevabı net: &quot;No, it&apos;s not&quot; (Hayır, değil).
          E-E-A-T bir kalite çerçevesi, doğrudan ölçülüp puanlanan bir
          sinyal değil.
        </li>
        <li>
          <strong>Başlık sırası ya da alt alan adı/dizin seçimi gibi
          teknik ayrıntılar:</strong> Kılavuz bunların da sanıldığı kadar
          belirleyici olmadığını belirtiyor.
        </li>
      </ul>

      <h2 id="ne-kapsiyor">SEO çalışması gerçekte neyi kapsıyor?</h2>
      <p>
        Google&apos;ın kendi kılavuzuna göre SEO çalışması beş alanda
        toplanıyor: Google&apos;ın sitenizi bulabilmesini sağlamak
        (dizine kayıt durumu, site haritası, diğer sitelerden gelen
        bağlantılar); site yapısını düzenlemek (açıklayıcı URL&apos;ler,
        yinelenen içeriği azaltmak); içeriği kullanıcı için faydalı
        kılmak (okunabilir, özgün, güncel içerik); arama sonuçlarındaki
        görünümü iyileştirmek (başlık ve meta açıklama); ve sitenizi
        tanıtmak (sosyal medya, topluluk katılımı, ağızdan ağıza). Bu
        beş alan,{" "}
        <Link href="/blog/googlede-neden-cikmiyorum">
          Google&apos;da neden çıkmadığınızı
        </Link>{" "}
        anlamak için de iyi bir kontrol listesi oluşturuyor.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        SEO, Google&apos;ın kendi tanımına göre sitenizi hem arama
        motorları hem kullanıcılar için anlaşılır kılma çalışması — sihirli
        bir sıralama hilesi değil. Meta keywords, keyword stuffing ya da
        E-E-A-T&apos;in doğrudan bir sıralama faktörü olduğu gibi
        efsaneler Google&apos;ın kendi kılavuzunda açıkça reddediliyor.
        SEO&apos;nun yapay zekâ arama araçlarındaki karşılığı olan GEO
        için{" "}
        <Link href="/blog/geo-nedir">GEO Nedir?</Link> yazımıza
        bakabilirsiniz. Sitenizin SEO durumunu birlikte değerlendirmemizi
        isterseniz{" "}
        <Link href="/hizmetler/seo-ve-geo">
          SEO ve GEO Stratejisi hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
