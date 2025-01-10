/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  output: 'export',
  basePath: '/burnermarket-working',
  assetPrefix: '/burnermarket-working/'
};

export default nextConfig;
