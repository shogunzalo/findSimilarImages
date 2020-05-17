// Example next.config.js for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/zeit/next.js/tree/canary/packages/next-mdx
module.exports = {
    webpack: (config, options) => {
      config.module.rules.push( { test: /\.(png|jpg|JPG)$/, loader: 'file-loader?limit=8192' })
  
      return config
    },
  }

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})