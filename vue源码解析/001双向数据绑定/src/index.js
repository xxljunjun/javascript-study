/*
    oberve(obj)==>看obj上有没有__ob__==>没有则new Obsever()将产生的实例添加到_-ob__==>遍历下一层属性，逐个defineReactive
*/
// import defineReactive from './defineReactive.js'
import Observer from './Observer.js'
var obj = {
    a:{
        m:{
            n:5
        }
    }
}
//创建observe函数
function oberve(value){
    if(typeof value != 'object') return;
    var ob;
    if(typeof value.__ob__ != 'undefined'){
        ob = value.__ob__
    }else{
        ob = new Observer(value)
    }
    return ob
}
oberve(obj)