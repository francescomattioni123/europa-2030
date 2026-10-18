// Service worker di Europa 2030: la pagina e i dati si aggiornano dalla rete quando c'è, altrimenti dalla cache.
const VERSION = 'eu30-v3';
const SHELL = ['./', './index.html', './manifest.json', './data/paesi.js', './data/politiche.js', './data/aggiornamenti.js', './data/iscrizione.js', './data/dossier.js', './data/posizioni.js', './consiglio.js', './data/mondo-topo.js', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  if (sameOrigin) {
    // rete prima, cache come riserva: così gli aggiornamenti del lunedì arrivano subito
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined))));
  } else {
    // librerie e font: cache prima, poi rete
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })));
  }
});
