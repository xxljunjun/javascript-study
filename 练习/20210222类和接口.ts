//接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述
//一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。
interface Alarm {
	alert()
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
	alert() {
		console.log('SecurityDoor alert')
	}
}

class Car implements Alarm {
	alert() {
		console.log('Car alert')
	}
}

/*一、 一个类实现了多个接口 */
interface Alarm {
	alert()
}

interface Light {
	lightOn()
	lightOff()
}

class Car implements Alarm, Light {
	alert() {
		console.log('Car alert')
	}
	lightOn() {
		console.log('Car light on')
	}
	lightOff() {
		console.log('Car light off')
	}
}

/* 二、接口继承接口 */
interface Alarm {
	alert()
}

interface LightableAlarm extends Alarm {
	lightOn()
	lightOff()
}

/* 三、接口继承类 */
class Point {
	x: number
	y: number
}

interface Point3d extends Point {
	z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }

/* 四、之前学习过，可以使用接口的方式来定义一个函数需要符合的形状：*/
interface SearchFunc {
	(source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
	return source.search(subString) !== -1
}