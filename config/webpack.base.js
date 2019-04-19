const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const base = {
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "./../dist")
    },
    rules: [{
        test: /\.css$/,
        use: ['style-loader',
            'css-loader',
            'postcss-loader']
    }],
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
}
module.exports = base