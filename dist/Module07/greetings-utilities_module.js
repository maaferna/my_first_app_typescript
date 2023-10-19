export function returnGreeting(greeting) {
    var greetingLength = getLenght(greeting);
    console.log("The message from GreetingsLength_module is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
}
function getLenght(message) {
    return message.length;
}
