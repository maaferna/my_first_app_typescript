class processIdentityClassFile<T, U> {
	private _value: T;
	private _message: U;
	constructor(value: T, message: U) {
		this._value = value;
		this._message = message;
	}
	getIdentity() : T {
		console.log(this._message);
		return this._value
	}
}

let processor3 = new processIdentityClassFile<number, string>(100, 'Hello');
processor3.getIdentity();