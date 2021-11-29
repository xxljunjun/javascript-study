/*
    ts中的接口
        ==>interface:用于定义接口的关键字interface
        ==>implements:对类的约束 和抽象类有点相似,创建的类必须实现接口中的属性和方法

/*typescript中的接口*/
interface Config{
    type:string; //注意：!!!分号结束
    url:string;
    data?:string; //接口可选
    dataType:string;
})
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
        }
        
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

/*函数类型的接口*/  //可以批量
interface encrypt{
    (key:string,value:string):string
}
var md5:encrypt = function(key:string,value:string):string{
    return key+value
}

/*可索引的接口*/  //对对象以及数组的约束（不常用）
interface Uerarr{
    [index:number]:string
}
var arr:Uerarr = ['xxl','jun']
var arr:Uerarr ={name:'xxl'}

/*类类型接口*/
interface leilei {/*implements对类的约束 和抽象类有点相似*/
    name:string;
    eat(str:string):void
}
class Dog implements leilei{
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(){

    }
}

/*接口扩展：接口可以继承接口*/
interface leilei {
    name:string;
    eat(str:string):void
}
interface xxl extends leilei{
    work():void
}

class Dog implements xxl{/*dog这个类必须实现xxl和leilei两个接口*/
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(){

    }
}


//----------------
class Person {
    name:string
    constructor(name:string){
        this.name = name
    }
    coding(){
        console.log(this.name)
    }
}
class man extends Person implements xxl{
    constructor(name:string){
        super(name)
    }
    eat(){


    }
    work():void{
        
    }
}