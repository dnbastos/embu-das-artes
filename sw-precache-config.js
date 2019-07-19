module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  runtimeCaching: [{
    urlPattern: /^https:\/\/maps\.google\.com\/maps\/api/,
    handler: 'networkFirst'
  }, {
    urlPattern: /\/geocode\/json\//,
    handler: 'fastest',
    options: {
      cache: {
        maxEntries: 20,
        name: 'places-cache'
      }
    }
  }],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};
