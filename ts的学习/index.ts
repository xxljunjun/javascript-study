/*
    元组类型：允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
    enum类（枚举）：
    boolean：
    number：
    string：
    array：

    any类型：
    void类型：定义的方法没有返回值
    null和undefinde：undefinde变量声明未赋值，
    never类型:throw =new Error('错误')
*/
// function run(name:string,age:number=20,xxl?:string):void{
//     var name = name
//     var age = age
// }
// //入参和返回值都有定义类型
// //入参可传可不传用问号，且只能在入参的最后一个参数
// //es5参数没有默认值，es6和ts参数有默认值
// //剩余运算符号...
// function run_1(...result:number[]){
//     for(var i = 1;i<result.length;i++){
        
//     }
// }


//函数重载


//typescript中的接口
interface Config{
    type:string,
    url:string,
    data?:string,
    dataType:string
}
// console.log($)
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

//加密类型函数接口
interface jiami{
    (key:string,value:string):string
}
var md5 = function(key:string,value:string):string{
    return key+value
}


        //抽象方法和抽象类
        //==>抽象类：它是提供其他类继承的基类，不能直接实例化
        //用abstract关键字定义的抽象类和抽象方法，
        //abstract抽象方法只能放在抽象类里面
        //抽象类和抽象方法用来定义,
            //==>标准:Animal这个类要求它的子类必须包含eat方法
        abstract class Animal{
            abstract eat():any;//==>抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
        }
        class  Dog extends Animal{
            //==>抽象类的子类必须实现抽象类的方法
            constructor(name){
                super(name)
            }
            eat(){
                 console.log('猫吃粮食')
             }
        }
