const withPWA = require('next-pwa')({
  dest: 'public'
})
module.exports = withPWA({
  reactStrictMode: false,
  trailingSlash: false,
  distDir: '/build',
  i18n: {
    locales: ['en', 'fr', 'de', 'nl'],
    defaultLocale: 'en',
  },
  images: {
    loader: 'custom',
    path: '/',
    domains: ['placedog.net', 'source.unsplash.com', 'nextjs-docker-tau.vercel.app', 'localhost:3000'],
  },
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
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
        '/all-components': { page: '/all-components'}
        }
    },
});


