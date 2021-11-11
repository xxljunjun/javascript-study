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
function run(name, age, xxl) {
    if (age === void 0) { age = 20; }
    var name = name;
    var age = age;
}
//入参和返回值都有定义类型
//入参可传可不传用问号，且只能在入参的最后一个参数
//es5参数没有默认值，es6和ts参数有默认值
//剩余运算符号...
function run_1() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    for (var i = 1; i < result.length; i++) {
    }
}
//函数重载
