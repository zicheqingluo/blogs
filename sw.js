/*
 * @Description:
 * @Author: yangxiaokang
 * @Email: [yangxiaokang@zuoyebang.com]
 * @Date: 2023-03-04 10:18:06
 * @LastEditTime: 2023-03-04 10:52:24
 * @LastEditors: yangxiaokang
 */
const CACHE_NAME = "updateCache_1678027726_8357";
const CACHE_FILES = [
  "/",
  "./index.js",
  "./index.html",
  "/assets/icon/favicon.ico"
]

console.log("sw.js文件");
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
              keys.map(key => {
                  console.log("CacheName",key)
                    if (CACHE_NAME !== key) {
                        return caches.delete(key);
                    }
                })
            )
        }).then(() => {
            console.log('activate');
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
