const HtmlWebpackPlugin = require('html-webpack-plugin')
const { JSDOM } = require('jsdom')
// const SVGO = require('svgo')

module.exports = class InlineSvg {
  dom

  apply(compiler) {
    compiler.hooks.compilation.tap('InlineSvg', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'InlineSvg',
        (data, cb) => {
          this.initDom(data.html)
          this.getImagesUrl()
          cb(null, data)
        }
      )
    })
  }

  initDom = (documentStr) => {
    this.dom = new JSDOM(documentStr, { contentType: 'text/html' })
  }

  getImagesUrl = () => {
    const images = this.dom.window.document.querySelectorAll('img[inline]')
    Array.from(images).forEach((img) => {
      if (img.src.includes('.svg')) {
        console.log('Image: ', img.src)
      }
    })
  }
}
