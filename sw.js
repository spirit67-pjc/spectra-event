// SPECTRA service worker: lets the site be installed. It does not cache pages, so updates always show up.
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
