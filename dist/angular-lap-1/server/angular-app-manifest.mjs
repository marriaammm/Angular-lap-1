
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Angular-lap-1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Angular-lap-1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 759, hash: '5728e31a696821257e14df0576187eaff434331757acee3fcf3d04f6b4d7f62b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1042, hash: 'a278e487a05d9ec712ea7d4bd44a2a7aed9632bb9ce4e9a420c6e228830ffe75', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4SH7BDTC.css': {size: 105, hash: 'cbd6nKJ2L78', text: () => import('./assets-chunks/styles-4SH7BDTC_css.mjs').then(m => m.default)}
  },
};
