/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
};

module.exports = nextConfig;
