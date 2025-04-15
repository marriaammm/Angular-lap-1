
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-lap-1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-lap-1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 739, hash: 'ec217f475c5d93ffcc34be4635971558d28923d5067ffa46fa35b96e4f8e448b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '93ee7734f76091e776d3bf6527b9b520e3fdc764e80aae67e780f4e7a4da1936', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12730, hash: '5d0b6194a9e224a3fbabd511e2fc415a5641ca8b7e9644497f8c6a909d107ff0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4SH7BDTC.css': {size: 105, hash: 'cbd6nKJ2L78', text: () => import('./assets-chunks/styles-4SH7BDTC_css.mjs').then(m => m.default)}
  },
};
