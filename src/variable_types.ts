// Read user input from the command line
const userName: string = prompt("Ingrese su nombre:");
const firstNumberStr: string = prompt("Ingrese un número:");
const secondNumberStr: string = prompt("Ingrese un segundo número:");

// Parse the input strings to numbers
const firstNumber: number = parseFloat(firstNumberStr);
const secondNumber: number = parseFloat(secondNumberStr);

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  // Perform arithmetic operations
  const sum: number = firstNumber + secondNumber;
  const difference: number = firstNumber - secondNumber;
  const product: number = firstNumber * secondNumber;
  const division: number = firstNumber / secondNumber;

  // Generate and display the result messages
  document.write(
    `${userName}, el resultado de sumar ${firstNumber} y ${secondNumber} es ${sum}.<br>`
  );
  document.write(
    `${userName}, el resultado de restar ${firstNumber} y ${secondNumber} es ${difference}.<br>`
  );
  document.write(
    `${userName}, el resultado de multiplicar ${firstNumber} y ${secondNumber} es ${product}.<br>`
  );
  document.write(
    `${userName}, el resultado de dividir ${firstNumber} y ${secondNumber} es ${division}.<br>`
  );
} else {
  document.write("Por favor, ingrese números válidos.");
}