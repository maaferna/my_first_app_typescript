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
  let index: number;

  while (true) {
    const input = readlineSync.question(`Select the product status (${statusOptions.join(', ')}): `);
    
    // Check if the input is a valid number (0, 1, 2, etc.)
    index = parseInt(input, 10);

    if (isNaN(index) || index < 0 || index >= statusOptions.length) {
      console.log('Invalid input. Please enter a valid number corresponding to the options.');
    } else {
      break;
    }
  }

  // Use type assertion to ensure that the selected product status is of enum type
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
