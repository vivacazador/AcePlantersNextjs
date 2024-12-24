/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Remote image domain
  },
  basePath: isGitHubPages ? 'vivacazador.github.io/AcePlantersNextjs' : '', // Use the repo name only on GitHub Pages
  assetPrefix: isGitHubPages ? 'vivacazador.github.io/AcePlantersNextjs' : '', // Use the repo name only on GitHub Pages
};

module.exports = nextConfig;