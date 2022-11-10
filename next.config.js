/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  i18n: {
    // The locales you want to support in your app
    locales: ["nl", "de", "fr"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "nl",
  },
}
