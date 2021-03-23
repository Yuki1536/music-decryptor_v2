importScripts("workbox-sw.js");

importScripts(
  "precache-manifest.f8a14fbe568568dd7e5d01a7e8e5aea5.js"
);

workbox.core.setCacheNameDetails({prefix: "music-decryptor_en"});

workbox.core.skipWaiting();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
