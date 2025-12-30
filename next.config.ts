import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/thc-landing-page",
  assetPrefix: "/thc-landing-page",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
