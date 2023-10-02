// TypeScript project that takes user input for first name, last name, age, and a unique identification number and then displays the information in a single message using document.write()

// Prompt the user for input
const firstName: string = prompt("Ingrese su primer nombre:");
const lastName: string = prompt("Ingrese su primer apellido:");
const ageStr: string = prompt("Ingrese su edad:");
const idNumberStr: string = prompt("Ingrese su número de identificación único (Sin codigo verificador):");

// Parse age and idNumber to numbers
const age: number = parseInt(ageStr);
const idNumber: number = parseInt(idNumberStr);

// Check if the age and idNumber are valid numbers
if (!isNaN(age) && !isNaN(idNumber)) {
  // Create a message using template literals
  const message = `${firstName} ${lastName}, de ${age} años, con número de identificación único ${idNumber}.`;

  // Display the message using document.write()
  document.write(message);
} else {
  document.write("Por favor, ingrese valores válidos para la edad y el número de identificación.");
}