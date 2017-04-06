/**
 * @fileoverview webpack config
 * @name webpack.config.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import path from 'path';

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

export default {
  entry: [
    `${src}/App.jsx`,
  ],

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: 'dist',
    port: 8000,
  },

  // JSX ES2015
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
/*
//const webpack = require('webpack');
module.exports = {
  //entry: ['babel-polyfill', './index.js'],
  entry: [
    './src/App.jsx',
  ],

  output: {
    path: 'dist',
    filename: 'bundle.js',
  },

  // JSX ES2015
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  //plugins: [
  //  new webpack.optimize.UglifyJsPlugin()
  //]
};
*/
