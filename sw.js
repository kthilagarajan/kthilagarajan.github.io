/** An empty service worker! */
self.addEventListener('fetch', function(event) {
    /** An empty fetch handler! */
});

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('the-about-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/appicon.png',
                '/scripts.js',
                '/styles.css',
            ]);
        })
    );
});