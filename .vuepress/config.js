/**
 * VuePress Configuration
 */

module.exports = {
  title: 'Emailurgency',
  description: 'Embed dynamic timers that show real remaining time for your special event and get results.',
  serviceWorker: true, // automatically generate a service worker that caches the content for offline use (production)
  dest: 'dist',
  head: [
    ['script', {}, `
      (function (w, d, t, u, n, a, m) {
      w['MauticTrackingObject'] = n;
        w[n] = w[n] || function () { (w[n].q = w[n].q || []).push(arguments) }, a = d.createElement(t),
          m = d.getElementsByTagName(t)[0]; a.async = 1; a.src = u; m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://crm.emailurgency.com/mtc.js', 'mt');

      mt('send', 'pageview');
    `],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Changelog', link: 'https://headwayapp.co/emailurgency-release-notes' },
      { text: 'Website', link: 'https://emailurgency.com' },
    ],
    sidebar: [
      '/',
      '/guide/pricing.html',
      '/guide/create.html',
      '/guide/usage.html',
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/images',
      },
    },
  },
};