#!/usr/bin/env node

var Jimp = require('jimp')

var from = process.argv[2]
var to = process.argv[3]

processImage(from)

function processImage (image) {
  console.log('processing image: ', image)
  return Jimp.read(image, createSet)
  function createSet (err, img) {
    if (err) throw err
    img.clone()
    .resize(512, Jimp.AUTO)
    .write(to + '/' + 'icon-512x512.png')
    img.clone()
    .resize(384, Jimp.AUTO)
    .write(to + '/' + 'icon-384x384.png')
    img.clone()
    .resize(256, Jimp.AUTO)
    .write(to + '/' + 'icon-256x256.png')
    img.clone()
    .resize(192, Jimp.AUTO)
    .write(to + '/' + 'icon-192x192.png')
  }
}
