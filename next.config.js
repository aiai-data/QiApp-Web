/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  generateStaticParams: async () => {
    return {
      '/': { dynamic: false },
      '/zh-CN': { dynamic: false },
      '/en-US': { dynamic: false },
    }
  }
}

module.exports = nextConfig 