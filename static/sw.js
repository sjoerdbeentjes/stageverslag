importScripts('/workbox-sw.dev.v2.1.0.js');

const workboxSW = new self.WorkboxSW();

workboxSW.precache([
  {
    "url": "/_nuxt/app.46c1597e3acc4977d41f.js",
    "revision": "36ac28dfa9e7425004c132ffc9ba7c96"
  },
  {
    "url": "/_nuxt/common.748ea32ba0e5f8953ed7.js",
    "revision": "c4edd0d2555e629dcfdfdb200fd2b5e4"
  },
  {
    "url": "/_nuxt/layouts/default.ce29fe7a4e7fb3c97cde.js",
    "revision": "78d0c19b06dea33d9661ba2c32d6851d"
  },
  {
    "url": "/_nuxt/manifest.731633cfdf3ca5a430e1.js",
    "revision": "c4cba70c8428c0eeb3b60b0b85db054b"
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
    "url": "/_nuxt/pages/offline.613a6891b6390eed421a.js",
    "revision": "aabe05a6b12a8ff22fd6075c78691872"
  },
  {
    "url": "/_nuxt/pages/plan.0b2df9eb096ae6afd835.js",
    "revision": "31b4e698ef07d73fab56214431d54ccf"
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
      .then(response => response ? response : Promise.reject());
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
