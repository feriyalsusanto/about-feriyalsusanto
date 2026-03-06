import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/about-feriyalsusanto",
  assetPrefix: "/about-feriyalsusanto",
  trailingSlash: true,
};

export default nextConfig;
