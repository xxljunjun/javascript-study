function sum(x, y) {
    return x + y;
}
var sum_1 = function (x, y) {
    return x;
};
function buildName(firstName, lastName = 'Cat') {
    return firstName + ' ' + lastName;
}
function add(...result) {
    console.log('入参', result);
}
add(1, 2, 3);
