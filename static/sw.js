importScripts('/workbox-sw.dev.v2.1.0.js');

const workboxSW = new self.WorkboxSW();

workboxSW.precache([
  {
    "url": "/_nuxt/app.16288936788c6c01abe3.js",
    "revision": "956e6d9aa15cd70f2b497149ad292983"
  },
  {
    "url": "/_nuxt/common.748ea32ba0e5f8953ed7.js",
    "revision": "c4edd0d2555e629dcfdfdb200fd2b5e4"
  },
  {
    "url": "/_nuxt/layouts/default.4285bdc7bdb8fd536cd4.js",
    "revision": "5c12a03b31a3f7c843b0bc64c0f2acf0"
  },
  {
    "url": "/_nuxt/manifest.7fdf064102f2b4915cf8.js",
    "revision": "934c4c70fc36c71654318acf587f1954"
  },
  {
    "url": "/_nuxt/pages/index.7a7f8e72d62b91901dc6.js",
    "revision": "c561a93a667e1a4cfdbc622665b7720c"
  },
  {
    "url": "/_nuxt/pages/log.d7a3cd4eb8e7b3c0202f.js",
    "revision": "e276fbf0f0817c44343b54950afdae44"
  },
  {
    "url": "/_nuxt/pages/offline.613a6891b6390eed421a.js",
    "revision": "aabe05a6b12a8ff22fd6075c78691872"
  },
  {
    "url": "/_nuxt/pages/plan.f3f2d7c189361ad6097d.js",
    "revision": "ac7018c24c1a9dc1f14d9540c42f71c2"
  },
  {
    "url": "/_nuxt/pages/report.23c832c5e89d684adf97.js",
    "revision": "b9923d54d67afcad4c835161234345bf"
  }
]);

self.addEventListener('install', event => event.waitUntil(
  caches.open('sv-v1-core')
  .then(cache => cache.addAll([
    '/offline/'
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
  return caches.open('sv-v1-core')
    .then(cache => cache.match(url))
    .then(response => response ? response : Promise.reject());2
}

function getCachedPage(request) {
  return caches.open('sv-v1-pages')
    .then(cache => cache.match(request))
    .then(response => response ? response : Promise.reject());
}

function cachePage(request, response) {
  const clonedResponse = response.clone();
  caches.open('sv-v1-pages')
    .then(cache => cache.put(request, clonedResponse));
  return response;
}
