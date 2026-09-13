# PROJECT
- Proje: Groopy — www.groopyagency.com
- Next.js 16.x (App Router, Turbopack)
- React 19.x
- TypeScript (strict mode)
- Tailwind CSS v4
- Production hosting: Vercel

# KONUMLANDIRMA (her metin/tasarım kararının referans noktası)
- Groopy kendini **"Yazılım Şirketi"** olarak tanımlar — Türkçe içerikte "ajans" kelimesi
  KESİNLİKLE kullanılmaz. Bunun yerine: "yazılım şirketi", "ekip", "stüdyo".
- EN içerikte "agency" tabu değil ama "software company/studio" ağırlıklı dil tercih
  edilecek.
- [NOT: domain adı "groopyagency.com" — URL değişmeyecek, sadece site İÇİNDEKİ marka
  dili "ajans" değil "yazılım şirketi" vurgusu taşıyacak.]

# TASARIM YÖNÜ — AÇIK RED/KABUL LİSTESİ
Mevcut site/Instagram estetiği (neon/gradient parlayan başlıklar, emoji ikonlar
🌐🎨🎵📱, "Dijital Rüyalar Gerçeğe Dönüşüyor" tarzı gösterişli dil) **kasıtlı olarak
terk ediliyor** — bu görsel dil "eğlence/etkinlik markası" hissi veriyor, hedeflenen
"kurumsal yazılım şirketi" güvenilirliğinin tam tersi.

**Yeni yönde OLMAYACAK:**
- Neon/glow efektler, parlayan gradient başlıklar
- Emoji'nin ikon olarak kullanılması (🌐🎨🎵 gibi) — bunun yerine gerçek bir ikon
  seti (Lucide/Heroicons gibi, endüstri standardı)
- Abartılı/pazarlama dili ağır sloganlar ("Dijital Rüyalar Gerçeğe Dönüşüyor" tarzı)
- Anasayfada iki eşit ağırlıklı "hero" (Dijital Dünya + Event & Organizasyon yan yana)

**Yeni yönde OLACAK:**
- Sakin, güven veren, kurumsal ama modern bir görsel dil (referans hissiyat: Linear,
  Vercel, Stripe gibi B2B SaaS siteleri — temiz tipografi, kontrollü renk paleti,
  bol boşluk, gösterişten çok netlik)
- Gerçek ikon kütüphanesi, tutarlı tipografi hiyerarşisi
- Somut, ölçülebilir dil ("büyütüyoruz" yerine — varsa gerçek sayı/sonuç)

# İŞ HEDEFİ
- Bu site bir portföy sitesi değil, **müşteri kazanma makinesi**.
- Ana hedef kitle: İstanbul'da (ve genişleyebilir şekilde Türkiye + uluslararası)
  web sitesi/yazılım/SEO-GEO/sosyal medya hizmeti almak isteyen işletmeler.
- Kullanıcı yolculuğu: Google/AI aramasında bulunmak → hizmetleri ve geçmiş işleri
  görmek → güven duymak → iletişime geçmek/teklif istemek.
- **Kendi sitesi en güçlü satış argümanı**: Core Web Vitals, SEO temelleri ve
  GEO/AI-citation hazırlığında kusursuz olmalı.

# HİZMET HİYERARŞİSİ
Sitede yalnızca üç hizmet var — hepsi birincil, birbirinden bağımsız:
1. Web Sitesi / Yazılım Geliştirme — flagship, ana CTA odağı, homepage'de büyük kart
2. SEO + GEO Stratejisi
3. Sosyal Medya Yönetimi (fotoğraf/video prodüksiyon bu hizmete dahil)

**Karar (2026-09-03, kullanıcı):** Yaratıcı Hizmetler ve Etkinlik & Organizasyon
hizmetleri KALDIRILDI — konu dağınıklığı ve SEO odağının bozulmaması için. İkincil
hizmet katmanı yok. Video/foto prodüksiyon yalnızca sosyal medya yönetimi kapsamında
(içerik ölçeğinde) sunulur; DJ/etkinlik/organizasyon işleri sitede hiç yer almaz.

# TEKNOLOJİ SEÇİMİ VE GEREKÇESİ
- **Server Components varsayılan.** Gerçek client-side interaktivite gerekmedikçe
  "use client" kullanma.
- **Veritabanı/CMS ilk versiyonda yok, dosya tabanlı içerik** (content/ altında
  TS/MDX). Vaka çalışması ekleme sıklığı artarsa CMS'e geçiş mimariyi bozmayacak
  şekilde modüler tutulacak — v1'de eklenmeyecek.
- **Üçüncü parti UI kit/hazır template kullanılmayacak.** Tasarım sıfırdan, Tailwind
  ile.
- **Gereksiz dependency yok.** Native Next.js Metadata API, sitemap.ts, robots.ts,
  next/image, next/font.
- **İkon:** Lucide React (hafif, tree-shakeable, endüstri standardı) — emoji ikon
  olarak KULLANILMAYACAK.

# SEO — TEMEL
- Metadata API: her sayfa için benzersiz title/description.
- sitemap.ts + robots.ts, TR/EN hreflang.
- Open Graph + Twitter Card her sayfada.
- JSON-LD: Organization, LocalBusiness (varsa fiziksel ofis), Service (her hizmet
  için ayrı), BreadcrumbList, Article/BlogPosting — yalnızca gerçek/doğrulanabilir
  bilgi, uydurma yorum/puan/istatistik yok.
- Core Web Vitals: LCP görselinde priority, font self-host, gereksiz client JS yok.

# GEO (AI arama görünürlüğü) — şirketin kendi vitrin projesi
- robots.txt'te GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended,
  Applebot-Extended açıkça izinli.
- İçerik (vaka çalışmaları + blog) cevap-önce formatında: önce net sonuç, sonra detay.
- Vaka çalışmalarında somut, doğrulanabilir sonuç (trafik artışı, dönüşüm oranı,
  sıralama değişimi vb.) varsa göster; abartılı iddia ("garanti", "en iyi") yok.

# İÇERİK MİMARİSİ
- content/case-studies (hizmet hattına etiketlenebilir), content/services,
  content/blog — dosya tabanlı, tek source of truth.
- Şirket bilgisi (isim, konumlandırma metni, iletişim, sosyal medya) tek dosyada
  (site-config.ts).
- Vaka çalışması sayfaları: gerçek müşteri izniyle paylaşılabilecek proje/sonuç
  olmadan sayfa oluşturulmayacak.

# DÖNÜŞÜM (CONVERSION) KURALLARI
- Her sayfada net, tek bir birincil CTA ("Teklif Al" / "Görüşme Planla") — rakip
  CTA'lar aynı sayfada olmayacak.
- İletişim formunda veri minimizasyonu.
- Form validation server-side.
- Gerçek bir e-posta/CRM entegrasyonu kurulana kadar sahte bir entegrasyon varmış
  gibi davranma.

# TASARIM
- Sıfırdan tasarım, hazır template/UI kit yok.
- Mobile-first responsive.
- Accessibility temel gereksinim: semantic HTML, keyboard navigation, kontrast.
- Bkz. yukarıdaki "TASARIM YÖNÜ" bölümü — bu proje için en kritik kısım.

# DİL
- **TR + EN** — TR birincil (kök route), EN `/en` altında.

# KOD KALİTESİ
- TypeScript strict, `any` kullanımından kaçın.
- ESLint hatalarını bastırma; gerekirse nedenini belirt.
- Her önemli değişiklikten sonra lint + type-check + build kontrolü.

# WORKFLOW
- Büyük mimari kararlardan önce plan sun, onay bekle.
- Kullanıcı onayı olmadan: dependency ekleme, dosya silme, git commit, git push,
  production deployment yapma.
- Küçük, kontrollü adımlarla ilerle; her adımda doğrula.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
