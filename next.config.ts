import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Depo kökü net olsun — üst dizindeki lock dosyaları dikkate alınmasın.
  turbopack: {
    root: __dirname,
  },
  // Güvenlik başlıkları — tüm rotalar.
  async headers() {
    // Next.js hydration bootstrap script'leri nonce'suz inline çalışır,
    // bu yüzden script-src 'unsafe-inline' gerekiyor (middleware tabanlı
    // nonce kurulmadıkça). 'unsafe-eval' sadece dev'de (Fast Refresh) açık.
    const isDev = process.env.NODE_ENV !== "production";
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
