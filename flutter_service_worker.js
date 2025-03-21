'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/config": "61eda376b061b15c152e7fa1266d2f44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c96bcfe9ac43bd91f0d912a20fc96bd9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d13cf63b1a1c9a8f61ece638cd44d31",
".git/logs/refs/heads/main": "3fe1539ad3466f33100c33d46304c619",
".git/logs/refs/remotes/origin/main": "0983b5d93294f8ea3e45a7ef2b382dc2",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/9a2bf2620e2322928235ac48bb7695e0bb4406": "d041f4ab5a810b9ecfcb92beb21e08f7",
".git/objects/0d/e380c41d1d11f4a2858c950e62ef70298997ba": "40665fcaef89ae46da7b8082f654120d",
".git/objects/0f/2a72af03606755b8c304607decc936199369e9": "dc7c858846d90b8187978bef86195f03",
".git/objects/11/de5cbebbf801de63ac0e48b8596c5146f6235b": "94892b3751935a44a23fb864e07333e8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/fc68c999c1d2d0d45ae6f8847d522e8886dd1e": "7ab89dc4e886d53b789c9ebe5c5374c1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2f/81fdc49ee2b047fa3e1b64b7c2347a425e86c9": "9c3f0bce094d964dc023024951b6ae8c",
".git/objects/30/362328e73ef134e6f704c177352a14f3cedc0f": "c367c28f412fcb33ce63eebaa95ee031",
".git/objects/33/1e00a1604377537c7882c2db8bf0ec5c72ff05": "edb185f8d95c5039ebfe4aeb66882943",
".git/objects/37/80ae85111e3bdc9654d44587265ec1c6f36f0d": "4eec9947145dfea423f7268a2a1715e5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/fb8ecf3e41b54ffb42a20b634ea5dfd6cb815b": "2f6b869dfb79aa4746be1f92698071be",
".git/objects/52/0449fa1f28eec6da072e532a1a2d88f75b3108": "0dca40e842d21cbb7cc0f2ed314381f0",
".git/objects/53/a2594f7019b83e3e68e185913d82bc09b3052e": "3304ea0174d848f4e39e92321eb69006",
".git/objects/55/a14e27a5e856e2dcda79d5ef9bf5a376450408": "ecdd1bdc2fe07f209e5d068c744ff69c",
".git/objects/58/65a2c404176925a65fc43e19c01f1ed6dbb6bd": "fd788972af70763ac048c0dbe4375ef1",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/7551cbcd54222eb1751e4d07c6b49a24549aa2": "d7ded435301e3b429b59b2c542734ee5",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/cd0be156acfcedfe99bcd2ec96b4b1f152a171": "679e651fe076653e5c9e46bddd114b6a",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/7db9d196c30180cb09566021127f31cf6c6c06": "5731a6d50742598dd75855ea5c287cc5",
".git/objects/82/4f8cf1bfc0a93a54776eae92850ba4b73588bd": "32b27a923c76fe04f40830500cfc88b1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b5450dbda26c64d10c40bbe833a61f632c98a4": "d11fff33da8e0562818b020835ee7a98",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/92/e18ab90fa62f8e54b17c58eea36e35e4fbf8c3": "8c6d48b1c6c70fb02cd17280f0815632",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/1cc4f10a963ae242cc82eeb1df0d7d7354c681": "e3daacd9cd9974a429ef63ffe8c51b99",
".git/objects/99/aeee3e387e216c788f9d4f226a0135e260c85a": "87fb25a961f326daa7eb677a0f98fc1c",
".git/objects/a6/d208e627572053efe4b88b0a051dda6a119ab0": "de4f4a3996121e4938e8f4c0dd17fa2f",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ea6491f59fdaf5052e0e7afab52da5c58664cc": "7a708f602695c90834eb9712d16d6894",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/43bd869b90b46a3e2e698811e67197aa35fbf4": "f8df985beda33fad9d0f517511e6eff5",
".git/objects/c0/53ed7884581d207e9dc4217acfd09382d2cccf": "34419cf4e7a2558070a6a4e6cb22e40a",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/8b7a91595e0ee20e548fd32346397b75044385": "977af51147afa12d425105cbeb99e941",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cd/a6f138309d91ce1055d6205ac70c05f5adf349": "705aba4dcb4964aac751fdb16a5a86e1",
".git/objects/d0/b7f5ce72314c3c7e3bf54e4c1569deb7bcbd48": "0273dd26b60b34075ccb3c3b80c144ba",
".git/objects/d1/40935ed4d0c387f38790dae0413295c80fab93": "7be42e3dd3c27f3e9e95645158788758",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/d12a5b21d473d96d50d9cbfeb969a8a80b1f4e": "32238562ab6cd53d10e562ee10e4594d",
".git/objects/ea/9d91617f6cc7fcdd481bea838a7b7f32278e9f": "e07589732b98558fd145ff3dccfd2d9e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e6abbcf95ba75c65295598835c7f39e0666b1b": "e14d6d6d630695fb72b24f75a407f333",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/e5b42fe83a4c190372679e12730fbfcd061cd4": "9d22396cbff7e58be6d068408a837eb0",
".git/refs/heads/main": "287fb6315ef887fe8d330ff9324ca8e6",
".git/refs/remotes/origin/main": "287fb6315ef887fe8d330ff9324ca8e6",
"assets/AssetManifest.bin": "08cf2b4e86bea20b3757b9354549ad79",
"assets/AssetManifest.bin.json": "e4aca2682cf99bdef7a7945ca9bad6da",
"assets/AssetManifest.json": "2c3d4902eda3429320057d783409f2aa",
"assets/assets/images/boat_icon.png": "99cb9444f1898cfa750a1d1450cc0e21",
"assets/assets/questions/questions.json": "0b61dad4a9801f9b32fdfedd0f4813f3",
"assets/assets/questions/seemannschaft_und_seemaennische_sprache.json": "46344f47701e8f1f2106fe3e5fcf043e",
"assets/assets/questions/sicherheit_und_sondermanoever.json": "f6dcb4ecb92312b5ebefeeeb564921f0",
"assets/assets/questions/trimmen_und_trimmeinrichtungen.json": "b2da196463bb8d33f673e9435155bae7",
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
"flutter_bootstrap.js": "ab820abc3b18c93c7133f3385735b682",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7ea0752a7ed948625da6f7fc5a5bb563",
"/": "7ea0752a7ed948625da6f7fc5a5bb563",
"main.dart.js": "6f083905f416c9f4d1234f52da042749",
"manifest.json": "b7f08429850ec61106eabce2cb80cd68",
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
