const express=require('express')
const webpack=require('webpack')
const config=require('./webpack.dev')
const opn=require('opn')
const chalk=require('chalk')
const webpackDevMiddleware=require('webpack-dev-middleware')
const webpackHotMiddleware=require('webpack-hot-middleware')

const app=new express()
const compiler=webpack(config)


const instance=webpackDevMiddleware(compiler,{
    stats:'errors-only',
})
//1
app.use(instance)
//2
app.use(webpackHotMiddleware(compiler))
instance.waitUntilValid(()=>{
    console.log("> Listening at http://:localhost:7000/index"+"\n")
    // opn("http://localhost:7000/index")
})
//3
app.listen(7000,() => console.log('Test environment listening on port 8000!'))
/**其实有个一二三步基本就满足我的本地测试了 */