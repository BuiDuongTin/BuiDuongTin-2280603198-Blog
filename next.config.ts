import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/BuiDuongTin-2280603198-Blog',  // <-- THÊM DÒNG NÀY
  assetPrefix: '/BuiDuongTin-2280603198-Blog', // <-- VÀ DÒNG NÀY
}

export default nextConfig
