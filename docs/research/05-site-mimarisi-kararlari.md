# Araştırma → Site Mimarisi Kararları (Sentez)

Bu dosya, 01–04 araştırma bulgularının siteyi nasıl şekillendirdiğini tek yerde toplar. Faz 1 uygulaması bunu referans alır.

## 1. Konumlandırma & anasayfa mesaj hiyerarşisi

**Boşluk (01):** Pazar "her şeyi yapan, gradient'li dijital ajans" generalistleriyle dolu. Mühendislik-öncelikli, kendi sitesi teknik kanıt olan bir "yazılım şirketi" yok.

**Anasayfa yapısı (tek hero, CLAUDE.md ile hizalı):**
1. **Hero** — tek H1. Somut, sloansız. Taslak:
   - H1: "İşletmeniz için hızlı, bulunabilir web siteleri ve yazılım."
   - Alt: "Groopy bir yazılım şirketi. Web geliştirme, SEO + GEO ve sosyal medya yönetimini tek ekiple yürütüyoruz. İstanbul merkezli; Türkiye ve yurt dışına."
   - Tek CTA: **"Teklif Al"** → `/iletisim` (ikincil, sessiz link: "Hizmetleri gör")
2. **Ana hizmetler (3)** — Web & Yazılım (flagship, en büyük kart), SEO + GEO, Sosyal Medya. Her biri Lucide ikon + 1 cümle + sayfaya link.
3. **Kanıt bandı** — yalnızca gerçek/doğrulanabilir: bu sitenin Core Web Vitals durumu, kullanılan teknoloji (Next.js, self-host, sıfır gereksiz JS), yanıt süresi taahhüdü. **Uydurma sayı yok.** Gerçek müşteri/logo izni gelince eklenir.
4. **Yaklaşım / süreç** — kısa 3–4 adım (şeffaflık kaması).
5. **İkincil hizmetler** — tek satır: "Ayrıca: video prodüksiyon, logo & kurumsal kimlik, ses tasarımı." → `/hizmetler/yaratici-hizmetler`. Etkinlik linki burada değil, footer'da.
6. **Kapanış CTA bandı** — "Projenizi konuşalım." → `/iletisim`.

Rakip CTA çokluğu (WhatsApp + telefon + form + "ücretsiz analiz") **taklit edilmeyecek** — sayfa başına tek birincil CTA (CLAUDE.md).

## 2. Navigasyon

**Ana nav (header):**
`Hizmetler ▾` | `Çalışmalar` | `Blog` | `Hakkımızda` | **[Teklif Al]** (buton)

`Hizmetler ▾` dropdown/mega:
- Web Sitesi ve Yazılım Geliştirme
- SEO ve GEO Stratejisi
- Sosyal Medya Yönetimi
- ── ayraç ──
- Yaratıcı Hizmetler
- Tüm hizmetler →

**Footer:**
- Sütun 1: Ana hizmetler (3)
- Sütun 2: Yaratıcı Hizmetler, **Etkinlik & Organizasyon** (← tek görünür yeri), Çalışmalar, Blog
- Sütun 3: Hakkımızda, İletişim, sosyal profiller
- Alt satır: telif, dil geçişi (TR / EN), gizlilik

Etkinlik & Organizasyon: sayfası var, footer'da bir link, ana nav'da ve homepage'de **yok** (CLAUDE.md onaylı karar).

## 3. Kesin route haritası

### TR (kök)
| Route | Sayfa | v1 durumu |
|---|---|---|
| `/` | Anasayfa | tam |
| `/hizmetler` | Hizmetlere genel bakış | tam |
| `/hizmetler/web-sitesi-gelistirme` | Flagship hizmet | tam |
| `/hizmetler/seo-ve-geo` | SEO + GEO hizmet | tam |
| `/hizmetler/sosyal-medya-yonetimi` | Sosyal medya hizmet | tam |
| `/hizmetler/yaratici-hizmetler` | Video + logo + ses (H2 bölümleri) | tam |
| `/hizmetler/etkinlik-organizasyon` | Etkinlik | ince ama gerçek |
| `/calismalar` | Vaka çalışmaları listesi | "yakında" durumu (gerçek içerik yok) |
| `/calismalar/[slug]` | Vaka detayı | altyapı hazır, içerik yok |
| `/blog` | Blog listesi | tam |
| `/blog/[slug]` | Blog yazısı | 1 örnek yazı |
| `/hakkimizda` | Hakkımızda | tam |
| `/iletisim` | İletişim + form | tam (form server-side validasyon; e-posta/CRM YOK — TODO) |

### EN (`/en`) — Faz 2
Yukarıdakinin aynası: `/en`, `/en/services`, `/en/services/web-and-software`, `/en/services/seo-and-geo`, `/en/services/social-media-management`, `/en/services/creative-services`, `/en/services/events`, `/en/work`, `/en/work/[slug]`, `/en/blog`, `/en/blog/[slug]`, `/en/about`, `/en/contact`

### Sistem route'ları
`/sitemap.xml` (`sitemap.ts`), `/robots.txt` (`robots.ts`), `/manifest.webmanifest` (`manifest.ts`), `/llms.txt` (statik veya route), `not-found.tsx`

## 4. SEO/GEO uygulama checklist'i (Faz 1)

- [ ] `lib/seo.ts`: `buildMetadata()` — her sayfa benzersiz title/description, canonical, hreflang (tr ↔ en), OpenGraph + Twitter Card
- [ ] `sitemap.ts`: tüm statik + içerik route'ları, `alternates.languages`
- [ ] `robots.ts`: AI crawler'lar açık (bkz. 03 §2.1), sitemap referansı
- [ ] `manifest.ts`
- [ ] `/llms.txt`
- [ ] JSON-LD: `Organization` (root layout), `Service` (her hizmet), `BreadcrumbList` (iç sayfalar), `BlogPosting` + `Person` (blog)
- [ ] Server Components varsayılan; hero metni HTML'de
- [ ] `next/font` self-host Inter; LCP görseli varsa `priority`
- [ ] Tek `h1`/sayfa, semantik başlık hiyerarşisi
- [ ] Her hizmet & blog sayfasında "Kısa cevap" (TL;DR) bloğu

## 5. Onaylanan kararlar (2026-09-02)

1. **"ajans" keyword yaklaşımı:** Önerilen uzlaşma. H1/marka dilinde "ajans" YOK; "…ajansı istanbul" trafiği FAQ ("Ajans mı yazılım şirketi mi?") + meta description + gövde metniyle yakalanır.
2. **Birincil CTA:** "Teklif Al" (sayfa başına tek), → `/iletisim`.
3. **Flagship slug:** `/hizmetler/web-sitesi-gelistirme`.
4. **İletişim:** Form + server action + server-side validasyon; gönderim hedefi = kullanıcının vereceği e-posta (entegrasyon placeholder, onayla bağlanır). Telefon/WhatsApp footer'da (kullanıcı verecek).

## 6. Hâlâ kullanıcıdan gereken bilgiler

- Form hedef e-posta adresi
- Telefon / WhatsApp numarası (footer + iletişim sayfası)
- Yayımlanabilir ofis adresi (varsa → `LocalBusiness` schema; yoksa `Organization` yeterli)
- Sosyal medya profil URL'leri (Instagram, LinkedIn, vb. → `sameAs`)
- Kurucu ad(lar)ı + kısa bio (E-E-A-T / `Person` schema, Hakkımızda)
