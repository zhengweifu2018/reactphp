 var webpack = require('webpack');
 var path = require('path');

module.exports = {
    // cache: true,

    entry: {
        index: './src/home/index/index.js'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss', 'jpg', 'png']
    },

    externals: {
        'three': 'THREE',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }, {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=8192?name=dist/[hash:8].[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
