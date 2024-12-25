import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost:3000", "cdn.sanity.io"],
  }
};

export default nextConfig;
