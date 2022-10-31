// import {name,getName} from './son.js'
import * as newSon from './son.js'
// import mine from './son.js'

console.log('xxx',newSon)
// console.log('xxx',getName)


//ESModule支持同步异步
import('./son.js').then(res=>{
        console.log('xxxx',res)
    })
console.log('2222')