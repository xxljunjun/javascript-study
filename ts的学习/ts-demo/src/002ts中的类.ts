/*
    class类和继承
        ==>public:公共类型，在类里面、子类、类外面都可以访问
        ==>protected:保护类型，在类里面、子类可以访问；
        ==>private:私有类型，在类里面可以访问
        ==>extends:继承
        ==>constructor:构造器
        ==>
    静态属性和静态方法
        ==>static:静态类型
    多态思想
    抽象方法和抽象类
        ==>abstract:抽象类
        
*/

/*静态属性和静态方法*/
function Person1(name:string){
    this.name = 'xxl' 
}
Person1.prototype.age = 12 //静态属性
class Person2{
     name:number = 20
    constructor(name:number){
        this.name = name
    }
    say(){/*实例方法*/
        console.log(this.name)
    }
    // static print(){/*静态方法 没办法调用类的属性和方法*/
    //     console.log(this.name)
    // }
}

/*多态 ==>父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现*/
// class Drunk {
//     public name:string
//     constructor(name:string){
//         this.name= name
//     }
//     toeat(){
//         console.log("喝的方法")
//     }
// }
// class tea extends Drunk {
//     constructor(name:string){
//         super(name)
//     }
//     toeat(){    
//         console.log('和奶茶')
//     }
// }
// class pijiu extends Drunk{
//     constructor(name:string){
//         super(name)
//     }
//     toeat(){
//         console.log('喝啤酒')
//     }
// }

/*
    抽象方法和抽象类
        ==> 抽象类:它是提供其他类继承的基类，不能直接实例化
        ==>用abstract关键字定义的抽象类和抽象方法，abstract抽象方法只能放在抽象类里面
*/

    // ==>标准:Animal这个类要求它的子类必须包含eat方法
    // abstract 
    // class Animals1{
        // constructor(){}
        // abstract eat():any;//==>抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
    // }
    // class Dog4 extends Animals1{
    //     //==>抽象类的子类必须实现抽象类的方法
    //     constructor(){
    //         super()
    //     }
    //     eat(){
    //         console.log('猫吃粮食')
    //     }
    // }