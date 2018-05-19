const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssLoader = require('css-loader');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/',
    filename: 'assets/js/[name].[chunkhash:8].js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].chunk.js'
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /.scss$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader:'css-loader',
              options: {
                minimize: true,
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('postcss-import')({ root: loader.resourcePath }),
                  require('postcss-cssnext')(),
                  require('cssnano')()
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/static/html/index.html",
      filename: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: false,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/bundle.css'
    }),
    new UglifyJsPlugin({
      parallel: 4,
      sourceMap: false,
      uglifyOptions: {
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true,
          warnings: false,
          comparisons: false,
        },
        mangle: {
          safari10: true,
        },
        output: {
          comments: false,
          ascii_only: true,
        }
      }
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 4
    })
  ],
  stats: {
    colors: true
  },
  devtool: false,
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
};
