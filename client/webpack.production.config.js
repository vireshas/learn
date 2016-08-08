var webpack = require('webpack'),
    config = require('./webpack.base.config.js');

config.entry = [
    config.entry
];

config.output = {
  path: config.output.path,
    filename: config.output.filename
};

module.exports = config;
