const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public'
})
module.exports = withPWA({
  reactStrictMode: false,
  trailingSlash: false,
  distDir: '/build',
  i18n: {
    locales: ['en', 'de', 'nl', 'fr'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'localhost:3000',
        defaultLocale: 'en',
      },
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: 'localhost:3000/nl',
        defaultLocale: 'nl',
         // specify other locales that should be redirected
        // to this domain
        locales: ['pl', 'ie'],
      },
      {
        domain: 'localhost:3000/fr',
        defaultLocale: 'fr',
      },
      {
        domain: 'localhost:3000/de',
        defaultLocale: 'de',
       
      },
    ]
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
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
    runtimeCaching,
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
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


