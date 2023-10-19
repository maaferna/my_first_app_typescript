function getArray(items: any[]): any[] {
	return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]

// Now with generics It can now accept any type that you specify when calling the function

function getArray2<T>(items: T[]): T[] {
	return new Array<T>().concat(items);
}

let numberArray2 = getArray2<number>([5, 10, 15, 20]);
let stringArray2 = getArray2<string>(['Cats', 'Dogs', 'Birds']);
numberArray2.push(25);                       // OK
stringArray2.push('Rabbits');                // OK
numberArray2.push('This is not a number');   // OK
stringArray2.push(30);                       // OK
console.log(numberArray2);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray2);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


function identity<T, U> (value: T, message:U) : T {
	console.log(message);
	return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'


// Generic  constrains parameter can accept to a range of types that you can perform an add operation on, rather than accepting any possible type

type  ValidTypes = string | number;

function identity2<T extends ValidTypes, U> (value: T, message: U) : T {
	let result: T = value + value; //Error
	console.log(message);
	return result
}

let returnNumber2 = identity2<number, string>(100, 'Hello!');      // OK
let returnString2 = identity2<string, string>('100', 'Hola!');     // OK
let returnBoolean2 = identity2<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.