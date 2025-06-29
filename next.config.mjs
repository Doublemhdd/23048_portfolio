/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Fix the images config format
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/23048_portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/23048_portfolio/' : '',
}

export default nextConfig