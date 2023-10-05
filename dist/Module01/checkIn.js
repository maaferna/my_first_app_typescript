"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Define an array of numbers from 1 to 10
var numberArray = Array.from({ length: 10 }, function (_, index) { return index + 1; });
// Function to prompt the user for input and check if it's in the array
function checkNumberInArray() {
    var userInput = readlineSync.question("Enter a number (1 to 10): ");
    var userNumber = parseInt(userInput);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        console.log("Invalid input. Please enter a number between 1 and 10.");
        checkNumberInArray(); // Prompt again for a valid number
    }
    else if (numberArray.includes(userNumber)) {
        console.log("The value is in the Array.");
    }
    else {
        console.log("The value is not in the Array. Please try again.");
        checkNumberInArray(); // Prompt again for a valid number
    }
}
// Main function
function main() {
    console.log("Welcome to the Number Checker!");
    // Call the function to check for a number in the array
    checkNumberInArray();
}
// Start the program
main();
