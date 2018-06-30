/**
 * VuePress Configuration
 */

module.exports = {
  title: 'Emailurgency',
  description: 'Embed dynamic timers that show real remaining time for your special event and get results.',
  serviceWorker: true, // automatically generate a service worker that caches the content for offline use (production)
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Changelog', link: 'https://headwayapp.co/emailurgency-release-notes' },
      { text: 'Website', link: 'https://emailurgency.com' },
    ],
  },
};