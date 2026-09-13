# GEO Stratejisi — Groopy'nin Kendi Vitrin Projesi

_Amaç: Groopy'nin kendi sitesi, "AI aramasında bulunma" hizmetinin en güçlü kanıtı olmalı. Bu dosya, siteye v1'de gömülecek GEO altyapısını ve lansman sonrası görevleri ayırır._

## 1. Neden önemli (kanıt cümlesi)

Klasik organik arama hâlâ AI motorlarının toplamından ~345 kat fazla trafik gönderiyor (2025 sonu). Yani **GEO, SEO'nun yerine geçmez, tamamlar.** Groopy'nin mesajı: "İkisini birlikte kuruyoruz ve önce kendi sitemizde kanıtladık."

## 2. v1'de siteye gömülecek GEO altyapısı

### 2.1 Crawler erişimi — `robots.ts`
Açıkça izinli (Allow):
- `GPTBot`, `OAI-SearchBot`, `ChatGPT-User` (OpenAI)
- `ClaudeBot`, `Claude-User`, `Claude-SearchBot` (Anthropic)
- `PerplexityBot`, `Perplexity-User`
- `Google-Extended` (Gemini/Vertex eğitim + AI Overviews grounding)
- `Applebot-Extended`
- `CCBot` (Common Crawl — birçok modelin veri kaynağı)
- Standart: `Googlebot`, `Bingbot` (ChatGPT web arama Bing indeksini kullanır → Bing kritik)

Hiçbiri engellenmeyecek. `Disallow` sadece gerçek özel yollar için (yok denecek kadar az).

### 2.2 `llms.txt` (kök dizin)
Düşük maliyet, potansiyel fayda. Groopy'nin ne yaptığı, ana hizmet sayfaları ve iletişim bilgisini düz metinle özetler. (Google bunu yok sayar; bazı AI araçları kullanır. Bkz. spoke içerik "llms.txt gerekli mi".)

### 2.3 Yapılandırılmış veri (JSON-LD) — `lib/seo.ts`
- `Organization` — ad, logo, url, `sameAs` (tüm sosyal profiller), `contactPoint`
- `LocalBusiness` — **yalnızca doğrulanabilir fiziksel ofis adresi varsa** (site-config'te bayrak)
- `WebSite` + `SearchAction` (varsa site içi arama)
- `Service` — her ana hizmet sayfası için ayrı, `provider` = Organization
- `BreadcrumbList` — tüm iç sayfalar
- `Person` — kurucu(lar), `Article` yazarları için (E-E-A-T)
- `Article` / `BlogPosting` — `author`, `datePublished`, `dateModified` görünür
- `FAQPage` — FAQ bloğu olan sayfalarda
- **Uydurma `AggregateRating` / `Review` YOK** (CLAUDE.md).

### 2.4 İçerik formatı kuralları (answer-first)
- Her hizmet/blog sayfası: üstte 2–3 cümlelik net cevap kutusu (TL;DR / "Kısa cevap").
- İddialar spesifik ve doğrulanabilir: "%X arttı" yerine gerçek vaka verisi veya hiç sayı yok.
- Kısa, alıntılanabilir paragraflar; veri tablosu; Q&A bölümleri.
- Yazar + yayın tarihi + güncelleme tarihi görünür.
- Entity netliği: marka adı, konum, hizmet adları tutarlı yazılır (site-config tek kaynak).

### 2.5 Teknik temel (AI crawler'lar JS render etmez varsay)
- Server Components varsayılan → içerik HTML'de hazır gelir.
- Kritik metin `"use client"` ardında saklanmaz.
- Temiz semantik HTML, tek `h1`, mantıklı başlık hiyerarşisi.
- Hızlı LCP, self-host font, gereksiz JS yok.

## 3. Lansman sonrası görevler (v1 kapsamı DIŞI — takip listesi)

1. **Bing Webmaster Tools** hesabı + sitemap gönderimi (ChatGPT web arama için kritik).
2. Google Search Console + sitemap.
3. IndexNow entegrasyonu (Bing hızlı indeksleme).
4. 5–10 güvenilir TR yayın/dizinde marka bahsi:
   - dijitalajanslar.com, edvido.com, sortlist, clutch profilleri (doğrulanmış)
   - TR teknoloji/girişim yayınlarında kurucu köşe yazısı / uzman görüşü
5. Kurucu LinkedIn + kişisel `Person` schema tutarlılığı.
6. AI görünürlük ölçümü: ChatGPT/Perplexity/AI Overviews'da "İstanbul yazılım şirketi", "web sitesi + GEO hizmeti" sorgularında Groopy alıntılanıyor mu — aylık kontrol.
7. Yayın–alıntı gecikmesi: ChatGPT'de görünmek 4–8 hafta sürebilir; içerik takvimi buna göre.

## 4. Ölçüm çerçevesi

| Metrik | Araç | Hedef (ilk 6 ay) |
|---|---|---|
| Core Web Vitals (field) | CrUX / PageSpeed | Tüm sayfalar "Good" |
| Organik tıklama | GSC | Baseline kur, ay-ay artış |
| AI alıntı sıklığı | Manuel sorgu paneli | 3 hedef sorguda ≥1 alıntı |
| İletişim formu dönüşümü | Sunucu logu / CRM (kurulunca) | Baseline kur |

## Kaynaklar

- https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026
- https://www.frase.io/blog/how-to-get-cited-by-ai-search-engines-the-complete-geo-playbook
- https://www.yotpo.com/blog/chatgpt-seo-geo-tips/
- https://www.mersel.ai/generative-engine-optimization
