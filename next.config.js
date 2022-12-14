const runtimeCaching = require('next-pwa/cache');
// const withPWA = require('next-pwa')({
//   dest: 'public'
// })
module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  distDir: '/build',
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    localeDetection: false
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    path: '/',
    domains: ['placedog.net', 'unsplash.com', 'nextjs-docker-tau.vercel.app', 'localhost:3000'],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },

  exportPathMap: async function (
        defaultPathMap,
          { dev, dir, outDir, distDir, buildId }
      ) {
          return {
          '/': { page: '/' },
          '/about': { page: '/about' },
          '/nl/about': { page: '/nl/about' },
          '/all-components': { page: '/all-components'},
          '/nl/all-components': { page: '/all-components'},
          '/recipes': { page: '/recipes'},
          '/nl/recipes': { page: '/recipes'}
          }
      },
};


