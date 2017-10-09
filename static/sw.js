importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.827b5ca5481db8b0abb9.js",
    "revision": "a543ea9c7f581a4863ef85e08a30ce27"
  },
  {
    "url": "/_nuxt/common.9b6a51113aafcf5182b9.js",
    "revision": "f73589a9e2cb01c61cc27f7e7955fa7e"
  },
  {
    "url": "/_nuxt/layouts/default.b71c3009fcade43d81f8.js",
    "revision": "8a803801dd091cf9c52555ed5e9a6029"
  },
  {
    "url": "/_nuxt/manifest.01a09c48a5c4f21ab5f9.js",
    "revision": "4554344015ad95fd380d92d99661f650"
  },
  {
    "url": "/_nuxt/pages/index.7a7f8e72d62b91901dc6.js",
    "revision": "c561a93a667e1a4cfdbc622665b7720c"
  },
  {
    "url": "/_nuxt/pages/log.bcf494ced655950b7703.js",
    "revision": "a678d977e170a034e84a1e3810d911db"
  },
  {
    "url": "/_nuxt/pages/plan.538499e716f2d51cd503.js",
    "revision": "08654ca295f96363d7ed19ab3518e33e"
  },
  {
    "url": "/_nuxt/pages/report.23c832c5e89d684adf97.js",
    "revision": "b9923d54d67afcad4c835161234345bf"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "stageverslag_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
