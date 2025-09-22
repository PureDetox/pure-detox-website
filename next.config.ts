import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  output: "export",
  trailingSlash: true,
  images: { 
    formats: ["image/avif", "image/webp"],
    unoptimized: true 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;


