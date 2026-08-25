self.addEventListener("install", function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function (event) {
  event.waitUntil((async function () {
    if ("caches" in self) {
      const names = await caches.keys();
      await Promise.all(names.map(function (name) { return caches.delete(name); }));
    }

    await self.clients.claim();
    await self.registration.unregister();

    const clients = await self.clients.matchAll({ type: "window" });
    clients.forEach(function (client) {
      client.postMessage({ type: "ZHIXING_SW_DISABLED" });
    });
  })());
});

self.addEventListener("fetch", function () {});
