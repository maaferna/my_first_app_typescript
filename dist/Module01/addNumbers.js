var readlineSync = require('readline-sync');
// Function to prompt the user for a number and validate input
function promptForNumber(promptText) {
    var input;
    do {
        input = readlineSync.question(promptText);
        var parsedNumber = parseFloat(input);
        if (!isNaN(parsedNumber)) {
            return parsedNumber;
        }
        else {
            console.log("Invalid input. Please enter a valid number.");
        }
    } while (true);
}
// Function to add two numbers
function addNumbers(x, y) {
    return x + y;
}
// Main function
function main() {
    // Prompt the user for the first number
    var firstNumber = promptForNumber("Enter the first number: ");
    // Prompt the user for the second number
    var secondNumber = promptForNumber("Enter the second number: ");
    // Call the addNumbers function with user-provided numbers
    var result = addNumbers(firstNumber, secondNumber);
    // Display the result
    console.log("The sum of ".concat(firstNumber, " and ").concat(secondNumber, " is ").concat(result, "."));
}
// Start the program
main();
