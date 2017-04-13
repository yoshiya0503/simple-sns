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
    `${src}/index.jsx`,
  ],

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: 'dist',
    port: 8000,
  },

  // resole path
  resolve: {
    extensions: ['.js', '.jsx'],
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
