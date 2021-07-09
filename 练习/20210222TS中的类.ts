
class Animal {  //修饰符还可以使用在构造函数参数中，等同于类中定义该属性，使代码更简洁。
	// public name: string
	public constructor(public name) {
		this.name = name
	}
}

/* 一、public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的*/
class Animal {
	public name
	public constructor(name) {
		this.name = name
	}
}

let a = new Animal('Jack')
console.log(a.name) // Jack
a.name = 'Tom'
console.log(a.name) // Tom

/* 二、private 修饰的属性或方法是私有的，不能在声明它的类的外部访问  */
//1属性无法直接存取的
//2属性和方法可在外部访问
//3使用 private 修饰的属性或方法子类中也是不允许访问的
//4当构造函数修饰为 private 时，该类不允许被继承或者实例化：
class Animal {
	private name
	public constructor(name) {
		this.name = name
	}
}
let a = new Animal('Jack')
console.log(a.name) // Jack
a.name = 'Tom'  //希望有的属性是无法直接存取的
// Property 'name' is private and only accessible within class 'Animal'.
// Property 'name' is private and only accessible within class 'Animal'.
class Animal {
	private name  //
	public constructor(name) {
		this.name = name
	}
}
class Cat extends Animal {
	constructor(name) {
		super(name)
		console.log(this.name)  //在子类中也无法访问name
	}
}
// Property 'name' is private and only accessible within class 'Animal'.

/* 三、protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的 */
//1用 protected 修饰，则允许在子类中访问
//2构造函数修饰为 protected 时，该类只允许被继承：
class Animal {
	protected name
	public constructor(name) {
		this.name = name
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name)
		console.log(this.name)
	}
}

/* 四、只读属性关键词readonly */
class Animal {
	readonly name  //只读属性关键字，只允许出现在属性声明或索引签名中。
	public constructor(name) {
		this.name = name
	}
}

let a = new Animal('Jack')
console.log(a.name) // Jack
a.name = 'Tom'
// Cannot assign to 'name' because it is a read-only property.
class Animal {
	// public readonly name
	public constructor(public readonly name) {  //readonly 和其他访问修饰符同时存在的话，需要写在其后面。
		this.name = name
	}
}

/* 五、abstract 用于定义抽象类和其中的抽象方法。抽象类 */
//1首先，抽象类是不允许被实例化的：
//2抽象类中的抽象方法必须被子类实现：
abstract class Animal {
	public name
	public constructor(name) {
		this.name = name
	}
	public abstract sayHi()
}

let a = new Animal('Jack')

abstract class Animal {
	public name
	public constructor(name) {
		this.name = name
	}
	public abstract sayHi()
}

class Cat extends Animal {
	public sayHi() {
		console.log(`Meow, My name is ${this.name}`)
	}
}

let cat = new Cat('Tom')
// Cannot create an instance of an abstract class.

/* 六、给类加上 TypeScript 的类型很简单，与接口类似： */
class Animal {
	name: string
	constructor(name: string) {
		this.name = name
	}
	sayHi(): string {
		return `My name is ${this.name}`
	}
}

let a: Animal = new Animal('Jack')
console.log(a.sayHi()) // My name is Jack
