/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/about-feriyalsusanto",
  assetPrefix: "/about-feriyalsusanto",
  trailingSlash: true,
};

export default nextConfig;
