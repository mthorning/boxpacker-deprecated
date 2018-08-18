importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js',
)
console.log('workboxing')
workbox.routing.registerRoute(
  new RegExp('.*.js'),
  workbox.strategies.networkFirst(),
)
