const CACHE_NAME = 'wnwn-demo-v39';
const CORE_ASSETS = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './assets/wnwn-community-food.png', './assets/wnwn-logo-modern.png', './assets/wnwn-partners-strip.png', './assets/wnwn-vegetables-bg.png', './assets/wnwn-bread-bg.png', './assets/wnwn-essentials-bg.png', './assets/wnwn-cafe-food-bg.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
