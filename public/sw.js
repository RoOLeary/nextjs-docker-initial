if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("worker-2yj5b_OWvR_grjA4ua66p.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2yj5b_OWvR_grjA4ua66p/_buildManifest.js",revision:"b6c03e3cc5010c858c4d6c0f47388947"},{url:"/_next/static/2yj5b_OWvR_grjA4ua66p/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1-12d708973d77b1d8.js",revision:"12d708973d77b1d8"},{url:"/_next/static/chunks/717-82df687f82b9a3f1.js",revision:"82df687f82b9a3f1"},{url:"/_next/static/chunks/998-e25ca9f7311832b8.js",revision:"e25ca9f7311832b8"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-04c3fe9e7a610cc5.js",revision:"04c3fe9e7a610cc5"},{url:"/_next/static/chunks/pages/%5Bslug%5D-29479f38fb0cef0e.js",revision:"29479f38fb0cef0e"},{url:"/_next/static/chunks/pages/_app-7c781df62225a9de.js",revision:"7c781df62225a9de"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/about-6caed9aa222483e5.js",revision:"6caed9aa222483e5"},{url:"/_next/static/chunks/pages/all-components-710b628143ff81f8.js",revision:"710b628143ff81f8"},{url:"/_next/static/chunks/pages/blog-157e89019ee3be58.js",revision:"157e89019ee3be58"},{url:"/_next/static/chunks/pages/careers-76405c69d815be68.js",revision:"76405c69d815be68"},{url:"/_next/static/chunks/pages/download-app-2a87f9e70f1ea3d7.js",revision:"2a87f9e70f1ea3d7"},{url:"/_next/static/chunks/pages/faqs-971a56ccceb37537.js",revision:"971a56ccceb37537"},{url:"/_next/static/chunks/pages/forgot-password-0ed537bb2d4d0808.js",revision:"0ed537bb2d4d0808"},{url:"/_next/static/chunks/pages/hubs-ffcbfcc100792e13.js",revision:"ffcbfcc100792e13"},{url:"/_next/static/chunks/pages/index-70beeadf041ccf5e.js",revision:"70beeadf041ccf5e"},{url:"/_next/static/chunks/pages/isr-publish-86ef970de4161ebd.js",revision:"86ef970de4161ebd"},{url:"/_next/static/chunks/pages/jobs-247fef31d9e713ff.js",revision:"247fef31d9e713ff"},{url:"/_next/static/chunks/pages/jobs/%5Bcategory%5D/%5Bindex%5D-be1eeac60418b1cb.js",revision:"be1eeac60418b1cb"},{url:"/_next/static/chunks/pages/locations-30ded84bca6d9452.js",revision:"30ded84bca6d9452"},{url:"/_next/static/chunks/pages/recipes-9242800a347794eb.js",revision:"9242800a347794eb"},{url:"/_next/static/chunks/pages/recipes/%5Bslug%5D-5a84112f07415e78.js",revision:"5a84112f07415e78"},{url:"/_next/static/chunks/pages/webstore-f53e73dbc11e25cf.js",revision:"f53e73dbc11e25cf"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/aa48029a2a9cb27e.css",revision:"aa48029a2a9cb27e"},{url:"/assets/images/_hero-glow.jpeg",revision:"6855a2d802b1406732b32b1efcddb95e"},{url:"/assets/images/app-store-badge.svg",revision:"58d44d25f74bc81b972c397d6e732771"},{url:"/assets/images/apple.png",revision:"a0a9da39cd7639676ecb835aeeb753ae"},{url:"/assets/images/bg_image_jobs.png",revision:"d26a901468aa4c4f45133585e737951c"},{url:"/assets/images/epv-app-full-1686x1152.png.webp",revision:"c09be47b4850b094cf19b2f9249097ac"},{url:"/assets/images/facebook.svg",revision:"f44ba9bcad1dbdbc7681c6d082bbe843"},{url:"/assets/images/google-play-badge.svg",revision:"741b187c9abb262649a4d67de995832a"},{url:"/assets/images/instagram.svg",revision:"439d1a40a23a14e2f036d8971d27aa98"},{url:"/assets/images/logo.svg",revision:"af01e33d873e4fcaf56b8c86737bb43f"},{url:"/assets/images/picnic-app.png",revision:"3e9752d3697722c78bb1e5a981d972da"},{url:"/assets/images/picnic.avif",revision:"e00cce26dd891d7e85b4c7c8e27f70ec"},{url:"/assets/images/picnic.jpeg",revision:"ee6fcf60d50786905b48e1ccfb6968e3"},{url:"/assets/images/picnic.png",revision:"e00cce26dd891d7e85b4c7c8e27f70ec"},{url:"/assets/images/recipies_hero_image.png",revision:"34d89e428636ec070916658a4ef83d5a"},{url:"/assets/images/twitter.svg",revision:"56a1f4d6f9ae7e0330748b038c50d13c"},{url:"/assets/images/youtube.svg",revision:"1395eba5e46133c022333efd3b0e6f45"},{url:"/assets/img/hero-glow.jpeg",revision:"b314e9eb238e1ad2577669172d2d2ef9"},{url:"/favicon.ico",revision:"e8163498ee2bc064dca33bb2c98dceda"},{url:"/icons/icon-128x128.png",revision:"5f14ea579a53c2d5d5577067a3d34d57"},{url:"/icons/icon-192x192.png",revision:"3e5295ab4c6647e08942a5e49d9fd852"},{url:"/icons/icon-256x256.png",revision:"5f14ea579a53c2d5d5577067a3d34d57"},{url:"/icons/icon-384x384.png",revision:"14336e7b735aca83e5e0f0987322b7f1"},{url:"/icons/icon-48x48.png",revision:"e8163498ee2bc064dca33bb2c98dceda"},{url:"/icons/icon-512x512.png",revision:"67ae7a10e0f3d7cde9a954e84287fef2"},{url:"/icons/icon-72x72.png",revision:"8585cb84172b03cb723bb3fc0e5b8310"},{url:"/icons/icon-96x96.png",revision:"0c4e61bcd723168739fa1c4aaaad8971"},{url:"/icons/maskable.png",revision:"e8163498ee2bc064dca33bb2c98dceda"},{url:"/icons/maskable_icon.png",revision:"755083ce976cefb3dcafda3f6ba9f915"},{url:"/manifest.json",revision:"c8b055f58b6ddb1b29b5a339bdb13431"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
