importScripts('/third_party/workbox-v6.5.4/workbox-sw.js');

if (workbox) {
  console.log(`Workbox loaded successfully`);

  workbox.setConfig({
    modulePathPrefix: '/third_party/workbox-v6.5.4/',
  });

  workbox.routing.registerRoute(
    new RegExp('/(.*)'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'tcs',
    })
  );

  workbox.precaching.cleanupOutdatedCaches();

}