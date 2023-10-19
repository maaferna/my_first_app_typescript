function identityGuards(value, message) {
    var result = '';
    var typeValue = typeof value;
    if (typeof value === 'number') {
        result = value + value;
    }
    else if (typeof value === 'string') {
        result = value + value;
    }
    console.log("The message is ".concat(message, " and the function returns a ").concat(typeValue, " value of ").concat(result));
    return result;
}
var numberValue = identity(100, 'Hello');
var stringValue = identity('100', 'Hello');
console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
