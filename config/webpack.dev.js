const path = require('path')
const { merge } = require('webpack-merge')
const chokidar = require('chokidar')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')
const tailwind = require('tailwindcss')(
  path.resolve(paths.config, 'tailwind.js')
)
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: paths.srcStyles,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [tailwind],
              },
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              // relative to `assets` where CSS is
              publicPath: '.',
              outputPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|webp)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
              /**
               * For `html-webpack-inline-svg-plugin`
               * @docs https://github.com/theGC/html-webpack-inline-svg-plugin#config
               */
              publicPath: 'build/assets',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'assets/[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    before: (app, server) => {
      chokidar.watch([`${paths.tmp}/**/*.html`]).on('all', () => {
        server.sockWrite(server.sockets, 'content-changed')
      })
    },
    hot: true,
    overlay: true,
    contentBase: paths.build,
    index: 'index.html',
    host: 'localhost',
    port: process.env.PORT || 3000,
    open: false,
    writeToDisk: true,
  },
})
