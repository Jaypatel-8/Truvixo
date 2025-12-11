/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger (only in production build)
  // Disable in development mode to allow proper rendering
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  trailingSlash: true,
  
  // Disable dynamic routes for static export (they're handled by specific pages)
  skipTrailingSlashRedirect: true,
  
  // Performance optimizations
  experimental: {
    // optimizeCss: true, // Disabled - requires critters module
    optimizePackageImports: ['lucide-react', 'swiper'],
  },
  
  // Power optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Production optimizations
  swcMinify: true,
  reactStrictMode: true,
  
  // Compression - disabled for static export (handled by server)
  // compress: true,
  
  // Optimize images
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's.w.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'strapi.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sanity.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.contentful.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scikit-learn.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pandas.pydata.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'numpy.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'keras.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'playwright.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.postman.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jmeter.apache.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'testng.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'appium.io',
        pathname: '/**',
      },
    ],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Additional performance optimizations
  reactStrictMode: true,
  compress: false, // Handled by hosting provider for static export
  
  // Bundle analyzer (uncomment to analyze bundle)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize for production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 20,
              reuseExistingChunk: true,
            },
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: 'swiper',
              chunks: 'all',
              priority: 30,
              reuseExistingChunk: true,
            },
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide',
              chunks: 'all',
              priority: 25,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    // Tree shaking optimization (removed usedExports as it conflicts with Next.js cache)
    // config.optimization.usedExports = true; // Conflicts with Next.js caching
    config.optimization.sideEffects = false;

    return config;
  },

  // Note: Headers are not supported with static export
  // You can configure these in your hosting provider (Hostinger)
};

module.exports = nextConfig;