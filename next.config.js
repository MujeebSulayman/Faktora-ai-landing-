/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  // Ensure output is optimized for production
  output: 'standalone',
};

module.exports = nextConfig;