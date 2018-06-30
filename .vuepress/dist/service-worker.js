/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "88f22aec53ffe298e54ce4f13eb90fb5"
  },
  {
    "url": "assets/css/2.styles.8094c906.css",
    "revision": "b1de77a4363064ad103ee4387f44e891"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.2b590c23.js",
    "revision": "24de40d13397a42ce7325e46e831f2d9"
  },
  {
    "url": "assets/js/1.166cf5fc.js",
    "revision": "d71c03485bea5ac314c8dc50e893e1f4"
  },
  {
    "url": "assets/js/app.dfabeceb.js",
    "revision": "9418ce896511bf243d44f232a579b9d3"
  },
  {
    "url": "guide/index.html",
    "revision": "d7534021f5b5448d2b6a27520027d5bb"
  },
  {
    "url": "index.html",
    "revision": "6e356ad83cd751039bc02058612394a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
