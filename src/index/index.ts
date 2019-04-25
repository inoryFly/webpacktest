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