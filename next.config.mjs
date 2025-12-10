/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
    // Optimize images for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum quality for optimization
    minimumCacheTTL: 60,
    // Disable static image optimization warnings in development
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
};

export default nextConfig;

