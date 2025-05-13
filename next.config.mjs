/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    loader: 'default',
    path: '/_next/image',
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'next', 'react', 'react-dom'],
    optimisticClientCache: true,
    legacyBrowsers: false,
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 250 * 1024,  // 250 KB
    maxEntrypointSize: 250 * 1024,  // 250 KB
  },
  // More aggressive JavaScript optimization
  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      // Terser configuration for more aggressive minification
      config.optimization.minimizer.push(
        new (require('terser-webpack-plugin'))({
          terserOptions: {
            compress: {
              drop_console: true,
              dead_code: true,
              conditionals: true,
              unused: true,
              comparisons: true,
              multiple_passes: true,
              evaluate: true,
            },
            mangle: true,
            output: {
              comments: false,
            },
          },
          extractComments: false,
        })
      );

      // More aggressive code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            enforce: true,
          },
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
          },
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    // Reduce unused exports
    config.optimization.usedExports = true;
    config.optimization.sideEffects = true;

    return config;
  },
  // Preload critical assets
  headers: async () => [
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  // Reduce legacy JavaScript
  browserslist: [
    '>0.3%',
    'not ie 11',
    'not dead',
    'not op_mini all'
  ],
};

module.exports = withBundleAnalyzer(nextConfig); 