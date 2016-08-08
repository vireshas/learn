var webpack = require('webpack'),
    config = require('./webpack.base.config.js');

config.entry = [
    'webpack-dev-server/client?http://0.0.0.0:9999',
    config.entry
];

config.output = {
    path: config.output.path,
    filename: config.output.filename
};

module.exports = config;
