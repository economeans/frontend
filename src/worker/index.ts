/// <reference lib="webworker" />

import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', (event: ExtendableEvent) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
