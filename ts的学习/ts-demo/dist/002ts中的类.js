function Person1(name) {
    this.name = 'xxl';
}
Person1.prototype.age = 12;
class Person2 {
    name = 20;
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name);
    }
}
