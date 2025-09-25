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

  // Optimisations pour Next.js 15
  experimental: {
    optimizePackageImports: ["react-icons", "react-bootstrap"],
  },

  // Configuration TypeScript plus stricte
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configuration ESLint
  eslint: {
    dirs: ["pages", "components", "lib", "src"],
  },

  // Optimisations de build
  poweredByHeader: false,
};

export default nextConfig;
