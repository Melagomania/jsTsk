
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  let result = {
    entry: './src/index.js',
    output: {
      filename: './build/bundle.js',
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(['dist'])     
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    }
  }

  let environment = argv.mode;
  if(environment === 'production') {
    result.module.rules.push(
      {
        test: /\.less$/,
        use: ['style-loader', MiniCssExtractPlugin.loader,  'css-loader', 'postcss-loader' ,'less-loader']
      }
    );
  } else {
    result.devtool = 'source-map',
    result.module.rules.push(
      {
        test: /\.less$/,
        use: ['style-loader', MiniCssExtractPlugin.loader,  'css-loader', 'less-loader']
      }
    );
  }

  return result;
};