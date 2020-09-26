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
        test: [/\.sass$/],
        include: paths.srcStyles,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              esModule: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
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
        test: [/\.css$/],
        include: paths.srcStyles,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              esModule: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
