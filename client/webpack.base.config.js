var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: '../app/assets/javascripts/',
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /(\.js$)/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
         presets: [ "react", "es2015", "stage-0" ]
        }
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
