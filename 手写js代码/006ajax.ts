

interface Config{
    type:string,
    url:string,
    data?:string,
    dataType:string
}

function ajax(config:Config){
    var xhr = new XMLHttpRequest()
    xhr.open(config.type,config.url,true)
    xhr.send(config.data)
    xhr.onreadystatechange= function(){
        if(xhr.readyState ==4 || xhr.status ==200){
            console.log('onchange')
            if(config.dataType === 'json'){
                // console.log(JSON.parse(xhr.responseText))
            }else{
                console.log(xhr.responseText)
            }
        }i
        
    }
}
ajax({
    type:'get',
    // url:'http://way.jd.com',
    url:'http://a.itying.com/api/productlist',
    // data:`city=深圳&appkey=7a85fc9df58cd155f764e033a257d879`,
    data:'name=zhangsan',
    dataType:'json'
})

