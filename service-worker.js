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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c28b7a3512a6dcfd08b8a5cc03a0221b"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "991ed57ae216f5862924140467909f72"
  },
  {
    "url": "assets/css/1.styles.b780958f.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.ddd94cb2.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.8e974917.css",
    "revision": "49de66447e8d01b33a171aa79aee6575"
  },
  {
    "url": "assets/img/bubbleSort.b7d216a5.gif",
    "revision": "b7d216a5b292cf3a5412bbc7fbb56a9e"
  },
  {
    "url": "assets/img/countingSort.827d96b8.gif",
    "revision": "827d96b8ca3682e8775f4916f22b45ac"
  },
  {
    "url": "assets/img/heapSort.658d0f58.gif",
    "revision": "658d0f58eed41a5c11cd1d1c039269ba"
  },
  {
    "url": "assets/img/insertionSort.be81c151.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "assets/img/mergeSort.9541d116.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "assets/img/quickSort.71c0f1c0.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "assets/img/radixSort.6690b105.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selectionSort.44be35da.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "assets/img/sort.b3345cf9.png",
    "revision": "b3345cf9d43747e68766862986f077d1"
  },
  {
    "url": "assets/js/1.b780958f.js",
    "revision": "2dda2b8f10f61726ecff2651ecef1cd2"
  },
  {
    "url": "assets/js/2.ddd94cb2.js",
    "revision": "20af3e15c349c0e4f21f6bcf8725afef"
  },
  {
    "url": "assets/js/3.cf8fc6c9.js",
    "revision": "cfcaa735f5d7e74d03b9e05a456213e8"
  },
  {
    "url": "assets/js/4.ae8f713c.js",
    "revision": "e20f06ec39934e1bc32cbfcf4bc71c3a"
  },
  {
    "url": "assets/js/5.bf4ddc1c.js",
    "revision": "2d9ca03b5fb48d2a72b7d1d17ebf6199"
  },
  {
    "url": "assets/js/6.88a41ec9.js",
    "revision": "7c9c2a8b050df442ea0570ea2443dc8b"
  },
  {
    "url": "assets/js/app.8e974917.js",
    "revision": "b05cf6d61dfa8ea27a2b814d710583a6"
  },
  {
    "url": "git/常用Git命令.html",
    "revision": "948157dd4e0830473175da88405968c7"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icon.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "7d01fe69ca08b924aae0fbae10fdedd1"
  },
  {
    "url": "web/JavaScript.html",
    "revision": "6ba2d7d08cbeb4f02f6c9a1f78333cba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
