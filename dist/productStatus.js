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
    var index = readlineSync.keyInSelect(statusOptions, 'Select the product status:');
    if (index === -1) {
        console.log('Canceled. No status selected.');
        process.exit(1);
    }
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
