function buildArray(items: number, sorterOrder: 'ascending' | 'descending'): number[] {
	let randomNumbers: number[] = [];
	let nextNumber: number;
	for (let counter=0; counter < items; counter++) {
		nextNumber = Math.ceil(Math.random() * (100-1));
		if (randomNumbers.indexOf(nextNumber) === -1) {
			randomNumbers.push(nextNumber);
		} else {
			counter--;
		}
	}
	if (sorterOrder === 'ascending') {
		return randomNumbers.sort(sortAscending);
	} else {
		return randomNumbers.sort(sortDecending);
	}
}

let sortDecending: compareFunctionType = (a,b) => {
	if (a > b) {
		return -1;
	} else if (b > 0) {
		return 1;
	} else {
		return 0;
	}
}

let sortAscending: compareFunctionType = (a,b) => {
	if (a > b) {
		return 1;
	} else if (b > 0) {
		return -1;
	} else {
		return 0;
	}
}

type compareFunctionType = (a: number, b:number) => number;

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);


function loanCalculator (principal: nuumber, interestRate: nuumber, months=12): string {
    let interest: nuumber = interestRate / 1200;
    let payment: nuumber;
    payment = principal * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan = loanCalculator(1000,5);
console.log(myLoan)

