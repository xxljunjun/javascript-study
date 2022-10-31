export default function defineReactive(data,key,val){
    Object.defineProperty(data,key,{
        // value:'男',
        // writable:true,  //是否可更改
        // enumerable:false, //是否可被枚举
        // configurable:true,  //可以被配置
        get(){
            console.log("你试图访问obj的属性")
            return val
        },
        set(newVal){
            console.log("你试图改变obj的属性",newVal)
            if(val === newVal){
                return
            }
            val = newVal
        }
    })
}