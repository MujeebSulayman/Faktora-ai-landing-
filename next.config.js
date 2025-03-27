/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Ensure proper handling of static assets
  output: 'export',
  // Disable server components since we're using client-side rendering
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
