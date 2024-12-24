/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for GitHub Pages
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Keep your remote domain
  },
  basePath: '/AcePlantersNextjs', // Replace with your repo name
  assetPrefix: '/AcePlantersNextjs', // Replace with your repo name
};

module.exports = nextConfig;