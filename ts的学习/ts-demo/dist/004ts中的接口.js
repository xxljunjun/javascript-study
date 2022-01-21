function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 || xhr.status == 200) {
            console.log('onchange');
            if (config.dataType === 'json') {
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    data: 'name=zhangsan',
    dataType: 'json'
});
var md5 = function (key, value) {
    return key + value;
};
var arr = ['xxl', 'jun'];
class Dog1 {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
    }
}
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
    }
    work() { }
}
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    coding() {
        console.log(this.name);
    }
}
class man extends Person {
    constructor(name) {
        super(name);
    }
    eat() {
    }
    work() {
    }
}
