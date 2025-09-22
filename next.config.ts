import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // Temporarily disable static export to bypass build issue
  // output: "export",
  // trailingSlash: true,
  images: { 
    formats: ["image/avif", "image/webp"],
    // unoptimized: true 
  },
};

export default nextConfig;


