/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables.
   Then, address any errors you find so that the result returned to a is 12. */
var x;
var y;
var a;
function convertToNumberOrWord(input) {
    if (typeof input === 'number') {
        switch (input) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            default:
                return 'Invalid number';
        }
    }
    else if (typeof input === 'string') {
        switch (input.toLowerCase()) {
            case 'one':
                return 1;
            case 'two':
                return 2;
            case 'three':
                return 3;
            case 'four':
                return 4;
            case 'five':
                return 5;
            default:
                return 'Invalid word';
        }
    }
    else {
        return 'Invalid input';
    }
}
x = 'five';
var convertedX = convertToNumberOrWord(x);
if (typeof convertedX === 'number') {
    x = convertedX;
}
else {
    console.log('Invalid input for x.');
    process.exit(1); // Exit the program due to error
}
y = 7;
a = x + y;
console.log(a);
