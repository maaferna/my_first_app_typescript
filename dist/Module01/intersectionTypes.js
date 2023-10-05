"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Function to prompt the user for Product input
function promptForProduct() {
    var productID = readlineSync.questionInt("Enter Product ID: ");
    var description = readlineSync.question("Enter Product Description: ");
    var stock = readlineSync.questionInt("Enter Product Stock: ");
    return {
        productID: productID,
        description: description,
        stock: stock,
    };
}
// Function to prompt the user for Store input
function promptForStore() {
    var stockPlanInput = readlineSync.keyInYN("Does the store have a stock plan? (Y/N) ");
    return {
        stockPlan: stockPlanInput,
    };
}
// Main function
function main() {
    console.log("Enter ProductStore information:");
    // Prompt the user for Product input
    var productInput = promptForProduct();
    // Prompt the user for Store input
    var storeInput = promptForStore();
    // Create the ProductStore object by merging Product and Store properties
    var productStore = __assign(__assign({}, productInput), storeInput);
    // Display the resulting ProductStore object
    console.log("ProductStore Information:");
    console.log(productStore);
}
// Start the program
main();
