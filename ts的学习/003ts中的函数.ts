/*
    ts中的函数
        ==>可选参数
        ==>默认参数
        ==>三点运算符入参的集合
        ==>函数重载
*/
//普通ts函数
function sum(x: number, y: number): number {
	return x + y
}

//有可选参数的ts函数
var sum_1 = function(x: number, y?: number):number{
    return x 
}

//有默认参数化的ts函数
function buildName(firstName: string, lastName: string = 'Cat') {
	return firstName + ' ' + lastName
}

//三点运算符
// function add(a:number,b:number,c:number):number{
//     return a+b+c
// }
function add(...result:number[]):number{
    return a+b+c
}
add(1,2,3)

//函数重载
//两个或两个以上相同名字的函数，但他们的入参不一样
function getUser(name:string):string{}
function getUser(age:number):number{}
function getUser(str:any):any{
    if(typeof str === 'string'){
        console.log(str)
    }else{
        console.log(str)
    }
}



