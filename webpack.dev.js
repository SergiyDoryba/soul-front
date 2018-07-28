let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/applicationEntry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './public/assets/images/icons/favicon.ico'
        }),
        new CleanWebpackPlugin(['dist']),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        compress: true,
        port: 9000
    }
});