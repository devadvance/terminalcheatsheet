importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Workbox loaded`);

  workbox.routing.registerRoute(
    new RegExp('/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'tcs',
    })
  );

  workbox.routing.registerRoute(
    /.*(?:ampproject)\.org.*\.(?:js)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'amp-project',
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts',
    })
  );

  workbox.precaching.cleanupOutdatedCaches();

} else {
  console.log(`Workbox didn't load`);
}