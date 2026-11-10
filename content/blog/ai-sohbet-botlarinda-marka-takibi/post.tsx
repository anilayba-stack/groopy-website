import Link from "next/link";
import type { BlogPostMeta } from "../../types";

export const meta: BlogPostMeta = {
  slug: "ai-sohbet-botlarinda-marka-takibi",
  title: "Markanız ChatGPT, Perplexity, Gemini ve Claude'da Geçiyor mu? Ücretsiz Takip Yöntemi",
  metaTitle: "ChatGPT, Perplexity, Gemini ve Claude'da Marka Takibi",
  description:
    "Markanızın dört büyük AI sohbet botunda (ChatGPT, Perplexity, Gemini, Claude) bahsedilip bahsedilmediğini ücretsiz, düzenli olarak nasıl takip edersiniz — hazır promptlar ve kayıt şablonuyla.",
  publishedAt: "2026-11-10",
  tldr: "Markanızın ChatGPT, Perplexity, Gemini ve Claude'da bahsedilip bahsedilmediğini ölçen resmi, ücretsiz bir araç hiçbirinde yok. Tek güvenilir yöntem, her platforma aynı üç soru tipini (marka adı, kategori sorgusu, rakip karşılaştırması) düzenli aralıklarla sormak ve sonucu kaydetmek. Bu yazıda dört platform için ayrı hazır promptlar ve basit bir takip tablosu şablonu var. Ücretli, otomatik izleme araçları da piyasada var ama bu yazı onlardan isim vermiyor; önce ücretsiz manuel yöntemle başlamanızı öneriyoruz.",
  author: "Anıl Ay",
  hubService: "seo-ve-geo",
  readingMinutes: 8,
  coverImage: {
    src: "/images/blog/ai-sohbet-botlarinda-marka-takibi.jpg",
    alt: "Bir kişinin elinde tuttuğu telefonda ChatGPT uygulamasının açılış ekranı",
  },
  faq: [
    {
      question: "ChatGPT, Perplexity, Gemini veya Claude'da markamı ölçen ücretsiz resmi bir araç var mı?",
      answer:
        "Hayır. OpenAI, Perplexity, Google ve Anthropic'in hiçbiri, hangi markaların hangi sorguda ne sıklıkla geçtiğini gösteren kamuya açık bir panel yayımlamıyor. Bu yazıdaki manuel test yöntemi şu an için en güvenilir ücretsiz alternatif.",
    },
    {
      question: "Tek bir soruda markam çıkmadı, bu kötü bir işaret mi?",
      answer:
        "Tek başına hayır. AI modellerinin cevapları aynı soruda bile oturumdan oturuma değişebilir; bu yüzden tek bir test değil, düzenli aralıklarla tekrarlanan bir rutin öneriyoruz. Birkaç hafta üst üste hiç geçmiyorsa, o zaman gerçek bir görünürlük sorunu olabilir.",
    },
    {
      question: "Ücretli marka takip araçları işe yarar mı?",
      answer:
        "Piyasada bu işi otomatikleştiren ücretli araçlar var; düzenli, çok sayıda sorguyu otomatik takip etmek isteyenler için zaman kazandırabilirler. Ama hiçbiri de %100 kesin bir sonuç vermez — aynı belirsizlik AI modellerinin doğasından geliyor. Bu yazı, önce ücretsiz yöntemle başlayıp ihtiyacı gerçekten hissettiğinizde o seçeneğe bakmanızı öneriyor.",
    },
    {
      question: "Bu testi ne sıklıkla tekrarlamalıyım?",
      answer:
        "Ayda bir makul bir başlangıç noktası. Yeni içerik yayımladığınız veya bir PR/basın haberi çıktığı dönemlerde ekstra bir kontrol eklemek, değişimin etkisini daha net görmenizi sağlar.",
    },
  ],
};

export function Body() {
  return (
    <>
      <p>
        Markanızın ChatGPT&apos;de, Perplexity&apos;de, Gemini&apos;de ya da
        Claude&apos;da geçip geçmediğini merak ediyorsanız, kötü haberle
        başlayalım: bunu ölçen resmi, ücretsiz bir panel hiçbirinde yok.
        İyi haber ise şu — düzenli, basit bir manuel rutinle bunu kendiniz
        takip edebilirsiniz; bu yazıda dört platform için ayrı hazır
        promptlar ve kaydetmeniz için basit bir şablon var.
      </p>

      <h2 id="neden-takip">Neden düzenli takip etmeli, tek seferlik bakış neden yetmez</h2>
      <p>
        AI sohbet botlarının cevapları durağan değil: aynı soruyu bugün ve
        bir hafta sonra sorduğunuzda farklı bir cevap alabilirsiniz. Model
        güncellemeleri, canlı arama sonuçlarındaki değişim ve basit rastgelelik
        bunun nedenleri arasında.{" "}
        <Link href="/blog/chatgptde-markaniz-nasil-gorunur-olur">
          ChatGPT özelinde bu iki katmanlı yapıyı (dondurulmuş eğitim verisi
          ile canlı arama arasındaki fark) ayrı bir yazıda ele aldık
        </Link>
        ; burada odak farklı — tek bir platformun iç mekaniği değil, dört
        platformu birlikte, düzenli olarak nasıl izleyeceğiniz.
      </p>
      <p>
        Tek seferlik bir test size yalnızca o anki bir fotoğrafı verir.
        Asıl değerli olan, bu fotoğrafı ayda bir tekrarlayıp bir zaman
        çizelgesi oluşturmak — markanız hiç geçmiyordu, üç ay sonra
        geçmeye başladıysa, bu neyin işe yaradığını anlamanıza yardımcı olur.
      </p>

      <h2 id="dort-platform">Dört platform için hazır promptlar</h2>
      <p>
        Her platformda gizli/özel bir tarayıcı sekmesinde, oturum açmadan
        test edin — geçmiş sorgularınız sonucu etkilemesin. Her birinde
        aynı üç soru tipini deneyin: doğrudan marka adınız, kategori
        sorgusu (şehir + hizmet) ve rakip karşılaştırması.
      </p>

      <h3 id="chatgpt">
        <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
          ChatGPT
        </a>
      </h3>
      <ul>
        <li>&quot;[Marka adınız] nedir, ne iş yapar?&quot;</li>
        <li>&quot;[Şehir]&apos;de [hizmetiniz] için hangi şirketleri önerirsin?&quot;</li>
        <li>&quot;[Marka adınız] ile [bir rakip] arasındaki fark ne?&quot;</li>
      </ul>
      <p>
        Cevapta markanız geçiyorsa hangi bağlamda geçtiğine bakın (önerilen
        bir seçenek olarak mı, yoksa sadece bir örnek olarak mı) ve kaynak
        gösterilip gösterilmediğini not edin.
      </p>

      <h3 id="perplexity">
        <a
          href="https://www.perplexity.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Perplexity
        </a>
      </h3>
      <ul>
        <li>&quot;[Marka adınız] hakkında bilgi ver.&quot;</li>
        <li>&quot;[Şehir]&apos;de [hizmetiniz] için en iyi seçenekler neler?&quot;</li>
        <li>&quot;[Marka adınız] güvenilir mi, kullanıcı yorumları nasıl?&quot;</li>
      </ul>
      <p>
        Perplexity her cevabın altında kaynak linkleri gösterir — markanız
        geçtiğinde hangi sayfanıza (veya başka bir siteye) link verildiğine
        özellikle bakın; bu, hangi içeriğinizin kaynak olarak görüldüğünü
        gösterir.
      </p>

      <h3 id="gemini">
        <a
          href="https://gemini.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gemini
        </a>
      </h3>
      <ul>
        <li>&quot;[Marka adınız] kimdir, hangi hizmetleri sunar?&quot;</li>
        <li>&quot;[Şehir]&apos;de [hizmetiniz] arıyorum, önerin var mı?&quot;</li>
        <li>&quot;[Marka adınız] ve [bir rakip] hangisi daha uygun?&quot;</li>
      </ul>
      <p>
        Gemini, Google&apos;ın arama altyapısıyla bağlantılı çalışıyor;
        bu yüzden burada görünürlüğünüz klasik Google SEO temelinizle de
        ilişkili olabilir.
      </p>

      <h3 id="claude">
        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
          Claude
        </a>
      </h3>
      <ul>
        <li>&quot;[Marka adınız] hakkında ne biliyorsun?&quot;</li>
        <li>&quot;[Şehir]&apos;de [hizmetiniz] için kimi önerirsin?&quot;</li>
        <li>&quot;[Marka adınız] ne zaman kuruldu, ne iş yapıyor?&quot;</li>
      </ul>
      <p>
        Claude, web araması açık olmadığı sürece büyük ölçüde eğitim
        verisine dayanır; yeni ya da küçük bir marka için burada hiç
        geçmemek normaldir, özellikle web araması kapalıysa.
      </p>

      <h2 id="kayit-tablosu">Sonuçları nasıl kaydedersiniz</h2>
      <p>
        Karmaşık bir sisteme gerek yok — basit bir tablo (bir not uygulaması,
        Google E-Tablolar, hatta kağıt) yeterli. Her ay aynı satırları
        doldurun:
      </p>
      <table>
        <thead>
          <tr>
            <th>Tarih</th>
            <th>Platform</th>
            <th>Soru tipi</th>
            <th>Markanız geçti mi?</th>
            <th>Bağlam / not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026-11</td>
            <td>ChatGPT</td>
            <td>Kategori sorgusu</td>
            <td>Hayır</td>
            <td>Üç rakip önerildi, biz geçmedik</td>
          </tr>
          <tr>
            <td>2026-11</td>
            <td>Perplexity</td>
            <td>Marka adı</td>
            <td>Evet</td>
            <td>Kaynak: kendi web sitemiz</td>
          </tr>
        </tbody>
      </table>
      <p>
        Üç-dört ay sonra bu tablo, hangi platformda ilerleme kaydettiğinizi
        ve hangisinde hâlâ görünmediğinizi net şekilde gösterir.
      </p>

      <h2 id="ne-zaman-endiselen">Ne zaman endişelenmeli, ne zaman normal karşılamalı</h2>
      <p>
        Yeni ya da küçük bir markaysanız, dört platformun hiçbirinde hemen
        geçmemeniz beklenen bir durum — eğitim verisi belirli bir tarihte
        donduruluyor ve küçük markalar bu veride genellikle az yer alıyor.
        Asıl dikkat etmeniz gereken, aylar süren bir takipte hiçbir
        ilerleme görülmemesi; bu durumda site-dışı görünürlüğünüzü
        (bağımsız kaynaklarda, dizinlerde, basında geçme sıklığınızı)
        gözden geçirmek daha anlamlı bir adım olur.
      </p>
      <p>
        Tek bir testte &quot;çıkmadım&quot; sonucunu almak da normal —
        yukarıda belirttiğimiz gibi cevaplar oturumdan oturuma değişebiliyor.
        Panik yapmadan önce aynı soruyu birkaç gün arayla tekrar deneyin.
      </p>

      <h2 id="ucretsiz-tamamlayici">Ücretsiz tamamlayıcı araçlar</h2>
      <p>
        Yukarıdaki manuel test dışında, tamamen ücretsiz iki araç bu işe
        destek olabilir — ikisi de AI sohbet botlarına özel değil, ama
        markanızın web&apos;deki genel görünürlüğünü (ki bu, AI
        modellerinin sizi &quot;tanımasını&quot; da besliyor) izlemenize
        yarıyor:
      </p>
      <ul>
        <li>
          <a
            href="https://www.google.com/alerts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Alerts
          </a>
          : Marka adınızı e-posta ile takip eden, tamamen ücretsiz bir
          Google aracı. AI sohbet botlarını doğrudan izlemez ama markanız
          web&apos;de yeni bir yerde geçtiğinde haberdar olursunuz — bu,
          yukarıdaki &quot;site-dışı görünürlük&quot; birikiminin kaynağını
          görmenizi sağlar.
        </li>
        <li>
          <a
            href="https://search.google.com/search-console/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Console
          </a>
          : Zaten kurulu olan arama performansı
          raporunuz, Google tarafında (AI Overviews dahil, veri mevcut
          olduğunda) markanızla ilgili arama görünürlüğünü gösterir —
          ChatGPT/Perplexity gibi üçüncü taraf platformları kapsamaz ama
          Google&apos;ın kendi yapay zekâ özelliklerindeki görünürlüğünüz
          için en yakın ücretsiz kaynak budur.
        </li>
      </ul>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        Markanızın AI sohbet botlarında geçip geçmediğini kesin olarak
        ölçen ücretsiz, resmi bir araç yok — ama bu, elinizin boş olduğu
        anlamına gelmiyor. Dört platformda aynı üç soru tipini ayda bir
        tekrarlayıp sonucu bir tabloya kaydetmek, zaman içinde gerçek bir
        resim oluşturur. Site-içi teknik kurulumun tamamı için{" "}
        <Link href="/blog/geo-nedir">GEO Nedir?</Link> yazımıza, ChatGPT&apos;nin
        iki katmanlı yapısı için{" "}
        <Link href="/blog/chatgptde-markaniz-nasil-gorunur-olur">
          ChatGPT&apos;de markanız nasıl görünür olur
        </Link>{" "}
        yazımıza bakabilirsiniz.
      </p>
      <p>
        Takibi sizin yerinize kurup düzenli raporlamasını istiyorsanız{" "}
        <Link href="/hizmetler/seo-ve-geo">
          SEO ve GEO Stratejisi hizmetimize
        </Link>{" "}
        bakabilir ya da{" "}
        <Link href="/iletisim">bir görüşme planlayabilirsiniz</Link>.
      </p>
    </>
  );
}
