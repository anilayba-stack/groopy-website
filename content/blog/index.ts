import type { BlogPost } from "../types";
import {
  meta as webSitesiMaliyeti2026Meta,
  Body as WebSitesiMaliyeti2026Body,
} from "./web-sitesi-maliyeti-2026/post";
import {
  meta as seoAjansiSecerkenMeta,
  Body as SeoAjansiSecerkenBody,
} from "./seo-ajansi-secerken-nelere-dikkat-edilmeli/post";
import {
  meta as googleAdsMiSeoMuMeta,
  Body as GoogleAdsMiSeoMuBody,
} from "./google-ads-mi-seo-mu/post";
import {
  meta as sosyalMedyaFiyatlari2026Meta,
  Body as SosyalMedyaFiyatlari2026Body,
} from "./sosyal-medya-yonetimi-fiyatlari-2026/post";
import { meta as geoNedirMeta, Body as GeoNedirBody } from "./geo-nedir/post";
import {
  meta as googleAdsAjansiSecerkenMeta,
  Body as GoogleAdsAjansiSecerkenBody,
} from "./google-ads-ajansi-secerken-nelere-dikkat-edilmeli/post";
import {
  meta as googledeNedenCikmiyorumMeta,
  Body as GoogledeNedenCikmiyorumBody,
} from "./googlede-neden-cikmiyorum/post";
import {
  meta as disHekimleriRehberiMeta,
  Body as DisHekimleriRehberiBody,
} from "./dis-hekimleri-dijital-pazarlama-rehberi/post";
import {
  meta as googleAdsHesabinizKimdeMeta,
  Body as GoogleAdsHesabinizKimdeBody,
} from "./google-ads-hesabiniz-kimde/post";
import {
  meta as wordpressMiNextjsMiMeta,
  Body as WordpressMiNextjsMiBody,
} from "./wordpress-mi-nextjs-mi/post";
import {
  meta as fizyoterapistlerRehberiMeta,
  Body as FizyoterapistlerRehberiBody,
} from "./fizyoterapistler-dijital-pazarlama-rehberi/post";
import {
  meta as fizyoterapistlerGoogleAdsRehberiMeta,
  Body as FizyoterapistlerGoogleAdsRehberiBody,
} from "./fizyoterapistler-google-ads-rehberi/post";
import {
  meta as yerelSeoRehberiMeta,
  Body as YerelSeoRehberiBody,
} from "./yerel-seo-rehberi/post";
import {
  meta as ajansFreelancerInHouseMeta,
  Body as AjansFreelancerInHouseBody,
} from "./ajans-mi-freelancer-mi-in-house-mi/post";
import {
  meta as sporKulupleriMeta,
  Body as SporKulupleriBody,
} from "./spor-kulupleri-uye-kazanma-rehberi/post";
import {
  meta as webSitesiNeKadarSuredeMeta,
  Body as WebSitesiNeKadarSuredeBody,
} from "./web-sitesi-ne-kadar-surede-tamamlanir/post";
import {
  meta as coreWebVitalsNedirMeta,
  Body as CoreWebVitalsNedirBody,
} from "./core-web-vitals-nedir/post";
import {
  meta as kendiWebSitesiMiPazaryeriMiMeta,
  Body as KendiWebSitesiMiPazaryeriMiBody,
} from "./kendi-web-sitesi-mi-pazaryeri-mi/post";
import {
  meta as randevuRezervasyonSistemiMeta,
  Body as RandevuRezervasyonSistemiBody,
} from "./randevu-rezervasyon-sistemi-nasil-yapilir/post";
import {
  meta as eskiWebSitesiniYenilemeMeta,
  Body as EskiWebSitesiniYenilemeBody,
} from "./eski-web-sitesini-yenileme-zamani-7-belirti/post";

/** Yayımlanmış yazılar — en yeni önce. */
export const posts: BlogPost[] = [
  { meta: eskiWebSitesiniYenilemeMeta, Body: EskiWebSitesiniYenilemeBody },
  { meta: randevuRezervasyonSistemiMeta, Body: RandevuRezervasyonSistemiBody },
  { meta: kendiWebSitesiMiPazaryeriMiMeta, Body: KendiWebSitesiMiPazaryeriMiBody },
  { meta: coreWebVitalsNedirMeta, Body: CoreWebVitalsNedirBody },
  { meta: webSitesiNeKadarSuredeMeta, Body: WebSitesiNeKadarSuredeBody },
  { meta: sporKulupleriMeta, Body: SporKulupleriBody },
  { meta: ajansFreelancerInHouseMeta, Body: AjansFreelancerInHouseBody },
  { meta: yerelSeoRehberiMeta, Body: YerelSeoRehberiBody },
  {
    meta: fizyoterapistlerGoogleAdsRehberiMeta,
    Body: FizyoterapistlerGoogleAdsRehberiBody,
  },
  { meta: fizyoterapistlerRehberiMeta, Body: FizyoterapistlerRehberiBody },
  { meta: wordpressMiNextjsMiMeta, Body: WordpressMiNextjsMiBody },
  { meta: googleAdsHesabinizKimdeMeta, Body: GoogleAdsHesabinizKimdeBody },
  { meta: disHekimleriRehberiMeta, Body: DisHekimleriRehberiBody },
  { meta: googledeNedenCikmiyorumMeta, Body: GoogledeNedenCikmiyorumBody },
  {
    meta: googleAdsAjansiSecerkenMeta,
    Body: GoogleAdsAjansiSecerkenBody,
  },
  { meta: geoNedirMeta, Body: GeoNedirBody },
  { meta: sosyalMedyaFiyatlari2026Meta, Body: SosyalMedyaFiyatlari2026Body },
  { meta: googleAdsMiSeoMuMeta, Body: GoogleAdsMiSeoMuBody },
  { meta: seoAjansiSecerkenMeta, Body: SeoAjansiSecerkenBody },
  { meta: webSitesiMaliyeti2026Meta, Body: WebSitesiMaliyeti2026Body },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export function postSlugs(): string[] {
  return posts.map((p) => p.meta.slug);
}

export function sortedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.meta.publishedAt).getTime() -
      new Date(a.meta.publishedAt).getTime(),
  );
}
