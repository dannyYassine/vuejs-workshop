/**
 * Created by dannyyassine on 2017-03-05.
 */
var path = require('path');

module.exports = {
    entry: {
        vue_app: './scripts/application.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'scripts'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: path.join(__dirname, 'partials'),
            loader: 'raw-loader'
        }]
    },
    devtool: "source-map"
};