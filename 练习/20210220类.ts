
/* 一、es5的面向对象 */
function Person(name, age) {  //函数名和实例化构造名相同且大写（非强制，但这么写有助于区分构造函数和普通函数）
	this.name = name;
	this.age = age;
}
Person.prototype.say = function () {
	return "我的名字叫" + this.name + "今年" + this.age + "岁了";
}
var obj = new Person("laotie", 88);  //通过构造函数创建对象，必须使用new 运算符
console.log(obj.say());  //我的名字叫laotie今年88岁了
/* 二、es6的class类*/
class Person {
	constructor(name, age) {  //constructor是一个构造方法，用来接收参数
		this.name = name;  //this代表的是实例对象
		this.age = age;
	}
	say() {  //这是一个类的方法，注意千万不要加上function
		return "我的名字叫" + this.name + "今年" + this.age + "岁了";
	}
}
var obj = new Person("laotie", 88);  //obj是Person的一个实例，即实例对象
console.log(obj.say());  //我的名字叫laotie今年88岁了
/* 三、向类中覆盖方法 */
Person.prototype.say = function () {  //定义与类中相同名字的方法。成功实现了覆盖！
	return "我是来证明的，你叫" + this.name + "今年" + this.age + "岁了";
}
var obj = new Person("laotie", 88);
console.log(obj.say());  //我是来证明的，你叫laotie今年88岁了
/* 四、向类中添加方法 */
Person.prototype.addFn = function () {
	return "我是通过prototype新增加的方法,名字叫addFn";
}
var obj = new Person("laotie", 88);
console.log(obj.addFn());  //我是通过prototype新增加的方法,名字叫addFn
/* 五、Object.assign方法来为对象动态增加方法 */
Object.assign(Person.prototype, {
	getName: function () {
		return this.name;
	},
	getAge: function () {
		return this.age;
	}
})
var obj = new Person("laotie", 88);
console.log(obj.getName());//laotie
console.log(obj.getAge());//88
/* 六、constructor的作用 */
class Box {
	constructor() {
		console.log("啦啦啦，今天天气好晴朗");//当实例化对象时该行代码会执行。
	}
}
var obj = new Box();
/* 七、隐视定义constructor */
class Desk {
	constructor() {
		this.xixi = "我是一只小小小小鸟！哦";
	}
}
class Box {
	constructor() {
		return new Desk();// 这里没有用this哦，直接返回一个全新的对象
	}
}
var obj = new Box();
console.log(obj.xixi);//我是一只小小小小鸟！哦
/* 八、hasOwnProperty()函数用于判断属性是否是实例属性 */
class Box {
	constructor(num1, num2) {
		this.num1 = num1; //constructor中定义的属性可以称为实例属性（即定义在this对象上）
		this.num2 = num2;
	}
	sum() {
		return num1 + num2; //constructor外声明的属性都是定义在原型上的，可以称为原型属性（即定义在class上)
	}
}
var box = new Box(12, 88);
console.log(box.hasOwnProperty("num1"));//true
console.log(box.hasOwnProperty("num2"));//true
console.log(box.hasOwnProperty("sum"));//false
console.log("num1" in box);//true
console.log("num2" in box);//true
console.log("sum" in box);//true
console.log("say" in box);//false
/* 九、类的所有实例共享一个原型对象，它们的原型都是Person.prototype，所以proto属性是相等的 */
class Box {
	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
	sum() {
		return num1 + num2;
	}
}
var box1 = new Box(12, 88);  //box1与box2都是Box的实例。它们的__proto__都指向Box的prototype
var box2 = new Box(40, 60);
console.log(box1.__proto__ === box2.__proto__);//true
/*十、也可以通过proto来为类增加方法。使用实例的proto属性改写原型，会改变Class的原始定义，影响到所有实例，所以不推荐使用！ */
class Box {
	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
	sum() {
		return num1 + num2;
	}
}
var box1 = new Box(12, 88);
var box2 = new Box(40, 60);
box1.__proto__.sub = function () {
	return this.num2 - this.num1;
}
console.log(box1.sub());//76
console.log(box2.sub());//20
/* 十一、class不存在变量提升 */
new A();
function A() {  //ES5可以先使用再定义,存在变量提升

}
new B();//B is not defined    //ES6不能先使用再定义,不存在变量提升 会报错
class B {

}
/* 十二、类的继承 */
class Animal {
	constructor(public name) {
		this.name = name
	}
	sayHi() {
		return `My name is ${this.name}`
	}
}

let a = new Animal('Jack')
console.log(a.sayHi()) // My name is Jack
class Cat extends Animal {
	constructor(name) {
		super(name) // 调用父类的 constructor(name)
		console.log(this.name)
	}
	sayHi() {
		return 'Meow, ' + super.sayHi() // 调用父类的 sayHi()
	}
}

let c = new Cat('Tom') // Tom
console.log(c.sayHi()) // Meow, My name is Tom
/* 十三、存取器 */
class Animal {
	constructor(name) {
		this.name = name
	}
	get name() {  //不能有参数
		return 'Jack'  //这个伪属性只可读，不可写
	}
	set name(value) {  //有且有一个参数
		console.log('setter: ' + value)
	}
}

let a = new Animal('Kitty') // setter: Kitty
a.name = 'Tom' // setter: Tom
console.log(a.name) // Jack
/* 十四、使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用： */
class Animal {
	static isAnimal(a) {
		return a instanceof Animal
	}
}

let a = new Animal('Jack')
Animal.isAnimal(a) // true
a.isAnimal(a) // TypeError: a.isAnimal is not a function



