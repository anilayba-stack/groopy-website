import Image from "next/image";

/**
 * Hizmete özel görsel — hem homepage kartında (hover'da belirir) hem hizmet
 * sayfasında hero görseli. Fotoğraflar Pexels (ücretsiz, atıf gerekmez):
 *  web    → pexels.com/photo/7181184
 *  seo    → pexels.com/photo/12969403
 *  social → pexels.com/photo/6333749
 * Monokrom tasarımla uyum için CSS'te griye + koyulaştırılır.
 */
const IMAGES: Record<string, { src: string; alt: string }> = {
  "web-sitesi-gelistirme": {
    src: "/images/services/web.jpg",
    alt: "Dizüstü bilgisayarda açık bir web sitesi",
  },
  "seo-ve-geo": {
    src: "/images/services/seo.jpg",
    alt: "Dizüstü bilgisayarda analitik panosu",
  },
  "sosyal-medya-yonetimi": {
    src: "/images/services/social.jpg",
    alt: "Halka ışıkla telefonda içerik çekimi",
  },
  // EN slug karşılıkları — aynı görseller.
  "website-development": {
    src: "/images/services/web.jpg",
    alt: "An open website shown on a laptop screen",
  },
  "seo-and-geo-strategy": {
    src: "/images/services/seo.jpg",
    alt: "An analytics dashboard shown on a laptop screen",
  },
  "social-media-management": {
    src: "/images/services/social.jpg",
    alt: "Content being filmed on a phone with ring light",
  },
};

export function serviceImage(slug: string) {
  return IMAGES[slug] ?? null;
}

export function ServiceVisual({
  slug,
  className = "",
  priority = false,
}: {
  slug: string;
  className?: string;
  priority?: boolean;
}) {
  const img = IMAGES[slug];
  if (!img) return null;
  return (
    <div className={`svisual ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 1024px) 90vw, 620px"
        className="svisual__img"
        priority={priority}
      />
      <span className="svisual__scrim" aria-hidden />
    </div>
  );
}
