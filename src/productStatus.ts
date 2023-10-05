import * as readlineSync from 'readline-sync';

// Define an enum for product status
enum ProductStatus {
  Pending = 'Pending',
  InProcess = 'In Process',
  Finished = 'Finished',
}

// Function to prompt the user to select a product status
function promptForProductStatus(): ProductStatus {
  const statusOptions = Object.values(ProductStatus);
  const index = readlineSync.keyInSelect(statusOptions, 'Select the product status:');
  
  if (index === -1) {
    console.log('Canceled. No status selected.');
    process.exit(1);
  }
  
  return statusOptions[index] as ProductStatus;
}

// Main function
function main() {
  // Prompt the user to select a product status
  const productStatus = promptForProductStatus();

  // Display the selected product status
  console.log(`Product status: ${productStatus}`);
}

// Start the program
main();
