"use strict";
/* 一、布尔值 boolean*/
var isDone = false;
/* 二、数字 number*/
var decLiteral = 6;
/* 三、字符串 stying*/
var from = "道通科技有限公司";
var sentence = "Hello,my name is " + decLiteral;
/* 四、数组 array*/
var list = [1, 2, 3];
var arr = ["1123", "222", "3333"];
/* 五、元组 Tuple类型*/ //元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x;
x = ["hello", 10];
console.log(x[0].substr(1));
/* 六、枚举 enum类型*/
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(colorName); // 'Green'
/* 七、any类型 */
var notSure = 4;
notSure = "maybe a string instead"; // OK 赋值了一个字符串
notSure = false; // OK 赋值了一个布尔值
var tsarr = [1, true, "free"];
list[1] = 100;
/* 八、void类型 */ //它表示没有任何类型
function echo() {
    console.log('道通科技有限公司');
}
var unusable = undefined;
var greeting = null;
