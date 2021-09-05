
const cacheName = "Evie"
const staticAssets = [
    './', './index.html', './styles.css', './index.js', './manifest.json'
];
self.addEventListener('install', event => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            return  cache.addAll(staticAssets);
        })

    )
});

self.addEventListener('activate', event => {
    // event.waitUntil(
    self.clients.claim();

    // )
});

self.addEventListener('fetch', event => {
    event.respondWith(async function() {
      // Respond from the cache if we can
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;
  
      // Else, use the preloaded response, if it's there
      const response = await event.preloadResponse;
      if (response) return response;
  
      // Else try the network.
      return fetch(event.request);
    }());
  });



const cacheFirst = async (req) => {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

const networkAndCache = async (req) => {
    const cache = await caches.open(cacheName)
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}

