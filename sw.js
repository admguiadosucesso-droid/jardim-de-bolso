// Service Worker para Jardim de Bolso
const CACHE_NAME = 'jardim-de-bolso-v8';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/data.js',
  '/app.js',
  '/icon.svg',
  '/manifest.json',
  '/images/ferramentas/tesoura-de-poda.webp',
  '/images/ferramentas/tesoura-de-cerca-viva.webp',
  '/images/ferramentas/pa-de-mao.webp',
  '/images/ferramentas/ancinho.webp',
  '/images/ferramentas/pulverizador.webp',
  '/images/ferramentas/regador.webp',
  '/images/ferramentas/serrote-de-poda-curvo.webp',
  '/images/ferramentas/podao-telescopico.webp',
  '/images/ferramentas/tesoura-de-colheita.webp',
  '/images/ferramentas/sacho-de-duas-pontas.webp',
  '/images/ferramentas/carrinho-de-mao.webp',
  '/images/ferramentas/medidor-de-ph-e-umidade.webp',
  '/images/ferramentas/vassoura-metalica.webp',
  '/images/ferramentas/luvas-de-jardinagem.webp',
  '/images/ferramentas/cortador-de-grama-helicoidal.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('/index.html');
        }
      });
    })
  );
});