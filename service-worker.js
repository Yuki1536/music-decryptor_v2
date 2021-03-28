importScripts("workbox-sw.js");

importScripts(
  "precache-manifest.7ab58a9691dd82640b3599436ed15991.js"
);

workbox.core.setCacheNameDetails({prefix: "music-decryptor"});

workbox.core.skipWaiting();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
