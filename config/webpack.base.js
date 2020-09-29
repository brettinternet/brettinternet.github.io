const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin')
// const InlineSvg = require('./inline-svg')
const glob = require('glob')
const paths = require('./paths')

const pathPrefix = process.env.PATH_PREFIX || '/'
/**
 * start script must run html bundle before webpack
 * initiates or else glob will return an empty list
 */
const htmlFiles = glob.sync(`${paths.tmp}/**/*.html`)

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-runtime'],
  },
}

module.exports = {
  entry: {
    main: [
      path.resolve(paths.srcScripts, 'index.ts'),
      path.resolve(paths.srcStyles, 'index.sass'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [babelLoader, 'ts-loader'],
        include: path.srcScripts,
      },
      {
        test: /\.js$/,
        use: babelLoader,
        include: path.srcScripts,
      },
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attributes: {
                list: [
                  '...',
                  {
                    tag: 'img',
                    attribute: 'data-src',
                    type: 'src',
                  },
                  {
                    tag: 'img',
                    attribute: 'data-lowsrc',
                    type: 'src',
                  },
                  {
                    tag: 'source',
                    attribute: 'data-srcset',
                    type: 'srcset',
                  },
                  {
                    tag: 'source',
                    attribute: 'data-lowsrc',
                    type: 'srcset',
                  },
                  {
                    tag: 'meta',
                    attribute: 'content',
                    type: 'src',
                    /**
                     * @docs https://github.com/webpack-contrib/html-loader#list
                     */
                    filter: (_tag, _attribute, attributes) => {
                      if (
                        attributes.property === 'og:image' ||
                        attributes.name === 'twitter:image'
                      ) {
                        return true
                      }
                      return false
                    },
                  },
                ],
                root: '.',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      /**
       * use `~images` for alias
       * ~ is already available for `node_modules`
       */
      images: paths.srcImages,
      // assets: path.resolve('./assets'),
    },
  },
  output: {
    path: paths.build,
    crossOriginLoading: 'anonymous',
    publicPath: pathPrefix,
  },
  plugins: [
    ...htmlFiles
      .filter((f) => !f.includes('feed.html'))
      .map((file) => {
        const pathArr = file.split(path.sep)
        const buildPath = pathArr
          .slice(pathArr.indexOf(path.basename(paths.tmp)) + 1)
          .join(path.sep)
        return new HtmlWebpackPlugin({
          favicon: path.resolve(paths.srcImages, 'favicon.ico'),
          filename: path.resolve(paths.build, buildPath),
          template: file,
          chunks: ['main'].concat([path.basename(file, '.html')]),
          scriptLoading: 'defer',
        })
      }),
    // new InlineSvg(),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: process.env.NODE_ENV !== 'production',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.srcStatic,
        },
      ],
    }),
  ],
}
