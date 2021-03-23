importScripts("workbox-sw.js");

importScripts(
  "precache-manifest.1c81de2b8f85dc426afe547e6917bbc6.js"
);

workbox.core.setCacheNameDetails({prefix: "music-decryptor"});

workbox.core.skipWaiting();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
