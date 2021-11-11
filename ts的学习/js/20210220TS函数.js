"use strict";
/* 一、用数据类型对函数输入和输出进行约束*/
function sum(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
/* 三、可选参数?*/ //可选参数后面不允许再出现必需参数了
// function buildName(firstName: string, lastName?: string) {
// 	if (lastName) {
// 		return firstName + ' ' + lastName
// 	} else {
// 		return firstName
// 	}
// }
// let tomcat = buildName('Tom', 'Cat')
// let tom = buildName('Tom')
/* 四、参数默认值*/ //TypeScript会将添加了默认值的参数识别为可选参数：此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
/* 五、剩余参数 */ //ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数） //rest 参数只能是最后一个参数，关于 rest 参数，可以参考 [ES6 中的 rest 参数][]。
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
