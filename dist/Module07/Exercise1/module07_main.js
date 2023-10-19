"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoanPrograms = require("./module07_loan-programs");
var interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment);
console.log(conventionalLoanPayment);
