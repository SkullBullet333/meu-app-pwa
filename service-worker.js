const CACHE_NAME = "financeiro-v1";

const urlsToCache = [
  "/meu-app-pwa/",
  "/meu-app-pwa/index.html",
  "/meu-app-pwa/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
