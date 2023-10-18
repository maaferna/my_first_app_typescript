// Read user input from the command line
var userName2 = prompt("Ingrese su nombre:");
var firstNumberStr = prompt("Ingrese un número:");
var secondNumberStr = prompt("Ingrese un segundo número:");
// Parse the input strings to numbers
var firstNumber = parseFloat(firstNumberStr);
var secondNumber = parseFloat(secondNumberStr);
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    // Perform arithmetic operations
    var sum = firstNumber + secondNumber;
    var difference = firstNumber - secondNumber;
    var product = firstNumber * secondNumber;
    var division = firstNumber / secondNumber;
    // Generate and display the result messages
    document.write("".concat(userName2, ", el resultado de sumar ").concat(firstNumber, " y ").concat(secondNumber, " es ").concat(sum, ".<br>"));
    document.write("".concat(userName2, ", el resultado de restar ").concat(firstNumber, " y ").concat(secondNumber, " es ").concat(difference, ".<br>"));
    document.write("".concat(userName2, ", el resultado de multiplicar ").concat(firstNumber, " y ").concat(secondNumber, " es ").concat(product, ".<br>"));
    document.write("".concat(userName2, ", el resultado de dividir ").concat(firstNumber, " y ").concat(secondNumber, " es ").concat(division, ".<br>"));
}
else {
    document.write("Por favor, ingrese números válidos.");
}
