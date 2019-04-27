import "@js/common"
// import * as echarts from 'echarts/index'
// interface StatisticsProps {
  
//     elId: HTMLElement;
//     wrapName:string;
//     selfClass:string;
//     createWrap: (selfAttributes:Object) => void;
//     initWrapBorder: (width: number, height: number) => HTMLElement
//     echartsConfig:(el:HTMLElement)=>void
// }
// class Statistics implements StatisticsProps {
//     constructor(wrapName:string,selfAttributes:Object,selfClass:string) {

//         this.wrapName=wrapName
//         this.selfClass=selfClass
//         this.createWrap(selfAttributes)
//     }
//     selfClass:string;
//     elId: HTMLElement;
//     wrapName:string;
//     initWrapBorder(width: number, height: number) {
//         let svgCanvas = "0"+" 0 " + width + " " + height
//         //设置六个点的位置，从左边开口开始，逆时针到右边开口结束
//         //上下，左右离边都是10，开口距离设置为160，角长20
//         let bottomX=width-10,bottomY=height-10
//         let rectBorder="30,10 10,10 10,"+bottomY+" "+bottomX+","+bottomY+" "+bottomX+",10 190,10"
//         let selfDIV=document.createElement('div')
//         selfDIV.setAttribute("class",this.selfClass)
//         selfDIV.innerHTML+=`<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
//         viewBox="${svgCanvas}" style="enable-background:new ${svgCanvas};" xml:space="preserve">
//             <style type="text/css">
//                 .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#3398DB;}
//                 .st1{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#3398DB;stroke-width:0.5;stroke-miterlimit:10;}
//             </style>
//             <title>边框</title>
//             <text font-size="16" x="10" y="20" fill="rgb(255,255,255)" transform="translate(40,0)">
//                 <tspan>${this.wrapName}</tspan>
//             </text>
//             <g>
//                 <rect x="10" y="10" class="st0" width="20" height="2"/>
//                 <rect x="10" y="10" class="st0" width="2" height="20"/>
//                 <rect x="10" y=${bottomY-20} class="st0" width="2" height="20"/>
//                 <rect x="10" y=${bottomY-2} class="st0" width="20" height="2"/>
//                 <rect x=${bottomX-20} y=${bottomY-2} class="st0" width="20" height="2"/>
//                 <rect x=${bottomX-2} y=${bottomY-20} class="st0" width="2" height="20"/>
//                 <rect x=${bottomX-2} y="10" class="st0" width="2" height="20"/>
//                 <rect x=${bottomX-20} y="10" class="st0" width="20" height="2"/>
//                 <polyline class="st1" points="${rectBorder}"/>
//             </g>
//         </svg>`
//         return selfDIV
//     }
//     createWrap(selfAttributes:Object) {
//         let eiId = document.createElement("div")
//         for(let key of Object.keys(selfAttributes)){
//             eiId.setAttribute(key,selfAttributes[key])
//         }
//         this.elId=eiId
//         this.elId.style.height="400px"
//         this.elId.style.width="300px"
//         console.log(eiId)
//         // document.body.appendChild(eiId)
//         // this.echartsConfig(eiId)
//         // eiId.innerHTML+=this.initWrapBorder(this.width,this.height)
//     }
//     echartsConfig(config:Object){
//         var myChart = echarts.init(this.elId);
        
//         // 指定图表的配置项和数据
//         // var option = {
           
      
//         // };

//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(config);
//     }
// }

// let test=new Statistics("数据统计",{
//     class:"test"
// },"borders"),
// test2=new Statistics("车辆统计",{
//     class:"test test2"
// },"borders boder2")
// let fragment=document.createDocumentFragment()

// test.echartsConfig({
//     xAxis: {
//         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// })
// test2.echartsConfig({
//     xAxis: {
//         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// })
// console.log()
// test.elId.append(test.initWrapBorder(document.body.clientWidth*0.3,400))
// test2.elId.append(test2.initWrapBorder(test2.elId.clientWidth,test2.elId.clientHeight))
// fragment.appendChild(test.elId)
// fragment.appendChild(test2.elId)
// document.body.appendChild(fragment)