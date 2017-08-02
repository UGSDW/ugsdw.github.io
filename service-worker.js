/**
 * Service Worker for offline use and speedier loads.
 */

var log = false;

var CACHE_VERSION = "v2.0";

var STATIC_CACHE = [
    "assets/front-picture.jpg",
    "assets/temp-front-picture.jpg",
    "https://fonts.googleapis.com/css?family=Arvo:400,700|Gentium+Basic:400,400i,700",
];

// say what we want cached
this.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(CACHE_VERSION)
        .then(function(cache) {
            return cache.addAll(STATIC_CACHE); 
        })
    );
});

// route requests the right way
this.addEventListener("fetch", function(e) {
    var url = new URL(e.request.url);

    var has = function(arr, test) {
        var length = arr.length;
        for (var i = 0; i < length; i++) {
           if (arr[i] === test || 
                   (arr[i] === test.slice(1) && test !== "/") )
               return true; 
        }
        return false;
    };

    if (has(STATIC_CACHE, url.pathname)) { // prefer cached version
        if (log) console.log("STATIC: " + url.pathname);
        e.request.mode = "no-cors";
        e.respondWith(caches.match(e.request));
    } else { // get network version
        if (log) console.log("NOT IN CACHE: " + url.pathname);
        e.respondWith(
            fetch(e.request).then(function(resp) {
                return resp; 
            })
        );
    }
});
