/* 一、布尔值 boolean*/
let isDone: boolean = false

/* 二、数字 number*/
let decLiteral: number = 6

/* 三、字符串 stying*/
let from: string = "道通科技有限公司"
let sentence:string = `Hello,my name is ${decLiteral}`

/* 四、数组 array*/
let list:number[]=[1,2,3]
let arr:Array<string>=["1123","222","3333"]

/* 五、元组 Tuple类型*/ //元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x:[string,number]
x=["hello",10]
console.log(x[0].substr(1))

/* 六、枚举 enum类型*/
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green
// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green
let colorName: string = Color[2]
console.log(colorName)  // 'Green'

/* 七、any类型 */
let notSure: any = 4
notSure = "maybe a string instead" // OK 赋值了一个字符串
notSure = false // OK 赋值了一个布尔值
let tsarr: any[] = [1, true, "free"]
list[1] = 100

/* 八、void类型 */ //它表示没有任何类型
function echo(): void {
	console.log('道通科技有限公司')
}
let unusable: void = undefined
let greeting: void = null

/* 九、never类型 */
//never类型:throw =new Error('错误')
function run(name:string,age:number=20,xxl?:string){
    var name = name
     var age = age
}
function run_1(...result:number[]){
    for(var i = 1;i<result.length;i++){
        console.log(result)
    }
}
/*
    ==>变量后面的问号代表可传可不传
    ==>es5参数没有默认值，es6和ts参数有默认值
*/
