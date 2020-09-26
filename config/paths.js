const path = require('path')

const ROOT = process.cwd()
const SRC = 'src'

module.exports = {
  root: ROOT,
  src: path.resolve(ROOT, SRC),
  data: path.resolve(ROOT, 'data'),
  srcScripts: path.resolve(ROOT, SRC, 'scripts'),
  srcStyles: path.resolve(ROOT, SRC, 'styles'),
  srcImages: path.resolve(ROOT, SRC, 'images'),
  srcStatic: path.resolve(ROOT, SRC, 'static'),
  srcPages: path.resolve(ROOT, SRC, 'pages'),
  includes: path.resolve(ROOT, SRC, 'includes'),
  pages: path.resolve(ROOT, SRC, 'pages'),
  build: path.resolve(ROOT, 'build'),
  buildImages: path.resolve(ROOT, 'build', 'images'),
  buildAssets: path.resolve(ROOT, 'build', 'assets'),
  config: path.resolve(ROOT, 'config'),
  nodeModules: path.resolve(ROOT, 'node_modules'),
  /**
   * For intermediate build files (gifs)
   */
  tmp: path.resolve(ROOT, '.tmp'),
}
