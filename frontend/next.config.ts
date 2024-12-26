import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost:3000", "cdn.sanity.io"],
  },
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
