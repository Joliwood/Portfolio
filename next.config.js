module.exports = {
  reactStrictMode: true,
  images: {
    // domains: ["github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/Joliwood/**",
      },
    ],
  },
};
