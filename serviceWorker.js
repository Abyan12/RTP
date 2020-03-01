let rtp = "rtp-v1"
const assets = [
    "/index.html",
    "/account-page.html",
    "/question_page.html",
    "/src/js/all.js",
    "/all.css",
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(rtp).then((cache) => {
            return cache.addAll(assets)
        })
    )
})
self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})