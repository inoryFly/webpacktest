const webpack=require('webpack')
const merge = require('webpack-merge')
const base=require('./webpack.base')

const config=merge(base,{
    // entry:'./src/index.js',
    entry:['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true','./src/test.ts'],
    mode:"development",
    devtool: '#cheap-module-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"development"'
            }
        })
    ]
})

module.exports=config