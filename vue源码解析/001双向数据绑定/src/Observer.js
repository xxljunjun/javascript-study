/*
    Obseerver类的功能是将一个正常的object转换为每个层级的属性都是响应式（可以被侦测）的object
*/
export default class Observer{
    constructor(value){
        console.log("接受到",value)
    }
}