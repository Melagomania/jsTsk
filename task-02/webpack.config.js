const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  let result = {
    entry: './app/index.js',
    output: {
      filename: './build/bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
      }),
      new CleanWebpackPlugin(['dist'])
    ],
    module: {}
  }
  let environment = argv.mode;

  if(environment === 'development') {
    result.devtool = 'source-map'
  } else {
    result.devtool = false;    
  }
  
  return result;
};