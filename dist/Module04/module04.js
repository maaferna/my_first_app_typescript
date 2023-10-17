function buildArray(items, sorterOrder) {
    var randomNumbers = [];
    var nextNumber;
    for (var counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sorterOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDecending);
    }
}
var sortDecending = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (b > 0) {
        return 1;
    }
    else {
        return 0;
    }
};
var sortAscending = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > 0) {
        return -1;
    }
    else {
        return 0;
    }
};
var myArray1 = buildArray(12, 'ascending');
var myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
function loanCalculator(principal, interestRate, months) {
    if (months === void 0) { months = 12; }
    var interest = interestRate / 1200;
    var payment;
    payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
}
var myLoan = loanCalculator(1000, 5);
console.log(myLoan);
