import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Minimise CSS as much as possible
    useLightningcss: true,
    // Since we don't have a lot of CSS we are inlining it, and we have already minimised it
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
        source: "/(forecast|this-is-the-forecast-page)/:days/:location\\.html",
        destination: "/forecast/:days/:location",
      },
    ];
  },
};

export default nextConfig;
