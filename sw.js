// Service Worker para Jardim de Bolso
const CACHE_NAME = 'jardim-de-bolso-v12';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/data.js',
  '/app.js',
  '/icon.svg',
  '/manifest.json',

  // Ferramentas (15)
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
  '/images/ferramentas/cortador-de-grama-helicoidal.webp',

  // Plantas (15)
  '/images/plantas/espada-de-sao-jorge.webp',
  '/images/plantas/jiboia-verde.webp',
  '/images/plantas/zamioculca.webp',
  '/images/plantas/monstera-deliciosa.webp',
  '/images/plantas/samambaia-americana.webp',
  '/images/plantas/orquidea-phalaenopsis.webp',
  '/images/plantas/lirio-da-paz.webp',
  '/images/plantas/suculenta-echeveria.webp',
  '/images/plantas/cacto-mandacaru.webp',
  '/images/plantas/palmeira-raphis.webp',
  '/images/plantas/ficus-lyrata.webp',
  '/images/plantas/anturio-classico.webp',
  '/images/plantas/calathea-orbifolia.webp',
  '/images/plantas/lavanda-francesa.webp',
  '/images/plantas/alecrim-aromatico.webp',

  // Adubos (15)
  '/images/adubos/npk-10-10-10.webp',
  '/images/adubos/npk-4-14-8.webp',
  '/images/adubos/humus-de-minhoca.webp',
  '/images/adubos/farinha-de-ossos-com-torta-de-mamona.webp',
  '/images/adubos/bokashi-fermentado.webp',
  '/images/adubos/biofertilizante-foliar.webp',
  '/images/adubos/calcario-dolomitico.webp',
  '/images/adubos/esterco-bovino.webp',
  '/images/adubos/sulfato-de-ferro.webp',
  '/images/adubos/cinzas-de-madeira.webp',
  '/images/adubos/adubo-liberacao-lenta.webp',
  '/images/adubos/biofertilizante-composteira.webp',
  '/images/adubos/farinha-de-casca-de-ovo.webp',
  '/images/adubos/extrato-algas-marinhas.webp',
  '/images/adubos/ureia-agricola.webp',

  // Serviços (15)
  '/images/servicos/plantio-e-transplante-de-mudas.webp',
  '/images/servicos/poda-de-limpeza.webp',
  '/images/servicos/preparo-e-correcao-de-canteiro.webp',
  '/images/servicos/plantio-cerca-viva.webp',
  '/images/servicos/recuperacao-de-gramado.webp',
  '/images/servicos/instalacao-irrigacao-gotejamento.webp',
  '/images/servicos/poda-drastica-renovacao.webp',
  '/images/servicos/propagacao-por-estaquia.webp',
  '/images/servicos/aplicacao-oleo-de-neem.webp',
  '/images/servicos/replantio-de-orquideas.webp',
  '/images/servicos/montagem-floreira-de-temperos.webp',
  '/images/servicos/construcao-dreno-frances.webp',
  '/images/servicos/aplicacao-cobertura-morta.webp',
  '/images/servicos/combate-cochonilha-branca.webp',
  '/images/servicos/divisao-de-touceiras.webp'
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
  // Ignora requisições de esquemas não suportados (ex: chrome-extension, dados supabase ou analytics)
  if (!event.request.url.startsWith('http')) return;

  // Stale-While-Revalidate para ativos estáticos e páginas
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback em caso de erro de rede
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
