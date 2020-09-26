const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const SriPlugin = require('webpack-subresource-integrity')
const PreloadPlugin = require('preload-webpack-plugin')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const glob = require('glob')
const paths = require('./paths')
const tailwind = require('tailwindcss')(
  path.resolve(paths.config, 'tailwind.js')
)
const comments = require('postcss-discard-comments')({
  removeAll: true,
})
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'hidden-nosources-cheap-module-source-map',
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.sass$/,
        include: paths.srcStyles,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
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
                plugins: [tailwind, autoprefixer, comments],
              },
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        include: paths.srcStyles,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
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
              name: '[name].[contenthash].[ext]',
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
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets',
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
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets',
              publicPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'assets/[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),
    new PurgeCssPlugin({
      paths: glob
        .sync(`${paths.src}/**/*`, { nodir: true })
        .concat(glob.sync(`${paths.tmp}/**/*`, { nodir: true })),
      safelist: {
        standard: [/^ls-/],
      },
    }),
    new PreloadPlugin(),
    // new SriPlugin({
    //   hashFuncNames: ['sha256', 'sha384'],
    // }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
      }),
    ],
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
})
