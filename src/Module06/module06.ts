interface IdentityM6<T,U> {
	value: T;
	message: U;
}

let returnNumberM6: IdentityM6<number, string> = {
	value: 25,
	message: 'hello'
}

let returnStringM6: IdentityM6<string, number> = {
	value: 'hello',
	message: 25
}

interface ProcessIdentity<T, U> {
	(value: T, message:U): T;
}


function ProcessIdentity<T,U>(value:T, message:U): T {
	console.log(message);
	return value
}

let processor: ProcessIdentity<number, string> = ProcessIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
let returnString1 = processor('Hello!', 100);   // Type check error

//  Declare a generic interface as a class type

interface ProcessIdentityClass<T, U> {
	value: T;
    message: U;
	process(): T;
}

class processIdentityClass<X, Y> implements ProcessIdentityClass<X,Y> {
	value: X;
	message: Y;
	constructor(val:X, msg: Y) {
		this.value = val;
		this.message = msg;
	}
	process(): X {
		console.log(this.message);
		return this.value
	}
}

let processor2 = new processIdentityClass<number, string>(100,"Hello");
processor2.process();
processor2.value = '100';