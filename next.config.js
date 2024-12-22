/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/zh',
        destination: '/zh-CN',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en-US',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 