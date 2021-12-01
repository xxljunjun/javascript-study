class Queue {
    data = [];
    push = (item) => this.data.push(item);
    pop = () => this.data.pop();
}
let queue = new Queue();
queue.push(0);
