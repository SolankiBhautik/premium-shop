/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['undici', '@firebase/auth'],
};

module.exports = nextConfig;