var addNumbers = function (x, y) { return x + y; };
var subtractNumbers = function (x, y) { return x - y; };
console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
var doCalculation = function (operation) {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
console.log(doCalculation('subtract')(1, 2));
console.log(doCalculation('add')(1, 2));
console.log(doCalculation('subtract')(1, 2));
