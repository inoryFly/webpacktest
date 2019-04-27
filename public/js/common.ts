import * as echarts from 'echarts/index'

// function addEvent(type,el,fn){
//     if(window.addEventListener){
//         addEvent=function(type,el,fn){
//             el.addEventListener(type,fn,false)
//         }
//     }else{
//         addEvent=function(type,el,fn){
//             el.attachEvent('on'+type,fn)
//         }
//     }
//     addEvent(type,el,fn)
// }
/**

 */
class Statistics{
    constructor(config,width,height){
        //创建外层容器
        this.createWrap(config.wrap)
        //创建echarts图表
        this.createEcharts(config.echartsConfig,width,height)
        //创建框框
        this.createBorder(config.borderConfig)
        if(config.hasOwnProperty('buttonConfig')){
            this.createButton(config.buttonConfig)
        }
        if(config.hasOwnProperty('bottomConfig')){
            this.createBottom(config.bottomConfig)
        }
    }
    elId:HTMLDivElement;//最外层的容器
    echartsWrap:HTMLDivElement;//echarts容器
    echartsObj:any;//echarts对象
    createWrap(wrap){
        this.elId = document.createElement("div")
        this.elId.setAttribute("class",wrap.class)
        let title=document.createElement("div")
        title.innerHTML=wrap.title;
        title.setAttribute('class','title')
        this.elId.appendChild(title)
    }
    createEcharts(echartsConfig,width,height){
        this.echartsWrap=document.createElement("div")
        this.echartsWrap.style.width=width
        this.echartsWrap.style.height=height
        this.echartsWrap.setAttribute("class",'echartsWrap')
        this.elId.appendChild(this.echartsWrap)
        this.echartsObj=echarts.init(this.echartsWrap)
        this.echartsObj.setOption(echartsConfig)
    }
    createBorder(borderConfig){
        let width=borderConfig.width,height=borderConfig.height
        let svgCanvas = "0"+" 0 " + width + " " + height
        //设置六个点的位置，从左边开口开始，逆时针到右边开口结束
        //上下，左右离边都是10，开口距离设置为160，角长20
        let bottomX=width-10,bottomY=height-10
        let rectBorder="30,10 10,10 10,"+bottomY+" "+bottomX+","+bottomY+" "+bottomX+",10 "+(30+borderConfig.openWidth)+",10"
        let selfDIV=document.createElement('div')
        selfDIV.setAttribute("class","borderwrap")
        selfDIV.innerHTML+=`<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="${svgCanvas}" style="enable-background:new ${svgCanvas};" xml:space="preserve">
            <style type="text/css">
                .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#00fcfc;}
                .st1{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#27629c;stroke-width:0.5;stroke-miterlimit:10;}
            </style>
            <title>边框</title>
            
            <g>
                <rect x="10" y="10" class="st0" width="20" height="2"/>
                <rect x="10" y="10" class="st0" width="2" height="20"/>
                <rect x="10" y=${bottomY-20} class="st0" width="2" height="20"/>
                <rect x="10" y=${bottomY-2} class="st0" width="20" height="2"/>
                <rect x=${bottomX-20} y=${bottomY-2} class="st0" width="20" height="2"/>
                <rect x=${bottomX-2} y=${bottomY-20} class="st0" width="2" height="20"/>
                <rect x=${bottomX-2} y="10" class="st0" width="2" height="20"/>
                <rect x=${bottomX-20} y="10" class="st0" width="20" height="2"/>
                <polyline class="st1" points="${rectBorder}"/>
            </g>
        </svg>`
        this.elId.appendChild(selfDIV)
    }
    createButton(buttonConfig){
        let buttonwrap=document.createElement('div')
        buttonwrap.setAttribute("class","buttonWrap")
        for(let value of buttonConfig){
            let div=document.createElement("div")
                div.innerHTML=value.content
                div.setAttribute("class",value.class)
                div.setAttribute("id",value.id)
                buttonwrap.appendChild(div)
                div.addEventListener("click",value.events,false)
        }
        this.elId.appendChild(buttonwrap)
    }
    createBottom(bottomConfig){
        let div=document.createElement('div')
        div.setAttribute("class","bottomWrap")
        div.innerHTML=bottomConfig.content
        this.elId.appendChild(div)
    }
}

let test=new Statistics({
    //最外层的容器
    wrap:{
        class:"test",
        title:"销量统计"
    },
    //echarts配置
    echartsConfig:{
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    },
    borderConfig:{
        width:"400",
        height:"300",
        openWidth:160
    },
    buttonConfig:[{
        content:"销售量",
        class:"leftbutton active",
        id:"number",
        events:function(e){
            console.log("销售量")
        }
    },{
        content:"销售额",
        class:"rightbutton",
        id:"number",
        events:function(e){
            console.log("销售额")
        }
    }],
    bottomConfig:{
        content:"<span style='color:red'>测试</span>"
    }
},"376px","276px")
let fragment=document.createDocumentFragment()
fragment.appendChild(test.elId)
document.body.appendChild(fragment)