type calculator = (x: number, y: number) => number;

let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number) => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
	if (operation === 'add') {
		return addNumbers;
	} else {
        return subtractNumbers;
	}
}

console.log(doCalculation('add')(1, 2))
console.log(doCalculation('subtract')(1, 2))
console.log(doCalculation('add')(1, 2))
console.log(doCalculation('subtract')(1, 2))