import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Required for static export; Next.js image optimization needs a server
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
