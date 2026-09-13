# İçerik Pili (Content Pillars) & Editoryal Takvim

_Hub-and-spoke: her ana hizmet bir "pillar" (hub sayfa); blog yazıları o hub'a iç link veren "spoke"lar. Amaç: konu otoritesi + fiyat/karşılaştırma uzun-kuyruğunu ele geçirmek + AI alıntısı._

## İç linkleme mimarisi

```
Anasayfa
 ├─► /hizmetler/web-ve-yazilim (HUB 1) ◄─┐
 │      ├─ blog: web sitesi maliyeti 2026 ─┤
 │      ├─ blog: WordPress mi özel yazılım ─┤
 │      ├─ blog: Core Web Vitals ───────────┤ (her spoke hub'a + ilgili
 │      └─ blog: Next.js kurumsal ──────────┘  diğer spoke'a link verir)
 │
 ├─► /hizmetler/seo-ve-geo (HUB 2) ◄─┐
 │      ├─ blog: GEO nedir ────────────┤
 │      ├─ blog: SEO vs GEO ───────────┤
 │      ├─ blog: AI'da alıntılanma ────┤
 │      └─ blog: llms.txt ─────────────┘
 │
 └─► /hizmetler/sosyal-medya-yonetimi (HUB 3) ◄─┐
        ├─ blog: sosyal medya fiyatları 2026 ────┤
        ├─ blog: 30 günlük içerik takvimi ───────┤
        └─ blog: organik mi reklam mı ───────────┘
```

Her blog yazısının sonunda: ilgili hub sayfaya net CTA ("Bu işi sizin için yapalım → Teklif Al").

## Editoryal takvim — İlk çeyrek (Ay 1–3, ~2 yazı/ay)

Öncelik sırası = dönüşüm niyeti × rakip zayıflığı.

### Ay 1
| # | Başlık | Küme | Niyet | Format | Not |
|---|---|---|---|---|---|
| 1 | Web sitesi yaptırma maliyeti 2026: gerçekçi fiyat rehberi | Web/Yazılım | Ticari-yüksek | Cevap-önce + aralık tablosu + "neyi etkiler" listesi | Rakipler uydurma/yüzeysel; en yüksek ROI |
| 2 | GEO nedir? Yapay zeka aramalarında nasıl görünür olunur | SEO/GEO | Bilgi-yükselen | Tanım + answer-first + örnek | Tanımlayıcı otorite yazısı; AI alıntısı hedefi |

### Ay 2
| # | Başlık | Küme | Niyet | Format |
|---|---|---|---|---|
| 3 | Core Web Vitals nedir ve neden müşteri kaybettirir | Web/Yazılım | Bilgi + kanıt | Metrik açıklama + kendi site skoru + düzeltme listesi |
| 4 | Sosyal medya yönetimi ne kadar tutar? 2026 fiyat rehberi | Sosyal Medya | Ticari-yüksek | Cevap-önce + paket aralığı tablosu |

### Ay 3
| # | Başlık | Küme | Niyet | Format |
|---|---|---|---|---|
| 5 | WordPress mi özel yazılım mı? Karar rehberi | Web/Yazılım | Karşılaştırma | Karşılaştırma tablosu + "hangisi kimin için" |
| 6 | SEO ve GEO farkı: hangisi önce gelir? | SEO/GEO | Karşılaştırma | Tablo + sıralı yol haritası |

## Sonraki çeyrek (Ay 4–6) — havuz

- ChatGPT / Perplexity / AI Overviews'da markanız nasıl alıntılanır
- Kurumsal web sitesinde olması gereken 10 özellik
- İşletmeler için 30 günlük sosyal medya içerik takvimi
- 2026 teknik SEO kontrol listesi
- İstanbul'daki işletmeler için yerel SEO rehberi
- Web sitesi ne zaman yenilenmeli? 7 işaret
- llms.txt gerekli mi?
- Organik sosyal medya mı, reklam mı?

## İçerik ilkeleri (CLAUDE.md ile hizalı)

- **Cevap-önce:** İlk paragrafta net sonuç, sonra detay.
- **Abartı yasak:** "garanti", "en iyi", "Türkiye'nin ilki" yok. Doğrulanabilir olmayan yüzde yok.
- **Somut:** Gerçek vaka verisi varsa göster; yoksa mekanizmayı anlat, sayı uydurma.
- **Dil:** "ajans" değil — "ekip", "yazılım şirketi", "stüdyo".
- **Her yazı:** yazar (Person), yayın + güncelleme tarihi, TL;DR kutusu, en az 1 iç link (hub), en az 1 dış otorite kaynağı, `BlogPosting` + (uygunsa) `FAQPage` schema.
- **EN:** Öncelikli 6 yazı çeviri/lokalize edilir (Faz 2+); "software company/studio" ağırlıklı dil.

## v1 kapsamı

v1'de blog **altyapısı** (liste + [slug] + schema + RSS opsiyonel) kurulur; **1 örnek yazı** ile (Yazı #1 — web sitesi maliyeti) devreye alınır. Kalan yazılar lansman sonrası takvime göre.
