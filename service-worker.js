
const CACHE_NAME = 'anael1-cache-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/css/all.min.css',
  '/sounds/CARD.ogg',
  '/sounds/no.ogg',
  '/sounds/slot.ogg',
  '/sounds/slot2.ogg',
  '/sounds/yes.ogg',
  '/webfonts/fa-brands-400.ttf',
  '/webfonts/fa-brands-400.woff2',
  '/webfonts/fa-regular-400.ttf',
  '/webfonts/fa-regular-400.woff2',
  '/webfonts/fa-solid-900.ttf',
  '/webfonts/fa-solid-900.woff2',
  '/webfonts/fa-v4compatibility.ttf',
  '/webfonts/fa-v4compatibility.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
