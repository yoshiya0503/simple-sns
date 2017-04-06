/**
 * @fileoverview staging_setting_webpack
 * @name webpack.config.stg.babel.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.babel';

const stgConfig = {
  // plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HOST': JSON.stringify('stg.sns.me'),
    }),
  ],
};

export default merge(common, stgConfig);
