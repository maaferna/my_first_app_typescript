const readlineSync = require('readline-sync');

// Function to prompt the user for a number and validate input
function promptForNumber(promptText: string): number {
  let input: string;
  do {
    input = readlineSync.question(promptText);
    const parsedNumber = parseFloat(input);
    if (!isNaN(parsedNumber)) {
      return parsedNumber;
    } else {
      console.log("Invalid input. Please enter a valid number.");
    }
  } while (true);
}

// Function to add two numbers
function addNumbers(x: number, y: number): number {
  return x + y;
}

// Main function
function main() {
  // Prompt the user for the first number
  const firstNumber = promptForNumber("Enter the first number: ");

  // Prompt the user for the second number
  const secondNumber = promptForNumber("Enter the second number: ");

  // Call the addNumbers function with user-provided numbers
  const result = addNumbers(firstNumber, secondNumber);

  // Display the result
  console.log(`The sum of ${firstNumber} and ${secondNumber} is ${result}.`);
}

// Start the program
main();
