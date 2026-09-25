import type { BlogPost } from "../../types";
import { meta as websiteCost2026Meta, Body as WebsiteCost2026Body } from "./website-cost-2026/post";
import {
  meta as howToChooseAnSeoAgencyMeta,
  Body as HowToChooseAnSeoAgencyBody,
} from "./how-to-choose-an-seo-agency/post";
import {
  meta as googleAdsOrSeoMeta,
  Body as GoogleAdsOrSeoBody,
} from "./google-ads-or-seo/post";
import {
  meta as socialMediaPricing2026Meta,
  Body as SocialMediaPricing2026Body,
} from "./social-media-management-pricing-2026/post";
import { meta as whatIsGeoMeta, Body as WhatIsGeoBody } from "./what-is-geo/post";
import {
  meta as howToChooseAGoogleAdsAgencyMeta,
  Body as HowToChooseAGoogleAdsAgencyBody,
} from "./how-to-choose-a-google-ads-agency/post";
import {
  meta as whyIsntMySiteOnGoogleMeta,
  Body as WhyIsntMySiteOnGoogleBody,
} from "./why-isnt-my-site-on-google/post";
import {
  meta as dentistDigitalMarketingGuideMeta,
  Body as DentistDigitalMarketingGuideBody,
} from "./dentist-digital-marketing-guide/post";
import {
  meta as whoOwnsYourGoogleAdsAccountMeta,
  Body as WhoOwnsYourGoogleAdsAccountBody,
} from "./who-owns-your-google-ads-account/post";
import {
  meta as wordpressVsNextjsMeta,
  Body as WordpressVsNextjsBody,
} from "./wordpress-vs-nextjs/post";
import {
  meta as physiotherapistDigitalMarketingGuideMeta,
  Body as PhysiotherapistDigitalMarketingGuideBody,
} from "./physiotherapist-digital-marketing-guide/post";
import {
  meta as physiotherapistGoogleAdsGuideMeta,
  Body as PhysiotherapistGoogleAdsGuideBody,
} from "./physiotherapist-google-ads-guide/post";
import {
  meta as localSeoGuideMeta,
  Body as LocalSeoGuideBody,
} from "./local-seo-guide/post";
import {
  meta as agencyVsFreelancerVsInHouseMeta,
  Body as AgencyVsFreelancerVsInHouseBody,
} from "./agency-vs-freelancer-vs-in-house/post";
import {
  meta as gymMemberAcquisitionGuideMeta,
  Body as GymMemberAcquisitionGuideBody,
} from "./gym-and-fitness-studio-member-acquisition-guide/post";
import {
  meta as howLongDoesAWebsiteTakeMeta,
  Body as HowLongDoesAWebsiteTakeBody,
} from "./how-long-does-a-website-take/post";
import {
  meta as whatAreCoreWebVitalsMeta,
  Body as WhatAreCoreWebVitalsBody,
} from "./what-are-core-web-vitals/post";
import {
  meta as ownWebsiteVsMarketplaceMeta,
  Body as OwnWebsiteVsMarketplaceBody,
} from "./own-website-vs-marketplace/post";

/** Published posts — newest first. */
export const posts: BlogPost[] = [
  { meta: ownWebsiteVsMarketplaceMeta, Body: OwnWebsiteVsMarketplaceBody },
  { meta: whatAreCoreWebVitalsMeta, Body: WhatAreCoreWebVitalsBody },
  { meta: howLongDoesAWebsiteTakeMeta, Body: HowLongDoesAWebsiteTakeBody },
  { meta: gymMemberAcquisitionGuideMeta, Body: GymMemberAcquisitionGuideBody },
  { meta: agencyVsFreelancerVsInHouseMeta, Body: AgencyVsFreelancerVsInHouseBody },
  { meta: localSeoGuideMeta, Body: LocalSeoGuideBody },
  {
    meta: physiotherapistGoogleAdsGuideMeta,
    Body: PhysiotherapistGoogleAdsGuideBody,
  },
  {
    meta: physiotherapistDigitalMarketingGuideMeta,
    Body: PhysiotherapistDigitalMarketingGuideBody,
  },
  { meta: wordpressVsNextjsMeta, Body: WordpressVsNextjsBody },
  {
    meta: whoOwnsYourGoogleAdsAccountMeta,
    Body: WhoOwnsYourGoogleAdsAccountBody,
  },
  {
    meta: dentistDigitalMarketingGuideMeta,
    Body: DentistDigitalMarketingGuideBody,
  },
  { meta: whyIsntMySiteOnGoogleMeta, Body: WhyIsntMySiteOnGoogleBody },
  {
    meta: howToChooseAGoogleAdsAgencyMeta,
    Body: HowToChooseAGoogleAdsAgencyBody,
  },
  { meta: whatIsGeoMeta, Body: WhatIsGeoBody },
  { meta: socialMediaPricing2026Meta, Body: SocialMediaPricing2026Body },
  { meta: googleAdsOrSeoMeta, Body: GoogleAdsOrSeoBody },
  { meta: howToChooseAnSeoAgencyMeta, Body: HowToChooseAnSeoAgencyBody },
  { meta: websiteCost2026Meta, Body: WebsiteCost2026Body },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export function postSlugs(): string[] {
  return posts.map((p) => p.meta.slug);
}

export function sortedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => +new Date(b.meta.publishedAt) - +new Date(a.meta.publishedAt),
  );
}
