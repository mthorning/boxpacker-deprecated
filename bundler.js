const Bundler = require('parcel-bundler')
const app = require('express')()
const { generateSW } = require('workbox-build')

const bundler = new Bundler('index.html')
bundler.on('bundled', bundle => {
  const swDest = 'dist/sw.js'
  generateSW({
    swDest,
    globDirectory: '.',
  }).then(({ count, size }) => {
    console.log(
      `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`,
    )
  })
})

app.use(bundler.middleware())
app.listen(1234)
console.log('listening on port 1234')
