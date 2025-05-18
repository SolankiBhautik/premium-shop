import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/undici/,
      type: 'javascript/auto',
    });
    return config;
  },
};

export default nextConfig;
