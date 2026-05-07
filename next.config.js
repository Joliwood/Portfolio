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
};

export default nextConfig;
