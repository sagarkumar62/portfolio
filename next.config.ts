/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 This is required for static export now
  images: {
    unoptimized: true, // 👈 Required if using images in static export
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
