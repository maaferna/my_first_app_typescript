function sumTwoNumbers(x, y) {
    return x + y;
}
console.log(sumTwoNumbers(1, 3));
var addNumbers = function (x, y) {
    return x + y;
};
console.log(addNumbers(1, 2));
// Anonymous function
var sum = function (input) {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, , 3]));
// arrow function
var addNumbers2 = function (x, y) { return x + y; };
console.log(addNumbers2(5, 5));
// Anonymous function with arrow function
var total2 = function (input) {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total2([10, 10]));
var addThreeNumbers = function (x, y, z) {
    if ((z === undefined)) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
console.log(addThreeNumbers(1, 2, 3));
console.log(addThreeNumbers(1, 2));
