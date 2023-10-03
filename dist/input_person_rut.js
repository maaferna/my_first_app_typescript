// TypeScript project that takes user input for first name, last name, age, and a unique identification number and then displays the information in a single message using document.write()
// Prompt the user for input
var firstName = prompt("Ingrese su primer nombre:");
var lastName = prompt("Ingrese su primer apellido:");
var ageStr = prompt("Ingrese su edad:");
var idNumberStr = prompt("Ingrese su número de identificación único (Sin codigo verificador):");
// Parse age and idNumber to numbers
var age = parseInt(ageStr);
var idNumber = parseInt(idNumberStr);
// Check if the age and idNumber are valid numbers
if (!isNaN(age) && !isNaN(idNumber)) {
    // Create a message using template literals
    var message = "".concat(firstName, " ").concat(lastName, ", de ").concat(age, " a\u00F1os, con n\u00FAmero de identificaci\u00F3n \u00FAnico ").concat(idNumber, ".");
    // Display the message using document.write()
    document.write(message);
}
else {
    document.write("Por favor, ingrese valores válidos para la edad y el número de identificación.");
}
