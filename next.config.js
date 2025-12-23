/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow production builds even if ESLint has warnings
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization (important for speed)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression
  compress: true,

  // Clean production output
  poweredByHeader: false,

  // Safer production builds
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
