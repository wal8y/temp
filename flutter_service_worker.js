'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "adc4d903eae53f28d9cfbe9b1e426454",
".git/config": "7bbdd4f038ddc1aa20f802b1af4178bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "24a12617f38494998cee7d1f91324ba8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8fbe5a3ac780661b5aeb7adde4201be6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b371655e63e16fb3650b66d607c14d73",
".git/logs/refs/heads/main": "aa7c1efb89f563295d807095c6e4c0da",
".git/logs/refs/remotes/origin/main": "93d219ed3a2194db527ef923199c39c7",
".git/objects/03/b933e3665f9b3137762b065d75361ad143a085": "12bd13a1fa7f4cf2afb265d22c9de23e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/3602043205c47a9201b8549e272d33134ab479": "9bc1050dc70eb8ee09e37c1ef8a11810",
".git/objects/0e/6de24608c9708f898dba4f48a994d02c755164": "f53595d6a5e9f9576092a466bd96bf4c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/01f0d2ae292a7b8853a13045ab6a3ce851cc71": "fb48b48f8ec27a0fd0f374b0627e4f5f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/e7509a27d57f8b5ee6b197d09a07e5bd155b34": "12fdc5ff87eedc34be9cd7cf04429b9a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/5a/6f13d32a685981c21201ef078ad8d4d4985751": "0354c17533e8a372a678ae896722afea",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/6de934bac75d23aec85381b20ea3d1dfbf5dda": "633f6522e6a3d7b7d2674d99565e234b",
".git/objects/72/b62c22cff6c93e69dfeac93188ddf9feefe358": "c32fd21fe7c006f338c77a98c3ad70e2",
".git/objects/76/6a01c5d691ecc73e58d7c6899fe3c1ee11feec": "2061f1f555b8685ea60539a1703ab570",
".git/objects/7b/1fc2e221cda550be45e0ef91faf960ae5156a7": "9b4f885e8d3c474c1dcbe6cd98f1b420",
".git/objects/80/bff43ab2d00f2952eb0d18262682842a0ca25e": "dca6d250e8c6091fbdb1fdb2d335677d",
".git/objects/82/9236c60d9c6e1d0c3054f402b08e293b52b87f": "934f9f6497e74efc60715660f9337095",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/99af60b30bb712eff223f1d87caeb6f486ce7f": "686fcd825afcb4ff32146567214a4a87",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/3ef944ac49656818f8631385d025d65eb897c2": "1442bfba990d4e48725eb295498ec658",
".git/objects/a2/55062b3eeddb1176e5063b3efcca8ee18f1f92": "097977e18ca482cf36032325338652c6",
".git/objects/a6/c8a567976c7b76b89875dcbb369dff2cda99be": "10c7787025747783142035414d08e2d9",
".git/objects/a9/6d3218be058fb7b538356a86972af8b7135889": "188e6f1fd184262f303b8f6fbfaa94a5",
".git/objects/b0/14ce712546a7c323977dba43725bce3150077b": "1c740c85bfd7ea6f455252059fbe4f6a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/a1cff3e41a0ed545a06d553859f5305b9657db": "40f29ff391e7bd495dd1bb840a987457",
".git/objects/bf/03d149a21ea2577c858fcaf2e6d6371846be43": "ee9f401cfc6d482786e2007921c07a21",
".git/objects/cb/849022a08853dce3049dc4fc0fa91bbadaef6d": "b9179fc4e189059ab8b5d0e2283a7994",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/5ec9cfbc01c360fa8aa59e1cf0f349d87e4838": "c5905ec63e63b493947d218e26c790e5",
".git/objects/d1/eb61c52a233616b018f33d802557a63b79b364": "db0ac464926feb3754123e5c0013104a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/ff9f1ab63a08c8a313a4bcd29c313582524b04": "0597eb376362e8143329c74f69b7e99d",
".git/objects/e1/fc3a685d603d5e4b664f1edb335f076ca1acaa": "1fb342156feccc7e49e78de6607d26a1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/0ba87f25f16c609923031911e2c4f10d392014": "1414a55215db3d2f46cfa89564acc413",
".git/refs/heads/main": "95b3563d88541418953950f99023f89f",
".git/refs/remotes/origin/main": "8db457ec74725d855aeb588a19f6c2fa",
"assets/AssetManifest.bin": "dd932d1fab8c762276c2e13a84615ace",
"assets/AssetManifest.bin.json": "606445a2a649c5b8a16cda142d626af7",
"assets/AssetManifest.json": "b3c6678b045b53eba1d857b0b8f461a8",
"assets/assets/imgs/bags.jpg": "6619d3889f3880111448b1e7a7bb99d5",
"assets/assets/imgs/bags1.jpeg": "b398c54e68ee266a8c26dde5b6107d1d",
"assets/assets/imgs/bags2.jpeg": "03a498b3555d8a8ef28dfd105ec1027a",
"assets/assets/imgs/logo.png": "99aad750d271108b7cb5c1329e5a89bf",
"assets/assets/imgs/main.jpeg": "4709404daf3f21ae14bc97faef9cab96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85ea18e50e070ab8d59de14f5a5e4ce1",
"assets/NOTICES": "bb70d308aec7100da8f3382437be1766",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "99aad750d271108b7cb5c1329e5a89bf",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e12216b72e78cae54ef28975020573e8",
"index.html": "133912e3b208ea748aaa2a6c42711b3b",
"/": "133912e3b208ea748aaa2a6c42711b3b",
"main.dart.js": "919170aeb8a30056671a0f4346f0b16c",
"manifest.json": "0723c3ccd4fd7c67a4ab0cc7905208b9",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
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
