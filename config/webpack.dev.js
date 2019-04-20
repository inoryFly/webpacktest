const webpack=require('webpack')
const merge = require('webpack-merge')
const base=require('./webpack.base')
const utils=require('./utils')

let entries=utils.getEntries('src')
let resultEntry={},plugins=utils.getHtmlWebpackPlugin(entries)
for(let key in entries){
    resultEntry[key]=['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',entries[key]]
}
const config=merge(base,{
    // entry:'./src/index.js',
    entry:resultEntry,
    mode:"development",
    devtool: '#cheap-module-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"development"'
            }
        }),
        ...plugins
    ]
})

module.exports=config