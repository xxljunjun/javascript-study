"use strict";
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
// console.log($)
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 || xhr.status == 200) {
            console.log('onchange');
            if (config.dataType === 'json') {
                // console.log(JSON.parse(xhr.responseText))
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    // url:'http://way.jd.com',
    url: 'http://a.itying.com/api/productlist',
    // data:`city=深圳&appkey=7a85fc9df58cd155f764e033a257d879`,
    data: 'name=zhangsan',
    dataType: 'json'
});
var md5 = function (key, value) {
    return key + value;
};
