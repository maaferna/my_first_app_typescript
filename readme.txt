From the terminal, use npm to install the dotenv type library in your project folder.

Bash


npm install dotenv

The dotenv type definition also requires you to install the node type definition. node provides access to process.env so you can access it from your code.

npm install --save-dev @types/node @types/dotenv