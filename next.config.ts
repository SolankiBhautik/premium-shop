import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ['undici'],
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'undici': path.resolve(__dirname, 'node_modules/undici/lib/index.cjs'),
    };
    return config;
  },
};

export default nextConfig;
