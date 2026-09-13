# Keyword Araştırması & Topic Cluster Mimarisi

_Yöntem: SERP başlık/anlık kutu analizi + arama-niyeti sınıflandırması + hub-and-spoke kümeleme. Hacim rakamları SERP'te yayımlanmadığı için nitel (yüksek/orta/düşük) verilmiştir; kesin hacim için Ads Keyword Planner sonradan bağlanacak._

## 0. Kritik strateji notu — "ajans" gerilimi

Arama hacmi **"web tasarım ajansı", "seo ajansı istanbul", "sosyal medya ajansı istanbul"** terimlerinde yoğun. CLAUDE.md ise TR içerikte "ajans" kelimesini yasaklıyor (self-reference).

**Önerilen çözüm (onay bekliyor):**
- H1 ve marka dili: "hizmet" çatısı ("Web Sitesi ve Yazılım Geliştirme", "SEO ve GEO Hizmeti", "Sosyal Medya Yönetimi") — "ajans" YOK.
- "ajans" arayan kullanıcıyı **meta description + gövde metni + FAQ** üzerinden yakala ("Ajans mı yazılım şirketi mi?" başlıklı FAQ bloğu, karşılaştırma dili).
- "firma", "şirket", "hizmeti" varyantları da hedeflenecek (bunlar yasak değil).
- Net kayıp: "…ajansı istanbul" head teriminde ilk sıralar zor. Kabul edilebilir; Groopy'nin niyeti fiyat/karşılaştırma/GEO uzun-kuyruğunda güçlü olmak.

---

## Küme 1 — Web Sitesi & Yazılım Geliştirme (FLAGSHIP)

**Hub sayfa:** `/hizmetler/web-sitesi-gelistirme` _(karar: 2026-09-02)_
**H1:** "Web Sitesi ve Yazılım Geliştirme"
**Meta title:** `Web Sitesi ve Yazılım Geliştirme | Groopy` (İstanbul)
**Arama niyeti:** ticari (hizmet satın alma) + araştırma (fiyat/karşılaştırma)

Hedef terimler:
- kurumsal web sitesi / kurumsal web sitesi yaptırma _(yüksek)_
- web sitesi geliştirme / web sitesi yaptırma _(yüksek)_
- özel yazılım geliştirme / web yazılım _(orta)_
- web uygulaması geliştirme / web tabanlı yazılım _(orta)_
- e-ticaret sitesi kurma _(orta)_
- next.js geliştirme / modern web geliştirme _(düşük, yüksek nitelik)_
- web sitesi yenileme / redesign _(düşük)_

Spoke içerikler (blog / alt bölüm):
1. **"Web sitesi yaptırma maliyeti 2026: gerçekçi fiyat rehberi"** — çok yüksek niyet, rakipler bu terimde zayıf/uydurma. Cevap-önce + aralık tablosu.
2. "Kurumsal web sitesinde olması gereken 10 özellik"
3. "WordPress mi özel yazılım mı? Karar rehberi" — karşılaştırma niyeti
4. "Core Web Vitals nedir ve neden müşteri kaybettirir" — kendi vitrin argümanı
5. "Next.js neden kurumsal siteler için doğru seçim" — teknik otorite / GEO
6. "Web sitesi ne zaman yenilenmeli? 7 işaret"

## Küme 2 — SEO + GEO Stratejisi

**Hub sayfa:** `/hizmetler/seo-ve-geo`
**H1:** "SEO ve GEO (Yapay Zeka Arama) Stratejisi"
**Meta title:** `SEO ve GEO Stratejisi | Groopy`
**Arama niyeti:** ticari + yükselen bilgi niyeti (GEO nedir)

Hedef terimler:
- seo hizmeti / seo danışmanlığı / istanbul seo _(yüksek)_
- geo / generative engine optimization / yapay zeka arama optimizasyonu _(orta, hızlı büyüyen)_
- ai seo / yapay zeka seo _(orta)_
- chatgpt'de nasıl çıkılır / perplexity optimizasyonu _(düşük, yüksek nitelik)_
- teknik seo / seo denetimi _(orta)_
- yerel seo / google haritalar optimizasyonu _(orta)_

Spoke içerikler:
1. **"GEO nedir? Yapay zeka aramalarında nasıl görünür olunur"** — tanım, answer-first, tanımlayıcı otorite yazısı
2. "SEO ve GEO farkı: hangisi önce gelir?"
3. "ChatGPT, Perplexity ve Google AI Overviews'da markanız nasıl alıntılanır"
4. "llms.txt gerekli mi? Kısa cevap ve kanıt"
5. "2026 teknik SEO kontrol listesi"
6. "İstanbul'daki işletmeler için yerel SEO rehberi"

## Küme 3 — Sosyal Medya Yönetimi

**Hub sayfa:** `/hizmetler/sosyal-medya-yonetimi`
**H1:** "Sosyal Medya Yönetimi"
**Meta title:** `Sosyal Medya Yönetimi | Groopy`
**Arama niyeti:** ticari + fiyat araştırması

Hedef terimler:
- sosyal medya yönetimi / sosyal medya yönetimi hizmeti _(yüksek)_
- instagram yönetimi / işletme instagram hesabı yönetimi _(yüksek)_
- sosyal medya yönetimi fiyatları 2026 _(yüksek, fiyat niyeti)_
- içerik üretimi / sosyal medya içerik takvimi _(orta)_
- linkedin yönetimi / b2b sosyal medya _(düşük)_

Spoke içerikler:
1. **"Sosyal medya yönetimi ne kadar tutar? 2026 fiyat rehberi"** — yüksek niyet
2. "İşletmeler için 30 günlük sosyal medya içerik takvimi nasıl hazırlanır"
3. "Organik sosyal medya mı, reklam mı? Bütçe kılavuzu"

## İkincil hizmetler (homepage'de vurgulanmaz)

| Sayfa | Slug | H1 | Hedef |
|---|---|---|---|
| Yaratıcı Hizmetler | `/hizmetler/yaratici-hizmetler` | "Yaratıcı Hizmetler: Video, Logo, Ses" | video prodüksiyon, logo tasarımı, kurumsal kimlik, ses tasarımı — alt bölümler, ayrı H2'ler |
| Etkinlik & Organizasyon | `/hizmetler/etkinlik-organizasyon` | "Etkinlik ve Organizasyon" | DJ, doğum günü, kurumsal etkinlik, yıl dönümü — **yalnızca footer linki**, ana navigasyonda ve homepage'de yok |

## Meta title kalıbı (tüm site)

`{Sayfa başlığı} | Groopy` — 60 karakter altı. Ana sayfada: `Groopy — İstanbul merkezli yazılım şirketi`.
Description: 150–160 karakter, sayfanın birincil terimini + net fayda + tek CTA imasını içerir.

## URL slug kararları (ASCII, tireli, kısa)

TR kök: `/hizmetler`, `/hizmetler/web-sitesi-gelistirme`, `/hizmetler/seo-ve-geo`, `/hizmetler/sosyal-medya-yonetimi`, `/hizmetler/yaratici-hizmetler`, `/hizmetler/etkinlik-organizasyon`, `/calismalar`, `/calismalar/[slug]`, `/blog`, `/blog/[slug]`, `/hakkimizda`, `/iletisim`

EN `/en`: `/en/services`, `/en/services/web-development`, `/en/services/seo-and-geo`, `/en/services/social-media-management`, `/en/services/creative-services`, `/en/services/events`, `/en/work`, `/en/blog`, `/en/about`, `/en/contact`

## Pazar fiyat aralıkları (referans — sayfalarda "başlayan fiyat" iddiası için değil, kendi konumlandırmamız için)

- Küçük işletme sitesi: 18.000–35.000 TL
- Orta ölçekli kurumsal web: 75.000–140.000 TL
- Stratejik kurumsal / özel yazılım: 90.000–250.000 TL
- E-ticaret: 80.000–500.000 TL
- Sosyal medya yönetimi (aylık): mikro 8–14k, KOBİ 14–28k, orta 28–55k TL

## Kaynaklar

- https://tasarlab.com/web-sitesi-yaptirmak-ne-kadar-tutar-2026-gercekci-fiyat-rehberi/
- https://www.xcodeart.com/blog/web-sitesi-yaptirma-fiyatlari-2026-guncel-maliyet-rehberi
- https://www.seoinno.com/geo-ajansi/
- https://armut.com/istanbul-sosyal-medya-ajansi
- https://kreativty.com/blog/sosyal-medya-yonetimi-ne-kadar-tutar-2026-fiyat-rehberi
