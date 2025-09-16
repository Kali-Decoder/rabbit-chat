import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.getro.com","pbs.twimg.com"],
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript type checking
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint checks during builds
  },
};

export default nextConfig;
