function getArray(items) {
    return new Array().concat(items);
}
var numberArray = getArray([5, 10, 15, 20]);
var stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25); // OK
stringArray.push('Rabbits'); // OK
numberArray.push('This is not a number'); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]
// Now with generics It can now accept any type that you specify when calling the function
function getArray2(items) {
    return new Array().concat(items);
}
var numberArray2 = getArray2([5, 10, 15, 20]);
var stringArray2 = getArray2(['Cats', 'Dogs', 'Birds']);
numberArray2.push(25); // OK
stringArray2.push('Rabbits'); // OK
numberArray2.push('This is not a number'); // OK
stringArray2.push(30); // OK
console.log(numberArray2); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray2); // ["Cats", "Dogs", "Birds", "Rabbits", 30]
function identity(value, message) {
    console.log(message);
    return value;
}
var returnNumber = identity(100, 'Hello!');
var returnString = identity('100', 'Hola!');
var returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100; // OK
returnString = returnString * 100; // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
function identity2(value, message) {
    var result = value + value; //Error
    console.log(message);
    return result;
}
var returnNumber2 = identity2(100, 'Hello!'); // OK
var returnString2 = identity2('100', 'Hola!'); // OK
var returnBoolean2 = identity2(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
