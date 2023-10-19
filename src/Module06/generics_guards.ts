type ValidTypes2 = string | number;
function identityGuards<T extends ValidTypes2, U> (value:T, message: U) { // Return type is inferred
	let result:  ValidTypes2 = '';
	let typeValue: string = typeof value;
	if (typeof value === 'number') {
		result = value + value;
	} else if (typeof value === 'string') {
		result = value + value;
	}
	console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
	return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100
