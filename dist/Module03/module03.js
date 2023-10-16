function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    var interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
var interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    var interest = loanTerms.interestRate / 1200;
    var payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
var conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
