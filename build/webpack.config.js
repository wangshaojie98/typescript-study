const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const devConfig = require('./webpack.dev.config.js');
const proConfig = require('./webpack.pro.config.js');

let config = process.NODE_ENV === 'development' ? devConfig : proConfig;

module.exports = merge(baseConfig, config);