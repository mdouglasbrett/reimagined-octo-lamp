'use strict';

const path = require('path');

let config = {
  entry: path.resolve(__dirname, 'js/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};

module.exports = config;
