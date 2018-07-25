const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ENV VARIABLES
const API_PSALMS = 'https://forsoul.herokuapp.com/api/needs/psalms'

module.exports = {
      entry: {
        app: './src/index.js'
      },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
              title: 'Production'
        }),
        new webpack.DefinePlugin({
            API_PSALMS: JSON.stringify(API_PSALMS),
        })
    ],
    output: {
        filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
      }
};