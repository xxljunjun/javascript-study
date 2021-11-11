"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // public name: string
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    return Animal;
}());
/* 一、public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom
/* 二、private 修饰的属性或方法是私有的，不能在声明它的类的外部访问  */
//1属性无法直接存取的
//2属性和方法可在外部访问
//3使用 private 修饰的属性或方法子类中也是不允许访问的
//4当构造函数修饰为 private 时，该类不允许被继承或者实例化：
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom'; //希望有的属性是无法直接存取的
// Property 'name' is private and only accessible within class 'Animal'.
// Property 'name' is private and only accessible within class 'Animal'.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name); //在子类中也无法访问name
        return _this;
    }
    return Cat;
}(Animal));
// Property 'name' is private and only accessible within class 'Animal'.
/* 三、protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的 */
//1用 protected 修饰，则允许在子类中访问
//2构造函数修饰为 protected 时，该类只允许被继承：
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    return Cat;
}(Animal));
/* 四、只读属性关键词readonly */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
// Cannot assign to 'name' because it is a read-only property.
var Animal = /** @class */ (function () {
    // public readonly name
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    return Animal;
}());
/* 五、abstract 用于定义抽象类和其中的抽象方法。抽象类 */
//1首先，抽象类是不允许被实例化的：
//2抽象类中的抽象方法必须被子类实现：
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');
// Cannot create an instance of an abstract class.
/* 六、给类加上 TypeScript 的类型很简单，与接口类似： */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
