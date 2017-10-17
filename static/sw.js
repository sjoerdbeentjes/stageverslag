importScripts('/workbox-sw.dev.v2.1.0.js');

const workboxSW = new WorkboxSW({
  clientsClaim: true
});

workboxSW.precache([
  {
    "url": "/_nuxt/app.4714ecdb711f122aa308.js",
    "revision": "2f5b08e153f4d85516c567096c93f74e"
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
    "url": "/_nuxt/manifest.b213eb0e86180d0aaced.js",
    "revision": "33a7f836217943c282985670295c1c15"
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
    "url": "/_nuxt/pages/plan.e4edec98713046bdf160.js",
    "revision": "3fc9fd5d42c5a32e6d974415f87815f5"
  },
  {
    "url": "/_nuxt/pages/report.23c832c5e89d684adf97.js",
    "revision": "b9923d54d67afcad4c835161234345bf"
  }
]);

self.addEventListener('install', event => event.waitUntil(
  caches.open('sv-v1-core')
  .then(cache => cache.addAll([
    '/',
  ]))
  .then(self.skipWaiting())
));

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => cachePage(request, response))
        .catch(err => getCachedPage(request))
        .catch(err => fetchCoreFile('/offline/'))
    );
  } else {
    event.respondWith(
      fetch(request)
        .catch(err => fetchCoreFile(request.url))
        .catch(err => fetchCoreFile('/offline/'))
    );
  }
});

function fetchCoreFile(url) {
  return caches.open('bs-v1-core')
    .then(cache => cache.match(url))
    .then(response => response ? response : Promise.reject());
}

function getCachedPage(request) {
  return caches.open('bs-v1-pages')
    .then(cache => cache.match(request))
    .then(response => response ? response : Promise.reject());
}

function cachePage(request, response) {
  const clonedResponse = response.clone();
  caches.open('bs-v1-pages')
    .then(cache => cache.put(request, clonedResponse));
  return response;
}
