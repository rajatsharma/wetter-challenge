import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useLightningcss: true,
    inlineCss: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      new URL("https://cs3.wettercomassets.com/wcomv5/images/icons/weather/**"),
      new URL("https://cs3.wettercomassets.com/images/interview/**"),
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path(.+?)\\.html",
        destination: "/:path",
      },
    ];
  },
};

export default nextConfig;
