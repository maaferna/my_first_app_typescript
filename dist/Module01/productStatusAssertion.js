"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Define an enum for product status
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Pending"] = "Pending";
    ProductStatus["InProcess"] = "In Process";
    ProductStatus["Finished"] = "Finished";
})(ProductStatus || (ProductStatus = {}));
// Function to prompt the user to select a product status
function promptForProductStatus() {
    var statusOptions = Object.values(ProductStatus);
    var index;
    while (true) {
        var input = readlineSync.question("Select the product status (".concat(statusOptions.join(', '), "): "));
        // Check if the input is a valid number (0, 1, 2, etc.)
        index = parseInt(input, 10);
        if (isNaN(index) || index < 0 || index >= statusOptions.length) {
            console.log('Invalid input. Please enter a valid number corresponding to the options.');
        }
        else {
            break;
        }
    }
    // Use type assertion to ensure that the selected product status is of enum type
    return statusOptions[index];
}
// Main function
function main() {
    // Prompt the user to select a product status
    var productStatus = promptForProductStatus();
    // Display the selected product status
    console.log("Product status: ".concat(productStatus));
}
// Start the program
main();
