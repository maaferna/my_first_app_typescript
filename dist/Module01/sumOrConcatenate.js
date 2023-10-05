"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Function to prompt the user for input and validate if it's a number or string
function promptForInput(promptText) {
    var input = readlineSync.question(promptText);
    // Check if the input is a number
    if (!isNaN(Number(input))) {
        return Number(input);
    }
    else {
        return input;
    }
}
// Main function
function main() {
    console.log("Enter two values:");
    // Prompt the user for the first input
    var input1 = promptForInput("Enter the first value: ");
    // Prompt the user for the second input
    var input2 = promptForInput("Enter the second value: ");
    // Check if both inputs are strings
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        // Concatenate the strings
        var concatenatedString = input1 + ' ' + input2;
        console.log("Concatenated result: ".concat(concatenatedString));
    }
    else if (typeof input1 === 'number' && typeof input2 === 'number') {
        // Sum the numbers
        var sum = input1 + input2;
        console.log("Sum result: ".concat(sum));
    }
    else {
        console.log("Inputs are not of the same type (both should be either strings or numbers).");
    }
}
// Start the program
main();
