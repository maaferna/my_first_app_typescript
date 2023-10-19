// import { <component name> } from '<module name>'
// import { <component name> as <new name> } from '<module name>'
// import * as <variable name> from '<module name>'
import { returnGreeting } from './greetings_modules'; // imports a single function in the module
import * as allGreetingFunctions from './greetings_modules'; // imports all exported components in the module
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module';
returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
