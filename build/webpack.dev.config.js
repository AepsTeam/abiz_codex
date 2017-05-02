const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        '../client/index.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        // root: resolve(__dirname, 'node_modules'),
        extensions: [".js", ".jsx", ".json", ".scss"]
    },
    context: resolve(__dirname, '../client'),
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, '../client'),
        publicPath: '/'
    },
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}