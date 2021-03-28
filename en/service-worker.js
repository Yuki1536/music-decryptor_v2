importScripts("workbox-sw.js");

importScripts(
  "precache-manifest.346fefc6c4a80fad5c6fd317d548a11d.js"
);

workbox.core.setCacheNameDetails({prefix: "music-decryptor_en"});

workbox.core.skipWaiting();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
