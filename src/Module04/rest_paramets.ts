let addMultipleNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
	let total: number = firstNumber;
	for (let counter = 0; counter < restOfNumbers.length; counter++) {
		if (isNaN(restOfNumbers[counter])) {
			continue;
		}
		total += Number(restOfNumbers[counter]);
	}
	return total;
}

console.log(addMultipleNumbers(1, 2, 3, 4, 5, 6, 7));  // returns 28
console.log(addMultipleNumbers(2));                    // returns 2
console.log(addMultipleNumbers(2, 3, "three"));        // flags error due to data type at design time, returns 5