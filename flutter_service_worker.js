'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d2749bb456562c3f0f24cf4917d4590e",
"assets/FontManifest.json": "52572593bdecc5f823cab3e09c4bbcbe",
"assets/fonts/Almarai-Bold.ttf": "62027b7aa5859e5ecdf9a09a5ee7cdac",
"assets/fonts/Almarai-ExtraBold.ttf": "20c3062a86935ec6b5e50d70b3af45bb",
"assets/fonts/Almarai-Light.ttf": "484f968404893edf87a29965d05711d3",
"assets/fonts/Almarai-Regular.ttf": "a19edc26bbe86c6fd4921f2b4cc3477e",
"assets/fonts/ArefRuqaa-Bold.ttf": "94ecb7555a8e2a1ce6096e37337ab661",
"assets/fonts/ArefRuqaa-Regular.ttf": "fadf3643241c767ed85bdd91d2af9ccb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/1/0.jpeg": "7f415f5d3b80096acd80dd92131b13fe",
"assets/images/1/1.jpeg": "cd3499d31ec006f298773fe9c0dd8970",
"assets/images/1/2.jpeg": "3ea4f5926000e72e6ceffabfd4253a64",
"assets/images/1/3.jpeg": "79725cfc4d081cfc87e1c3f31180674d",
"assets/images/1/4.jpeg": "10a05e65fbfebd5da34ead9dd6d8af34",
"assets/images/1/5.jpeg": "eb6383279cb90ad49882d651d4ada60e",
"assets/images/1/6.jpeg": "be307e8d198d13d54881511ce406b828",
"assets/images/1/7.jpeg": "a9eb0dd6a53346c9a8b1fadd20def433",
"assets/images/1/8.jpeg": "0aac806c1c8b4001a581a3a7008a9f59",
"assets/images/1/9.jpeg": "ba6a3ca8258fbc87eb1bd8b31a30fc81",
"assets/images/2/0.jpeg": "0d5145a23dd92e15ae79f23c2793835e",
"assets/images/2/1.jpeg": "b08e3076c2e99ab19441170999bf3ed0",
"assets/images/2/2.jpeg": "5f7b3ae4a080fb18ab52c9e7b35b9f3e",
"assets/images/2/3.jpeg": "3ea4f5926000e72e6ceffabfd4253a64",
"assets/images/2/4.jpeg": "19480ab0a0c435e6e20d2cd70dd31275",
"assets/images/2/5.jpeg": "2e27ea79155f1e33f76a350f92361af6",
"assets/images/2/6.jpeg": "6ecb6b6baf0f56f28ff40e07e5c57aa5",
"assets/images/2/7.jpeg": "8e6a45063ff9cf530fc8eee69cdb73e3",
"assets/images/2/8.jpeg": "14da2be80b05907f6629f018b37a8669",
"assets/images/2/9.jpeg": "e8a7bf4758f190d44c7d03c20e0dda84",
"assets/images/3/0.jpeg": "810c1ebe0f6030fba0eaf6f0d817e162",
"assets/images/3/1.jpeg": "77637a71d19af8072f17db17290bb2c7",
"assets/images/3/2.jpeg": "0d00aa04f364ff4231e517b1bf18c771",
"assets/images/3/3.jpeg": "3814c127f9fad7c46f08d208e112483f",
"assets/images/3/4.jpeg": "79d8ea53ac7e8d0db00186351e6913a0",
"assets/images/3/5.jpeg": "0c1476f9571cf1a1bb4a4dc9b697b9d1",
"assets/images/3/6.jpeg": "568f314bee6ed16df7f03f4e06fd69bc",
"assets/images/3/7.jpeg": "cd8b760ddd42155263e2e2c44a326178",
"assets/images/3/8.jpeg": "89af857874bbaa4790df00ce14ce11a8",
"assets/images/3/9.jpeg": "97054fc4741f816db6988e9c96fa4c13",
"assets/images/4/0.jpeg": "a9eb0dd6a53346c9a8b1fadd20def433",
"assets/images/4/1.jpeg": "d12325ef085b728c180561db6660a3bd",
"assets/images/4/2.jpeg": "17396d3c4c18682e2882abf4f2620320",
"assets/images/4/3.jpeg": "bdffe17194a5efc0cfe5eb84d4c6ed43",
"assets/images/4/4.jpeg": "7f415f5d3b80096acd80dd92131b13fe",
"assets/images/4/5.jpeg": "0812c659ecf923cf3638a04a9e4cb349",
"assets/images/4/6.jpeg": "c23a320efaad6e50950b343c4e30b0ef",
"assets/images/4/7.jpeg": "c476a81c934076ec6fd52f54af4993ba",
"assets/images/4/8.jpeg": "a845118b59b89f2dfa98f808c622ca3d",
"assets/images/4/9.jpeg": "97054fc4741f816db6988e9c96fa4c13",
"assets/images/5/0.jpeg": "eb6383279cb90ad49882d651d4ada60e",
"assets/images/5/1.jpeg": "e67070a4473e475a5755ed8a22285d23",
"assets/images/5/2.jpeg": "2bdd447efe17447103a998ca844b69ef",
"assets/images/5/3.jpeg": "d0bc143cd75ff0ef7a42f76d30f2401e",
"assets/images/5/4.jpeg": "cd3499d31ec006f298773fe9c0dd8970",
"assets/images/5/5.jpeg": "373aabd51fe792bd0758c285cd646623",
"assets/images/5/6.jpeg": "f24e9f82230a051780c2810eaadc3f44",
"assets/images/5/7.jpeg": "b4a630b09e37205a27e5be22f0ad4417",
"assets/images/5/8.jpeg": "c2a69b2a076b9a2e7e86df775cfa6e9e",
"assets/images/5/9.jpeg": "50ccf03e352be75fb3bc2a16a3fb96c3",
"assets/images/6/0.jpeg": "497ff1543fd87149d1bcf569cc6f224f",
"assets/images/6/1.jpeg": "10a05e65fbfebd5da34ead9dd6d8af34",
"assets/images/6/2.jpeg": "a141aae3504ec6d1d059285a9545a1b1",
"assets/images/6/3.jpeg": "79725cfc4d081cfc87e1c3f31180674d",
"assets/images/6/4.jpeg": "f09237eb67dda820a9a85c38b30c0745",
"assets/images/6/5.jpeg": "06abc66e49b620eab0b891b519cd6964",
"assets/images/6/6.jpeg": "6aaf4906bb88a3a2b37819aa8c8a3ba5",
"assets/images/6/7.jpeg": "9b5903a3d2763192aa221c89a805565c",
"assets/images/6/8.jpeg": "ba6a3ca8258fbc87eb1bd8b31a30fc81",
"assets/images/6/9.jpeg": "be307e8d198d13d54881511ce406b828",
"assets/images/call-image.jpg": "42226b09fc11740b91cda8dff7dad3da",
"assets/images/header-image-1.jpeg": "eb6383279cb90ad49882d651d4ada60e",
"assets/images/header-image-2.jpeg": "3ea4f5926000e72e6ceffabfd4253a64",
"assets/images/header-image-3.jpeg": "0d00aa04f364ff4231e517b1bf18c771",
"assets/images/header-image-4.jpeg": "7f415f5d3b80096acd80dd92131b13fe",
"assets/images/header-image-5.jpeg": "2bdd447efe17447103a998ca844b69ef",
"assets/images/header-image-6.jpeg": "a141aae3504ec6d1d059285a9545a1b1",
"assets/images/header-image.jpg": "9f0b58fcd4a468ab0a38bc19b530f273",
"assets/images/logo-min.png": "22c568d1c60b496bcfd0a21d5f3ebf05",
"assets/images/logo-min11.png": "951175c84a335536026f33b8a6141d51",
"assets/NOTICES": "d46e2f91c08c755637d0f9d7f0f49527",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1ce1fb902faa3398064d3f973dc99374",
"/": "1ce1fb902faa3398064d3f973dc99374",
"main.dart.js": "4ea3990f9380ad66ab031ccc35f412de",
"manifest.json": "321aa3b9146e7eaacb32951d2d1f52e3",
"version.json": "1031f0d1cb3b3125ec14c182185eb6a0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
