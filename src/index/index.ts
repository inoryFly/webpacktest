<<<<<<< HEAD
console.log('ok')

let gg=document.createElement("div")
gg.innerHTML='<div>\
    测试<span style="color:red">啊</span>\
</div>'
document.body.appendChild(gg)
let btn:HTMLButtonElement=document.querySelector('#cl') as HTMLButtonElement
btn.addEventListener('click',function(){
    console.log("gg")
    fetch('http://192.168.16.116:8000/test/',{
        method:"get",
        headers: new Headers({
            'Content-Type': 'application/json'
          })
    }).then(res=>res.json()).then(response=>{
        console.log(response)
    })
})
=======
import  './index.less'
import names from "@js/common"
console.log(names)
// console.log(styles)
// let content=`<span class=${styles.root}>測試</span>`
// document.body.innerHTML+=content
>>>>>>> cb8641e0f3701d0b428077f9b7701c7804f6cbdb
