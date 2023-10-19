"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { <component name> } from '<module name>'
// import { <component name> as <new name> } from '<module name>'
// import * as <variable name> from '<module name>'
var greetings_modules_1 = require("./greetings_modules"); // imports a single function in the module
var allGreetingFunctions = require("./greetings_modules"); // imports all exported components in the module
var greetings_utilities_module_1 = require("./greetings-utilities_module");
(0, greetings_modules_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
(0, greetings_utilities_module_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
