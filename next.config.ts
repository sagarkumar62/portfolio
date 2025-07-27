/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in dev
});

const nextConfig = {
  reactStrictMode: true,

  // ✅ Enables static export
  output: 'export',

  images: {
    // ✅ Required for static export with <Image />
    unoptimized: true,
  },

  experimental: {
    // ✅ Required for using App Router with static export
    appDir: true,
    serverActions: false, // 🔁 Set to `false` or remove if not used with static export
  },
};

module.exports = withPWA(nextConfig);
