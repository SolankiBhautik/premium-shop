/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // This will fix the undici issue by forcing browser implementation
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Force browser implementations for problematic modules
        'undici': false,
        '@firebase/auth': '@firebase/auth/dist/esm2017/index.browser.js',
        'firebase/auth': 'firebase/auth/dist/index.esm.js',
      };
    }
    return config;
  },
  // Add all the problematic packages to be transpiled
  transpilePackages: ['undici', '@firebase/auth', 'firebase'],
  // If needed, you can also disable server components for specific routes
  experimental: {
    // If you have auth-related pages, consider excluding them from Server Components
    // appDir: true,
    // serverComponentsExternalPackages: ['firebase', '@firebase/auth'],
  },
};

module.exports = nextConfig;