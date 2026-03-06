import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/about-feriyalsusanto",
  assetPrefix: "/about-feriyalsusanto",
};

export default nextConfig;
