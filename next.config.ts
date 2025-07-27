/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ Enables static site generation
  images: {
    unoptimized: true, // ✅ Required if using <Image> with static export
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
