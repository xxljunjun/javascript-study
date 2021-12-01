
/*
    实例化的时候传入数据类型,一般使用T表示
*/
class Queue<T> {
    private data:T[] = []
    push = (item:T) =>this.data.push(item)
    pop = ():T| undefined =>this.data.pop()
}

let queue = new Queue<number>()
queue.push(0);
// queue.push('1'); //泛型指定的是数据类型是number