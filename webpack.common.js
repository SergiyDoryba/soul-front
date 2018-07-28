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
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { test: /\.scss?$/,
                loader: 'style-loader!css-loader!sass-loader',
                include: path.join(__dirname, 'src', 'styles')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        exclude: path.resolve(__dirname, '../src/'),
                        use: 'svg-react-loader'
                    },
                    {
                        exclude: path.resolve(__dirname, '../node_modules/'),
                        use: 'url-loader'
                    },
                ],
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
      }
};