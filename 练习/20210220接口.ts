/* 
	前几次都是函数定义，最后一次是函数实现
	在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。 
	TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
*/

/* 一、Interfaces */  //赋值的时候，变量的形状必须和接口的形状保持一致。
// interface Person { 
// 	name: string
// 	age: number
// }
// let tom: Person = {
// 	name: 'Tom',
// 	age: 25
// }

/*二、可选属性*/
// interface Person {
// 	name: string
// 	age?: number
// }

// let tom: Person = {
// 	name: 'Tom'
// }

/* 三、任意属性 */
// interface Person {
// 	name: string
// 	age?: number
// 	[propName: string]: any
// }

// let tom: Person = {
// 	name: 'Tom',
// 	gender: 'male'
// }
// interface Person {  //一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// 	interface Person {
// 	name: string 
// 	age?: number
// 	[propName: string]: string
// }

// let tom: Person = {
// 	name: 'Tom',
// 	age: 25,
// 	gender: 'male'
// }

/* 四、只读属性 */
// interface Person {  //注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// 	readonly id: number
// 	name: string
// 	age?: number
// 	[propName: string]: any
// }
// let tom: Person = {
// 	id: 89757,
// 	name: 'Tom',
// 	gender: 'male'
// }
// tom.id = 9527

interface Person {
	readonly id: number
	name: string
	age?: number
	[propName: string]: any
}
let tom: Person = {
	name: 'Tom',
	gender: 'male'
}
