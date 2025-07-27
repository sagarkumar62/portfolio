/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // disable PWA in dev
});


const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ Enables static site generation
  images: {
    unoptimized: true, // ✅ Required if using <Image> with static export
  },
  experimental: {
    serverActions: {},
        appDir: true, // important for App Router

  },
};

module.exports = withPWA(nextConfig);
