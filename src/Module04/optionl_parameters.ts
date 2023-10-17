function addNumbersOP (x:number, y?:number): number {
	if (y===undefined) {
		return x;
	} else {
		return x + y;
	}
}
console.log(addNumbersOP(1,2));
console.log(addNumbersOP(1));