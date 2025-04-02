'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "542a37c6d8d7c859c1d5f3a4c9a6d6e2",
"assets/AssetManifest.bin.json": "f79f3de4e4f9219fdb07053f73033752",
"assets/AssetManifest.json": "c25a380f99a2c033a5162d053812da84",
"assets/assets/images/A/A1A.jpeg": "38968afdd5e3b25cfd87da8170f81200",
"assets/assets/images/A/A1B.jpeg": "ca16c8a6badfc8833e3802fe26fdf22e",
"assets/assets/images/A/A1C.jpeg": "e0e98f17c926beb7214547c4b3b9ec95",
"assets/assets/images/A/A1D.jpeg": "70d4ace03bc86c858444807c0f9178ca",
"assets/assets/images/A/A2A.jpeg": "8284386de491e96484278a2b9a358228",
"assets/assets/images/A/A2B.jpeg": "419bdb0b2ef05441fac598598c3022da",
"assets/assets/images/A/A2C.jpeg": "0793e0a09a92c129d77b75e11614133f",
"assets/assets/images/A/A2D.jpeg": "ad8948eef48f3a470ad7a6dc9ce6ed5b",
"assets/assets/images/A/A3A.jpeg": "54f89c3ef89d4243a559413283829ba9",
"assets/assets/images/A/A3B.jpeg": "67b9fce7ab29513d8fc492345e63bf6d",
"assets/assets/images/A/A3C.jpeg": "04567c9edacce4dae4b0bdaed5e1aca8",
"assets/assets/images/A/A3D.jpeg": "f8db78087a67ca6ea945adad8d2cf1d5",
"assets/assets/images/A/A4A.jpeg": "07416feb5a4adc0e5017181af8548b35",
"assets/assets/images/A/A4B.jpeg": "c7a2ac51edaa86704c84090a7493a821",
"assets/assets/images/A/A4C.jpeg": "bae520a4aaed6850949d843e3ab636ae",
"assets/assets/images/A/A4D.jpeg": "2e86415ed8a5b5dece89e71b6a17cbf2",
"assets/assets/images/B/B1A.jpeg": "1e096d0081be0b1a299c7eac5e06fac6",
"assets/assets/images/B/B1B.jpeg": "b6823d0a3353a754d0d6521fda252157",
"assets/assets/images/B/B1C.jpeg": "fc19c99400f73a0b57369936482214b9",
"assets/assets/images/B/B1D.jpeg": "2d8b0f55995de81883552b6508d9e89a",
"assets/assets/images/B/B2A.jpeg": "1e096d0081be0b1a299c7eac5e06fac6",
"assets/assets/images/B/B2B.jpeg": "b6823d0a3353a754d0d6521fda252157",
"assets/assets/images/B/B2C.jpeg": "fc19c99400f73a0b57369936482214b9",
"assets/assets/images/B/B2D.jpeg": "2d8b0f55995de81883552b6508d9e89a",
"assets/assets/images/boat_icon.png": "0ede2227efffcc5fbe534a517ddad425",
"assets/assets/images/C/C10.jpeg": "757caeb06135cfc19980a8d0f97c7078",
"assets/assets/images/C/C13.jpeg": "9e03092cc8541e6a8d06897bc59408c8",
"assets/assets/images/C/C14.jpeg": "7058d95cb925de5b316798995ac638ba",
"assets/assets/images/C/C15.jpeg": "8254ed6ed3a43e842094f5583bc14404",
"assets/assets/images/C/C16.jpeg": "2ad7a98bd22863280fa01e498df291cd",
"assets/assets/images/F/F2.jpeg": "c3bc442e55b4ab163aa843492a55f584",
"assets/assets/images/G/G1.jpeg": "3bb07b17fa0bb3eab883de68e6a046ec",
"assets/assets/images/G/G10.jpeg": "0a428c6024fa3c14478903218cb2afdd",
"assets/assets/images/G/G12.jpeg": "1f37cc76bf8947a18739482ba361bae2",
"assets/assets/images/G/G2.jpeg": "6120ae8bcae21b64f0eb929455073f12",
"assets/assets/images/G/G3.jpeg": "a18ca0dbc5a5da4edbce048501f7b9df",
"assets/assets/images/G/G4.jpeg": "c666a6e9f6c280754947765ca0a0a9c1",
"assets/assets/images/G/G5.jpeg": "2b80aae3256729512b4198bbf4165aee",
"assets/assets/images/I/I5A.jpeg": "8ef14c41ad68124a6186d7849b7bd98d",
"assets/assets/images/I/I5B.jpeg": "2f81f8d2528b392793a24f028600c244",
"assets/assets/images/I/I5C.jpeg": "3b1f14cfed6f731b2eac1abc42be23f8",
"assets/assets/images/I/I5D.jpeg": "b1ae5e7f8255d9634f3abd3eaf9e3ac7",
"assets/assets/images/I/I9.jpeg": "7403193a6c4e899047267e4ec6298117",
"assets/assets/images/J/J1.jpeg": "218917fcf5157be0a4d207a01882e592",
"assets/assets/images/J/J16.jpeg": "54d1d51264caa7e32a70bb2bd742d6da",
"assets/assets/images/J/J2.jpeg": "29878b42ded144c4506a120c9125aab3",
"assets/assets/images/J/J20.jpeg": "1a463220f9800f9d701b939d02da98ed",
"assets/assets/images/J/J3.jpeg": "4840aaa51eaf9206c38407a26c22555a",
"assets/assets/images/J/J4.jpeg": "c6984e5b4bc0de4719bc72ec37ee0ee3",
"assets/assets/images/J/J5.jpeg": "9caafc7191ca362b50000a5e8f659597",
"assets/assets/images/J/J6.jpeg": "e391e3ca63326dfedebf08f7ece31fd2",
"assets/assets/images/J/J7.jpeg": "128fddc232d2f3cfd5479ddea47b5830",
"assets/assets/images/J/J8.jpeg": "58b787b980e4fe91b38dba5f7860848d",
"assets/assets/images/X/boat_icon.png": "99cb9444f1898cfa750a1d1450cc0e21",
"assets/assets/questions/a_basismanoever_und_jachtbedienung.json": "ed84ed0baf101f0cac4f1693db414d94",
"assets/assets/questions/b_segeltheorie.json": "b04edd98725618bbd47ce04deae7687c",
"assets/assets/questions/c_bootskunde_und_tauwerk.json": "deec3956fc074b5d1adc2e3d38cf58b6",
"assets/assets/questions/d_sicherheit_und_sondermanoever.json": "f6dcb4ecb92312b5ebefeeeb564921f0",
"assets/assets/questions/e_trimmen_und_trimmeinrichtungen.json": "b2da196463bb8d33f673e9435155bae7",
"assets/assets/questions/f_regatta.json": "2f28e9c1ce687403b99d14504bf4139d",
"assets/assets/questions/g_knoten_und_seemaennische_arbeiten.json": "1f1732bef5fcd9b0b1a8dcfd00389de7",
"assets/assets/questions/h_seemannschaft_und_seemaennische_sprache.json": "46344f47701e8f1f2106fe3e5fcf043e",
"assets/assets/questions/i_wetter.json": "71130fcf5ca93b71783567ed41f60e69",
"assets/assets/questions/j_recht.json": "145a83451f2f34ce14a23e6a635cd630",
"assets/assets/questions/questions.json": "0b61dad4a9801f9b32fdfedd0f4813f3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9aac2e4ea6e9f238ee531890da222bc7",
"icons/icon-192.png": "177807717da7304400704ece75a717a1",
"icons/icon-512.png": "f6f5b3d9ec027936b91f8b11124fb90d",
"icons/icon-maskable-192.png": "ca001fbfe916c01efa5467c31ed91dc1",
"icons/icon-maskable-512.png": "7008d76411d41c48bdc70be824bd4ae6",
"index.html": "0ea84f1b144f67cd4e43a3cfe6488425",
"/": "0ea84f1b144f67cd4e43a3cfe6488425",
"main.dart.js": "83065b76a5942ae5f7fcfd01b286ed9c",
"manifest.json": "0102213ddb3a08d9cab0f0dc94bcd618",
"version.json": "efcfec601a2b32ab1be0d3d26d7afd4a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
