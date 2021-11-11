"use strict";
/*
    TypeScript是Microsoft公司注册商标。
    TypeScript具有类型系统，且是JavaScript的超集。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。

*/
/* 一、类型注解 */
// function greeter(person: string) {
// 	return "Hello, " + person
// }
// let user = "Jane User"
// console.log(greeter(user))
/* 二、接口 */
// interface Person {
// 	firstName: string
// 	lastName: string
//   }
//   function greeter(person: Person) {
// 	return "Hello, " + person.firstName + " " + person.lastName
//   }
//   let user = { firstName: "Jane", lastName: "User" }
//   console.log(greeter(user))
/* 三、类 */
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(user);
console.log(greeter(user));
