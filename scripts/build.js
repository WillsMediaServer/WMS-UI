const webpack = require('webpack');
const fsextra = require('fs-extra');
const path = require('path');

const webpackProductionConfig = require('../config/webpack.config.prod');

fsextra.remove('build')

// compile WMS UI with production config
const compiler = webpack(webpackProductionConfig, (errors, stats) => {
  if (errors) { console.error(errors); return }
  console.log(stats.toString({ chunks: false, colors: true }));
  // Copy images to build
  fsextra.copySync('src/static/img', 'build/static/img')
  fsextra.copySync('src/static/manifests', 'build/static/manifests')
});
