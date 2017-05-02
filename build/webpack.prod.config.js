const { resolve } = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
})

module.exports = {
    entry: {
        'app': '../client/index.jsx',
        'react_vendor': ['react', 'react-dom']
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss"]
    },
    context: resolve(__dirname, '../client'),
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss|css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }

                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[name].[ext]?[hash]'
                        }
                    }

                ]

            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'fonts/[name].[ext]?[hash]'
                        }
                    }
                ]

            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react_vendor',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            mode: 'prod',
            filename: '../dist/index.html',
            template: '../views/index.html',
            favicon: 'favicon.ico',
            cache: false,
            minify: {
                removeComments: false,
                collapseWhitespace: true
            }
        }),
        new CopyWebpackPlugin([{ from: '../views/error.html', to: '../dist/error.html' }])
    ]
}