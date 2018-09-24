const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: ['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        //Separate the code chunk between vendors and main script
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        //Dynamically make the template file and link the script source
        new HtmlWebpackPlugin({
            template:'public/index.html'
        }),
        //Delete the build folder and everything inside
        new cleanWebpackPlugin('build/*.*')
    ]
}