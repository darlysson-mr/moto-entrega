
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("motoentrega-cache").then(function(cache) {
      return cache.addAll(["./", "./index.html", "./manifest.json", "./icon-v2.png", "./moto_sem_fundo.png"]);
    })
  );
});
self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
