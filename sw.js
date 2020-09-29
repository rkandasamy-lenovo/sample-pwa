var cacheName = "hello-pwa";
var filesToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/main.js",
  "./manifest.json",
  "./favicon.ico",
  "./images/hello-icon-144.png",
  "./images/hello-icon-152.png",
  "//cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
  "//code.jquery.com/jquery-3.5.1.min.js",
  "//stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
  "//stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
