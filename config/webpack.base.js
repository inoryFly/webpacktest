// const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const utils=require('./utils')

let entries=utils.getEntries('src')
let plugins=utils.getHtmlWebpackPlugin(entries)

const base = {
    
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "./../dist")
    },
    resolve:{
      alias:{
        '@js':path.resolve(__dirname,"../public/js")
      },
      extensions:['.ts','.js','.less']
    },
    module:{
        rules: [{
            test: /\.(js|tsx?)$/,
            exclude:/node_modules/,
            // use: ['babel-loader','ts-loader']
            use:['ts-loader']
        },{
            test: /\.css$/,
            exclude:/node_modules/,
            use: ['style-loader',
               'css-loader',
                'postcss-loader'
            ]
        },{
            test: /\.less$/,
            exclude:/node_modules/,
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
    plugins: [new CleanWebpackPlugin(),...plugins]
}
module.exports = base