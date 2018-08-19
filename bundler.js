const Bundler = require('parcel-bundler')
const fs = require('fs-extra')
const express = require('express')
const app = express()
const { generateSW } = require('workbox-build')

const options = {
  contentHash: true,
  watch: true,
}

fs.remove('./dist')

const bundler = new Bundler('index.html', options)
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
// app.use(express.static(__dirname + '/dist'))
app.listen(1234)
console.log('listening on port 1234')
