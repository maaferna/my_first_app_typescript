function sumTwoNumbers (x: number, y:number): number {
	return x + y;
}

console.log(sumTwoNumbers(1,3));

let addNumbers = function (x: number, y: number): number {
   return x + y;
}
console.log(addNumbers(1, 2));

// Anonymous function
let sum = function(input: number[]): number {
	let total: number = 0;
	for (let i=0; i < input.length; i++) {
		if(isNaN(input[i])){
			continue;
		}
		total += Number(input[i]);
	}
	return total;
}
console.log(sum([1,,3]))

// arrow function
let addNumbers2 = (x:number, y:number): number => x+y
console.log(addNumbers2(5,5));

// Anonymous function with arrow function

let total2 = (input: number[]): number => {
	let total: number=0;
	for (let i=0; i < input.length; i++) {
		if(isNaN(input[i])){
			continue;
		}
		total += Number(input[i]);
	}
	return total;
}

console.log(total2([10,10]));


let addThreeNumbers = (x:number, y:number, z?:number): number => {
	if((z === undefined)) {
		return x +y;
	} else {
		return x + y + z;  
	}
}

console.log(addThreeNumbers(1,2,3));
console.log(addThreeNumbers(1,2));