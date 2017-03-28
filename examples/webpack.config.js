var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var webpack = require('webpack');

var deps = [
    'react/react.js',
    'react-router/lib/'
];

var config = {
    context: __dirname,
    entry: {
        index: './index.jsx',
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', "babel-preset-stage-2"]
                }
            }
        ]
    },


    devServer: {
        contentBase: "examples/",
        stats: {colors: true}
    },

    devtool: "eval-source-map"
};
module.exports = config;