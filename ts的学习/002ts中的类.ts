/*
    class类和继承
        ==>public:共有，在类里面、子类、类外面都可以访问
        ==>protected:保护类型，在类里面、子类可以访问；
        ==>private：私有，在类里面可以访问
        
*/

/*静态属性和静态方法*/
function Person(name){
    this.name = 'xxl' 
}
Person.prototype.age = 12 //静态属性
class Person{
    static name:number = 20
    constructor(name:string){
        this.name = name
    }
    say(){{/*实例方法*/
        console.log(this.name)
    }
    static print(){/*静态方法 没办法调用类的属性和方法*/
        console.log(this.name)
    }
}

/*多态 ==>父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现*/
class drunk {
    name:string
    constructor(name:string){
        this.name= name
    }
    toeat(){
        console.log("喝的方法")
    }
}
class tea extends drunk {
    constructor(name:string){
        super(name)
    }
    toeat(){    
        console.log('和奶茶')
    }
}
class pijiu extends drunk{
    constructor(name:string){
        super(name)
    }
    toeat(){
        console.log('喝啤酒')
    }
}

/*
    抽象方法和抽象类
        ==> 抽象类：它是提供其他类继承的基类，不能直接实例化
        ==>用abstract关键字定义的抽象类和抽象方法，abstract抽象方法只能放在抽象类里面
*/

    //==>标准:Animal这个类要求它的子类必须包含eat方法
    abstract class Animals{
        constructor(){}
        abstract eat():any;//==>抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
    }
    class  Dog extends Animals{
        //==>抽象类的子类必须实现抽象类的方法
        constructor(){
            super()
        }
        eat(){
            console.log('猫吃粮食')
        }
    }