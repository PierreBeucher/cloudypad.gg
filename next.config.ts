import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true } // optimized images not supported with output export
};

export default nextConfig;
