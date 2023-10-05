"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Function to prompt the user for a product name or number
function promptForInput() {
    var input = readlineSync.question("Enter a product name: ");
    // Use typeof to check if input is a string
    if (typeof input === 'string') {
        // Use the toUpperCase method to convert the string to uppercase
        return input.toUpperCase();
    }
    else {
        // If it's not a string, return it as a number
        console.log("You entered a number.");
        return parseFloat(input);
    }
}
// Main function
function main() {
    // Prompt the user for a product name
    var input = promptForInput();
    // Check if input is a number
    if (typeof input === 'number' && !isNaN(input)) {
        console.log("You entered a number.");
    }
    else {
        // Display the product name
        console.log("Product name: ".concat(input));
    }
}
// Start the program
main();
