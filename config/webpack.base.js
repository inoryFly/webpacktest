// const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const base = {
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "./../dist")
    },
    module:{
        rules: [{
            test: /\.(js|tsx?)$/,
            exclude:/node_modules/,
            // use: ['babel-loader','ts-loader']
            use:['ts-loader']
        },{
            test: /\.css$/,
            use: ['style-loader',
                'css-loader',
                'postcss-loader'
            ]
        },{
            test: /\.less$/,
            use: ['style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader',
            ]
        },{
            test: /\.json$/,
            use: 'json-loader',
          },
          {
            test: /\.(gif|jpg|jpeg|png|bmp|svg|ico)(\?.*)?$/,
            use: [{
              loader: 'url-loader',
              options: {
                limit: 1,
                name: 'assets/images/[name].[hash:8].[ext]',
              },
            }],
          },
          {
            test: /\.(woff|woff2|eot|ttf)(\?.*)?$/,
            use: [{
              loader: 'url-loader',
              options: {
                limit: 8912,
                name: 'assets/font/[name].[hash:8].[ext]',
              },
            }],
          },
         ]
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template:"./index.html"
    })]
}
module.exports = base