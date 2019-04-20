const path=require('path')
const glob=require('glob')
const HtmlWebpackPlugin=require('html-webpack-plugin')
/**
 * @method getEntries
 * @describle 获取多页应用入口
 */
let getEntries=function(gloPath){
    let _entries={}
    //获取顶级目录
    let jsDir=path.resolve(gloPath)
    let pattern = jsDir+'/**/index.ts'
    let entries=glob.sync(pattern,{nodir:true})
    let reJsDir=jsDir.replace(/\\/g,"/")
    //G:\webpacktest\webpacktest\src
    for(let i=0;i<entries.length;i++){
        // console.log(entries[i].replace(jsDir,""))
        let entryName=entries[i].replace(reJsDir+"/","").replace("/index.ts","")
        _entries[entryName]=entries[i]
    }
    return _entries
}
let getHtmlWebpackPlugin=function(entries){
    let _plugins=[]
    for(let key in entries){
        let templatePath=entries[key].replace("index.ts","index.ejs")
        const htmlPlugin=new HtmlWebpackPlugin({
            template:templatePath,
            filename:`${key}/index.html`,
            chunks:[key]
        })
        _plugins.push(htmlPlugin)
    }
    return _plugins
}
module.exports={
    getEntries,
    getHtmlWebpackPlugin
}