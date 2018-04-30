const webpack = require('webpack');
const fs = require('fs-extra');
const serve = require('serve')
const path = require('path');

const webpackProductionConfig = require('../config/webpack.config.prod');

// remove old build folder
fs.remove('../build');

// compile WMS UI with production config
const compiler = webpack(webpackProductionConfig, (errors, stats) => {
  if (errors) { console.error(errors); return }
  console.log(stats.toString({ chunks: false, colors: true }));
});

const server = serve(path.join(__dirname, '..', 'build'), {
  port: 5000
})
