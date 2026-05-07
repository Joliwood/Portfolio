/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/Joliwood/**/*.*",
      },
    ],
  },
  outputFileTracingRoot: process.cwd(),

  // Next.js 15 Optimization
  experimental: {
    optimizePackageImports: ["react-icons", "react-bootstrap"],
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  poweredByHeader: false,

  async headers() {
    const csp = [
      "default-src 'self'",
      // 'unsafe-inline' required by Next.js Pages Router (static bootstrap scripts)
      // and by AOS / React-Bootstrap (inline styles injected at runtime)
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      // GitHub raw URLs used for project GIFs (unoptimized <Image>)
      "img-src 'self' https://github.com https://raw.githubusercontent.com data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "media-src 'none'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
