const Bundler = require('parcel-bundler')
const fs = require('fs-extra')
const express = require('express')
const app = express()
const { generateSW } = require('workbox-build')

const env = process.env.NODE_ENV

const options = {
  development: {},
  production: {
    contentHash: true,
    // https: {
    //   // Define a custom {key, cert} pair, use true to generate one or false to use http
    //   cert: './ssl/c.crt', // path to custom certificate
    //   key: './ssl/k.key', // path to custom key
    // },
    logLevel: 3,
    sourceMaps: false,
    detailedReport: true,
  },
}
fs.remove('./dist')

const bundler = new Bundler('index.html', options[env])
bundler.on('bundled', bundle => {
  const swDest = './dist/sw.js'
  generateSW({
    swDest,
    globDirectory: 'dist',
    globPatterns: ['*.{js,png,html,css,webmanifest}'],
    clientsClaim: true,
    skipWaiting: true,
  }).then(({ count, size }) => {
    console.log(
      `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`,
    )
  })
})

app.use(bundler.middleware())
app.listen(1234)
console.log('listening on port 1234')
