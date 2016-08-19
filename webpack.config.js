var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        entry1: [
            './src/js/App.js',
            'webpack-dev-server/client?http://localhost:7777',
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        publicPath: "http://127.0.0.1:7777/static/dist/",
        path: './dist',
        filename: 'entry.js'
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        inline: true,
        port: 7777
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: ['babel'],
            query: {
                presets: ['es2015', 'react']
            }

        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

    ]

};