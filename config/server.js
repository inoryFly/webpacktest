const express=require('express')
const webpack=require('webpack')
const config=require('./webpack.dev')
const opn=require('opn')
const webpackDevMiddleware=require('webpack-dev-middleware')
const webpackHotMiddleware=require('webpack-hot-middleware')

const app=new express()
const compiler=webpack(config)
const instance=webpackDevMiddleware(compiler,{
    stats:{
        chunks:false,
        modules:false,
        hash:false,
        timings:false,
        chunkOrigins: false,
        builtAt:false,
        assets:false
    }
})
//1
app.use(instance)
//2
app.use(webpackHotMiddleware(compiler))
instance.waitUntilValid(()=>{
    console.log("> Listening at localhost:8000"+"\n")
    opn("http://localhost:8000")
})
//3
app.listen(8000,() => console.log('Test environment listening on port 8000!'))
/**其实有个一二三步基本就满足我的本地测试了 */