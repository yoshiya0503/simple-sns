/**
 * @fileoverview staging_setting_webpack
 * @name webpack.config.dev.babel.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import webpack from 'webpack';

import merge from 'webpack-merge';
import common from './webpack.config.babel';

const devConfig = {
  // plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HOST': JSON.stringify('localhost:3000'),
    }),
  ],
};

export default merge(common, devConfig);
