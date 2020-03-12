let rtp = "rtp-v1"
const assets = [
    "./assets/img/avatar.jpg",
    "./assets/img/gift.svg",
    "./assets/img/home.svg",
    "./assets/img/person.svg",
    "./assets/img/recycle-sign.png",
    "./assets/img/trash_green.svg",
    "./assets/img/trash_red.svg",
    "./assets/img/trash_yellow.svg",
    "./assets/img/yuru.jpg"
]
const file=[
    "./index.html",
    "./account-page.html",
    "./login.html",
    "./register.html",
    "./question_page.html",
    "./map.html",
    "./style.css",
    "./login-page.css",
    "./src/js/all.js",
    "./all.css",
    "./src/js/jquery-new.js",
    "./sweetalert/dist/sweetalert2.all.js",
    "./sweetalert/dist/sweetalert2.css"
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(rtp).then((cache) => {
            return cache.addAll(assets.concat(file))
        }).catch((err)=>{
            console.error(err)
            return new Promise((resolve,reject)=>{
                reject("error"+err)
            })
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