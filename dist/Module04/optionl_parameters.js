function addNumbersOP(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
console.log(addNumbersOP(1, 2));
console.log(addNumbersOP(1));
