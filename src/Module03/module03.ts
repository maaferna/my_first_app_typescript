interface Loan {
	principal: number,
	interestRate: number //* Interest rate percentage (eg. 14 is 14%)
}

interface ConventionalLoan extends Loan {
	months: number //* Total number of months
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
	// Calculates the monthly payment of an interest only loan
	let interest = loanTerms.interestRate / 1200  // Calculates the Monthly Interest Rate of the loan
	let payment;
	payment = loanTerms.principal * interest
	return 'The interest only loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 



function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest: number = loanTerms.interestRate /1200;
    let payment: number;
    payment = loanTerms.principal * interest / (1-(Math.pow(1/(1+interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"