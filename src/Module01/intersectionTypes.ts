import * as readlineSync from 'readline-sync';

// Define the Product interface
interface Product {
  productID: number;
  description: string;
  stock: number;
}

// Define the Store interface
interface Store {
  stockPlan: boolean;
}

// Define the ProductStore type
type ProductStore = Product & Store;

// Function to prompt the user for Product input
function promptForProduct(): Product {
  const productID = readlineSync.questionInt("Enter Product ID: ");
  const description = readlineSync.question("Enter Product Description: ");
  const stock = readlineSync.questionInt("Enter Product Stock: ");

  return {
    productID,
    description,
    stock,
  };
}

// Function to prompt the user for Store input
function promptForStore(): Store {
  const stockPlanInput = readlineSync.keyInYN("Does the store have a stock plan? (Y/N) ");
  return {
    stockPlan: stockPlanInput,
  };
}

// Main function
function main() {
  console.log("Enter ProductStore information:");

  // Prompt the user for Product input
  const productInput = promptForProduct();

  // Prompt the user for Store input
  const storeInput = promptForStore();

  // Create the ProductStore object by merging Product and Store properties
  const productStore: ProductStore = {
    ...productInput,
    ...storeInput,
  };

  // Display the resulting ProductStore object
  console.log("ProductStore Information:");
  console.log(productStore);
}

// Start the program
main();
